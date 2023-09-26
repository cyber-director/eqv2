import axios from 'axios';
import React from 'react';

const Login = () => {
    const [log, setLog] = React.useState({ email: "", password: "", error: "" });
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(log);

        try {
            const login = await axios.post('/api/admin', log);
            localStorage.setItem('token', login.data.token)
            document.location.reload();
        }
        catch (err) {
            console.log(err);
            setLog(state => ({ ...state, error: "Incorrect Credentials" }));
        }
    }
    return <div className='admin'>
        <form onSubmit={onSubmit} className='admin-form'>
            <img src="/logo.png" alt="Logo" />
            <h1> Log Into Your Extra Quadrata Admin Account </h1>
            <input value={log.email} onChange={(e) => {
                e.preventDefault();
                setLog(state => ({ ...state, email: e.target.value }))
            }} placeholder='Enter your Email' type="email"></input>
            <input value={log.password} onChange={(e) => {
                e.preventDefault();
                setLog(state => ({ ...state, password: e.target.value }))
            }} placeholder='Enter your password' type="password"></input>
            <button><p>Login</p></button>
            <h3 style={{ color: "red" }}>{log.error}</h3>
        </form>
    </div>
}
const Registration = (props) => {
    let [open, setOpen] = React.useState(false);
    return (<div onClick={() => setOpen(!open)} className='admin-registration'>
        <div className='admin-registration-header'>
            <h3>{props.teamName}</h3>
            <h4>{props.schoolName}</h4>
        </div>
        {open ?
            <div className='admin-registration-members'>
                <p><strong>Name</strong>
                </p><p><strong>Email</strong></p>
                {props.members.map((member, index) => {
                    return (<>
                        <p>{member.name}</p>
                        <p>{member.email}</p>

                    </>)
                })}
            </div>
            : null}

    </div>)
}
const Admin = () => {
    const [state, setState] = React.useState({ loggedIn: false, loaded: false, registrations: [], admin: {} });
    React.useEffect(() => {
        let token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common = {
                "x-auth-token": token
            };
            (async () => {
                try {
                    const res = await axios.get('/api/admin');
                    console.log(res.data)
                    setState(state => ({
                        registrations: res.data.registrations,
                        loggedIn: true,
                        loaded: true,
                        admin: res.data.admin
                    }))
                }
                catch (err) {
                    console.log(err)
                    localStorage.removeItem('token');
                    setState(state => ({
                        loggedIn: false,
                        loaded: true
                    }))
                }
            })();
        }
        else {
            setState({ loggedIn: false, loaded: true });
        }

    }, [])
    if (!state.loaded) {
        return <div>Loading... </div>
    }
    if (!state.loggedIn) {
        return <Login />
    }
    let espritRegistrations = state.registrations.filter(reg => reg.registration.event === "Esprit Decode");
    let parabellumRegistrations = state.registrations.filter(reg => reg.registration.event === "Parabellum");
    let siteRegistrations = state.registrations.filter(reg => reg.registration.event === "Site Incroyable");
    let scioRegistrations = state.registrations.filter(reg => reg.registration.event === "Scio");
    let filmskapingRegistrations = state.registrations.filter(reg => reg.registration.event === "Filmskaping");
    let photoPerfectaRegistrations = state.registrations.filter(reg => reg.registration.event === "Photo Perfecta");
    let espritEmails = (state.registrations.filter(a => a.registration.event === "Esprit Decode").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
    let siteEmails = (state.registrations.filter(a => a.registration.event === "Site Incroyable").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
    let scioEmails = (state.registrations.filter(a => a.registration.event === "Scio").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
    let FilmskapingEmails = (state.registrations.filter(a => a.registration.event === "Filmskaping").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
    let parabellumEmails = (state.registrations.filter(a => a.registration.event === "Filmskaping" && a.team.name !=="Mitochondria").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
    let PhotoPerfectaEmails = (state.registrations.filter(a => a.registration.event === "Photo Perfecta").map(a => {
        return a.team.members.map(b => {
            return b.email.toLowerCase();
        }).join(", ")
    })).join(", ");
 




    return <div className='admin-container'>
        <div className='admin-header'>
            <h1>Hello, {state.admin.name}</h1>
        </div>
        <div className='admin-container-inner'>
            <div className='admin-container-inner-each'>
                <h2>Esprit Decode Registrations: {espritRegistrations.length}</h2>
                <div className='admin-registrations'>
                    {espritRegistrations.map((reg, index) => {
                        return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                    })}
                </div>
                
                <p>Participant Emails</p>
                <p className='admin-emails'>{espritEmails}</p>
            </div>
            <div className='admin-container-inner-each'>
                <h2>Site Incroyable Registrations: {siteRegistrations.length}</h2>
                <div className='admin-registrations'>
                    {siteRegistrations.map((reg, index) => {
                        return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                    })}
                </div>
                <p>Participant Emails</p>
                <p className='admin-emails'>{siteEmails}</p>
            </div>
            <div className='admin-container-inner-each'>
                <h2>Scio Registrations: {scioRegistrations.length}</h2>
                <div className='admin-registrations'>
                    {scioRegistrations.map((reg, index) => {
                        return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                    })}
                </div>
                <p>Participant Emails</p>
                <p className='admin-emails'>{scioEmails}</p>
            </div>
            <div className='admin-container-inner-each'>
                <h2>Filmskaping Registrations: {filmskapingRegistrations.length}</h2>
                <div className='admin-registrations'>
                    {filmskapingRegistrations.map((reg, index) => {
                        return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                    })}
                </div>
                
                <p>Participant Emails</p>
                <p className='admin-emails'>{FilmskapingEmails}</p>
            </div>
            <div className='admin-container-inner-each'>
                <h2>Parabellum Registrations: {parabellumRegistrations.length}</h2>
                <div className='admin-registrations'>
                    {parabellumRegistrations.map((reg, index) => {
                        return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                    })}
                </div>
                <p>Participant Emails</p>
                <p className='admin-emails'>{parabellumEmails}</p>
            </div>
            <div className='admin-container-inner-each'>
                <h2>Photo Perfecta Registrations: {photoPerfectaRegistrations.length}</h2>
                <div className='admin-registrations-container'>
                    <div className='admin-registrations'>
                        {photoPerfectaRegistrations.map((reg, index) => {
                            return <Registration teamName={reg.team.name} schoolName={reg.team.school} members={reg.team.members} key={index} />
                        })}
                    </div>
                </div>
                <p>Participant Emails</p>
                <p className='admin-emails'>{PhotoPerfectaEmails}</p>
            </div>
        </div>
    </div>

}

export default Admin;