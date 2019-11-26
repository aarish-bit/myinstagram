import React, { Component } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap';
import './InstaPost.scss'


class OptionModal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         modal:false
      }
    
    this.toggle = this.toggle.bind(this);
  
   }
  
   toggle() 
   {
     this.setState(prevState => ({
       modal: !prevState.modal
     }));
   }
  
    render() {
      return (
        <div>
           <button className="btn" onClick={this.toggle}><i className="fas fa-ellipsis-h"></i></button>            
           <div className="modal">
           <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
           <ModalBody className="modal_body">
              <span>Report inappropriate</span>
              <span>Unfollow</span>
              <span>Go to post</span>
              <span>Embed</span>
              <span>Share</span>
              <span>Copy Link</span>
              <Button color="default" onClick={this.toggle}>Cancel</Button>
           </ModalBody>
         </Modal>
           </div>
           
        </div>
      )
    }
  }
  
  export default OptionModal