import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.danger ? "red" : "blue")};
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ children, onClick, danger }) => {
  return (
    <StyledButton onClick={onClick} danger={danger}>
      {children}
    </StyledButton>
  );
};

export default Button;
