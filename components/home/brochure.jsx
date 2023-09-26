
import Link from 'next/link'

const Brochure = () => {
    return (
        <div style={{display:'flex', justifyContent:"center"}} className="cta-register">
            <Link href="/brochure.pdf"><span>Check Out Our Brochure</span></Link >
        </div>
    )

}

export default Brochure;