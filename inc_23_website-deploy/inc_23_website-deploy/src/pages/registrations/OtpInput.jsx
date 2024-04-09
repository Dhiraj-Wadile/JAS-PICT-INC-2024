import React, { useEffect, useRef, useState } from 'react'
//import '../styles/OtpInput.css'

const OtpInput = ({ length = 4, onOtpSubmit = () => { } }) => {

    const [otp, setotp] = useState(new Array(length).fill(""))
    // To focus to the first input
    const inputRefs = useRef([])
    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])


    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return; // Not a number

        const newOtp = [...otp]; //  copy of OTP array
        // console.log(newOtp); //
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setotp(newOtp); // it is asynchronous so, after this the value of otp is not directly updated that's why we are using newOtp
        // console.log(otp) // old value is printed
        // submit trigger 
        const combinedOtp = newOtp.join("")
        // console.log(combinedOtp.length)
        if (combinedOtp.length === length)
            onOtpSubmit(combinedOtp)

        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus()
        }
        if (index < length && otp[index + 1]) {
            inputRefs.current[newOtp.indexOf("")].focus();
        }
    }

    // keep the cursor at the end of the input
    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }

    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }


    }

    return (
        <div className='flex space-x-5 items-center'>
        <h1>Enter OTP : </h1>
            {
                otp.map((value, index) => {
                    return <input type="text"
                        ref={(input) => inputRefs.current[index] = input}
                        key={index}
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onClick={() => handleClick(index)}
                        onKeyDown={(e) => handleKeyDown(index, e)} // For backspace
                        className="w-10 bg-faint_blue h-10 mx-1 text-center text-gold text-lg border border-light_blue rounded focus:outline-none focus:border-blue-500" />
                })
            }
        </div>
    )
}

export default OtpInput;