import Registration from '../../../models/registration';
import Team from '../../../models/team';
import Member from '../../../models/member';
import {
    checkRegistration,
    cancelRegistration,
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
        if (req.method === 'POST') {
            const {
                id
            } = req.body;
            
            const registration = await Registration.findById(id);
            if (!registration) {
                return res.status(404).json({
                    error: "Registration not found"
                });
            }

            const team = await Team.findById(registration.team);
            for (let i = 0; i < team.members.length; i++) {
                let member = await Member.findById(team.members[i]);
                await cancelRegistration(member, registration.event);
                
                let verify = await Verify.findOne({
                    member: member._id
                });
                if(verify){
                    await verify.delete();
                }
                await member.delete()
            }
            await team.delete()
            await registration.delete()
            return res.json({
                msg: "Registration removed Successfully"
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            error: "Registration not found"
        });
    }
}

export default Handler