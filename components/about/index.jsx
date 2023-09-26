/* eslint-disable @next/next/no-img-element */
import React from 'react';

const organizers = [{
    name: 'Aadya Singh',
    core: true,
    designation: "The Language Marshal of the Student Council of DPS Kolar Road, Bhopal",
    contactNumber: '+91 70002 36817',
    email: "",
    profile: 'Aadya is known for doing absolutely everything they can get their hands on, this is reflected in their portfolio. They’ve collaborated with multiple youth-run non-profits to spread awareness as well as crowdfunding. They’ve managed the social media page for a local renowned handicraft store. They are a published poet that’s always looking for an excuse to bring it up in a conversation. They are a self starter with the experience of organizing multiple experiences. In their spare time, you can find them snuggled in a corner with their cats reading Donna Tartt or some obscure contemporary poet. A sure way to get them to pay attention to you would be to start a debate on acrylic v. oil paint. They are the most approachable of the bunch(you are encouraged to reach out to them for absolutely anything you need or want). Their love for all things cheesy and sappy overwhelms their work.',

    image: "/spencer.jpeg"
},
{
    name: 'Angad Singh Bains',
    core: true,
    designation: "The Senior Head Boy of the Student Council Of DPS Kolar Road, Bhopal",
    profile: 'A hard-working, ambitious, and competitive student who worked on many projects and events. One of the first members who helped in making the event a great success. He likes to find exotic and astonishing answers to new and difficult challenges He has participated in many online game designing and coding events. Having a keen eye for perfection, he developed many games and Arduino projects. Angad won first prize in movie making and got second prize in the inter-national gaming competition. In his spare time, you will find him either eating food while working on his computer or reading some book. Sometimes he likes to cook and spend time with friends. Currently pursuing a High School Diploma focused in PCM + IP from Delhi Public School, Kolar Road, Bhopal. He wants to become a game designer and developer and wants to play for a professional E-sports team.',
    image: "/Angad.jpeg"
},
{
    name: 'Shreshth Verma',
    designation: "President of the Technoclub and the Senior Cyber Director of the Student Council",
    profile: 'A perpetual student, an entrepreneur, and an Experienced Full Stack Developer with a demonstrated history of working in the industry. Skilled in HTML, Front-end Development, Cascading Style Sheets (CSS), MongoDB, Node.js, Express.js, React, and JavaScript. Currently pursuing a High School Diploma focused in PCM + IP from Delhi Public School, Kolar Road, Bhopal. Despite being in grade 12th, Shreshth has extensive work experience as a full stack developer: he worked at an MNC for over a year and at a small business for nearly 4 months, as a MERN Stack + blockchain developer. Shreshth is the cyber director of the DPS Kolar student council and the president of the techno club. He conceptualized the key idea behind the Extra Quadrata tech fest. Shreshth is currently working with queer-teens India, an organization that seeks to abate discrimination and social isolation in the Indian queer community.',
    core: true,
    image: "/shreshth.jfif"
},
{
    name: "Vyomesh Khare",
    profile: "Vyomesh, completing high schooling by Mid 2023 in science stream is concurrently preparing for entry into graduate level studies in an engineering institution of respectable stature. With an ever rising reliance on the digital applications including artificial intelligence; he is well entrenched into learning cyber security through upcoming technologies. Extending volunteer services through Cyber Jagriti, he loves cars & concept models, problem solving, helping people of all ages and dissemination of knowledge. A soft spoken, cool thinker & homely, working hard to cast an academic foundation aimed at crafting unique positioning in the professionals world besides playing video games in leisure hours.",
    core: true,
    image: "/Vyomesh.jpeg",
    designation: "External Coordinator",
},

{
    name: "Dhairya Garg",
    core: false,
    volunteer: false,
    designation: "Team Leader of Site Incroyable",
    profile: "Dhairya is a quiz-zard and a programmer through and through. Being curious, reliable and keen individual, Dhairya has an analytical and rational mind.",
    image: "/Dhairya.jpeg"
},
{
    name: "Rishabh Kothari",
    core: false,
    volunteer: false,
    image: "https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    designation: "Team leader of Scio",
    profile: "Inquizitive and pragmatic, he has participated in many inter school quizzes and cryptic hunts"
},
{
    name: "Ayush Narwariya",
    profile: "Ayush is someone you can rely on he loves to hear your past experiences and future plans and likes to discuss abt various conspiracies regarding life, he is also a major asset for his school valorant team and he is currently pursuing his high school diploma in PCM + IP he is someone who is always ready to comfort you in any situation you'll find him lazing around with his friends either playing video games or sporting he is also a valuable asset for school E-sports team, his side hobbies include singing, playing piano and playing cricket he is someone who'll be happy to help u throughout the event.",
    core: false,
    volunteer: false,
    image: "/Ayush profile.jpg",
    designation: "Team Leader of Parabellum",
},
{
    name: "Buddha Dev Das",
    core: false,
    volunteer: false,
    designation: "Team leader of Flimscaping",
    profile: "Buddha is an esports player and a tech enthusiast. He is a 10th grader who wants to be a pro esports athlete in the future. He also has side hobbies which include playing the guitar, footballer for his school team and does lifting aswell. He assures his total dedication in making this event a joyful one for every participant.",
    image: "/Buddha.jpeg"
},
{
    name: "Om Pratap Dhaker",
    core: false,
    volunteer: false,
    designation: 'Team Leader of Esprit Decode',
    image: "/om.jpeg",
    profile: `I am a programmer who is constantly trying to improve his skills. I am one of the prominent feather in the DPS Kolar's cap. I am a huge car fan who is basically obsessed with the JDMs'. Lastly, "I am the one who converts coffee to code".
    `
},
{
    name: "Anirudh Nagarajan",
    profile: "I am a person who is reliable. I have a keen interest in almost everything and love to know more every time. I like solving problems and love challenges. One of my biggest goals has remained of being trustworthy and a good person. I am known for helping people and also do said help in the best way I can.",
    core: false,
    volunteer: false,
    image: "/Anirudh.jpeg",
    designation: "Member of the Esprit Decode team and the president of the student council",
},

{
    name: 'Aarush Shrivastava',
    core: false,
    volunteer: false,
    designation: "Member of Scio team",
    profile: `Aarush is studious, motivated, and very energetic. He likes to play chess and badminton. He is the house captain of Gulmohar house for classes 6th to 8th. `,
    image: "/Aarush.jpg"
},
{
    name: "Purunjay Pratap Singh",
    core: false,
    volunteer: false,
    designation: "Member of Parabellum team",
    profile: "I'm that person you will want to be friends with. I am a memer, gamer, e-sports player and graphic designer. I love to bring positivity and joy to the world through art, design and e-sports.",
    image: '/Purunjay.jpeg'
},


{
    name: "Aarya Sharma",
    core: false,
    volunteer: false,
    designation: "Member of the Quiz team",
    image: '/Aarya.jpeg',
    profile: `Aarya Sharma is ambitious, extremely hard working, reliable, and has good oratory skills. She is immensely passionate about dancing and is a state level volleyball player. She is also a good student with interests in poetry , philosophy, etc.`
},

{
    name: 'Advay Singh Yadav',
    core: false,
    volunteer: true,
    designation: "Member of the Compering Team",
    profile: `He is an over-thinker. He makes small models in Blender and Studio and animates a little. He works for a few games online. He likes meeting new people. I sing online as well on my Instagram profile. Thank you.`,
    image: "/Advay.jpeg"
},
{
    name: "Misha Baniya",
    core: false,
    span2: true,
    volunteer: true,
    designation: "Member of the Compering Team",
    image: "/Misha.jpeg",
    profile: 'From debates to basketball and everything in between you will have her participating in all of them. From reading countless books in the comfort of her room to being the host of larger than life-scale events, she does it all. Its her open minded thoughts and the willingness to learn that makes Misha who she is. An orator and (wanna be) journalist who loves to voice and write her opinions about everything and anything as she runs on caffeine. She will interject you in forums, compete with you on the basketball court, but throughout it all she will be a dear friend, and confidant. Spending her days striving for all-around excellence and snuggling up to her four pet dogs is her daily routine that she fills in. She explores around in hopes to get better, kinder, knowledgeable, and funnier. All thing food and all thing music, from sarcasm to PJs, she tries to have it all.'
},
{
    name: "Pranam Bharill",
    profile: "He can be seen engaging in anything from gardening to web series. Pranam’s personal philosophy is closely related to several cognitive theories of motivation in terms of education and learning. At Delhi Public School, Kolar Road, Bhopal, he is pursuing a High School Diploma with a Humanities + Psychology emphasis. He is engaged with many non-governmental organizations to promote animal welfare and put an end to animal cruelty as a result of his love for the voiceless. He desires to gain exposure in the media. He adores unwinding in a nook with his pets while enjoying music during his free time.",
    core: false,
    volunteer: true,
    designation: "Leader of the Compering Team",
    image: "/Pranam.jpg",
    span2: true
}


]
const About = () => {
    return (<div className="about">
        <div className="about-video">

            <div className='register-header-blur'></div>
            <h2 className="about-title">ABOUT  <span>US</span></h2>
            <video autoPlay loop muted src='/cover.mp4' />
        </div>
        <div className='about-container'>


            <p className="about-description">
                “Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation.
                DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our very first annual tech meet up hosted by and for high schoolers which will be held on the 16th of November.
                Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies and people who crave to be.
            </p>
            <h3 className="about-header">Core Organizers</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.core).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={{ gridColumnStart: 'span 2' }} key={index}>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <div className='about-organizers-each-designation'>

                                <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
                                <div>
                                    <h4 className='about-organizers-each-name'>{organizer.name}</h4>
                                    <p className='about-organizers-each-profile'>{organizer.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>

            <h3 className="about-header">Organizers</h3>
            <div className='about-organizers-sub about-organizers'>
                {organizers.filter(a => !a.core && !a.volunteer).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={organizer.designation === "Core Organizer" ? { gridColumnStart: 'span 2' } : null} key={index}>

                        <div className='about-organizers-each-center'> <img className='about-organizers-each-image-center' src={organizer.image} alt={organizer.name + "picture"} />
                        </div>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <h4 className='about-organizers-each-name'>{organizer.name}</h4>

                            <p className='about-organizers-each-profile'>{organizer.designation}</p>
                        </div>
                    </div>)
                })}
            </div>

            <h3 className="about-header">Compering Team</h3>
            <div className='about-organizers-sub about-organizers'>
                {organizers.filter(a => a.volunteer).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={organizer.span2 ? { gridColumnStart: 'span 2' } : null} key={index}>

                        <div className='about-organizers-each-center'> <img className='about-organizers-each-image-center' src={organizer.image} alt={organizer.name + "picture"} />
                        </div>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <h4 className='about-organizers-each-name'>{organizer.name}</h4>

                            <p className='about-organizers-each-profile'>{organizer.designation}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

export default About;