import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin: 5px 0;
`;

const Input = ({ value, onChange, placeholder }) => {
  return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;
