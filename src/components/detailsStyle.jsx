import styled from "styled-components";

const DetailsStyle = styled.div`
  background: rgb(255, 255, 255);
  width: 85vw;
  max-width: 400px;
  min-height: 85vh;
  position: fixed;
  top: 5vh;
  display: none;
  flex-direction: column;
  justify-content: start;
  border-radius: 15px 15px 0 0;

  & img {
    top: 0;
    border-radius: 15px 15px 0 0;
  }
`;

export default DetailsStyle;
