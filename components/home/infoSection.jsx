//event details, in form of a expandable items in a carousel
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
const InfoSection = () => {
    const info = [{
        name: 'Esprit decode',
        liveVideo: '/cover-coding.mp4',
        description: `Each school can send a team of 2 participants from classes 9-12.
Participants will be allowed to refer to documentation; however, copying code is strictly prohibited.
The students are allowed to use Python. However, no additional modules or frameworks shall be allowed; Default libraries (for ex. math, os, time, numpy etc.) are permitted
The marking scheme for all questions will be conveyed by the Team Leader on the spot.
There will be an opportunity to gain bonus scores by solving the “Secret Problems”.
        `,
        short: "The dawn of this century came with the advent of a new sport, competitive programming. This competition challenges participants' ability to produce optimized, efficient, scalable, and readable solutions to tricky questions in four highly challenging rounds. To excel at this competition, a person needs to have outstanding skills and knowledge about data structures and algorithms and either python or the javascript programming language. However, to enjoy this event, there are no such requirements. We have curated a diverse array of questions that challenge and force participants to think outside the box, some of which require little expertise while others require exceptionalism. ",
        venue: "Senior Computer Lab",
        timing: 'The event will last for approximately 3 hours, without accounting for breaks. The first round will last for 30 minutes. The second round will last for an hour. The third round will last for an hour and thirty minutes. You will be allowed to work on questions from the previous round(s) and the Data Structure during the second and third rounds',
        tps: 1,
        participants: 2,
        class: "9-12",

    },
    {
        name: 'Lux Captis',
        liveVideo: '/cover-photography.mp4',
        description: `
        This is an individual event.
The participants have to submit their photographs 30 minutes before the end of event on 24th November.
The themes of the event are:
        1. Monochrome
        2. Leading Lines
Each participant is required to send 2 photographs : 1 for each theme.
Participants have to attach the raw image(if any).
Participants are required to provide the Exif(Exchangeable Image File Format) details along with each of their entries.
Any type of manipulation is not allowed however basic post-processing will be considered.
Photo colour grading is strictly prohibited.
The format for the photographs to be submitted in must be <.jpeg>.
        `,
        short: "Embark on a visual journey through the lens at our exclusive photography event. Elevate your appreciation of the art as we showcase the works of renowned photographers, explore cutting-edge techniques, and engage in thought-provoking discussions on visual storytelling. A harmonious convergence of artistry, innovation, and inspiration awaits.",
        venue: "Online",
        timing: 'The participants will be given 3 days to click and submit their photographs. The last date for submission is 24th November 2023',
        tps: 1,
        participants: 1
    },
    {
        name: 'Parabellum',
        liveVideo: '/cover-valorant.mp4',
        description: `
        All matches except the finals will be held online.
        Playoffs will be Best of 1, and Semi-finals and Finals will be best of 3.
        By participating, players agree that their Riot Games account is visible to third parties.
        Having any form of conversation or mutual understanding that results in the predetermination of a match’s result would lead to immediate disqualification.  
        Players are required to play using their registered Riot Id.
        Only 3 timeouts are allowed in a game —1 before the half, 1 after the half and 1 in overtime for each team.
        If a technical problem arises a maximum of 10 minute timeout will be given.
        Coaches are not allowed.
        `,
        venue: "Online",
        class: "8-12",
        short: "Dive into the electrifying world of esports at our premier gaming event. Immerse yourself in the realm of competitive gaming, where top-tier gamers clash in epic battles. Witness the latest gaming innovations, join discussions on the future of esports, and experience the thrill of victory and the agony of defeat in a dynamic fusion of skill, strategy, and adrenaline.",
        timing: "As per the Brackets",
        tps: 1,
        participants: "6(5 players + 1 substitute)"
    },
    {
        name: 'Filmskaping',
        liveVideo: '/cover-video.mp4',
        description: `Each Team should comprise of 2 members.
        If a team is caught plagiarizing, it would be immediately disqualified.
        The topic will be provided on the spot.
        The video should be uploaded to a specific youtube channel with a uniquely identifiable description which will be provided to each team .
        The Video's length should not exceed 3 minutes.
        Participants have to record the video in our school.
        Participants will be given 30 minutes to record the video.
        A tour of the school and stock footage of the school will be provided
        2 hours will be given for editing the video.
        Participants are advised to bring their own devices for editing.`,
        venue: "School Premises and Middle Computer Lab",
        short: "Visual forms of art dominates the world today, film making is everywhere, the world is filled with art -  the art of capturing the world and telling a story through a simple lens but conveying so much more, the art of expressing complex emotions and feelings from the simplest of objects .This event asses the ability to capture the externalities of the world  through visual media. Filmskaping will need creativity and imagination, a keen eye for details and a critical mind. This competition will also test the the participant’s knowledge and competence in technical skills like video and sound editing, and cinematography.",
        timing: 'The event will last for approximately 2 hours and 30 minutes, without accounting for breaks',
        class: "6-12",
        tps: 1,
        participants: 2
    },
    {
        name: 'Scio',
        liveVideo: '/cover-quiz.mp4',
        description: `
        One school can have one team registered. 
        Each team will consist of two members.
        The quiz will be conducted in 2 parts: A written preliminary and the main quiz.
        The top 6 teams would qualify for the main quiz on the basis of preliminary marks.
        The quizmaster’s decision would be final and binding.
        Participants to prepare current affairs and general awareness related to Information Technology, Prominent Tech giants: their history and inventions.
        Use of Unfair Means will lead to immediate disqualification.
        `,
        short: "Quizzing is an art form for people who find solace in perpetually striving to attain more knowledge about everything. Scio tests a person's level of knowledge about current affairs and general awareness related to IT, the history of companies, and their products. Along with that, it further challenges participants by adding another layer of complexity: teamwork. Along with being well-informed, to succeed in this event, participants ought to have a strong command of communication and coordination ",
        class: "9-12",
        venue: "Magnum Opus",
        timing: 'The event will last for approximately 3 hours',
        tps: 1,
        participants: 2
    },
    {
        name: 'Polémos',
        liveVideo: '/cover-minecraft.mp4',
        description: `Participants can use any client of Minecraft Java Edition for the event
        The event has been divided into 2 phases: Build Battle and Bedwars.
        Participants will be tested on their creativity and survival skills
        Each team will consist of 2 participants belonging to classes 6 to 8
        Participants have to submit a .mp4 file showcasing their builds, the duration of the video shouldn’t exceed 5 minutes. The video should be named in the following manner: <School Name_Partcipant Name 1_Participant Name 2_Theme> 
        No hacked clients will be tolerated and it will lead to immediate disqualification
        Participants have to create their build on any of the following themes:
                a. The Dark Ages
                   (Medieval Town and Castle)
                b. The Grand Line (Pirate Armada)
        Further details of the structure of the event will be provided on the discord server`,
        short: "Minecraft Bedwars and BuildBattle are thrilling minigames that captivate players by fusing strategy and creativity. Bedwars challenges teams to protect their beds while launching daring offensives, while BuildBattle lets players unleash artistic prowess within Minecraft's blocky world. These games celebrate the core spirit of Minecraft and have thrived by fostering a sense of camaraderie and endless creativity. They're a testament to the game's enduring appeal, thriving thanks to a dedicated community that constantly innovates, creating a timeless blend of strategy, artistry, and shared fun.",
        class: "6-8",
        venue: "Online + Offline",
        timing: "Lorem ipsum dolor sit amet. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        tps: 1,
        participants: 2
    },
    {
        name: "Esthetique Art",
        liveVideo: "/cover-art.mp4",
        description: `Each school can choose to register one participant from classes 9 to 12.
        Topic for the event will be declared on 26th November at 8:15 am.
        Participants can use any software as per their software.
        Participants are required to submit images of all layers and their final artwork as <png> or <jpeg> files in a zipped folder which should be named in the following manner: <School Name_Participant Name>.
        12 hours will be provided to create and submit the artwork. The topic shall be displayed in the discord server at 8:15 am.
        Submissions after 8:30 pm will not be entertained.
        Use of Artificial Intelligence models like Midjourney and Dall-E is strictly prohibited and will lead to disqualification.
        The top 5 artists of the first round will have a chance to be present in school campus for the final round.
`,
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
        description: `The team should comprise of 2 members classes 6 to 8.
        The website could be made using React, Angular, Vue, vanilla HTML + JS/TS + CSS or any other framework of their choice.
        The participants are required to upload the website on Vercel.
        The Vercel link along with the source code needs to be emailed to: extraquadrata@gmail.com latest by 26th November, with the following subject: <School Name_Partcipant Name 1_Participant Name 2_Theme>.
        Participants are required to develop “Infotainment” websites on any of the following topics:
            i.  Impact of Nazi Germany and WW2
            ii. Future of Space Exploration and life on the Moon.
        The top 5 teams will have a chance to be in the campus offline and present their website.
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
        liveVideo: '/cover-atl-event.mp4',
        description: `Teams both from ATL as well non-ATL schools can participate in this event.
        Participants are required to propose their ideas to solve any real-world problem using Artificial Intelligence and/or STEM concepts on the given theme and make a working model or a prototype on the idea.
        Each team(consisting of four members from classes 9 to 12) has to present their working model with the help of a video.
        The length of the video should be a maximum of 3 minutes and the format should be <mp4>
        The video must include the name of the participants and the school.
        
        The name of the video file should be labelled in the following manner: <EventName_SchoolName> and should be emailed to extraquadrata@gmail.com latest by 26th November`,
        short: "Embark on a journey into the forefront of technological advancement at our extraordinary event. Immerse yourself in a realm of innovation and automation as you witness automated systems of various designs and capabilities perform astonishing feats. Explore the latest in cutting-edge technology, engage in discussions on the societal implications of automation, and experience the thrilling convergence of science, engineering, and artificial intelligence.",
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
