import React from 'react';
import Popup from 'reactjs-popup';

const Modal_2 = () => {
   return (
    <div class="modal fade" id="exampleModalLong_2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Custom Business Intelligence</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <p>This is a Business Intelligence Tool that will help you make decision based on several graphical charts and thus grow your business</p>
          <a href='https://celloscope.shinyapps.io/custom_app_experiment/' className='btn btn-warning d-block mb-3' target='_blank'>See Live</a>
          
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
);
   }

export default Modal_2