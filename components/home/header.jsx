//a video-ish background with text using absolute positions and a linear-gradient that is half-transparent and half-translucent
//the text is centered and has a white font
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Header = (props) => {
    return (<div className="header">
        <video src={props.video.src} autoPlay={true} loop={false} muted={true} className="header-video" />
        <div className="header-content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button className="header-link" onClick={() => {
                window.scrollTo(0, 950)
            }}><span>Learn More</span> <ArrowDownwardIcon className='header-link-icon' /></button>

        </div>
        <div className="header-background">

        </div>
        
    </div>
    )
}

export default Header;