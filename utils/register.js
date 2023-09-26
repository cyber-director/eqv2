import axios from 'axios';

const register = async (state) => {
    try {
        const {data} = await axios.post('/api/register', state);
        return data;
    } catch (err) {
        console.log(err)
        // throw err;
    }
}

export default register;