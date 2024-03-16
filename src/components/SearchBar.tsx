import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../redux/store';
import { addTodo } from '../redux/todosSlice';


import { IconSearch } from './core/Icons/IconSearch';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0.5rem;
  width: 100%;

  &::placeholder {
    color: #7f8c8d;
  }
`;

const AddButton = styled.button`
  background-color: #3498db;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  &:hover {
    background-color: #2980b9;
  }
`;

export const SearchBar = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    dispatch(addTodo(inputValue));
    setInputValue(''); 
  };


  return (
    <SearchBarContainer>
      <IconSearch />
      <SearchInput
        type="text"
        placeholder="Busca tu tarea o agrégala..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AddButton onClick={handleAddTodo}>+</AddButton>
    </SearchBarContainer>
  );
};
