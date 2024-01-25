import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import lifeIns from "../../assets/images/life.jpg"
import Image from 'next/image'
import { toast } from 'react-toastify';
import axios from "axios";
import { baseUrl } from '@/config/constants';


const LifeInsurance = (props) => {

    const [userData, setUserData] = useState({
        haveMortgage: "",
        married: "",
        relationship: "",
        multiMillionaire: ""

    });

    const [errorMortgage, setErrorMortgage] = useState("");
    const [errorMarried, setErrorMarried] = useState("");
    const [errorParent, setErrorParent] = useState("");
    const [errorMillionaire, setErrorMillionaire] = useState("");
    const [show, setShow] = useState(false);


    const handleSubmitData = async () => {
        if (userData?.haveMortgage === ""  ||  userData?.haveMortgage === "null") {
            setErrorMortgage("Please Select One");
            return
        }

        if (userData?.married === ""  ||  userData?.married === "null") {
            setErrorMarried("Please Select One");
            return
        }

        if (userData?.relationship === ""  ||  userData?.relationship === "null") {
            setErrorParent("Please Select One");
            return
        }

        if (userData?.multiMillionaire === ""  ||  userData?.multiMillionaire === "null") {
            setErrorMillionaire("Please Select One");
            return
        }

        console.log('Life Insurance', userData)
        let sessionId = localStorage.getItem("sessionId");
        document.querySelector(".loader-overlay").style.display = "block";

        axios.post(`${baseUrl}/forms/update_insurance`, {...userData,sessionId})
        .then(function (response) {
          if(response.status == 200 || response.status == 201){
            document.querySelector(".loader-overlay").style.display = "none";
            console.log('SUBMIT...')
            document.querySelector('.form_success_msg.section_4').style.display ="block";
            // setUserData({
            //     haveMortgage: "",
            //     married: "",
            //     relationship: "",
            //     multiMillionaire: ""
            // })
            setTimeout(()=>{
                // document.querySelector('.form_success_msg.section_4').style.display ="none";
                document.querySelector('#annuity_div').scrollIntoView();
            },1500)
            
            // setShow(true)
            // toast.success("Request Successfully Submitted");

            // setTimeout(() => {
            //     setShow(false)
            // }, "5000");
          }
          console.log('SUBMIT DATA...', response)
        })
        .catch(function (error) {
            document.querySelector(".loader-overlay").style.display = "none";
          console.log(error)
        });
    }

  return (
    <div className='hero__page_3 line_btm' id={props.id}>
        <Container id="insurance_div">
            <Row>
                <Col>
                      <h2 className='heading_default'>Life Insurance</h2>
                </Col>
            </Row>

            <Row className='mt-5'>
                <Col md={6}>
                <div>
                        {/* <img src={aboutUs} /> */}
                        <Image
                        src={lifeIns}
                        height={860}
                        className='img_full'
                        alt="Picture of the author"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className='content_inn'>
                        <p>“It happens all too frequently: many people are improperly sold a Life Insurance policy, particularly young people who don’t need it at their stage in life. Before you purchase life insurance, ask yourself these four questions:  we call it: the 4 ‘M’ test.”</p>

                        <div className='form_insurance'>

                            {show ? <>
                            <h2 className='thanks_msg'>Thank you for filling out your information!</h2>
                            </> : <>
                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q1. Do you have a? (Mortgage)</p>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, haveMortgage: target?.value })); setErrorMortgage("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="register_form_error">{errorMortgage}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q2. Are you? (Married)</p>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, married: target?.value })); setErrorMarried("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="register_form_error">{errorMarried}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q3. Are you a?</p>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, relationship: target?.value })); setErrorParent("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="Mother">Mother</option>
                                        <option value="Father">Father</option>
                                        <option value="No Kids">No Kids</option>
                                    </select>
                                    <p className="register_form_error">{errorParent}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q4. Are you a? (Multi-millionaire: $10+ million)</p>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, multiMillionaire: target?.value })); setErrorMillionaire("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <p className="register_form_error">{errorMillionaire}</p>
                                </div>
                            </div>
                            <a className='submitData' href='javascript:void(0)'
                            onClick={() => {
                                handleSubmitData(userData)
                              }}
                            >Submit</a></>}
                            <div className="form_success_msg section_4 mt-3">Your response has been submitted</div>


                            <p className='mt-5'>If you answered “no” to these questions, you likely don’t need to purchase life insurance. If you answered “yes” to #2 and/or #3 , then it’s likely you need a life insurance policy.   A term policy may suffice to fulfill the needs described in questions 1, 2 & 3.  </p>
                            <p>But if you answered “yes” to #4, you may need a (much more complicated) Whole Life policy to protect your estate from so-called “death taxes.”
In each of these ‘yes’ situations, we recommend more research and perhaps a conversation with your financial advisor.</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
  )
}

export default LifeInsurance
