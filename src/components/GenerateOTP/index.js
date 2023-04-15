import './index.css'
import { withRouter, Link } from 'react-router-dom'
import { useState } from 'react'

const GenerateOTP = (props) => {

    const [choose,setChoose] = useState(true)
    const [isemail, setIsemail] = useState(false)
    const [isPhone, setPhone] = useState(false)
    const [otp, setOtp] = useState('')
    const [inputField,setInputField] = useState('')
    const [error, setError] = useState(false)
    const chooseFunctonEmail = () =>{
        setChoose(false)
        setIsemail(true)
    }

    const chooseFunctonPhone = () =>{
        setChoose(false)
        setPhone(true)
    }

    const goBackFunction =() =>{
        setChoose(true)
        setIsemail(false)
        setPhone(false)
        setOtp('')
        localStorage.removeItem('otp')
        localStorage.removeItem('inputfield')
        setInputField('')
    }

    const inputFieldFunction = (event)=>{
        console.log(event.target.value)
        if (event.target.valie!==''){
            setError(false)
        }
        setInputField(event.target.value)
    }

    const formSubmitFunction = async(event) =>{
        event.preventDefault()
        console.log(event.target.name)
        localStorage.getItem('emailOrPhone',event.target.name)
        if (inputField==='') {
            return setError(true)
        }
         
        const baseurl = 'http://172.232.70.228:8080/api/gql/query'

        let mutation1

        const variables ={
            emailOrPhone:inputField
        }
        console.log(variables)

        if (event.target.name==="email"){
            mutation1 = `mutation($emailOrPhone:NullString!){
                generateOTP(input:{email:$emailOrPhone})
            }`
        }
        else {
            mutation1 = `mutation($emailOrPhone:NullString!){
                generateOTP(input:{phone:$emailOrPhone})
            }`
        }   

        console.log(mutation1)
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
        const {generateOTP} = jsonData.data
        if (generateOTP===null){
            return setOtp('Invalid Email/Phone')
        }
        // console.log(typeof generateOTP)

        setOtp(parseInt(generateOTP))
        localStorage.setItem('otp',generateOTP)
        localStorage.setItem('inputField',inputField)
        console.log(generateOTP)
        
    }   

    const routeLoginPage = () =>{
       const {history} = props
        console.log(history)
        history.replace('/login')
        window.location.reload();
        
    } 

  return (
    <div className='css-LoginPage-whole-Container'>
        {choose && (
            <>
        <h4>Choose Email or Phone Number to Generate OTP</h4>
        <div className='css-choose-container'>
        <button className='css-choose-button-itself btn btn-info' onClick={chooseFunctonPhone}>Phone Number</button>
            <button className='css-choose-button-itself btn btn-info' onClick={chooseFunctonEmail}>Email</button>
            </div>
            </>
        )
        }
        {isemail && 
        (<>
        {error && <p style={{'color':'red',fontWeight:'bold'}}>Email Field Cannot be Empty</p>}
        <form className='css-generate-otp-container' name="email" onSubmit={formSubmitFunction}>
        
            <div className='css-input-div-container'>
                <label htmlFor='email' className='css-input-label'>Email</label>
                <input id='email' type='text' className='css-input-itslef' onChange={inputFieldFunction}/>
            </div>
            
            <div className='css-choose-container'>
            <button className='btn btn-danger css-choose-button-itself' onClick={goBackFunction}>Go Back</button>
            <button className='btn btn-success css-choose-button-itself ' >Generate OTP</button>
            </div>
        </form>
        </>)
        }
        {isPhone && 
        (<form className='css-generate-otp-container' name="mobile" onSubmit={formSubmitFunction}>
                    {error && <p style={{'color':'red',fontWeight:'bold'}}>Email Field Cannot be Empty</p>}
                <div className='css-input-div-container'>
                    <label htmlFor='mobile' className='css-input-label'>Mobile Number</label>
                    <input id='mobile' type='number'  className='css-input-itslef' onChange={inputFieldFunction}/>
                </div>
                <div className='css-choose-container'>
                <button className='btn btn-danger css-choose-button-itself ' onClick={goBackFunction}>Go Back</button>
                <button className='btn btn-success css-choose-button-itself '>Generate OTP</button>
                </div>
            </form>)
        }

        {typeof(otp)==='number' &&<div className='css-OTP-container'>
            <h4>Your OTP is {otp}</h4>
                <button  className='btn btn-link'
            onClick={routeLoginPage}
            >Click Here Login</button>
           
        </div>
}
        {typeof(otp)==='string' && <div className='css-OTP-container'>    
            <h4> {otp}</h4>
        </div>
        }
    </div>
  )
}

export default withRouter(GenerateOTP)