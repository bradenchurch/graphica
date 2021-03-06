import React, { useState } from 'react';
import Modal from '../modal/Modal';
import useModal from "../../hooks/useModal";
import PictureForm from "../new/PictureForm";
import styled from 'styled-components';
import AddIcon from "../../img/add_circle_outline_24px.svg";


const NewPictureButton = ({ isCurrentUser }) => {
  const { open, toggle } = useModal();

  return (
   <>
      {/* make button reactive to user */}
        <AddButton onClick={ toggle }>
          Add a Picture
          <Icon src={AddIcon} />
        {/* <svg width="1rem" height="1rem" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 5V9H5V11H9V15H11V11H15V9H11V5H9ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10Z" fill="white"/>
        </svg> */}
        </AddButton>
        
    <Modal onClose={toggle} open={open}>
      <PictureForm toggleModal={toggle}/>
    </Modal>
   </>
  )
}



const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  background: #0099BA;
  box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
`

const Icon = styled.img`
  height: 1.15rem;
  margin-left: 0.5rem;
  filter: invert(100%) sepia(0%) saturate(7488%) hue-rotate(11deg) brightness(98%) contrast(97%);
`

export default NewPictureButton;