import React, {useState} from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import { baseUrl } from '@/config/constants';
import { update_refresh_count } from '@/helpers/commonFunctions';

const RiskToleranceQuestionnaire = () => {
  const [responses, setResponses] = useState({
    question1:0,question2:0,question3:0,question4:0,question5:0,question6:0,question7:0
  });
  const [step, setStep] = useState(1);
  const [overallScore,setOverallScore] = useState(0);
  const [status,setStatus] = useState("Conservative")

  console.log(step)

  function handleChange(e) {
    const key = e.target.name;
    const val = parseInt(e.target.value);
    const updatedResponses = {
      ...responses,
      [key]: val,
    };
    const overallScore_ = parseInt(responses.question1)+
    parseInt(responses.question2)+
      parseInt(responses.question3)+
        parseInt(responses.question4)+
          parseInt(responses.question5)+
            parseInt(responses.question6)+
              parseInt(responses.question7)
    setOverallScore(
      overallScore_
      )
     let status_ = null;
     if(overallScore_  <= 2)
     {
      status_ = "Conservative"
     }
     else if(overallScore_ <= 5 && overallScore_ >= 3)
     {
      status_ = "Moderate Conservative"
     }
     else if(overallScore_ <= 8 && overallScore_ >= 6){
      status_ = "Moderate"
     }
     else if(overallScore_ <= 11 && overallScore_ >= 9){
      status_ = "Moderate Aggressive"
     }
     else if(overallScore_  >= 12){
      status_ = "Aggressive"
     }
     setStatus(status_)
    setResponses(updatedResponses);
    console.log("updatedResponses2",updatedResponses,overallScore_,status)
  }

  console.log(responses,status);
  const submit = async() =>{
    const sessionId = localStorage.getItem("sessionId");
    document.querySelector(".loader-overlay").style.display = "block";
    axios.post(`${baseUrl}/forms/update_risk`, {...responses,sessionId})
    .then(function (response) {
      if(response.status == 201){
        localStorage.setItem('risk_profile',status);
        update_refresh_count();
        document.querySelector(".loader-overlay").style.display = "none";
        console.log('SUBMIT...')
        document.querySelector('.form_success_msg.section_3').style.display ="block";
        localStorage.setItem('showChart',true);
        setTimeout(()=>{
            // document.querySelector('.form_success_msg.section_3').style.display ="none";
            document.querySelector('#montecarlo_div').scrollIntoView();
            // document.querySelector('#insurance_div').scrollIntoView();
        },1500)
        // toast.success("Request Successfully Submitted");
        // document.querySelector('.insurance_div').scrollIntoView();
        setStep(8)
      }
      console.log('SUBMIT DATA...', response)
    })
    .catch(function (error) {
      document.querySelector(".loader-overlay").style.display = "none";
      console.log(error)
    });
  }
  return (
    <div className='risk_section' id="risk_section">
      <h2 className='heading'>Risk Tolerance</h2>

      <div className='ques_section'>
          <div onChange={handleChange}>
          
            {/* Ques 1 */}
            {step == 1 && <div className='quesDiv'>
              <h2>How would you describe your investment personality? </h2>
              <div className='ques'>
                <input name="question1" id='ques1_id1' value="1" type="radio" />
                <label htmlFor='ques1_id1'>Conservative <span>Capital preservation is very important for me right now.</span></label>
              </div>

              <div className='ques'>
                <input name="question1" id='ques1_id2' value="2" type="radio" />
                <label htmlFor='ques1_id2'>Moderately Conservative <span>Capital preservation is important but I’m willing to take on a little risk to grow principal and income.</span></label>
              </div>

              <div className='ques'>
                <input name="question1" id='ques1_id3' value="3" type="radio" />
                <label htmlFor='ques1_id3'>Moderate<span>I am willing to take a moderate amount of risk to grow my investment. </span></label>
              </div>

              <div className='ques'>
                <input name="question1" id='ques1_id4' value="4" type="radio" />
                <label htmlFor='ques1_id4'>Moderately Aggressive<span>I am looking for significant capital growth over me</span></label>
              </div>

              <div className='ques'>
                <input name="question1" id='ques1_id5' value="5" type="radio" />
                <label htmlFor='ques1_id5'>Aggressive<span>I am seeking substantial capital growth and I am willing to take risks to do so.</span></label>
              </div>
            </div>}
          
            {step == 2 && <div className='quesDiv'>
              <h2>How old are you?</h2>
              <div className='ques'>
                <input name="question2" id='ques2_id1' value="8" type="radio" />
                <label htmlFor='ques2_id1'>Below 18 <span>I’m just here to learn and get started. +8</span></label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id2' value="7" type="radio" />
                <label htmlFor='ques2_id2'>18 -25</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id3' value="6" type="radio" />
                <label htmlFor='ques2_id3'>26 – 33</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id4' value="5" type="radio" />
                <label htmlFor='ques2_id4'>34 – 40</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id5' value="4" type="radio" />
                <label htmlFor='ques2_id5'>41-50</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id6' value="3" type="radio" />
                <label htmlFor='ques2_id6'>51-59</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id7' value="2" type="radio" />
                <label htmlFor='ques2_id7'>60- 69</label>
              </div>

              <div className='ques'>
                <input name="question2" id='ques2_id8' value="1" type="radio" />
                <label htmlFor='ques2_id8'>70+</label>
              </div>
            </div>}

            {step == 3 && <div className='quesDiv'>
              <h2>What is your approximate yearly savings, after expenses?</h2>
              <div className='ques'>
                <input name="question3" id='ques3_id1' value="1" type="radio" />
                <label htmlFor='ques3_id1'>Zero savings <span> I’m a full-time student, not taking on debt.</span></label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id2' value="-1" type="radio" />
                <label htmlFor='ques3_id2'>Zero savings <span>I’m a full-time student, taking on debt.</span></label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id3' value="-3" type="radio" />
                <label htmlFor='ques3_id3'>I have negative yearly savings <span>(I have net debt.)</span></label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id4' value="0" type="radio" />
                <label htmlFor='ques3_id4'>Zero savings <span> I am working but expenses eat up my income.</span></label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id5' value="1" type="radio" />
                <label htmlFor='ques3_id5'>Up to $5,000</label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id6' value="2" type="radio" />
                <label htmlFor='ques3_id6'>$5,000 - $12,000</label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id7' value="3" type="radio" />
                <label htmlFor='ques3_id7'>$12,000 - $25,000</label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id8' value="4" type="radio" />
                <label htmlFor='ques3_id8'>$25k - $50k</label>
              </div>

              <div className='ques'>
                <input name="question3" id='ques3_id9' value="5" type="radio" />
                <label htmlFor='ques3_id9'>Over $50k</label>
              </div>
            </div>}

            {step == 4 && <div className='quesDiv'>
              <h2>How important is politics and presidential elections in your investment decisions and your confidence in the economy?</h2>
              <div className='ques'>
                <input name="question4" id='ques4_id1' value="-2" type="radio" />
                <label htmlFor='ques4_id1'>Political elections – and who’s in the White House - play a major role in how I feel about the economy and investing opportunities.</label>
              </div>

              <div className='ques'>
                <input name="question4" id='ques4_id2' value="0" type="radio" />
                <label htmlFor='ques4_id2'>Political policy (ie. tax policy) and elections play a minor tactical (short-term) role in how I invest:</label>
              </div>

              <div className='ques'>
                <input name="question4" id='ques4_id3' value="2" type="radio" />
                <label htmlFor='ques4_id3'>Politics has little to no influence on my LONG-TERM investing decisions.</label>
              </div>
            </div>}

            {step == 5 && <div className='quesDiv'>
              <h2>Let’s say you’ve invested $10,000 in a diversified porƞolio of 4 stocks and aŌer 6 months, you’ve already lost 20%, a loss of $2000, would you: </h2>
              <div className='ques'>
                <input name="question5" id='ques5_id1' value="0" type="radio" />
                <label htmlFor='ques5_id1'>Sell everything or almost everything.</label>
              </div>

              <div className='ques'>
                <input name="question5" id='ques5_id2' value="-1" type="radio" />
                <label htmlFor='ques5_id2'>Sell about $1,000 to have some cash on the sideline?</label>
              </div>

              <div className='ques'>
                <input name="question5" id='ques5_id3' value="2" type="radio" />
                <label htmlFor='ques5_id3'>Do nothing</label>
              </div>

              <div className='ques'>
                <input name="question5" id='ques5_id4' value="3" type="radio" />
                <label htmlFor='ques5_id4'>Buy on the dip with $1,000 from your recent paycheck</label>
              </div>
            </div>}

            {step == 6 && <div className='quesDiv'>
              <h2>News headlines report that another virus threatens to blow up into a full-blown pandemic
and, as a result, stocks markets have already sold off 10% in 3 weeks. You invested $10,000
a month ago, and you’re already down $1,000. Would you: </h2>
              <div className='ques'>
                <input name="question6" id='ques6_id1' value="-2" type="radio" />
                <label htmlFor='ques6_id1'>Sell everything or almost everything</label>
              </div>
              <div className='ques'>
                <input name="question6" id='ques6_id2' value="0" type="radio" />
                <label htmlFor='ques6_id2'>Sell about $1,000 to have some cash on the sideline?</label>
              </div>
              <div className='ques'>
                <input name="question6" id='ques6_id3' value="1" type="radio" />
                <label htmlFor='ques6_id3'>Do nothing</label>
              </div>
              <div className='ques'>
                <input name="question6" id='ques6_id4' value="2" type="radio" />
                <label htmlFor='ques6_id4'>Buy on the dip with a $1,000 from your paycheck?</label>
              </div>
            </div>}

            {step == 7 && <div className='quesDiv'>
              <h2>Finally, just for fun: What’s the riskiest thing you’ve done – or want to do soon: </h2>
              <div className='ques'>
                <input name="question7" id='ques7_id1' value="3" type="radio" />
                <label htmlFor='ques7_id1'>Jumping from an airplane with Tom Cruise, riding your cycle off a mountain cliff, paragliding
through a canyon or filming a video for Instagram in which you jump off a 10-story building into
a narrow pool </label>
              </div>
              <div className='ques'>
                <input name="question7" id='ques7_id2' value="2" type="radio" />
                <label htmlFor='ques7_id2'>Off-road biking down a mountain path – with your helmet on. Skiing the double-black diamond
trail at Vail, or rock climbing in an indoor gym:</label>
              </div>
              <div className='ques'>
                <input name="question7" id='ques7_id3' value="1" type="radio" />
                <label htmlFor='ques7_id3'>Night hiking all by yourself, travelling to a foreign country for the first time – without knowing
anyone. Being the first on the dance floor – in front of the entire crowd </label>
              </div>
              <div className='ques'>
                <input name="question7" id='ques7_id4' value="0" type="radio" />
                <label htmlFor='ques7_id4'>None of the above:</label>
              </div>
            </div>}

            {step == 8 && <>
            <h4 className="ans__ques">Your Final Score: {status}</h4>
            </>}

            <div className='btnDiv'>
              {step > 1 && <button onClick={() => {setStep(step - 1)}}>Back</button>}
              {step >= 8 ? '' : <button onClick={step == 7 ? () =>{ submit() } : () => setStep(step+1)}>{step == 7 ? 'Submit' : 'Next'}</button>}
            </div>
            <div className="form_success_msg section_3 text-center">Your response has been submitted</div>

        </div>
      </div>

    </div>
  )
}

export default RiskToleranceQuestionnaire
