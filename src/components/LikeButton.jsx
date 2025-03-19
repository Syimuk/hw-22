import styled from "styled-components";

const LikeButtonStyled = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.liked ? "red" : "gray")};
`;

const LikeButton = ({ liked, onClick }) => {
  return (
    <LikeButtonStyled liked={liked} onClick={onClick}>
      {liked ? "❤️" : "🤍"}
    </LikeButtonStyled>
  );
};

export default LikeButton;
