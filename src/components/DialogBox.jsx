import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
  alignItems: 'center',
  textAlign: 'center',
};
export default class DialogBox extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary
        onClick={this.props.handleClose}
      />,
    ];
    return (
      <div>
        <Dialog
          style={style}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >

          {dialogText(this.props.complete)}
        </Dialog>
      </div>
    );
  }
}

const dialogText = complete => (complete ? 'Congratulations you have suceeded. Please submit your challenge ✅' :
  'It looks like your answer wasn\'t quite right ❌');
