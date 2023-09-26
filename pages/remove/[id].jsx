import React from 'react';
import axios from 'axios';

import { useRouter } from 'next/router'
const Remove = () => {
    const router = useRouter()
    const { id } = router.query;
    const [state, setState] = React.useState({
        data:{},
        status:"Loading."
    });
    React.useEffect(() => {
        if (id) {
            (async () => {
                console.log(id)
                try {
                    let data = await axios.post('/api/remove/', { id })
                    setState(state => ({ ...state, status: 'success' }))
                }
                catch (err) {
                    router.push('/not-found');
                }
            })()
        }
    }, [id, router])
    if (state.status !== 'success') {
        return (
            <div className='registration'>
                <div className='registration-data'>
                    <h1>Canceling Registration {id} </h1>
                </div>
            </div>
        )
    }
    return (
        <div className='registration'>
            <div className='registration-data'>
                <h1>Registration Successfully Canceled </h1>
            </div>
        </div>
    )
}

export default Remove;