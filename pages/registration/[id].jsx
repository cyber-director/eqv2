import axios from 'axios';
import React from 'react';
import { Redirect } from 'next';
import { useRouter } from 'next/router'


const Registration = () => {
    const { id } = useRouter().query;
    console.log(id)
    const [state, setState] = React.useState({ status: "loading", id, members: [] })
    const router = useRouter();
    React.useEffect(() => {
        if (id) {


            (async () => {
                try {
                    console.log(id)
                    let data = await axios.get('/api/registration/' + id)
                    console.log(data.data)
                    setState(state => ({ ...state, data: data.data, status: 'success' }))
                }
                catch (error) {
                    router.push('/not-found');
                }
            })()

        }
    }, [id])
    if (state.status === "loading") {
        return <div className='registration'><h1>Loading...</h1></div>
    }
    return <div className='registration'>
        <div className='registration-data'>
            <h1>Team {state.data.team.name}</h1>
            <h2 style={state.data.registration.status === "Pending" ? { color: '#000000', padding: '2rem', backgroundColor: "rgba(255, 255, 255, 0.8)" } : state.data.registration.status === "Accepted" ? { color: "#07A276", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: '2rem' } : { color: '#BC0505', backgroundColor: "rgba(255, 255, 255, 0.8)", padding: '2rem' }}>Registration {state.data.registration.status}</h2>
            <h4>Event: {state.data.registration.event}</h4>
            <h4>Members</h4>
            <div className='registration-data-members'>
                {state.data.members.map((a, index) => {
                    return (<div key={index} className='registration-data-members-each'>

                        <p>{a.name}</p>


                        <p>{a.email}</p>

                        <p style={a.verified ? { color: '#05BC3F' } : { color: '#FF3333' }}>{a.verified ? "Verified" : "Unverified"}</p>

                    </div>)

                })}
            </div>

            <p>Please note that all team members must verify their email address inorder to be considered for registration approval </p>
            <p>In order to cancel your registration, click on the {"\"didn't register\""} link sent to you in the emails.</p>
            <p>To update your registration, contact us</p>
        </div>
    </div>
}

export default Registration;