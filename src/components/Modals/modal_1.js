import React from 'react';
import Popup from 'reactjs-popup';


const Modal_1 = () => {
   return (
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div><h5 class="modal-title" id="exampleModalLongTitle">Demo Banking BI</h5></div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          
          <p>Banking BI system requires user id and password, based on user id and role one can access different platforms.</p>

          <div>
          <strong>Admin</strong>
          <p><strong>Userid:</strong> admin123</p>
          <p><strong>Password:</strong> admin010</p>
          </div>

          <div>
          <strong>Branch</strong>
          <p><strong>Userid:</strong> alabama123</p>
          <p><strong>Password:</strong> 5v4q6s</p>
          </div>
          <a href='https://bidemo.celloscope.net/' className='btn btn-warning d-block mb-3' target='_blank'>Go to Live Project</a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
);
   }

export default Modal_1