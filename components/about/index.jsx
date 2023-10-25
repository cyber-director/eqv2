/* eslint-disable @next/next/no-img-element */
import React from 'react';

const organizers = [
    {
        name: "Dhairya Garg",
        core: true,
        volunteer: false,
        designation: "Cyber Director of the student council",
        profile: "Dhairya Garg, an incumbent student in the eleventh grade, distinguishes himself as a discerning, logical, and astute young scholar. His dexterity in solving quizzes seamlessly aligns with his inquisitive and practical approach, earning him the title of a \"quiz-zard.\" Driven by an ardent ambition to excel in the field of Data Science, he exemplifies a tireless work ethic and unwavering dedication to his pursuits. The pursuit of his creative impulses finds expression in his amateur poetry, a testament to his ability to harmoniously weave imaginative expression with structured reasoning. Manifesting a versatile disposition, Dhairya Garg fearlessly ventures into various domains, most notably evinced by his fervent engagement with the complexities of Chess. His unwavering belief in the adage, \"Technology, akin to art, represents a soaring exercise of the human imagination,\" resonates profoundly with his philosophy, underscoring a penchant for balancing the tenets of rationality with an appreciation for the abstract intricacies of our world. In sum, he emerges as a remarkably talented and resolute scholar, poised to chart a dynamic trajectory in his academic journey and beyond.",
        image: "/Dhairya.jpg"
    },

    {
        name: "Aarya Sharma",
        core: true,
        volunteer: false,
        designation: "Member of the Quiz team",
        image: '/Aarya.jpeg',
        profile: `Aarya Sharma is ambitious, extremely hard working, reliable, and has good oratory skills. She is immensely passionate about dancing and is a state level volleyball player. She is also a good student with interests in poetry , philosophy, etc.`
    },

    {
        name: 'Advay Singh Yadav',
        core: true,
        volunteer: false,
        designation: "Member of the Compering Team",
        profile: `He is an over-thinker. He makes small models in Blender and Studio and animates a little. He works for a few games online. He likes meeting new people. I sing online as well on my Instagram profile. Thank you.`,
        image: "/Advay.jpg"
    },

    {
        name: "Buddha Dev Das",
        core: true,
        volunteer: false,
        designation: "Head of Gaming Events",
        profile: "Buddha, a tech aficionado and former competitive eSports player, is an ambitious 11th grader with a resolute aspiration for a future in the dynamic realm of Information Technology. Alongside his passion for technology, he finds solace in strumming his guitar and displaying his athletic finesse as an integral part of his school's football team. Moreover, his dedication to fitness is evident through his commitment to weightlifting. Buddha's commitment to excellence extends beyond personal endeavors, as he fervently ensures the joy and success of every participant in every event he partakes in. With his multifaceted interests and unwavering determination, he embodies a spirit of versatility and a profound dedication to achieving his goals in both the tech industry and his extracurricular pursuits.",
        image: "/Buddha.jpg"
    },

    {
        name: "Varad Sharma",
        core: false,
        volunteer: false,
        designation: "Team Leader of the Esprit Decode",
        profile: "Varad is an enthusiastic supporter of Free and open source software (FOSS), using and contributing to Linux. A VIM user, an upcoming programmer, and a web developer, he believes that 'Vim was the best thing created by mankind.'",
        image: "/varad.png"
    },

    {
        name: 'Aarush Shrivastava',
        core: false,
        volunteer: false,
        designation: "Team Leader of Scio",
        profile: `Aarush is studious, motivated, and very energetic. He likes to play chess and badminton. He is the house captain of Gulmohar house for classes 6th to 8th. `,
        image: "/Aarush.jpeg"
    },

    {
    name: "Parikshit Raj Karn",
    core: false,
    volunteer: false,
    designation: "Team Leader of Site Incroyable",
    profile: "Parikshit is an irenic coder, orphic gamer and an absolute curious person; He has a keen interest in almost everything and loves to know more every time. He's a great MUNer also the Vice-Chairperson for the middle-school MUN Club and a learning basketball player. His wabi-sabi skills are great with twitterpated oration and public speaking knack.",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Shounak Verma",
    core: false,
    volunteer: false,
    designation: "Team Leader of Technovate, Junior Cyber Director",
    profile: "Wizard xD",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Divyansh Raj",
    core: false,
    volunteer: false,
    designation: "Team Leader of Polémos",
    profile: "Aroma xD",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Varil Mahere",
    core: false,
    volunteer: false,
    designation: "Team Member of Technovate",
    profile: "Varil",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Vedant Singh Thakur",
    core: false,
    volunteer: false,
    designation: "Team Leader of Esthetique Art",
    profile: "AKSILAD",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Chitransh Agarwal",
    core: false,
    volunteer: false,
    designation: "Team Leader of Filmskaping, Lux Captis",
    profile: "Chitransh",
    image: '/Parikshit.jpeg'
    },

    {
    name: "Sulakshana Guha",
    core: false,
    span2: true,
    volunteer: true,
    designation: "Member of the Compering Team",
    image: "/Misha.jpeg",
    profile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia lectus et lorem feugiat, nec facilisis nulla vehicula. In condimentum odio dui, non iaculis tortor lobortis quis. Vivamus scelerisque feugiat ante, vitae euismod diam facilisis quis. Duis mauris odio, malesuada rutrum posuere et, tempor facilisis quam. Aenean a gravida sem. Donec quis mi ut risus elementum rhoncus. Vestibulum vitae lacus et libero rutrum ornare. Vestibulum porta aliquet arcu, vitae egestas eros rutrum et. Sed vitae nisl tortor. Donec tincidunt finibus nisi at bibendum. Quisque pretium, mi eget rhoncus malesuada, metus lectus vestibulum velit, in ultrices arcu felis gravida leo'
    }

]
const About = () => {
    return (<div className="about">
        <div className="about-video">

            <div className='register-header-blur'></div>
            <h2 className="about-title">ABOUT  <span>US</span></h2>
            {/*<video autoPlay loop muted src='/cover.mp4' />*/}
        </div>
        <div className='about-container'>


            {/* //TODO */}
            <p className="about-description">
                “Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation.
                DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our second annual tech meet up hosted by and for high schoolers which will be held on the 5th of December.
                Our competitions would test the participant’s creativity and logical thinkig to response time and sheer skill for tech savvies and people who crave to be.
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

            <h3 className="about-header">Team Leads</h3>
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
