import React from "react";
import "../Modal/index.css";
import styled from "styled-components";
const FooterButtons = styled.div`
  padding: 10px 0;
  text-align: center;
  background-color: #ea4b35;
`;
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.isActive ? (
      <div className="modal-overlay" onClick={this.props.onClick}>
        <div className="modal-window">
          <div className="modal-header">{this.props.header}</div>
          {this.props.closeButton ? <div className="close-button"></div> : null}
          <div className="modal-content">
            <div className="modal-text">{this.props.text}</div>
            <div className="modal-question">{this.props.question}</div>
          </div>
          <FooterButtons className="modal-footer">
            {/* {this.props.actions.map((button, index) => {
              <button key={index}>{button}</button>;
            })} */}
            {this.props.actions}
          </FooterButtons>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
