import admins from '../../../models/admins';
import connect from '../../../utils/mongoDBConnector';
import Registration from '../../../models/registration'; 
import Team from '../../../models/team';
import Member from '../../../models/member';
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
    try {
        await connect();
        if (req.method === "GET") {
            try {
                const token = req.headers['x-auth-token']
                const user = jwt.verify(req.headers['x-auth-token'], process.env.JWT_SECRET);
                if (!user) {
                    return res.status(401).json({
                        error: "Incorrect Credentials"
                    });
                }

                const admin = await admins.findById(user.user).select('-password');
                if (!admin) {
                    return res.status(401).json({
                        error: "Incorrect Credentials"
                    });
                }
                const Registrations = await Registration.find({status:"Approved"});
                let registrations = [];
                for(let i = 0; i < Registrations.length; i++){
                    let team = await Team.findById(Registrations[i].team);
                    let members = [];
                    for(let j = 0; j < team.members.length; j++){
                        let member = await Member.findById(team.members[j]);
                        members.push(member);
                    }
                    registrations.push({
                        team:{
                            name:team.name, 
                            school:team.school, 
                            members
                        },
                        registration:Registrations[i]
                    })
                }
                res.status(200).json({admin, registrations});
            } catch (err) {
                console.log(err);
                return res.status(500).json({
                    error: "We can't process your request at the moment. Please try again later"
                });
            }

        }
        if (req.method === "POST") {
            const {
                email,
                password
            } = req.body;
            const admin = await admins.findOne({
                email: email
            });
            if (!admin) {
                return res.status(400).json({
                    error: "Incorrect Credentials"
                });
            }

            let comparison = bcrypt.compareSync(password, admin.password);
            if (!comparison) {
                return res.status(401).json({
                    error: "Incorrect Credentials"
                });
            }
            const token = await jwt.sign({
                user: admin._id
            }, process.env.JWT_SECRET, {
                expiresIn: '60d'
            });
            return res.status(200).json({
                message: "Login successful",
                token
            });
        } else {
            return res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: "We can't process your request at the moment. Please try again later"
        });
    }
}


export default handler;
