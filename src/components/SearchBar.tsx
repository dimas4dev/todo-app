import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addTodoWithSearchTerm, setSearchTerm } from '../redux/todosSlice';

import { IconSearch } from './core/Icons/IconSearch';
import IconEnter from '../assets/enter.webp';


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
  text-overflow: ellipsis;

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
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;

  &:hover {
    background-color: #2980b9;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setSearchTerm(value));
  };

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;
    dispatch(addTodoWithSearchTerm());
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleAddTodo();
    }
  };

  return (
    <SearchBarContainer>
      <IconSearch />
      <SearchInput
        type="text"
        placeholder="Busca tu tarea o agrégala..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <AddButton onClick={handleAddTodo}><img src={IconEnter} alt="Icon Enter" /></AddButton>
    </SearchBarContainer>
  );
};
