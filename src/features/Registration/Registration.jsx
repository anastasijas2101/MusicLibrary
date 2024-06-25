import './Registration.style.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const router = useNavigate();

    const handleLogIn = () => {
        router('/logIn')
    }

    return (
        <div className='registration-div-full'>
            <div className='registration-div'>
                <div className='first-last-name'>
                    <input type='text' placeholder='First Name' />
                    <input type='text' placeholder='Last Name' />
                </div>
                <input className='email' type='text' placeholder='Enter your Email address' />
                <div className='password'>
                    <input type='text' placeholder='Enter your password' />
                    <input type='text' placeholder='Confirm your password' />
                </div>
                <div className='birthday'>
                    <p>Enter your date of birth:</p>
                    <div className='date'>
                        <input type='text' placeholder='DD' />
                        <input type='text' placeholder='MM' />
                        <input type='text' placeholder='YYYY' />
                    </div>
                </div>
                <div className='terms-of-service'>
                    <input className='service-checkbox' type='checkbox' />
                    <p>I have read and accept the <span>Terms of Service</span></p>
                </div>
            </div>
            <div className='bottom-div'>
                <Button className='join-button' buttonText='Join TuneHub' />
                <p>Already have an account? <span onClick={() => handleLogIn()}>Log in</span></p>
            </div>
        </div>
    )
}

export default Registration;