import './LogIn.style.css'
import Button from '../../../components/Button/Button'

const LogIn = () => {
    return (
        <div className='logIn-form'>
            <h1>Welcome back!</h1>
            <input type='text' placeholder='Enter your username or email' />
            <input type='text' placeholder='Enter your password' />
            <Button buttonText='Log in' className='logIn-button' />
        </div>
    )
}

export default LogIn;