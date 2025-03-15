import React, { useState } from 'react';
import './Signup.css';
// import { Link } from 'react-router-dom';
// import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
 const [mail,setMail] = useState();
 const [otp, setOtp] = useState('');
 const[ display,setDisplay] = useState('');
 const [msg,setMsg] = useState();
 const [color,setColor] = useState();

    function submit (e) {
          
        e.preventDefault()
      
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
         


        try{

            if(regex.test(mail)){
                
                // alert('Register Form send to this Mail ')
                setMsg('Check your inbox')
                setColor('green')
                // setMail('')
                setDisplay('block')

                toast.success("Rigester Form send to this mail", {
                    position: "top-right",
                    autoClose: 3000, // 3 seconds
                  });
            
    
                // window.location.href = `mailto:nuraruran32@gmail.com?subject=Hello&body=This is a rigestermail ${mail}`;

            }else{
                setMsg('Enter the valid email id')
                setColor('red')
                
            }


           
              
        }catch{
                alert('Error to Submiting the mail')
                toast.error("Can,t Submit the mail", {
                    position: "top-right",
                    autoClose: 3000, // 3 seconds
                  });
        }
    }


  return (
    <>
    <section>
        <ToastContainer/>
         <div className="Signup__part d-flex justify-content-center align-items-center ">
               <div class="form-container col-8">
                <div class="logo-container">
                    Enter Your Email for Registration
                </div>
                <form class="form" onSubmit={submit}>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email" value={mail} onChange={(e)=>setMail(e.target.value)} required="Enter the mail"/>
                    </div>

                    <p style={{display:`${display}`,color:`${color}`}} className='mt-2'>{msg}</p>

                    <button class="form-submit-btn" type="submit">Verify</button>
                </form>

              

  

            {/* <div className="otp-section  mx-auto">
                <div style={{display:`${display}`}}>
                    <h3 className='text-center'>Enter the Otp</h3>
                <OtpInput
                className="mx-2"
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span> </span>}
                    renderInput={(props) => <input 
                        {...props} 
                         className="otp-box  mx-1 fs-1 mt-3  d-flex justify-content-center"
                        
                        />}

                    
                      />
                </div>
    </div> */}
                </div>
         </div>
  </section>
    </>
  )
}

export default Signup
