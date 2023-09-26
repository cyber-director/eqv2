const MailJet = require("node-mailjet");

import {
    checkRegistrationStatus,
    registrationCanceled,
    verifyEmail as verify
} from './emailTemplates';
const mailJet = new MailJet({
    apiKey: process.env.mailJetApi,
    apiSecret: process.env.mailJetSecret,
});


export const contactEmail = async (n, email, message) => {
    const em = await mailJet
    .post("send", {
        version: "v3.1"
    })
    .request({
        Messages: [{
            From: {
                Email: "shresth21oct@gmail.com",
                Name: `Extra Quadrata`,
            },
            To: [{
                Email: `${email}`,
                Name: `${n}`,
            },],
            Subject: `You recieved a message from ${n}`,
            TextPart: '',
            HTMLPart: `
            <div>
                <h3> Message: </h3>
                <p>${message}</p>
                <a href="mailto:${email}">Reply back to ${email}</a>
            </div>
           `
        },],
    });
  

    console.log(em)
}
export const verifyEmail = async (member, registration, id, e) => {
    const email = await mailJet
        .post("send", {
            version: "v3.1"
        })
        .request({
            Messages: [{
                From: {
                    Email: "shresth21oct@gmail.com",
                    Name: `Extra Quadrata`,
                },
                To: [{
                    Email: `${member.email}`,
                    Name: `${member.name}`,
                },],
                Subject: `Verify your registration for the ${e} event`,
                TextPart: '',
                HTMLPart: verify(member, e, `${process.env.ADDRESS}/verify/${id}`, `${process.env.ADDRESS}/remove/${registration}`)
            },],
        });
}

export const cancelRegistration = async (member, e) => {
    const email = await mailJet
    .post("send", {
        version: "v3.1"
    })
    .request({
        Messages: [{
            From: {
                Email: "shresth21oct@gmail.com",
                Name: `Extra Quadrata`,
            },
            To: [{
                Email: `${member.email}`,
                Name: `${member.name}`,
            },],
            Subject: `Your registration for the ${e} event has been canceled by one of your teammates`,
            TextPart: '',
            HTMLPart: registrationCanceled(member, e)
        },],
    });
}

export const checkRegistration = async (member, registration, e) => {
    const email = mailJet
        .post("send", {
            version: "v3.1"
        })
        .request({
            Messages: [{
                From: {
                    Email: "shresth21oct@gmail.com",
                    Name: `Extra Quadrata`,
                },
                To: [{
                    Email: `${member.email}`,
                    Name: `${member.name}`,
                },],
                Subject: `Check your registration status for the ${e} event`,
                HTMLPart: checkRegistrationStatus(member, e, `${process.env.ADDRESS}/registration/${registration}`, `${process.env.ADDRESS}/remove/${registration}`)
            },],
        });
    await email
}