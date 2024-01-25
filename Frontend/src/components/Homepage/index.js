"use client";

import React, { useEffect, useLayoutEffect, useState } from 'react'
import Hero from './Hero/Hero'
import About from './About'
import LifeInsurance from './LifeInsurance'
import Annuity from './Annuity'
import Debt from './Debt'
import SelectingStocks from './SelectingStocks'
import RiskToleranceQuestionnaire from './RiskToleranceQuestionnaire'
import MonteCarlo from './MonteCarlo';
const HomePage = () => {
  // const [showChart,setShowChart] = useState(1)
  useEffect(()=>{
    localStorage.clear();

    return () =>{
      localStorage.clear();
    }
  },[])

  // useEffect(()=>{
  //   const interval =  setInterval(()=>{
  //      if(localStorage.refreshCount && localStorage.refreshCount != showChart)
  //      {

  //         setShowChart(localStorage.refreshCount)
  //      }
  //    },1000)
 
  //    return () => clearInterval(interval);
  //  },[])

  return (
    <>
      <Hero />
      <SelectingStocks id="selecting_stocks_div" />
      <Debt />
      <RiskToleranceQuestionnaire />
      <MonteCarlo id="montecarlo_div"/>
      <LifeInsurance id="lifeInsurance_page" />
      <Annuity id="annuity_page" />
      
      <About id="about_page" />
      
      <div className="loader-overlay" id="loader-overlay">
        <div className="loader"></div>
      </div>
    </>
  )
}

export default HomePage
