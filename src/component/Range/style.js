import styled from "styled-components";

export const ServicesStyled = styled.div`
    background-color: #071D31;

 .container {
    max-width: 1200px;
    margin: auto;
  }
  .Image-Section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

  }
  .header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  gap: 12px;
  padding-left: 20px;
  }
  .title{
    font-size: 27px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 400px;

  }
  .Mobile-Logo{
    width: 545px;
  }


  /* Responsive layout */
  @media (max-width: 950px) {
    .Mobile-Logo{
    width: 400px;
  }
  }
  @media (max-width: 750px) {
    .Mobile-Logo{
    width: 300px;
  }
  .header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  gap: 20px;
  padding-left: 20px;
  }
  .title{
    font-size: 25px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 573px;

  }

}
  @media (max-width: 640px) {
    .header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  gap: 20px;
  padding-left: 20px;
  }
  .title{
    width: 367px;
    font-size: 25px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 369px;

  }
    .Mobile-Logo{
    width: 300px;
  }


  

 .Image-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column-reverse;
}
  }
  @media (max-width: 504px) {
    .Mobile-Logo{
    width: 300px;
  }
  
 .Image-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column-reverse;
}
.header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  gap: 20px;
  padding-left: 20px;
  }
  .title{
    width: 367px;
    font-size: 25px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 369px;

  }
  }
  @media (max-width: 406px) {
    .Mobile-Logo{
    width: 300px;
  }
  .header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  gap: 20px;
  padding-left: 20px;
  }
  .title{
    width: 311px;
    font-size: 25px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 304px;

  }
 .Image-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column-reverse;
}
  }
  @media (max-width: 377px) {
    .Mobile-Logo{
    width: 270px;
  }

 .Image-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column-reverse;
}
  }
  @media (max-width: 360px) {
    .header-Main-Section{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  gap: 20px;
  padding-left: 20px;
  }
  .title{
    width: 284px;
    font-size: 21px;
    color: white;
    font-weight: 500;
  }
  .Text{
    
    font-size: 16px;
    color: white;
    font-weight: 400;
    width: 264px;

  }
 
  }
`;