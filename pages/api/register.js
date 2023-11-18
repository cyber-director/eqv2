import Registration from "../../models/registration";
import Team from "../../models/team";
import Member from "../../models/member";
import Verify from "../../models/verify";
import connect from "../../utils/mongoDBConnector";
import { checkRegistration, verifyEmail, newRegistarion } from "../../utils/emails";
import { v4 as uuid } from "uuid";
import eventValidator from "../../utils/eventValidator";

const createMember = async (memberData) => {
    const existingMember = await Member.findOne({ email: memberData.email });
    if (existingMember) {
        throw new Error(`${memberData.email} is already registered`);
    }

    const newMember = new Member(memberData);
    await newMember.save();
    return newMember;
};

const Handler = async (req, res) => {
    const { school, event, teamName, members } = req.body;

    try {
        await connect();

        if (req.method === "POST") {
            eventValidator(event, members);

            const mems = [];
            const existingMembers = [];

            for (const memberData of members) {
                try {
                    const newMember = await createMember(memberData);
                    mems.push(newMember._id);
                } catch (error) {
                    existingMembers.push(error.message);
                }
            }

            if (existingMembers.length > 0) {
                return res
                    .status(400)
                    .json({ error: existingMembers.join(", ") });
            }

            const team = new Team({ name: teamName, school, members: mems });
            await team.save();

            const registration = new Registration({ team: team._id, event });
            await registration.save();

            for (const memberData of members) {
                const member = await Member.findOne({
                    email: memberData.email,
                });

                const verify = new Verify({ code: uuid(), member: member._id });
                await verify.save();

                await verifyEmail(member, registration._id, verify.code, event);
                await checkRegistration(member, registration._id, event);
                await newRegistarion(member, registration.team, event, team.school);
            }
            console.log(team + "\n" + registration);

            return res.status(200).json({ message: "Team registered" });
        }
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({
                error: "We can't process your request at the moment. Please try again later",
            });
    }
};

export default Handler;
