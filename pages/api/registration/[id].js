import Registration from '../../../models/registration';
import Team from '../../../models/team';
import Member from '../../../models/member';
import {
    checkRegistration,
    verifyEmail
} from '../../../utils/emails';
import {
    v4 as uuid
} from 'uuid';
import Verify from '../../../models/verify';
import connect from '../../../utils/mongoDBConnector';


const Handler = async (req, res) => {

    try {
        await connect();
        const { id } = req.query;
        const registration = await Registration.findById(id);
        if (!registration) {
            return res.status(404).json({ error: "Not Found" })
        }
        const team = await Team.findById(registration.team);
        let members = []
        for (let i = 0; i < team.members.length; i++) {
            let member = await Member.findById(team.members[i]);
            members = [...members, member];
        }
        return res.json({ registration, members, team });
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }

}

export default Handler;