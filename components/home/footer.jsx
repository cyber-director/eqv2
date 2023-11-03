/* eslint-disable @next/next/no-img-element */
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

const Footer = () => {
    return (<div className="footer">
        <div className="footer-container">
            <div className="footer-container-left">
                All Rights Reserved
                <br /> © DPS Kolar Headway 2023
            </div>
            <div className="footer-container-right">
                <div>
                    <Link href="/"><span className='footer-link'>Home</span></Link>
                    <Link className='footer-link' href="/about"><span className='footer-link'>About us</span></Link>
                    <Link className='footer-link' href="/register"><span className='footer-link'>Register</span></Link>
                    <Link className='footer-link' href="/contact"><span className='footer-link'>Contact us</span></Link>
                </div>
                <h4>Find us on</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://discord.gg/9mj79NMGcx" target="__blank__">
                        <img src="/icon_clyde_white_RGB.png" alt="clyde-discord" style={{ width: '2rem' }} />
                    </a>

                    <a target="__blank__" href="https://www.instagram.com/extraquadrata/"><InstagramIcon style={{ color: "#fff", fontSize: "2rem", marginLeft: "1.4rem" }} /></a>
                </div>

            </div>
        </div>
    </div>)
}

export default Footer;
