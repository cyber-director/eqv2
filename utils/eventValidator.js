const eventErrorMsg = {
    "Lux Captis": {
        errorMessage: "Lux Captis requires exactly 1 member",
        requiredMembers: 1,
    },
    "Esthetique Art": {
        errorMessage: "Esthetique Art requires exactly 1 member",
        requiredMembers: 1,
    },
    "Esprit Decode": {
        errorMessage: "Esprit Decode requires exactly 2 members",
        requiredMembers: 2,
    },
    "Site Incroyable": {
        errorMessage: "Site Incroyable requires exactly 2 members",
        requiredMembers: 2,
    },
    "Filmskaping": {
        errorMessage: "Filmskaping requires exactly 2 members",
        requiredMembers: 2,
    },
    "Scio": {
        errorMessage: "Scio requires exactly 2 memvers",
        requiredMembers: 2,
    },
    "Polemos": {
        errorMessage: "Polemos requires exactly 2 members",
        requiredMembers: 2,
    },
    "Parabellum": {
        errorMessage: "Parabellum requires exactly 6 members",
        requiredMembers: 6,
    },
    "Technovate": {
        errorMessage: "Technovate requires exactly 4 members",
        requiredMembers: 4,
    },
}
const eventValidator = (event, member) => {
    const errMsg = eventErrorMsg[event];
    console.log(errMsg);

    if (!errMsg) {
        return res.status(400).json({error: "Invalid Event"});
    }
    if (member.length !== errMsg.requiredMembers) {
        return res.status(400).json({error: errMsg.errorMessage});
    }
}

export default eventValidator;
