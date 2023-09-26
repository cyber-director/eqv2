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

            return res.status(400).json({error:"Registrations have been closed"})
            switch (event) {
                case "Esprit Decode":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Esprit Decode requires exactly 2 members"
                        })
                    }
                    break;
                case "Parabellum":
                    return res.status(400).json({error:"Registratios for the Parabellum event have been closed"})
                    break;
                case "Photo Perfecta":
                    
                    return res.status(400).json({error:"Registratios for the Photo Perfecta event have been closed"})
                    break;
                case "Filmskaping":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Filmskaping requires exactly 2 members"
                        })
                    }
                    break;
                case "Site Incroyable":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Site Incroyable requires exactly 2 members"
                        })
                    }
                    break;
                case "Scio":
                    if (members.length !== 2) {
                        return res.status(400).json({
                            error: "Scio requires exactly 2 members"
                        })
                    }
                    break;
                default:
                    return res.status(400).json({
                        error: "Invalid event"
                    })
            }
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
                let verified = await Verify.findOne({
                    member: member._id
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