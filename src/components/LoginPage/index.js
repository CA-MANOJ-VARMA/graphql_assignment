import React from 'react'
import { useState } from 'react'

const LoginPage = (props) => {
    const {history} = props

    const inputField = localStorage.getItem('inputField')
    const OTPStored = localStorage.getItem('otp')
    const emailOrPhone = localStorage.getItem('emailOrPhone')
    
    const [otpInput,setOtpInput] = useState('')
    const [wrongOtp,setWrongOtp] = useState(false)

    const checkOtpFunction = (event) =>{
        setOtpInput(event.target.value)
    }

    const callApiFunction =async () =>{
        const baseurl = 'http://172.232.70.228:8080/api/gql/query'

        let mutation1
        if (emailOrPhone ==='email'){
        mutation1 = `mutation($emailOrPhone:NullString!,$otp:NullString!){
              login(input:{email:$emailOrPhone,otp:$otp}){
                roleID
                orgUID
                sessionToken
               }
            }`
        }else{
            mutation1 = `mutation($emailOrPhone:NullString!,$otp:NullString!){
                login(input:{phone:$emailOrPhone,otp:$otp}){
                  roleID
                  orgUID
                  sessionToken
                 }
              }`
        }

        const variables ={
            emailOrPhone:inputField,
            otp:otpInput
        }
        console.log(variables)

        const options={
            method:'POST',
            headers : {
                "content-type":"application/json",
                "accept":"application/json",
            },
            body:JSON.stringify({query:mutation1,variables})
        }

        const response = await fetch(baseurl,options)
        
        const jsonData = await response.json()
        localStorage.setItem('sessionToken',"28da10d6-8d2d-42a6-bc96-8dcfd2f93b45")
        console.log(jsonData)
        const {sessionToken} = await jsonData.data.login
        console.log(sessionToken)
        localStorage.setItem('sessionToken',sessionToken)

    }

    const formLoginFunction = (event) =>{
        event.preventDefault()
        if (OTPStored===otpInput){
            callApiFunction()
            history.replace('/users')
            // setTimeout(function(){
            //     window.location.reload();
            //  }, 1500);
        }else {
            localStorage.removeItem('otp')
            localStorage.removeItem('inputField')
            setWrongOtp(true)
            history.replace('/')
            setTimeout(function(){
                window.location.reload();
             }, 4000);
        }
    }


  return (
    <div className='css-LoginPage-whole-Container'>
        <form className='css-generate-otp-container' 
    onSubmit={formLoginFunction}
    >
            <div className='css-input-div-container'>
                <label htmlFor='email' className='css-input-label'>Login Details</label>
                <input id='email' type='text' className='css-input-itslef'  value={inputField} readOnly/>
            </div>
            <div className='css-input-div-container'>
                <label htmlFor='otp' className='css-input-label'>OTP</label>
                {wrongOtp ? (
                    <input id='otp' type='text' className='css-input-itslef'  value={otpInput} readOnly/>
                ) :(<input id='otp' type='text' className='css-input-itslef'  value={otpInput} onChange={checkOtpFunction} />)
}
            </div>
            
            <div className='css-choose-container'>
            
            <button className='btn btn-success' >Login</button>
            </div>
            {wrongOtp && <h5>Entered wrongOtp Redirecting to <span style={{'color':'red','fontWeight':'bold'}}>Generate OTP Page</span> Page in <span style={{'color':'red'}}>4</span> seconds...</h5>}
            {/* {inputField===null && (
            <>
            </>
            )
            } */}
        </form>
        </div>
  )
}

export default LoginPage