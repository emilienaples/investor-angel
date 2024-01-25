import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from "axios";
import { baseUrl } from '@/config/constants';
import { toast } from 'react-toastify';

const Debt = () => {

    const[step, setStep] = useState(1)
    const[creditCard, setCreditCard] = useState(0)
    const[marginLoan, setMarginLoan] = useState(0)
    const[stuLoan, setStuLoan] = useState(0)
    const[autoLoan, setAutoLoan] = useState(0)
    const[mortgageLoan, setMortgageLoan] = useState(0)
    const[otherLoan, setOtherLoan] = useState(0)


    const style = {
        height: 400,
        marginTop: '10px',
        marginBottom: '10px'
      };
   
      const creit_card_marks = {
        0: {
          label: <span className='label_numbers'>0</span>,
        },
        20: {
          label: <span className='label_numbers'>20K</span>,
        },
        50: {
          label: <span className='label_numbers'>50K+</span>,
        },
       
      };
      const margin_marks = {
        0: {
          label: <span className='label_numbers'>0</span>,
        },
        10: {
          label: <span className='label_numbers'>10K</span>,
        },
        50: {
          label: <span className='label_numbers'>50K+</span>,
        },
       
      };

      const student_marks = {
        0: {
          label: <span className='label_numbers'>0</span>,
        },
        50: {
          label: <span className='label_numbers'>50K</span>,
        },
        100: {
          label: <span className='label_numbers'>100K+</span>,
        },
       
      };

      const auto_marks = {
        0: {
          label: <span className='label_numbers'>0</span>,
        },
        20: {
          label: <span className='label_numbers'>20K</span>,
        },
        50: {
          label: <span className='label_numbers'>50K+</span>,
        },
       
      };

      function creditCardFun(value) {
        setCreditCard(value)
      }

      function marginFun(value) {
        setMarginLoan(value)
      }

      function stuFun(value) {
        setStuLoan(value)
      }

      function autoFun(value) {
        setAutoLoan(value)
      }

      function mortgageFun(value) {
        setMortgageLoan(value)
      }
      function otherFun(value) {
        setOtherLoan(value)
      }
    const save_debt = async() =>{
      const obj = {
        ccDebt:creditCard,
        marginDebt:marginLoan,
        autoDebt:autoLoan,
        studentDebt:stuLoan,
        mortgageDebt:mortgageLoan,
        otherDebt:otherLoan
      }
      console.log("obj",obj)
      const sessionId = localStorage.getItem("sessionId");
      document.querySelector(".loader-overlay").style.display = "block";
        axios.post(`${baseUrl}/forms/update_debt`, {...obj,sessionId})
        .then(function (response) {
          if(response.status == 201){
            setStep(3)
            document.querySelector(".loader-overlay").style.display = "none";
            console.log('SUBMIT...')
            localStorage.setItem('debt_user_info',JSON.stringify(obj))
            // document.querySelector('.form_success_msg.section_2').style.display ="block";
            setTimeout(()=>{
                // document.querySelector('.form_success_msg.section_2').style.display ="none";
                // document.querySelector('.risk_section').scrollIntoView();
                 // toast.success("Request Successfully Submitted");
                // setCreditCard(0);
                // setMarginLoan(0);
                // setStuLoan(0);
                // setAutoLoan(0);
                // setMortgageLoan(0);
                // setOtherLoan(0);

            },1500)
          }
           
        })
        .catch(function (error) {
          console.log(error)
          document.querySelector(".loader-overlay").style.display = "none";
          toast.error("Something went wrong")
        });
    }

  return (
    <div className='section__debt_3'>
        <Container>
            <Row>
                <Col>
                    <div className='heading__top'>
                        <h4>Before you Invest first let's talk about</h4>
                        <h2 className='heading_default'>Debt</h2>
                        <p>How much do you currently carry in</p>
                    </div>
                </Col>
            </Row>

              {step == 1 ? <>
                <div className='slider_bars'>
                
                <div className='sliderBars'>
                      <div>
                        <h4>Credit Card Debt</h4>
                      </div>
                      <div>
                      <Slider
                          vertical
                          min={0}
                          max={50}
                          marks={creit_card_marks}
                          step={null}
                          onChange={creditCardFun}
                          defaultValue={[0]}
                          allowCross={false}
                          pushable
                          reverse
                          draggableTrack
                      />
                      </div>
                      <div>
                        <p>Credit Card Debt: {creditCard}K</p>
                      </div>
                </div>

                <div className='sliderBars'>
                  <div>
                    <h4>Margin Loan Debt</h4>
                  </div>
                  <div>
                  <Slider
                      vertical
                      min={0}
                      max={50}
                      marks={margin_marks}
                      step={null}
                      onChange={marginFun}
                      defaultValue={[0]}
                      allowCross={false}
                      pushable
                      reverse
                      draggableTrack
                  />
                  </div>
                  <div>
                    <p>Margin Loan Debt: {marginLoan}K</p>
                  </div>
                </div>

                <div className='sliderBars'>
                  <div>
                    <h4>Auto Debt</h4>
                  </div>
                  <div>
                  <Slider
                      vertical
                      min={0}
                      max={50}
                      marks={auto_marks}
                      step={null}
                      onChange={autoFun}
                      defaultValue={[0]}
                      allowCross={false}
                      pushable
                      reverse
                      draggableTrack
                  />
                  </div>
                  <div>
                    <p>Auto Loan Debt: {autoLoan}K</p>
                  </div>
                </div>

              </div>
              </> : step == 2 ? <>
              <div className='slider_bars'>
                
                <div className='sliderBars'>
                      <div>
                        <h4>Student Debt</h4>
                      </div>
                      <div>
                      <Slider
                          vertical
                          min={0}
                          max={100}
                          marks={student_marks}
                          step={null}
                          onChange={stuFun}
                          defaultValue={[0]}
                          allowCross={false}
                          pushable
                          reverse
                          draggableTrack
                      />
                      </div>
                      <div>
                        <p>Student Debt: {stuLoan}K</p>
                      </div>
                </div>

                <div className='sliderBars'>
                  <div>
                    <h4>Mortgage Debt</h4>
                  </div>
                  <div>
                  <Slider
                      vertical
                      min={0}
                      max={50}
                      marks={auto_marks}
                      step={null}
                      onChange={mortgageFun}
                      defaultValue={[0]}
                      allowCross={false}
                      pushable
                      reverse
                      draggableTrack
                  />
                  </div>
                  <div>
                    <p>Mortgage Debt: {mortgageLoan}K</p>
                  </div>
                </div>

                <div className='sliderBars'>
                  <div>
                    <h4>Any Other Debt</h4>
                  </div>
                  <div>
                  <Slider
                      vertical
                      min={0}
                      max={50}
                      marks={auto_marks}
                      step={null}
                      onChange={otherFun}
                      defaultValue={[0]}
                      allowCross={false}
                      pushable
                      reverse
                      draggableTrack
                  />
                  </div>
                  <div>
                    <p>Any Other Debt: {otherLoan}K</p>
                  </div>
                </div>

              </div>
              </> : <>
              <div className='submit_load__data'>
                <h3>Credit Card Debt: {creditCard}K</h3>
                <h3>Margin Loan Debt: {marginLoan}K</h3>
                <h3>Auto Loan Debt: {autoLoan}K</h3>
                <h3>Student Debt: {stuLoan}K</h3>
                <h3>Mortgage Debt: {mortgageLoan}K</h3>
                <h3>Any Other Debt: {otherLoan}K</h3>
              </div>
              </>}

            <div className='slider_bars__buttons'>
              {step >= 2 && <button onClick={()=> setStep(step-1)}>Back</button>}
              {step != 3 ? <button onClick={step == 2 ? () =>{ save_debt() } : () => setStep(step+1)}>{step == 2 ? 'Submit' : 'Next'}</button> :null}
            </div>
            {/* <div className="form_success_msg section_2 text-center">Your response has been submitted</div> */}
        </Container>
      </div>
  )
}

export default Debt
