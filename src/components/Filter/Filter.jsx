import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/features/filterSlice';
import { LabelStyled, InputStyled } from '../ContactForm/ContactForm.Styled';
import { SpanStyled } from './Filter.styled';

const Filter = () => {
  const dispath = useDispatch();

  const filterHendler = e => {
    dispath(setFilter(e.currentTarget.value));
  };

  return (
    <LabelStyled>
      <SpanStyled>Find contacts by name:</SpanStyled>
      <InputStyled name="filter" onChange={filterHendler}></InputStyled>
    </LabelStyled>
  );
};

export default Filter;
