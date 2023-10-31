// Mongo Related Inouts
import connect from '../../utils/mongoDBConnector';
import Register from '../../models/registration';
import Member from "../../models/member";

// Mail Inputs
import {regReq} from "../../utils/emails";

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
                const member = await Member.findOne({_id: req.body.team});

                if (!member) {
                    return res.status(404).json({error: "related member not found"});
                } else {
                    await regReq(member, registration);
                    return res.status(200).json({status: "Approved"});
                }
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