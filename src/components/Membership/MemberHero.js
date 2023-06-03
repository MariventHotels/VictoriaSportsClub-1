import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/Membership.css';
import '../../styles/CarouselExtend.css';

function MemberHero() {
  return (
    <>
        <div className="extend-carousel" data-aos="fade">
            <div>
                <Carousel className='carousel'
                    width dynamicHeight={true}
                    autoPlay={true}
                    stopOnHover={false}
                    showArrows={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    fade={true}
                    showStatus={false}
                    transition={1500}
                    swipeable={false}
                    animationHandler='fade'
                >

                    <div className='cell'>
                        <img src="/vscimages/hero/memHeroC.jpg" alt="" />
                    </div>

                    <div className='cell'>
                        <img src="/vscimages/hero/memHeroB.jpg" alt="" />
                    </div>

                    <div className='cell'>
                        <img src="/vscimages/hero/memHeroA.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    </>
  )
}

export default MemberHero