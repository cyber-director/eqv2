/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import emailValidator from '../../utils/emailValidator';
import listOfSchools from '../../utils/listOfSchools';
import register from '../../utils/register';
const Register = () => {
  const [state, setState] = React.useState({
    event: "Esthetic Art",
    school: "",
    members: [
      {
        name: "",
        email: ""
      }
    ],
    teamName: "",
    other: false,
    submitted: false
  });
  const [error, setError] = React.useState("");

  const [success, setSuccess] = React.useState("");
  const [dropdown, setDropdown] = React.useState(false);
  return (
    <div className="register">
      <div className="register-header">
        <h1>Register for Esthetique Art</h1>

        <div className='register-header-blur'></div>
        {/* <video src='/cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" /> */}
      </div>
      <div className="register-body">
        <form className="register-form" onSubmit={async (e) => {
          e.preventDefault();
          if (state.members[0].name === "" || state.members[0].email === "") {
            setError("All fields are required");
            return
          }
          if (!emailValidator(state.members[0].email)) {
            setError("Invalid email");
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
              {state.other ? "Other" : state.school.length > 0 ? state.school : "School Name"}
              {dropdown ? <div className='register-dropdown'>
                {listOfSchools.map((a, i) => {
                  return <div onClick={() => {
                    if (a === "Other") {
                      setState(state => ({ ...state, other: true, school: '' }));
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
          {state.other ? <div className="register-input">
            <p>School Name</p>
            <input disabled={state.submitted} value={state.school} onChange={(e) => setState(state => ({ ...state, school: e.target.value }))} type="text" placeholder="School Name" />
          </div> : null}
          <div className="register-input">
            <p>Team Name</p>
            <input disabled={state.submitted} value={state.teamName} onChange={(e) => setState(state => ({ ...state, teamName: e.target.value }))} type="text" placeholder="Team Name" />
          </div>
          {[1].map((a, i) => {
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
          {state.other ? <span></span> : null}
          <button className="register-button">Register</button>
        </form>
        <p>{error}</p>
        <p>{success}</p>
        {/* <h1 style={{fontSize:"3rem"}}>Registrations for the Photo Perfecta Event have been closed</h1> */}
      </div>
    </div >
  )
}

export default Register;
