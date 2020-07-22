import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow';
import commentsImage from '../../img/comments.png'
import viewsImage from '../../img/views.png'
import { ImageConsumer } from '../../providers/ImageProvider'

const Card = (props) => {
  const id = props.image.id
  const user_id = props.image.user_id
  const url = props.image.url
  const { open, toggle } = useModal();
  const [views, setViews] = useState(props.image.views)
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    props.fetchUser(user_id)
      .then (res => setUser(res.data))
      .catch(console.log)
    props.fetchComments(id)
      .then(res => setComments(res.data))
      .catch(console.log)
  }, [])

  const updateViewsState = (incomingId) => {
    if (id === incomingId) {setViews(views + 1)}
    }

  const toggleAndSetId = () => {
    props.setImageId(id)
    toggle()
  }

  const toggleAndDelete = (incomingId) => {
    toggle()
    props.updateFeedState(incomingId)
  }

  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}>     
          <PictureShow updateViewsState={updateViewsState} toggleAndDelete={toggleAndDelete}/>   
      </Modal>       
      <CardDiv onClick={toggleAndSetId} >
        <StyledText>{props.image.title}</StyledText>
        <StyledImage src={url}  />
      </CardDiv>
      <PointerOff>
        <CardFooterLeft>
          <a href={`/Profile/${user.id}`}>
            <SmallImage image={user.image}/>
          </a>
          <a href={`/Profile/${user.id}`}>
            {user.first_name} {user.last_name}
          </a>
        </CardFooterLeft>
        <CardFooterRight>
          <SmallImage image={commentsImage} />
          {comments.length}
          <SmallImage image={viewsImage} />
          {views ? <>{views}</> : 0} 
        </CardFooterRight>
      </PointerOff>
    </CardBorder>
  )
}

const StyledImage = styled.img`
  width: 100%
`
const StyledText = styled.div`
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 1rem; 
  text-align: left;
  width: 90%;
  visibility: hidden;
  
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: white;

`
const CardDiv = styled.div`
  cursor: zoom-in;
  position: relative;
  display: inline-block;
    &:hover ${StyledText} {
        visibility: visible;
  }
`
const PointerOff = styled.div`
  width: 100%
  cursor: default;
  font-family: 'Montserrat';
`
const CardBorder = styled.div`
  margin-bottom: -40px;
`
const CardFooterLeft = styled.div`
  float: left;
  margin-bottom: 15px;
  cursor: default;
  display: flex;
  align-items: center;
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: black;
  }
  a:active {
    color: black;
  }
`
const SmallImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 20px;
  width: 20px;
`
const CardFooterRight = styled.div`
  display: flex;  
  float: right;
  margin-bottom: 15px;
  cursor: default;
  color: #96969C;
`

const ConnectedCard = (props) => (
  <ImageConsumer>
    {(value) => <Card {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedCard;