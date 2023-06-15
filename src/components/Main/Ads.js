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
                        <img src="/vscimages/ads/VS Power pops day.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Ads