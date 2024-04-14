import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
const PasswordGenerator = () => {

    const [password, setPassword]=useState("");
    const [passwordLength, setPasswordLength]=useState("8");
    const [includeUpperCase, setincludeUpperCase]=useState(true);
    const [includeNumbers, setincludeNumbers]=useState(true);
    const [includeSpecialChars, setincludeSpecialChars]=useState(true);

    const generatePassword=()=>{
        const lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
        const UpperCaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers='1234567890';
        const specialChars='!@#$%&*()';

        let validChars=lowerCaseChars;

        if(includeUpperCase){
            validChars += UpperCaseChars;
        }
        if(includeNumbers){
            validChars += numbers;
        }

        if(includeSpecialChars){
            validChars += specialChars;
        }

        let generatePassword="";
        for(let i=0; i<passwordLength; i++){
            const randomIndex=Math.floor(Math.random()*validChars.length);
            generatePassword += validChars.charAt(randomIndex);

        }
setPassword(generatePassword);


    }
 
 
  return (
    <div className='pt-8 text-white font-bold'>
        <div className='flex flex-col items-center'> 
<div className='bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md'>


        
        <div className='mb-4 flex items-center justify-between'>
            <label>Password Length:</label>
            <input
            value={passwordLength}
            onChange={(e)=>setPasswordLength(e.target.value)}
            className='w-12 bg-purple-700 pl-2' type='number'/>
        </div>
        
        <div className='mb-4 flex items-center justify-between'>
            <label> Include Upper case:</label>
            <ReactSwitch 
            checked={includeUpperCase}
            onChange={()=>setincludeUpperCase(!includeUpperCase)}
            height={20} 
            width={40} 
            handleDiameter={18}/>
        </div>

        <div className='mb-4 flex items-center justify-between'>
            <label> Include Numbers:</label>
            <ReactSwitch 
            checked={includeNumbers}
            onChange={()=>setincludeNumbers(!includeNumbers)}
            height={20} 
            width={40} 
            handleDiameter={18}/>
        </div>


        <div className='mb-4 flex items-center justify-between'>
            <label> Include Special Charecters:</label>
            <ReactSwitch 
            checked={includeSpecialChars}
            onChange={()=>setincludeSpecialChars(!includeSpecialChars)}
            height={20} 
            width={40} 
            handleDiameter={18}/>
        </div>

<button onClick={generatePassword} 
className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-white font-bold rounded-md'>Generate Password</button>


{password && <p className='font-normal text-white mt-2'> 
Generated Password:
 <span className='font-bold'>{password}</span></p>}

 
</div>
       </div>
        </div>
  )
}

export default PasswordGenerator