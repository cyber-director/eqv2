import React from 'react';
import axios from 'axios';
const Register = () => {
    const [state, setState] = React.useState({
        name: '',
        email: '',
        message: '',
        submitted: false,
        error:""
    })
    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            if(!state.name>0 || !state.email>0 || !state.message>0){
                setState(state=> ({ ...state, error:"Please fill all the fields"}))
                return;
            }
            
            await axios.post('/api/contact', state)
            setState(state=>({...state, submitted: true}))
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="register">
            <div className="register-header">
                <h1>Leave us a message!</h1>
                
            <div className='register-header-blur'></div>
                <video src='cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" />
            </div>
            {state.submitted ? <div className="register-body">Your message has successfully been sent to us. We will reply back as soon as possible</div>:
                <div className="register-body">
                    <form onSubmit={onSubmit} className="register-form">
                        <div className="register-input">
                            <p>Name</p>
                            <input required={true} disabled={state.submitted} value={state.name} onChange={(e) => {
                                setState({ ...state, name: e.target.value });
                            }} type="text" placeholder="Name" />
                        </div>
                        <div className="register-input">
                            <p>Email</p>
                            <input required={true} disabled={state.submitted} onChange={(e) => {
                                setState({ ...state, email: e.target.value });
                            }} type="email" value={state.email} placeholder="Email@website.com" />
                        </div>
                        <div style={{ gridColumnStart: 'span 2' }} className="register-input">
                            <p>Message</p>
                            <div className="register-input-textarea">

                                <textarea minLength={10}   disabled={state.submitted} onChange={(e) => {
                                    setState({ ...state, message: e.target.value });
                                }} value={state.message} placeholder="message..." />

                            </div>
                        </div>
                        <button className="register-button">Send</button>
                    </form>
                    <p className="register-error">{state.error}</p>
                </div>
            }


        </div >
    )
}

export default Register;