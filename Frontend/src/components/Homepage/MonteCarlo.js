// src/components/McChart.js
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Swal from 'sweetalert2'
import { Container, Row, Col } from 'react-bootstrap';
import {calculateInitialInvestment,calculateRiskProfile} from '../../helpers/commonFunctions'
const createArrayWithValues = (count) => {
    return Array.from({ length: count }, () => 0.5);
};
let mcChart = null;
const MonteCarloChart = (props) => {
  const chartRef = React.createRef();
  const [medianValue,setMedianValue] = useState(null);
  const [refreshCount,setRefreshCount] = useState(0);
  const [loading,setLoading] = useState(false)
  const fetchMonteCarloResults = async()=>{
    // console.log("ahmed 2",chartRef.current)
    try {
        const stock_icons_info = JSON.parse(localStorage.getItem('stock_icons_info'))
        const chart_user_info = JSON.parse(localStorage.getItem('chart_user_info'));
        const debt_user_info = JSON.parse(localStorage.getItem('debt_user_info'))
        const risk_questionnaire = localStorage.getItem('risk_profile')
        const durationYear = parseInt(chart_user_info?.duration);
        if(risk_questionnaire && chart_user_info?.amount && stock_icons_info && stock_icons_info.length && debt_user_info)
        {
          console.log("risk_questionnaire && chart_user_info?.amount && stock_icons_info && stock_icons_info.length && debt_user_info",
          risk_questionnaire , chart_user_info?.amount, stock_icons_info , stock_icons_info?.length ,debt_user_info)
          const risk_profile = calculateRiskProfile(risk_questionnaire,durationYear,debt_user_info)
          const initial_investment_amount = calculateInitialInvestment(chart_user_info?.amount,debt_user_info)
          const choosen_stocks = (stock_icons_info && stock_icons_info.length) ? stock_icons_info.map((i)=> i.code  ).filter((i)=> i) : [];
          console.log("stock_info",stock_icons_info,choosen_stocks)
          const data = {

            choosen_stocks:choosen_stocks,
            // initial_weights: createArrayWithValues(choosen_stocks.length),
            T: durationYear,
            initial_portfolio_value: initial_investment_amount.amount,
            // monthly_investment: 1000,
            risk_profile,
            purpose:chart_user_info.purpose,
            monthly_investment: chart_user_info.monthly ? parseInt(chart_user_info.monthly): 0,
            mc_sims: 1000
        };
    
        // const data = {

        //   choosen_stocks:['AAPL','GOOGL'],
        //   initial_weights: [0.5,0.5],
        //   T: parseInt(chart_user_info.duration) ?? 10,
        //   initial_portfolio_value: parseInt(chart_user_info.amount) ?? 100000,
        //   // monthly_investment: 1000,
        //   monthly_investment: 0,
        //   mc_sims: 500
        // };
        document.querySelector('.canvas_monte__class').style.display = "none";
        setLoading(true)
        // console.log("ahmed 3",chartRef.current)
        const response = await fetch('https://python.investorangel.com/monte_carlo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        // console.log("ahmed 4",chartRef.current)
        const result = await response.json();
        document.querySelector('.canvas_monte__class').style.display = "block";
        setLoading(false)
        setMedianValue(result.median);
        return result.results ? result.results : [];
        }
        return []
      } catch (error) {
        console.error(error)
        return []
    }
 }
 useEffect(() => {
    const show_chart = async () =>{
      const results = await fetchMonteCarloResults();
      // console.log("ahmed 1",chartRef.current)
      if (results.length) {
        const labels = Array.from({ length: results.length }, (_, i) => i + 1);
        const datasets = results[0].map((_, j) => ({
          label: `Simulation ${j + 1}`,
          data: results.map((result) => result[j]),
        }));
        if(mcChart)
        { 
          console.log("chart already here",mcChart.data.labels);

          mcChart.data.labels =labels;
          mcChart.data.datasets =datasets;
          mcChart.update();
          return;
        }
        // const ctx = chartRef?.current?.getContext('2d');
        const ctx = document.querySelector('.canvas_monte__class').getContext('2d')
        console.log("creating chart ahmed",ctx)
        if(!ctx)
        {
          return;
        }
        // try{
        //   mcChart.destroy();
        // }
        // catch(err)
        // {

        // }
        mcChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: {
            plugins: {
              legend: {
                display: false, // Hide legends
              },
            },
            responsive: true,
            maintainAspectRatio: false,        
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                grid: {
                  display: false
                }
              },
              y: {
                type: 'linear',
                position: 'left',
                grid: {
                  display: false
                }
              }
            },
          },
        });
      }
    }
    const render_chart = async () => {

      const chart_user_info = JSON.parse(localStorage.getItem('chart_user_info'));
      const debt_user_info = JSON.parse(localStorage.getItem('debt_user_info'))
      const initial_investment_amount = calculateInitialInvestment(chart_user_info?.amount,debt_user_info)
      if(initial_investment_amount.underDebt)
      {
        Swal.fire({
          title: "Suggestion",
          text: "We recommend paying off all of your debts first",
          icon: "warning",
          buttons: [
            'Show Me Results Anyway'
          ],
        }).then(function(isConfirm) {
          if (isConfirm) {
            show_chart();
          }
        })
      }
      else{
        show_chart()
      }
    };

      render_chart();

  }, [refreshCount]); // Empty dependency array to run only on initial render


  useEffect(()=>{
   const interval =  setInterval(()=>{
    console.log("localStorage.refreshCount ahmed",localStorage.refreshCount)
      if(localStorage.refreshCount && localStorage.refreshCount != refreshCount)
      {
        setRefreshCount(localStorage.refreshCount)
      }
    },1000)

    return () => clearInterval(interval);
  },[])
  return (
    <div className='hero__page_2' id={props.id}>
    <Container>
        <Row>
            <Col md={12}>
                <h2 className='heading_default'>Monte Carlo Simulation</h2>
            </Col>
        </Row>

        <Row className='mt-5 mb-5'>
            <Col md={12} style={{background:"white",maxHeight:600}}>

                {loading ?               <div>
                <img className='monte_loader' style={{height:400,width:400,maxWidth:400}} src="https://cdn.pixabay.com/animation/2023/05/02/04/29/04-29-06-428_512.gif"/>
              </div> :null
                 }
                <canvas className='canvas_monte__class' ref={chartRef} width="1200" height="400" />
                {/* {medianValue ? <h4>Median Value:{medianValue}</h4>:null } */}
            </Col>
        </Row>
    </Container>
    </div>
  )
};

export default MonteCarloChart;