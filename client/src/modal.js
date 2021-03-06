import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from './form';


class Modal extends React.Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState ({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick = {this.toggle}>Add Kudos</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Add Kudos!</MDBModalHeader>
          <MDBModalBody>
            <Form toggle={this.toggle} kudosList={this.props.kudosList}/>
          </MDBModalBody>
          <MDBModalFooter>
      
            
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    )
  }
}

export default Modal;