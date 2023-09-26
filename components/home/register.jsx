/* eslint-disable @next/next/no-html-link-for-pages */

import Link from 'next/link'
const Register = () => {
    return (<div className="cta-register">
        <Link href="/register"><span>Register</span></Link >
        <Link href="/about"><span>About us</span></Link >
        <Link href="/contact"><span>Contact us</span></Link >
    </div>)
}

export default Register;