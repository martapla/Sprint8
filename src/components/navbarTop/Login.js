import React, { useRef } from 'react'

const Login = () => {
    const inputUser = useRef()
    const inputPassword = useRef()

    const handleLogin = () => {
        const user = {
            username: inputUser.current.value,
            password: inputPassword.current.value,
        }

        localStorage.setItem('user', JSON.stringify(user))
        window.location.href = '/'
    }

    return <div className="login"> 
        <form>
            <div className='input-field'>
                <label>User: </label>
                <input ref={inputUser} type='text' />
            </div>
            <div className='input-field'>
                <label>Password: </label>
                <input ref={inputPassword} type='password' />
            </div>
            <div className='input-field'>
                <button type='button' onClick={() => handleLogin()}>Enter</button>
            </div>
        </form>
    </div>;
}

export default Login;