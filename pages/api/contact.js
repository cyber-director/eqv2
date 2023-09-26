import { contactEmail } from '../../utils/emails';

const Handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            await contactEmail(req.body.name, req.body.email, req.body.message);
        }
        return res.json({ msg: "Message sent succesfully. We will try to reply back as soon as possible." })

    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: "We can't process your request at the momnent. Please try again later" })
    }
}

export default Handler;

