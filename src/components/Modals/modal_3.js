import React from 'react';
import Popup from 'reactjs-popup';

const Modal_3 = () => {
   return (
    <div class="modal fade" id="exampleModalLong_3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Project Name</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <p>This is a Dashboard made with the help of Tableau that will help you make decision based on several graphical charts and thus grow your business</p>
          <a href='https://public.tableau.com/app/profile/sabbir.hossain/viz/Internet_Banking/Dashboard2' className='btn btn-warning d-block mb-3' target='_blank'>See Live</a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
);
   }

export default Modal_3