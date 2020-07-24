import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AuthConsumer } from "../../providers/AuthProvider";
import { ImageConsumer } from "../../providers/ImageProvider";
import styled  from 'styled-components';


const CollectionForm = (props) => {

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  useEffect(() => {
    console.log(props)
    if (props.collection) {
      setDescription(props.collection.description)
      setTitle(props.collection.title)
    }
  }, [])

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   if (props.collection) {
      axios.patch(
        `/api/users/${props.user.id}/collections/${props.collection.id}`, 
        { title: title, description: description }
      )
        .then( res => {
          props.handleRes(res)
        })
     
   } else {
      axios.post(
        `/api/users/${props.user.id}/collections`, 
        { title: title, description: description }
        )
        .then( res => {
          props.handleRes(res.data)
          
          
        })
        .catch(console.log)
    }
  }

  return(

    <form onSubmit={handleSubmit}>
      <label>
        Title: 
        <input type="text" name="title" value={title} required onChange={handleChangeTitle}/>
      </label>
      <label>
        Description: 
        <input type="text" name="description" value={description} onChange={handleChangeDescription}/>
      </label>
      <button>Submit</button>
    </form>
  )

}


const ConnectedCollectionForm = (props) => (
  <AuthConsumer>
      {(value) => <CollectionForm {...props} {...value} />}
  </AuthConsumer>
);

const AuthConnectedCollectionForm = (props) => (
  <ImageConsumer>
    {(value) => <ConnectedCollectionForm {...props} {...value} />}
  </ImageConsumer>
);



export default AuthConnectedCollectionForm;