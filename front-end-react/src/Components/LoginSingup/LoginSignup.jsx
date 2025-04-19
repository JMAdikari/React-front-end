import React from 'react' ;
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import email_icon from '../Assets/email.png';


const LoginSignup = () => {
    return(
        <div className='Container'>
            <div className='header'>
                <div className='text'> Signup</div>
                <div className='underline'> </div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src= {user_icon}  alt="" />
                    <input type="text" />
                </div>
            </div>


        
            <div className='inputs'>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="text" />
                </div>
            </div>
        
            <div className='inputs'>
                <div className='input'>
                    <img src= {email_icon}  alt="" />
                    <input type="text" />
                </div>
            </div>
                    
            <div className='inputs'>
                <div className='input'>
                    <img src="" alt="" />
                    <input type="text" />
                </div>
            </div>
           

        </div>
    )
}

export default LoginSignup;