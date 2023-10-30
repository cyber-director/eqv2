import connect from '../../utils/mongoDBConnector';
import Register from '../../models/registration';

const Handler = async (req, res) => {
    if (req.method === "POST") {
        try {
            await connect();
            const registration = await Register.findOne({team: req.body.team});
            if (!registration) {
                console.log("invalid team");
                return res.status(404).json({error: "invalid team"});
            } else {
                registration.status = req.body.status;
                console.log(registration);
                await registration.save();
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({error: e});
        }
    }
    else {
        return res.status(500).json({error: "not supported"});
    }
}

export default Handler;