import styled from 'styled-components';
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

interface SearchBarProps {
    onAdd: () => void;
}

export const SearchBar = ({ onAdd }: SearchBarProps) => {
    return (
        <SearchBarContainer>
            <IconSearch />
            <SearchInput type="text" placeholder="Busca tu tarea o agregala..." />
            <AddButton onClick={onAdd}>+</AddButton>
        </SearchBarContainer>
    );
};
