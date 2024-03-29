import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import annuiImg from "../../assets/images/annui.jpg"
import Image from 'next/image'
import { toast } from 'react-toastify';
import axios from "axios";
import { baseUrl } from '@/config/constants';

const Annuity = (props) => {

    const [userData, setUserData] = useState({
        longevity: "",
        ampleLiquidityFinancial: "",
        loaded: "",
        fiftyYearsOld: ""

    });

    const [errorLongevity, setErrorLongevity] = useState("");
    const [errorAmpleLiquidityFinancial, setErrorAmpleLiquidityFinancial] = useState("");
    const [errorLoaded, setErrorLoaded] = useState("");
    const [errorFiftyYearsOld, setErrorFiftyYearsOld] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmitData = async () => {
        if (userData?.longevity === ""  ||  userData?.longevity === "null") {
            setErrorLongevity("Please Select One Option");
            return
        }

        if (userData?.ampleLiquidityFinancial === ""  ||  userData?.ampleLiquidityFinancial === "null") {
            setErrorAmpleLiquidityFinancial("Please Select One Option");
            return
        }

        if (userData?.loaded === ""  ||  userData?.loaded === "null") {
            setErrorLoaded("Please Select One Option");
            return
        }

        if (userData?.fiftyYearsOld === ""  ||  userData?.fiftyYearsOld === "null") {
            setErrorFiftyYearsOld("Please Select One Option");
            return
        }

        console.log('Annuity', userData)
        document.querySelector(".loader-overlay").style.display = "block";
        const sessionId = localStorage.getItem("sessionId");
        axios.post(`${baseUrl}/forms/update_annuity`, {...userData,sessionId})
        .then(function (response) {
          if(response.status == 200 || response.status == 201){
            document.querySelector(".loader-overlay").style.display = "none";
            document.querySelector('.form_success_msg.section_5').style.display ="block";
            setTimeout(()=>{
                // document.querySelector('.form_success_msg.section_5').style.display ="none";
                document.querySelector('#montecarlo_div').scrollIntoView();
            },1500)
            // setUserData({
            //     longevity: "",
            //     ampleLiquidityFinancial: "",
            //     loaded: "",
            //     fiftyYearsOld: ""
            // })
            setShow(true)
            // toast.success("Request Successfully Submitted");

            setTimeout(() => {
                setShow(false)
            }, "5000");
          }
          console.log('SUBMIT DATA...', response)
        })
        .catch(function (error) {
          console.log(error)
          document.querySelector(".loader-overlay").style.display = "none";
        });
    }


  return (
    <div className='hero__page_4 line_btm' id={props.id}>
        <Container id="annuity_div">
            <Row>
                <Col>
                      <h2 className='heading_default'>Annuity</h2>
                </Col>
            </Row>

            <Row className='mt-5'>
                
                <Col md={6}>
                    <div className='content_inn'>
                       <p>Many people are also improperly sold Annuity policies, which are very complex and come in all shapes and sizes: tax-deferred annuities, variable annuities and so on. We’ll make it simple for you to know if you may be a good fit. We call it:  the 4 ‘L’ test.</p>
                        <div className='form_insurance'>

                        {show ? <>
                            <h2 className='thanks_msg'>Thank you for filling out your information!</h2>
                            </> : <>
                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q1. Do you have “Longevity” in your family history?</p>
                                    <span>(ie. have your parents and relatives been alive for more than, say, 80 years?)</span>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, longevity: target?.value })); setErrorLongevity("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>

                                    {/* <input type="text" 
                                    value={userData?.longevity}
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, longevity: target?.value })); setErrorLongevity("")}}
                                    /> */}
                                    <p className="register_form_error">{errorLongevity}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q2. Do you have ample Liquidity in your financial situation?</p>
                                    <span>(Because annuities lock up your money, for up to 8 years with steep fees to withdraw funds.)</span>

                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, ampleLiquidityFinancial: target?.value })); setErrorAmpleLiquidityFinancial("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>


                                    {/* <input type="text" 
                                    value={userData?.ampleLiquidityFinancial}
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, ampleLiquidityFinancial: target?.value })); setErrorAmpleLiquidityFinancial("")}}
                                    /> */}
                                    <p className="register_form_error">{errorAmpleLiquidityFinancial}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q3. Are you “Loaded?”</p>
                                    <span>(Annuities are widely recommended to consist of no more than 25% of your total investable assets so you typically need a lot of wealth in order to be a good candidate for one.)</span>
                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, loaded: target?.value })); setErrorLoaded("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>


                                    {/* <input type="text" 
                                    value={userData?.loaded}
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, loaded: target?.value })); setErrorLoaded("")}}
                                    /> */}
                                    <p className="register_form_error">{errorLoaded}</p>
                                </div>
                            </div>

                            <div className='formGroup'>
                                <div className='form_conbine'>
                                    <p>Q4. Are you currently Roman Numeral “L” years of age or older?  Are you 50 years old?</p>
                                    <span>Are you 50 years old?</span>

                                    <select
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, fiftyYearsOld: target?.value })); setErrorFiftyYearsOld("")}}
                                    >
                                        <option value="">- Select -</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>


                                    {/* <input type="text" 
                                    value={userData?.fiftyYearsOld}
                                    onChange={({ target }) => { setUserData((prev) => ({ ...prev, fiftyYearsOld: target?.value })); setErrorFiftyYearsOld("")}}
                                    /> */}
                                    <p className="register_form_error">{errorFiftyYearsOld}</p>
                                </div>
                            </div>
                            <a className='submitData' href='javascript:void(0)'
                            onClick={() => {
                                handleSubmitData(userData)
                              }}
                            >Submit</a></>}
                            <div className="form_success_msg section_5 mt-3">Your response has been submitted</div>

                            <p className='mt-5'>If you answered “no” to these questions, you likely don’t need to purchase life insurance. If you answered “yes” to #2 and/or #3 , then it’s likely you need a life insurance policy.   A term policy may suffice to fulfill the needs described in questions 1, 2 & 3.  </p>
                            <p>But if you answered “yes” to #4, you may need a (much more complicated) Whole Life policy to protect your estate from so-called “death taxes.”
In each of these ‘yes’ situations, we recommend more research and perhaps a conversation with your financial advisor.</p>

                        </div>
                    </div>
                </Col>

                <Col md={6}>
                <div>
                        {/* <img src={aboutUs} /> */}
                        <Image
                        src={annuiImg}
                        height={890}
                        className='img_full'
                        alt="Picture of the author"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
  )
}

export default Annuity
