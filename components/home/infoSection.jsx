//event details, in form of a expandable items in a carousel
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const InfoSection = () => {
    const info = [{
        name: 'Esprit decode',
        liveVideo: '/cover-coding-1.mp4',
        description: `Participants will be allowed to refer to documentation; however, copying code would be strictly prohibited.
        The students are allowed to use JS/python; No additional libraries, modules, or frameworks will be allowed.
        There will be 4 levels—Round #1, Round #2, Round #3, and the data structure round. The data structure round will run parallel to the other rounds.
        The questions in the first round will carry 10 scores each, the ones in the second round and the data structures round will carry 20 scores each, and the ones in the third round will carry 30 scores each. There will be an opportunity to gain bonus scores
        `,
        short: "The dawn of this century came with the advent of a new sport, competitive programming. This competition challenges participants' ability to produce optimized, efficient, scalable, and readable solutions to tricky questions in four highly challenging rounds. To excel at this competition, a person needs to have outstanding skills and knowledge about data structures and algorithms and either python or the javascript programming language. However, to enjoy this event, there are no such requirements. We have curated a diverse array of questions that challenge and force participants to think outside the box, some of which require little expertise while others require exceptionalism. ",
        venue: "Senior Computer Lab",
        timing: 'The event will last for approximately 3 hours, without accounting for breaks. The first round will last for 30 minutes. The second round will last for an hour. The third round will last for an hour and thirty minutes. You will be allowed to work on questions from the previous round(s) and the Data Structure during the second and third rounds',
        tps: 1,
        participants: 2,
        class: "9-12",

    },
    {
        name: 'Photo Perfecta',
        liveVideo: '/cover-photography.mp4',
        description: `
        This is an online event.
        This is an individual event.
        The participants have to submit their photographs online on the provided google form.
        The theme will be provided on 13th november. The photograph has to be clicked between 13-15 November.
        The last date and time for submission is 15th november 2022, 23:59:59.
        Each participant has to send 2 photographs; 1 photograph for each theme.
        Participants have to attach their raw image(if any).
        Participants need to provide the Exif(Exchangeable Image File Format) details along with each of their entries.
        Any type of Manipulation is not allowed however basic post-processing will be considered.
        Participants have to upload their original work
        `,
        short: "Photo perfecta is the perfect opportunity for all the creative photographers out there to showcase their masterpiece and compete with other photographers as well.",
        venue: "Online",
        timing: 'The participants will be given 3 days to click and submit their photographs. The last date for submission is 15rd November 2022',
        tps: 2,
        participants: 1
    },
    {
        name: 'Parabellum',
        liveVideo: '/valorant-cover.mp4',
        description: `
        All matches will be held online.
        Playoffs will be Best of 1 and Semi-finals and Finals will be best of 3 and 5 respectively.
        By participating, players agree that their Riot account is visible to third parties.
        The OC will always have the final say on any matter. Contact an OC member to resolve any disputes.
        Having any form of conversation or mutual understanding that results in the predetermination of a match’s result would lead to immediate disqualification.
        Players are required to play using their registered Riot Id.
        It is advised that players take screenshots of game scores.
        Only 3 timeouts are allowed—1 before the half, 1 after the half and in overtime.
        If a technical problem arises 10min timeout will be given.
        Coaches are not allowed
        `,
        venue: "Online",
        class: "8-12",
        short: "E-sports is now as mainstream as physical sports. Being one the most popular competitive games on this planet, Valorant is the game that this event will use to test your skills and your team's coordination.",
        timing: "As per the Brackets",
        tps: 1,
        participants: "6(5 players + 1 substitute)"
    },
    {
        name: 'Filmskaping',
        liveVideo: '/cover-video.mp4',
        description: `Each Team should comprise of 2 members.
        If a team is caught Plagiarizing, it would be immediately disqualified.
        The topic will be provided on the spot.
        The video should be uploaded to a specific youtube channel with a Uniquely identifiable description which will be provided to each team .
        The Video's length should not exceed 5 minutes.
        Participants have to record the video in our school.
        Participants will be given 1 hour to record the video.
        1hr 30min will be given for editing the video.
        A tour of the school will be provided`,
        venue: "School Premises and Middle Computer Lab",
        short: "Visual forms of art dominates the world today, film making is everywhere, the world is filled with art -  the art of capturing the world and telling a story through a simple lens but conveying so much more, the art of expressing complex emotions and feelings from the simplest of objects .This event asses the ability to capture the externalities of the world  through visual media. Filmskaping will need creativity and imagination, a keen eye for details and a critical mind. This competition will also test the the participant’s knowledge and competence in technical skills like video and sound editing, and cinematography.",
        timing: 'The event will last for approximately 2 hours and 30 minutes, without accounting for breaks',
        class: "6-12",
        tps: 1,
        participants: 2
    },
    {
        name: 'Scio',
        liveVideo: '/cover-cryptic.mp4',
        description: `
        The quiz will be conducted in 2 parts: A written preliminary and the main quiz.
        The top 6 teams on the basis of preliminary marks would qualify for the main quiz.
        The quizmaster’s decision would be final and binding.
        Participants to prepare current affairs and general awareness related to IT, history of companies, and  their products
        `,
        short: "Quizzing is an art form for people who find solace in perpetually striving to attain more knowledge about everything. The Scio Quiz tests a person's level of knowledge about current affairs and general awareness related to IT, the history of companies, and their products. Along with that, it further challenges participants by adding another layer of complexity: teamwork. Along with being well-informed, to succeed in this event, participants ought to have a strong command of communication and coordination ",
        class: "8-12",
        venue: "Magnum Opus",
        timing: 'The event will last for approximately 3 hours',
        tps: 1,
        participants: 2
    },
    {
        name: 'Polemos',
        liveVideo: '/minecraft.mp4',
        description: `Lorem ipsum dolor sit amet. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
        short: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
        class: "6-8",
        venue: "Online + Offline",
        timing: "Lorem ipsum dolor sit amet. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        tps: 1,
        participants: 2
    },
    {
        name: "Esthetique Art",
        liveVideo: "/Esthetique_art.mp4",
        description: "Topic for the event will be declared on 26th November at 8:15 am.Participants can use any software as per their liking. Participants must submit images of all layers and their final artwork as .png or .jpeg files in a zipped folder which has to be named in the following manner: <School Name_Participant Name> Use of Artificial Intelligence models like Midjourney is strictly prohibited and will lead to disqualification.",
        short: "Esthetique Art, a novel digital art event that captures creativity from students in classes 6-12.",
        class: "6-12",
        venue: "Online",
        timing: "12 hours will be provided to create and submit the artwork. The topic shall be displayed in the discord server at 8:15 am. Submissions after 8:30 pm will not be entertained",
        tps: 1,
        participants: 2
    },
    {
        name: 'Site Incroyable',
        liveVideo: '/cover-website.mp4',
        description: `Participants will be allowed to refer to documentation but copying code is strictly prohibited.
        The Participants will be given an additional 30 minutes to gather resources from the internet.
        The website could be made using REACT, Angular, Vue, or vanilla HTML + JS/TS + CSS.
        For using any additional frameworks or libraries, permission from the organizing team will be required.
        The topic of the event will be Declared on the spot
        `,
        short: "Site Incroyable is a Web Development event where we test participants' masterships to create fast, efficient, optimized, and spellbinding websites. Web development languages are among the most aspired after programming skill sets, with JavaScript currently in the lead as a growing number of conventional applications move to web platforms. Web design encompasses many different skills and domains in the exhibition and supervision of websites, from ingenious design and scripting. Accessibility remains a rudimentary of any website development project, transpiring that websites are accessible by anyone, on any device, anywhere in the world.",
        class: "6-8",
        venue: "Online",
        timing: 'The event will last for approximately 3 hours',
        tps: 1,
        participants: 2
    },
    {
        name: 'Technovate',
        liveVideo: '/atl-event.mp4',
        description: `Teams both from ATL as well non-ATL schools can participate in this event.Participants have to propose their ideas to solve any real-world problem using Artificial Intelligence and/or STEM concepts on the given theme and make a working model or prototype on the idea.Each team has to present their working model with the help of a video.The length of the video should be maximum 3 minutes and the format should be .mp4.The teams can add their voiceover for explaining the steps to create their model/prototype.The teams must ensure that the model submitted is based on their original and innovative idea and the video should not contain any copyright music or content.The teams are free to use any hardware or software to produce the video.The video must include the name of the participants and the school’s name.The name of the video file should be <EventName_SchoolName>.The video has to be uploaded on the given shared drive link on or before the given submission date.Judgement Criteria: <br/>a) Originality of the idea.b) Relevance to the theme.c) Effective usage of technology.d) Cost efficiency.e) Environment Friendly. Top 5 finalist teams will be invited to demonstrate their models in front of the judges on ________.`,
        short: "Technnovate is an event from the ATL segment of our school to showcase the innovative models made by the participants for solving real-word problems. The event aims to bring out the scientific temperament in a student as well as contribute positively for the society.",
        class: "6-10",
        venue: "Offline",
        timing: "nil",
        tps: 1,
        participants: 4
    }
    ]
    return (<div className="info-section">
        <h2 style={{ "color": "white" }}>
            Event Details
        </h2>
        <input name="checkbox" className="info-section-each-checkbox" id='-1' type="radio" />

        <div className="info-section-content">

            {info.map((a, index) => {
                return (<div className="info-section-e" key={index}>

                    <video autoPlay muted loop src={a.liveVideo} className="info-section-e-cover" />
                    <input name="checkbox" className="info-section-each-checkbox" id={index} type="radio" />
                    <div className="info-section-each-modal">
                        <div className="info-section-each-modal-container">
                            <div className='info-section-each-modal-content-container'>

                                {/* <video autoPlay muted loop src={a.liveVideo} className="info-section-each-modal-content-cover" /> */}
                                <div className="info-section-each-modal-content">
                                    <label htmlFor="-1"><CloseIcon className='info-section-each-modal-content-icon' /></label>
                                    <h2>
                                        {a.name}
                                    </h2>
                                    <div className="info-section-each-modal-content-outer">

                                        <div className="info-section-each-modal-content-inner">
                                            <h3>
                                                Rules
                                            </h3>

                                            <ul className="info-section-modal-description">

                                                {a.description.split('.').map((a, index) => {
                                                    return <li key={index}>{a}</li>
                                                })}
                                            </ul>
                                            <h3>
                                                Timings
                                            </h3>
                                            <ul className="info-section-modal-description">
                                                {a.timing.split('.').map((a, index) => {
                                                    return <li key={index}>{a}</li>
                                                })}
                                            </ul>


                                            <tr><th>Class: </th><td>{a.class}</td></tr>
                                            <tr><th><h3>Venue: </h3></th><td>{a.venue}</td></tr>


                                            <div>

                                                <tr><th>Players Per Team</th><td>{a.participants}</td></tr>

                                            </div>
                                        </div>

                                    </div>
                                    <Link href={'/register/' + a.name.split(' ').map((a, index) => {
                                        console.log(a)
                                        if (index === 1) {
                                            return '-' + a
                                        }
                                        else {
                                            return a
                                        }
                                    }).join('').toLowerCase()}>
                                        <span className="info-section-each-modal-register">Register</span>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                    <label className="info-section-each" htmlFor={index}>
                        <div>
                            <h3>
                                {a.name}
                            </h3>
                            <p className="info-section-description">
                                {a.short}
                            </p>
                        </div>
                        <h4 className="info-section-each-label" >

                            Click to Learn More

                        </h4>
                    </label>
                </div>)
            })}
        </div>
    </div >)
}

export default InfoSection;
