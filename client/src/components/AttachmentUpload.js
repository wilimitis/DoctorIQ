import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class AttachmentUpload extends React.Component {

  constructor(props) {
    super(props)
    this.state = { file: '' };
  }

  handleFileChange(e) {
    e.preventDefault();

    this.setState({
      file: e.target.files[0]
    });
  }

  handleFileUpload(e) {
    e.preventDefault();
    this.props.handleFileUpload(this.state.file);
  }

  render () {
    return (
      <div>
        <form onSubmit={(e)=>this.handleFileUpload(e)}>
          <input 
            type="file" 
            onChange={(e)=>this.handleFileChange(e)} />
          <br />
          <button 
            type="submit" 
            onClick={(e)=>this.handleFileUpload(e)}>Upload Image</button>
        </form>
      </div>
    );
  }
}

export default AttachmentUpload;