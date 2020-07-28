import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';


class UpdateBannerImage extends React.Component {

  state = { formValues: { file: '' }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0] }})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('formsubmit')
    this.props.updateUserBannerImage(this.props.user.id, this.state.formValues)
      .then((user) => this.props.setUser(user))
      .catch(console.log)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} style={{margin: "1rem"}} >
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}>
          {({ getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}>
                <input {...getInputProps()} />
                <img src={this.state.url ? this.state.url : this.props.user.banner_image} style={{width: "100%"}}/>
                { isDragActive ? <p>Already loaded</p> : <p></p> }
              </div>
            )
          }}
        </Dropzone>
        <SubmitButton type="submit" >Update Banner Image</SubmitButton>
      </form>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const SubmitButton = styled.button`
    width: 148px;
    height: 38px;
    
    background: #0099BA;
    box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
  `

export default UpdateBannerImage;