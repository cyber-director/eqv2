/* eslint-disable @next/next/no-img-element */
import React from 'react';
import InstagramIcon from "@mui/icons-material/Instagram";


const organizers = [
    {
        name: "Shreshth Verma",
        founder: true,
        core: false,
        volunteer: false,
        designation: "Founder",
        profile: `Shreshth, a visionary and founding member of the Extra Quadrata core team, redefined the tech fest. As the mastermind behind its inception, he drove every aspect of the event. Shreshth assembled a diverse organizing team, wrote event questions, and mentored students, ensuring the festival's success. His impact extended further as he created the event's website and code, which became an integral part of Extra Quadrata's second version. His visionary leadership and dedication set the festival's standard. Now, Shreshth is pursuing a Bachelor of Advanced Computing at the globally acclaimed University of Sydney, ranked 19th worldwide. He's also a Daylell Scholar, marking his exceptional academic achievements. His journey as a student and tech visionary continues to inspire and shape the future of Extra Quadrata. You can read more about him on his website: https://www.shreshthverma.me`,
        image: "/Shreshth.jpg",
        insta: "shreshthverm"
    },

    {
        name: "Angad Singh Bains",
        founder: true,
        core: false,
        volunteer: false,
        designation: "Founder",
        profile: `A hard-working, ambitious, and competitive student who worked on many projects and events. One of the first members who helped in making the event a great success. He likes to find exotic and astonishing answers to new and difficult challenges He has participated in many online game designing and coding events. Having a keen eye for perfection, he developed many games and Arduino projects. Angad won first prize in movie making and got second prize in the inter-national gaming competition. In his spare time, you will find him either eating food while working on his computer or reading some book. Sometimes he likes to cook and spend time with friends. Currently pursuing a High School Diploma focused in PCM + IP from Delhi Public School, Kolar Road, Bhopal. He wants to become a game designer and developer and wants to play for a professional E-sports team.`,
        image: "/Angad.jpg",
        insta: "angad7600123"
    },

    {
        name: "Vyomesh Khare",
        founder: true,
        core: false,
        volunteer: false,
        designation: "Founder",
        profile: ` Vyomesh, completed high schooling by Mid 2023 in science stream is concurrently preparing for entry into graduate level studies in an engineering institution of respectable stature. With an ever rising reliance on the digital applications including artificial intelligence; he is well entrenched into learning cyber security through upcoming technologies. Extending volunteer services through Cyber Jagriti, he loves cars & concept models, problem solving, helping people of all ages and dissemination of knowledge. A soft spoken, cool thinker & homely, working hard to cast an academic foundation aimed at crafting unique positioning in the professionals world besides playing video games in leisure hours.`,
        image: "/Vyomesh.jpeg",
        insta: "vyomeshkhare"
    },

    {
        name: "Aadya Singh",
        founder: true,
        core: false,
        volunteer: false,
        designation: "Founder",
        profile: `Aadya is known for doing absolutely everything they can get their hands on, this is reflected in their portfolio. They’ve collaborated with multiple youth-run non-profits to spread awareness as well as crowdfunding. They’ve managed the social media page for a local renowned handicraft store. They are a published poet that’s always looking for an excuse to bring it up in a conversation. They are a self starter with the experience of organizing multiple experiences. In their spare time, you can find them snuggled in a corner with their cats reading Donna Tartt or some obscure contemporary poet. A sure way to get them to pay attention to you would be to start a debate on acrylic v. oil paint. They are the most approachable of the bunch(you are encouraged to reach out to them for absolutely anything you need or want). Their love for all things cheesy and sappy overwhelms their work.`,
        image: "/Aadya.jpeg",
        insta: "peehuspeare"
    },

    {
        name: "Dhairya Garg",
        founder: true,
        core: true,
        volunteer: false,
        designation: "Cyber Director of the student council",
        profile: `Dhairya Garg, an incumbent student in the eleventh grade, distinguishes himself as a discerning, logical, and astute young scholar. His dexterity in solving quizzes seamlessly aligns with his inquisitive and practical approach, earning him the title of a "quiz-zard." Driven by an ardent ambition to excel in the field of Data Science, he exemplifies a tireless work ethic and unwavering dedication to his pursuits. The pursuit of his creative impulses finds expression in his amateur poetry, a testament to his ability to harmoniously weave imaginative expression with structured reasoning. Manifesting a versatile disposition, Dhairya Garg fearlessly ventures into various domains. His unwavering belief in the adage, "Technology, akin to art, represents a soaring exercise of the human imagination," resonates profoundly with his philosophy, underscoring a penchant for balancing the tenets of rationality with an appreciation for the abstract intricacies of our world. In sum, he emerges as a remarkably talented and resolute scholar, poised to chart a dynamic trajectory in his academic journey and beyond.`,
        image: "/Dhairya.jpg",
        insta: "dhairyagarg7"
    },

    {
        name: "Aarya Sharma",
        founder: false,
        core: true,
        volunteer: false,
        designation: "External Co-ordinator",
        image: '/Aarya.jpeg',
        profile: `Aarya Sharma is driven by her ambition, displaying exceptional dedication, reliability, and impressive oratory prowess. Her profound love for dancing is evident, coupled with her achievements as a state-level volleyball player. Aarya excels academically, showcasing a keen interest in diverse fields such as poetry and philosophy. Delving into the intricacies of poetic expression and philosophical contemplation, she demonstrates a multifaceted approach to learning. A quick-witted and dynamic individual, Aarya's holistic engagement with various disciplines reflects her curiosity and open-mindedness. With a strong work ethic and a passion for both sports and intellectual exploration, Aarya embodies a well-rounded persona, poised for continued success and personal growth.`,
        insta: "aaryaaa_124"
    },

    {
        name: 'Advay Singh Yadav',
        founder: false,
        core: true,
        volunteer: false,
        designation: "Head of the Compering Team, House Captain of Amaltas House",
        profile: `MUNs, debates, writing, speaking, reading, and in general, a lot of talking—that's Advay. He prefers to be called Aadi due to frequent mispronunciations of his name, which heavily triggers him. Advay has actively participated in various projects, including social clubs like Gilehariya, and currently serves as a content writer for India's first student-run Interscholastic newsletter, The Revolution. Additionally, he has engaged with cultural organizations like AFS as a participant. Advay is known for his tendency to overthink and his penchant for taking on various tasks. He effortlessly generates puns and enjoys work that requires effective management. With a love for socializing, he looks forward to meeting and welcoming everyone to DPSK Tech Fest 2.0.`,
        image: "/Advay.jpg",
        insta:"advay_ydv"
    },

    {
        name: "Buddha Dev Das",
        founder: false,
        core: true,
        volunteer: false,
        designation: "Head of Gaming Events",
        profile: "Buddha, a tech aficionado and former competitive eSports player, is an ambitious 11th grader with a resolute aspiration for a future in the dynamic realm of Information Technology. Alongside his passion for technology, he finds solace in strumming his guitar and displaying his athletic finesse as an integral part of his school's football team. Moreover, his dedication to fitness is evident through his commitment to weightlifting. Buddha's commitment to excellence extends beyond personal endeavors, as he fervently ensures the joy and success of every participant in every event he partakes in. With his multifaceted interests and unwavering determination, he embodies a spirit of versatility and a profound dedication to achieving his goals in both the tech industry and his extracurricular pursuits.",
        image: "/Buddha.jpg",
        insta:"buddha.brah"
    },

    {
        name: "Varad Sharma",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of the Esprit Decode",
        profile: "Varad is an enthusiastic supporter of Free and open source software (FOSS), using and contributing to Linux. A VIM user, an upcoming programmer, and a web developer, he believes that 'Vim was the best thing created by mankind.'",
        image: "/varad.png",
        insta:"f4ster444"
    },

    {
        name: 'Aarush Shrivastava',
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Scio",
        profile: `Aarush Shrivastava is an enterprising 9th grader. He is a curious quizzer, and a true technology connoisseur. He is fond of Mathematics, Artificial Intelligence, and Economics. When he’s free, you can find him gaming or playing chess. He takes a great interest in debating, understanding foreign relations and getting to know about the latest happenings of the world. He is associated with the school’s ATL and aspires to make an Artificially Intelligent robot this year.`,
        image: "/Aarush.png",
        insta:"imaegga"
    },

    {
        name: "Parikshit Raj Karn",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Site Incroyable",
        profile: "Parikshit is an irenic coder, orphic gamer and an absolute curious person; He has a keen interest in almost everything and loves to know more every time. He's a great MUNer also the Vice-Chairperson for the middle-school MUN Club and a learning basketball player. His wabi-sabi skills are great with twitterpated oration and public speaking knack.",
        image: '/Parikshit.jpg',
        insta:"orphic.pixo"
    },

    {
        name: "Shounak Verma",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Technovate, Junior Cyber Director",
        profile: "Shounak Verma, an aspiring student, aims for a career in robotics, particularly in the Internet of Things. Actively engaged in the ATL Lab, he has excelled in related competitions. Cycling uphill is his top pastime, fueling his diverse array of hobbies and ambitions.",
        image: '/Shounak.jpg',
        insta: "shounak_verma"
    },

    {
        name: "Divyansh Raj",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Polémos",
        profile: "Divyansh is an enthusiastic Class 8 student with a profound passion for gaming. From mastering complex strategies in MOBA games to exploring virtual worlds in RPGs, his love for gaming knows no bounds. He spends his free time honing his skills in competitive online tournaments and eagerly anticipates the latest gaming releases.",
        image: '/Divyansh.jpg',
        insta: "aromaamorasuckstlife"
    },

    {
        name: "Varil Mahere",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Member of Technovate",
        profile: "Varil Mahere, a bright ninth-grade student, has a keen interest in Artificial Intelligence, exploring its models and delving into data analytics. Passionate and driven, he is constantly seeking to expand his knowledge in this dynamic field.",
        image: '/Varil.jpg',
        insta:""/*not found*/
    },

    {
        name: "Vedant Singh Thakur",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Esthetique Art",
        profile: "Vedant Singh is a creative student artist known for his diverse exploration of artistic mediums and his dedication to both art and academics. With a strong focus on visual storytelling, he inspires fellow artists with his collaborative spirit and experimental approach, showing a promising future in both artistic growth and academic excellence.",
        image: '/Vedant.jpg',
        insta: 'huyahuyahuhu'
    },

    {
        name: "Chitransh Agarwal",
        founder: false,
        core: false,
        volunteer: false,
        designation: "Team Leader of Filmskaping, Lux Captis",
        profile: "Chitransh is a curious and dedicated learner, known for his strong work ethic and collaborative spirit. Eager to explore new horizons, he actively engages in various academic pursuits, demonstrating a proactive approach to learning. With a bright future ahead, Chitransh continues to inspire his peers and educators through his enthusiasm and commitment to personal and academic growth.",
        image: '/Chitransh.JPG',
        insta: 'shutter._clikz._'
    },

    {
        name: "Sulakshana Guha",
        founder: false,
        core: false,
        span2: true,
        volunteer: true,
        designation: "Member of the Compering Team, House Captain of Gulmohar House",
        image: "/Sulakshana.jpg",
        profile: 'Sulakshana is a writer, reader, film enthusiast and avid procrastinator. She works as a managing editor to a literary magazine and is published in several journals. She believes in the power of technology in the modern world, and wishes to use it to bring people (and ideas) together.',
        insta: 'meg_hna06'
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
            <h3 className="about-header">Founders</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.founder).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={{ gridColumnStart: 'span 2' }} key={index}>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <div className='about-organizers-each-designation'>

                                <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
                                <div>
                                    <h4 className='about-organizers-each-name'>{organizer.name}<a className='about-organizers-insta' href={`https://www.instagram.com/${organizer.insta}`} target='#'><InstagramIcon /></a></h4>
                                    <p className='about-organizers-each-profile'>{organizer.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </div>

            <h3 className="about-header">Core Organizers</h3>
            <div className='about-organizers'>
                {organizers.filter(a => a.core).map((organizer, index) => {

                    return (<div className='about-organizers-each' style={{ gridColumnStart: 'span 2' }} key={index}>
                        <div className='about-organizers-each-header'>

                            <p className='about-organizers-each-profile'>{organizer.profile}</p>
                            <div className='about-organizers-each-designation'>

                                <img className='about-organizers-each-image' src={organizer.image} alt={organizer.name + "picture"} />
                                <div>
                                    <h4 className='about-organizers-each-name'>{organizer.name}<a className='about-organizers-insta' href={`https://www.instagram.com/${organizer.insta}`} target='#'><InstagramIcon /></a></h4>
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
                            <h4 className='about-organizers-each-name'>{organizer.name}<a className='about-organizers-insta' href={`https://www.instagram.com/${organizer.insta}`} target='#'><InstagramIcon /></a></h4>
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
                            <h4 className='about-organizers-each-name'>{organizer.name}<a className='about-organizers-insta' href={`https://www.instagram.com/${organizer.insta}`} target='#'><InstagramIcon /></a></h4>

                            <p className='about-organizers-each-profile'>{organizer.designation}</p>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    </div>)
}

export default About;
