import axios from 'axios';
import React from 'react';
import { Redirect } from 'next';
import { useRouter } from 'next/router'


const Verify = () => {
    const { id } = useRouter().query;
    console.log(id)
    const [state, setState] = React.useState({ status: "loading", id })
    const router = useRouter();
    React.useEffect(() => {
     
        (async () => {
            try {
                if(id){
                    console.log("id:  ", id)
                    const vid = await axios.post('/api/verify/', { id });
                    setState({ status: "success", id: vid.data.id });
                    router.push(`/registration/${vid.data.id}`);
                }
            }
            catch (err) {
                console.log(err)
                setState({ status: "failed" });
                router.push(`/not-found`);
            }
        })()
    }, [id])
    if (state.status === "loading") {
        return <div style={{ height: '80vh', padding: '5rem' }}><h1>Loading...</h1></div>
    }
    if (state.status === "failed") {
        return <div></div>
        // return <Redirect to={`/not-found`} />

    }
    else {
        return <div></div>
    }
    console.log(id)
    return <div>Your account has been verified  </div>
}

export default Verify;