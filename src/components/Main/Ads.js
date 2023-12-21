import React from 'react';
import '../../styles/Ads.css';

function Ads() {

  return (
    <>
        <div class="modal fade" id="onload" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <button className='close' data-bs-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {/* <img src="/vscimages/ads/VS Erick Butler-ig.jpg" alt="" /> */}

                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <img src="/vscimages/ads/VSPORTS DEC PROMO socmed2.jpg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/vscimages/ads/VSPORTS DEC PROMO socmed3.jpg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item active">
                                    <img src="/vscimages/ads/VS Erick Butler-ig.jpg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/vscimages/ads/Coach ROY2 -ig.jpg" class="d-block w-100" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads