import styled from 'styled-components';

export const Container = styled.button`
  font-size: 20px;
  border: none;
  border-left: 1px solid #f9f9f9;
  border-right: 1px solid #f9f9f9;
  background: #ECE9E6;  /* fallback for old browsers */
  background: ${props => props.bg || 'linear-gradient(to right, #FFFFFF, #ECE9E6)'}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  cursor: pointer;
  transition: 1s;
  outline: none;
  color: ${props => props.color ||'#494949' };

  display: flex;
  justify-content: center;
  align-items: center;

  &.ac{
    grid-column: span 3;
  }
  &.zero{
    grid-column: span 2;
  }

  &:hover, &:active{
    background: ${props => props.bgHover || 'linear-gradient(to right, #F9f9f9, #d8d8d8)'};
  }
`;