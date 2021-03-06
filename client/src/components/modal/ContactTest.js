import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import styled from 'styled-components';

const ContactTest = ({user}) => (
  <Container>
    <Top>
      <h1>{user.first_name} {user.last_name}</h1>
    </Top>
    <hr></hr>
    <Bottom>
      <h2>Contact Info</h2>
      <h3>Email</h3>
      <UserEmail>{user.email}</UserEmail>
      <h3>Graphica Account:</h3>  
      <a href={`https://graphica_domain/profile/${user.id}`} target="_blank" >
        <p>https://graphica_domain/profile/{user.id}</p>
      </a>
    </Bottom>
  </Container>
)

const Container = styled.div`
`

const Top = styled.div`
  padding: 1rem 0 0 2rem;
`

const Bottom = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`


const UserEmail = styled.div`
font-style: italic;
`

export default ContactTest;