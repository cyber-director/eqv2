import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link'
import { GitHub } from '@mui/icons-material';

const Footer = (props) => {
    return (<div className="footer">
        <div className="footer-container">
            <div className="footer-container-left">
                All Rights Reserved
                <br /> © DPS Kolar Technoclub 2022
            </div>
            <div className="footer-container-right">
                <div>
                    <Link href="/"><span className='footer-link'>Home</span></Link>
                    <Link className='footer-link' href="/about"><span className='footer-link'>About us</span></Link>
                    <Link className='footer-link' href="/register"><span className='footer-link'>Register</span></Link>
                    <Link className='footer-link' href="/contact"><span className='footer-link'>Contact us</span></Link>
                </div>
                <h4>Find us on</h4>
                <div style={{display: 'flex', alignItems:'center'}}>
                    <a href="https://discord.com/invite/UXhPCPRpvu" target="__blank__">
                        <img src="/icon_clyde_white_RGB.png" style={{width:'2rem'}}/>
                    </a>

                    <a target="__blank__" href="https://www.instagram.com/extraquadrata/"><InstagramIcon style={{ color: "#fff", fontSize: "2rem", marginLeft: "1.4rem" }} /></a>
                </div>

                <h4 style={{ display: 'flex', alignItems: 'center' }}>Check out our codebase on <a href='https://github.com/Delhi-Public-School-Kolar-Road-Bhopal'><GitHub style={{ color: "#fff", fontSize: "2rem", marginLeft: "1.4rem" }} /></a></h4>

            </div>
        </div>

    </div>)
}

export default Footer;