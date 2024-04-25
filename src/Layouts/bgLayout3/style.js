import styled from "styled-components";
import bgImage from "../../assets/image/bg3.png";

export const WelStyle = styled.div`
  height: 100%;
  width: 100%;
  .Well-Menu-Section {
    background: url(${bgImage});
    background-size: cover;
    background-position: center;
    display: flex;
justify-content:center;
align-items: center;  
border-radius: 12px;
    flex-direction: column;
    width: 99%;
    height: 338px;
  }


  
`;