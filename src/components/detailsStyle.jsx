import styled from "styled-components";

const DetailsStyle = styled.div`
  background: rgb(255, 255, 255);
  width: 400px;
  height: 95vh;
  position: fixed;
  top: 10px;
  display: none;
  flex-direction:column;
  justify-content:start;
  border-radius:15px 15px 0 0;

  & img{
    top:0;
    border-radius:15px 15px 0 0;
  }
`;

export default DetailsStyle;
