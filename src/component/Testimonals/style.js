import styled from "styled-components";

export const TestiSide = styled.div`
background-color: #071D31;

  .Test-Menu-Section {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Test-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Test-Title-Section {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
     width: 92%;
    gap: 10px;
    margin-bottom: 31px;
    margin-top: 94px;
}
 .Dot-Card {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    position: relative;
    align-items: center;
    right: 173px;
    top: 17px;
    display: flex;
    justify-content: center;
}
.Dot-Logo{
    width: 27px;
}

.Test-Title{
  color: white;
  font-size: 35px;
}
.Test-Text{
  color: #001D64;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 20px;
}
  .Test-Button {
    display: flex;
    justify-content: center;
    gap: 10px;

    .arrows {
      height: 27px;
      width: 25px;
      border: 1px #4eb4ff solid;
      border-radius: 50%;
      padding: 5px;
      color: #4eb4ff;
    }
  }
  .Star-Section {
    display: flex;
    gap: 1px;
    color: #ffa500;
  }
  .Box-Container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }
.Box-Image1{
  width: 123px;
  height: 188px;
}
  .Box-Section-menu {
    display: flex;
    flex-direction: column-reverse;
    width: 351px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 223px;
   
  }
  .Box-Section-menu:hover {

 color: white;
 .Box-Text {
      
      color: white;
     
    }
    
  }
  .Box-Text-Section {
    width: 100%;
    display: flex;
    gap: 9px;
    color: white;
    align-items: center;
    
    .Box-Text {
      font-size: 15px;
      color: white;
      width: 336px;
    }
  }

  .Box-Image {
    display: flex;
    gap: 10px;
    .Box-Image1 {
      width: 63px;
    }
    .Box-Person {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .Person-Name {
        font-size: 17px;
        color: white;
        font-weight: 500;
      }
      .Cbo {
        font-size: 17px;
        color: #64748b;
      }
    }
  }
  @media (max-width:1240px) {
    .Box-Section-menu {
        display: flex;
        flex-direction: column-reverse;
        width: 341px;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #808EB1;
        height: 270px;
    }
  .Box-Text-Section {
  
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 280px;
    }
  }
  .Dot-Card {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    position: relative;
    align-items: center;
    right: 173px;
    top: 17px;
    display: flex;
    justify-content: center;
}
.Dot-Logo{
    width: 27px;
}
  
  }
  @media (max-width:970px) {
     .Box-Section-menu {
        display: flex;
        flex-direction: column-reverse;
        width: 355px;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #808EB1;
        height: 243px;
    }

  .Box-Text-Section {
   
    
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 326px;
    }
  }
  
  
  }
  @media (max-width:850px) {
     .Box-Section-menu {
        display: flex;
        flex-direction: column-reverse;
        width: 320px;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #808EB1;
        height: 244px;
    }
    .Test-Title-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* width: 92%; */
    gap: 10px;
    margin-bottom: 31px;
    margin-top: 94px;
}
  .Box-Text-Section {
   
    
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 326px;
    }
  }
  
  
  }
  @media (max-width:765px) {
     .Box-Section-menu {
        display: flex;
        flex-direction: column-reverse;
        width: 412px;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #808EB1;
        height: 235px;
    }
.Test-Title-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* width: 92%; */
    gap: 10px;
    margin-bottom: 31px;
    margin-top: 94px;
}
  .Box-Text-Section {
   
    
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 326px;
    }
  }
  
  
  }
  @media (max-width:490px) {
     .Box-Section-menu {
    display: flex;
    flex-direction: column-reverse;
    width: 344px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;
    height: 270px;
}
  .Box-Text-Section {
    width: 318px;
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 285px;
    }
  }
  
  
  }
  @media (max-width:400px) {
     .Box-Section-menu {
    display: flex;
    flex-direction: column-reverse;
    width: 310px;
  height: 300px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 12px;
    padding: 18px;
    margin-bottom: 20px;
    border: 1px solid #808EB1;

}
  .Box-Text-Section {
    width: 300px;
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 344px;
    }
  }
  
  
  }
  @media (max-width:350px) {
    .Box-Section-menu {
        display: flex;
        flex-direction: column-reverse;
        width: 262px;
        height: 339px;
        justify-content: center;
        align-items: flex-start;
        border-radius: 12px;
        padding: 18px;
        margin-bottom: 20px;
        border: 1px solid #808EB1;
    }
  .Box-Text-Section {
    width: 276px;
    .Box-Text {
      font-size: 17px;
      color: white;
      width: 276px;
    }
  }
  
  
  }
`;
