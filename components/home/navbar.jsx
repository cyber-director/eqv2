import { Link } from 'next';
const Navbar = () => {
    return (<div className='navbar'>
        <div className='navbar-logo'>
    
        </div>
        <div className='navbar-links'>
            <Link>
                <p>Home</p>
            </Link>
            <Link>
                <p>About us</p>
            </Link>
            <Link>
                <p>Contact us</p>
            </Link>
            <Link>
                <p>Register</p>
            </Link>
            <Link>
                <p>Home</p>
            </Link>
        </div>
        <div>
            <p>All Rights Reserved</p>

            <p>© DPS Kolar Technoclub 2022</p>
        </div>
    </div>)
}

export default Navbar;