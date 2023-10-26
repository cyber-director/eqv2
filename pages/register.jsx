import Link from "next/link";

const info = [{
    name: 'Esprit Decode',
    liveVideo: '/cover-coding.mp4',
    link: 'register/esprit-decode'
},
{
    name: 'Lux Captis',
    liveVideo: '/cover-photography.mp4',
    link: 'register/lux-captis'
},
{
    name: 'Parabellum',
    liveVideo: '/valorant-cover.mp4',
    link: 'register/parabellum'
},
{
    name: 'Site Incroyable',
    liveVideo: '/cover-website.mp4',
    link: 'register/site-incroyable'
},
{
    name: 'Scio',
    liveVideo: '/cover-cryptic.mp4',
    link: 'register/scio'
},
{
    name: 'Filmskaping',
    liveVideo: '/cover-video.mp4',
    link: 'register/filmskaping'
},
{
    name: 'Esthetique Art',
    liveVideo: '/Esthetique_art.mp4',
    link: 'register/esthetique-art'
},
{
    name: 'Polemos',
    liveVideo: '/minecraft.mp4',
    link: 'register/polemos'
},
{
    name: 'Technovate',
    liveVideo: '/atl-event.mp4',
    link: 'register/technovate',
}]
const Register = () => {
    console.log(info);
    return (
        <div className="register">
            <div className="register-header register-header-2">
                <h1>Register</h1>
                
                <div className='register-header-blur'></div>
                {/* <video src='/cover.mp4' autoPlay={true} loop={true} muted={true} className="register-header-video" /> */}
            </div>
            <div className="register-home">
                <h2>Which event do you want to register for?</h2>
                <div className="register-home-container">
                    {info.map((a, index) => {
                        console.log(a)
                        return (<div key={index}>
                            <Link href={a.link} >
                                <div className="info-section-e register-home-container-each">
                                    <video autoPlay muted loop src={a.liveVideo} className="info-section-e-cover" />
                                    <h3>
                                        {a.name}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </div>


        </div >
    )
}

export default Register;
