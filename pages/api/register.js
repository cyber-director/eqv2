import Registration from '../../models/registration';
import Team from '../../models/team';
import Member from '../../models/member';
import {
    checkRegistration,
    verifyEmail
} from '../../utils/emails';
import {
    v4 as uuid
} from 'uuid';
import Verify from '../../models/verify';
import connect from '../../utils/mongoDBConnector';
import eventValidator from '../../utils/eventValidator';
import member from '../../models/member';

const Handler = async (req, res) => {
    const {
        school,
        event,
        teamName,
        members
    } = req.body;
    try {
        await connect();
        if (req.method === "POST") {
            eventValidator(event, members);
            // Un-comment When registerations closed
            // return res.status(400).json({error:"Registrations have been closed"})
            for (let i = 0; i < members.length; i++) {
                let exist = await Member.findOne({
                    email: members[i].email
                });
                if (exist) {
                    return res.status(400).json({
                        error: `${members[i].email} is already registered`
                    });
                }
            }
            let mems = [];

            for (let i = 0; i < members.length; i++) {
                let member = new Member(members[i]);

                await member.save();
                mems = [...mems, member._id];
            }
            let team = new Team({
                name: req.body.teamName,
                school: school,
                members: mems
            });
            await team.save();
            console.log(team);
            let registration = new Registration({
                team: team._id,
                event: event
            });
            await registration.save();
            for (let i = 0; i < members.length; i++) {
                let member = await Member.findOne({
                    email: members[i].email
                });
                let verify = new Verify({
                    code: uuid(),
                    member: member._id
                });
                await verify.save();
                await verifyEmail(member, registration._id, verify.code, event);
                await checkRegistration(member, registration._id, event);
            }
            return res.status(200).json({
                error: 'Team registered'
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }

}

export default Handler;
