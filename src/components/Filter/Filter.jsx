import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled, InputStyled } from '../ContactForm/ContactForm.Styled';
import { SpanStyled } from './Filter.styled';
const Filter = props => {
  return (
    <LabelStyled>
      <SpanStyled>Find contacts by name:</SpanStyled>
      <InputStyled name="filter" onChange={props.onInputHendler}></InputStyled>
    </LabelStyled>
  );
};

Filter.propTypes = {
  onInputHendler: PropTypes.func.isRequired,
};

export default Filter;
