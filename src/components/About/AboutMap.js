import React from 'react';
import '../../styles/about.css';
import '../../styles/Map.css';

function AboutMap() {
  return (
    <>
        <div className="map-wrap">
            <div className="wrap-image">
                <iframe title='myFrame' src="https://maps.google.com/maps?q=victoria%20sport%20tow&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="700" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="map-name">
                <h1>VICTORIA SPORTS TOWER</h1>
                <p>799, Victoria Sports Tower, EDSA Southbound, 799 Epifanio de los Santos Ave, South Triangle, Quezon City, 1103 Metro Manila</p>
                <p className='map-desc'>VS Hotel is highly accessible and located at the Victoria Sports Tower – Station II along EDSA, between the GMA-Kamuning and Quezon Avenue MRT Stations. Its location also offers easy access to popular eateries and fast food chains in Quezon City, with Timog Avenue and Tomas Morato being nearby. Furthermore, Trinoma and SM North are just two MRT stations away, making it a convenient choice for travelers and tourists alike.</p>
            </div>
        </div>
    </>
  )
}

export default AboutMap