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

        if (req.method === 'POST') {
            const {
                id
            } = req.body;

            const verify = await Verify.findOne({
                code: id
            });
            console.log(verify)
            if (!verify) {
                return res.status(400).json({
                    error: "Not found"
                });
            }
            const user = await Member.findById(verify.member);
            const team = await Team.findOne({
                members: {
                    $in: [user._id]
                }
            });
            console.log(team);
            const registration = await Registration.findOne({
                team: team._id
            })
            console.log(registration);
            user.verified = true;
            await user.save();
            await verify.delete();
            return res.json({
                msg: "user verified",
                id: registration._id
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export default Handler