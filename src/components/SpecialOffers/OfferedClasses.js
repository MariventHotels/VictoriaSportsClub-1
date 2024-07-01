import React from 'react';
import '../../styles/Classes.css';

function OfferedClasses() {
  return (
    <div className="classes-wrap" >
            <div className="class-title" data-aos="fade-up">
                <h1>SPECIAL OFFERS</h1>
                <p>Be updated with the latest promo offerings of the Victoria Sports Club.</p>
            </div>

            <div className="offers-list">

                <div className="offers-grid">
                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-img">
                            <img src="/vscimages/offers/GroupCircuitClass.jpg" alt="Jiu-Jitsu" />
                        </div>
                    </div>

                    <div className="offers-col" data-aos="fade-up">
                        <div className="offers-description">
                            <h1>GROUP CIRCUIT CLASS</h1>
                            <p>Calling all fitness enthusiasts! Join us for a group
                                circuit exercise led by our resident trainer, Coach Roy,
                                every Monday to Friday from 6 PM to 7 PM. Sign up today
                                and take the first step towards a healthier, stronger you. ⁣⁣⁣⁣
                            </p>

                            {/* <h4>PHP 3,500/head</h4>

                            <p>
                                Inclusions: Fitness Gym & Swimming Pool Access <br />
                                Promo Period: March 15 to May 15, 2024
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OfferedClasses