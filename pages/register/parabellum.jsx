/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import emailValidator from '../../utils/emailValidator';
import listOfSchools from '../../utils/listOfSchools';
import register from '../../utils/register';
const Register = () => {/*
    const [state, setState] = React.useState({
        event: "Parabellum",
        school: "",
        members: [
            {
                name: "",
                email: ""
            },
            {

                name: "",
                email: ""
            },
            {

                name: "",
                email: ""
            },
            {

                name: "",
                email: ""
            },
            {

                name: "",
                email: ""
            },
            {

                name: "",
                email: ""
            },
        ],
        teamName: "",
        other: false,
        submitted: false
    });*/
    
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");
    const [dropdown, setDropdown] = React.useState(false);
    return (
        <div className="register">
            <div className="register-header">
                <h1>Register for Parabellum</h1>

                <div className='register-header-blur'></div>
                {/* <video src='/cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" /> */}
            </div>
            <div className="register-body">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScRJnu_fD9CP4HpQHrp5K_5mrgla0ND8yJvIZOiXvFkyxmTzw/viewform?embedded=true" width="640" height="2309" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                {/* <form className="register-form" onSubmit={async (e) => {
                    e.preventDefault();
                    let i = 0;
                    while(i < state.members.length){
                        let member = state.members[i];
                        if (!emailValidator(member.email)) {
                            setError("Please make sure that all email addresses are valid");
                            return;
                        }
                        if (member.name.length < 3) {
                            setError("Please make sure that you have entered all names");
                            return;
                        }
                        i++;
                    }
                    if (state.teamName === "" || state.school === "") {
                        setError("All fields are required");
                        return
                    }
                  

                    setError("");
                    try {
                        let r = register(state);
                        setState(state => ({ ...state, submitted: true }));
                        setSuccess("Registered successfully! Please check your emails for further instructions.");
                    }
                    catch (e) {
                        setError(e);
                    }

                }}>
                    <div className="register-input">
                        <p>Select School</p>
                        <div type="text" className='input' onClick={() => {
                            if (!state.submitted) {
                                setDropdown(!dropdown);
                            }
                        }}>
                            {state.other? "Other":state.school.length > 0 ? state.school : "School Name"}
                            {dropdown ? <div className='register-dropdown'>
                                {listOfSchools.map((a, i) => {
                                    return <div onClick={() => {
                                        if (a === "Other" ) { 
                                            setState(state=> ({ ...state, other:true, school:'' }));
                                        }
                                        else {
                                        setState({
                                            ...state,
                                            school: a,
                                            other: false
                                        });
                                    }

                                        setDropdown(false);
                                    }} key={i}>{a}</div>
                                })}
                            </div> : null}
                        </div>

                    </div>
                    {state.other?<div className="register-input">
                        <p>School Name</p>
                        <input disabled={state.submitted} value={state.school} onChange={(e) => setState(state => ({ ...state, school: e.target.value }))} type="text" placeholder="School Name" />
                    </div>: null}
                    <div className="register-input">
                        <p>Team Name</p>
                        <input disabled={state.submitted} value={state.teamName} onChange={(e) => setState(state => ({ ...state, teamName: e.target.value }))} type="text" placeholder="Team Name" />
                    </div>
                    {[1, 2, 3, 4, 5, 6].map((a, i) => {
                        return (<>
                            <div className="register-input">
                                <p>Participant {a}'s Name</p>
                                <input disabled={state.submitted} value={state.members[i].name} onChange={(e) => {
                                    let members = state.members;
                                    members[i].name = e.target.value;
                                    setState(state => ({ ...state, members }));
                                }} type="text" placeholder={`Participant ${a}'s Name`} />
                            </div>
                            <div className="register-input">
                                <p>Participant {a}'s Email</p>
                                <input disabled={state.submitted} type="email" value={state.members[i].email} onChange={(e) => {
                                    let members = state.members;
                                    members[i].email = e.target.value;
                                    setState(state => ({ ...state, members }));
                                }} placeholder={`Participant ${a}'s Email`} />
                            </div>
                        </>)

                    })}
                    {state.other?<span></span>: null}
                    <button className="register-button">Register</button>
                </form>
                <p>{error}</p>
                <p>{success}</p> */}
                
                {/* <h1 style={{fontSize:"3rem"}}>Registrations for the Parabellum Event have been closed</h1> */}
            </div>

        </div >
    )
}

export default Register;
