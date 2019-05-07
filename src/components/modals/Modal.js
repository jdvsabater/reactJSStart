import React from 'react';
import '../../App.css';
import { Button } from 'reactstrap';

const backdropStyle = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
};

const modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative'
};
const footerStyle = {
  position: 'absolute',
  bottom: 50
};

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={backdropStyle}>
        <div style={modalStyle}>
          <Button
            close
            onClick={e => {
              this.onClose(e);
            }}
          >
            X
          </Button>
          {this.props.children}
          <div style={footerStyle} />
        </div>
      </div>
    );
  }
}
