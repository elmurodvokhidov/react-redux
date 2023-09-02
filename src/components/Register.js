import React, { useState } from 'react';
import Input from '../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserStart } from '../slice/Auth';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.auth);

    function registerHandler(e) {
        e.preventDefault();
        dispatch(registerUserStart());
    };

    return (
        <div className='text-center pt-5'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <Input label={"Username"} type={"text"} state={name} setState={setName} />
                    <Input label={"Email address"} type={"email"} state={email} setState={setEmail} />
                    <Input label={"Password"} type={"password"} state={password} setState={setPassword} />

                    <button onClick={registerHandler} disabled={isLoading} className="btn btn-primary w-100 py-2" type="submit">Register</button>
                </form>
            </main>
        </div>
    );
}

export default Register;