import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import { FeedConsumer } from '../../providers/FeedProvider'
import useTrigger from '../../hooks/useTrigger'

const SearchBar = (props) => {
  
  useTrigger(props.query, 500, () => {
    props.setCategoryId(null)
    props.resetAndSearchPictures();
  });

  return (
    <StyledInput
      type="text"
      name="formName"
      value={props.query}
      placeholder="Find something new..."
      onChange={(e) => props.setQuery(e.target.value)}
    />
  )
}

const StyledInput = styled.input`
border: none;

height: 35px;

width: 525px;
box-sizing: border-box;
outline: none
`
const ConnectedSearchBar = (props) => (
  <FeedConsumer>
    {(value) => <SearchBar {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedSearchBar;