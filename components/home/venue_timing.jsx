
import Brochure from './brochure'
const Venue = () => {
    let m = { "Offline events will be held on": "Tuesday, 5th December, 2023", "Online events will start on": "Friday, 17th November, 2023", "Online and Hybrid Event Results will be declared on": "Friday, 1st December, 2023", "The registrations for all events open til": "Wednesday, 15th November, 2023", "Onffline Event Results will be declared on": "Tuesday, 5th December, 2023", "The total monetary value of prizes that will be awarded across all 9 events is": "Over ₹20,000" };
    let keys = Object.keys(m);
    return (
        <div className="container">
            <div className="container-left">
                <div className="container-left-container">
                    {keys.map((a, index) => {
                        return (<div className="container-left-each" key={index}><p>{a}</p><h3>{m[a]}</h3></div>)
                    })}
                </div>
            </div>
            <div className="container-venue">
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=DPS Kolar Road, Bhopal&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF</a></div><style></style></div>

                <Brochure />
            </div>
        </div>
    )
}

export default Venue;
