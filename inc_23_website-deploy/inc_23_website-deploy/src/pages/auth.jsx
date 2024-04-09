import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginAdmin } from '../hooks/admin.hooks';
import { Buttons, FormsBanner, InputBox, NoteBox, toast } from '../components';
import './styles/auth.css';
import Cookies from 'js-cookie';

import login from '../assets/images/login.png';

const initialErrors = {
    username: '',
    password: '',
}

function Auth() {
    const [errors, setErrors] = useState(initialErrors)
    const usernameRef = useRef('')
    const passwordRef = useRef('')
    const adminLoginMutation = useLoginAdmin(setErrors)
    const loginNavigator = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        adminLoginMutation.mutate({ username: usernameRef.current.value, password: passwordRef.current.value }, {
            onSuccess: (data) => {
                // console.log(data)
                setErrors(initialErrors)
                toast.success('Login Successful', { icon: '👍' })
                // console.log(data.data.jid)
                Cookies.set('jid', data.data.jid);
                if (data.data.jid) loginNavigator(`/judge/${data.data.jid}`, { replace: true })
                else loginNavigator('/admin/stats')
                return
            }
        })
    }

    return (
        <>
            <FormsBanner logo={login} eventName='Login' eventDescription='Login with credentials provided in Email' />
            <form onSubmit={handleSubmit} className='shadow-md shadow-light_blue/20 bg-light_blue/30 rounded-xl border-light_blue items-center mx-5 my-6 md:mx-20 p-4 md:p-8 border border-light_blue'>
                <NoteBox type='info' className='mx-5 md:mx-20 my-4 p-4 md:p-8' text='Please allow 3rd-party cookies for successful login' />
                <InputBox label='Email' type='text' name='username' placeholder='Enter Email Address' inputref={usernameRef} error={errors.username} required />
                <InputBox label='Password (received in registration email for judges or ask the coordinator)' type='password' name='password' placeholder='Enter Password' inputref={passwordRef} error={errors.password} required />
                <Buttons type='submit' value='Login' className='mt-3' loading={adminLoginMutation.isLoading} />
            </form>
            <div className="flex justify-center mx-7 md:mx-40">

                <NoteBox title="Contact"
                    text="For any technical queries please contact Viraj Sonawane : +91 7972034035 / Om Panchwate : +91 7507224919" />
            </div>
        </>
    );
}

export default Auth;