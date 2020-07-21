 import React from 'react';
 import NewComment from './NewComment'
 import Comment from './Comment'
 import styled from 'styled-components'

const Comments = (props) => (
  <FeedbackDiv>
    <InfoLeft>
      Feedback
    </InfoLeft>
    <InfoRight>
      {props.comments.length} 
      {props.comments.length !== 1 ? " responses" : " response" }
    </InfoRight>

    <NewComment id={props.pictureId} setStatePictureShow={props.setStatePictureShow}/>

    <CommentsDiv>
      {props.comments.map((comment, index) => (
        <>
          <Comment key={comment.id} {...comment} deleteCommentState={props.deleteCommentState}/>
        </>
      ))}
    </CommentsDiv>
  </FeedbackDiv>
)

const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
`
const InfoRight = styled.div`
`
const InfoLeft = styled.div`
  font-weight: bold;
  font-size: 24px;
`
const CommentsDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 10rem;
`
export default Comments