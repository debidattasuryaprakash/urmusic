import styled from "styled-components";

export const FooterSide = styled.div`
  background-color: #000000;
 
  height: 490px;


  .Footer-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-wrap: wrap;
    .Footer-Container {
      display: flex;
      justify-content: center;
     
      margin-top: 70px;
      gap: 107px;
      padding-bottom: 90px;
      border-bottom: 2px #92989b solid;
    }
    .Copy-Right-Section {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 30px;
      width: 70.5%;
      .Copy-Right-Text {
        font-size: 17px;
        color: #808080;
      }
    }
    .Public-Title1{
      font-size: 20px;
      font-weight: 500;
      color: white;
    }
    .ContactLinks {
      display: flex;
      flex-direction: column;
      padding-left: 10px;

      .Contact-Link-Text {
        font-size: 17px;
width: 430px;
        color: white;
      }
      .Social-Logo-Section {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .Social-Logo {
          width: 40px;
          color: white;
          height: 20px;
        }
      }
    }
    .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: white;
        }
      }
    }
    .Contact-Side {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
align-items: flex-start;
gap: 10px;
      .Contact-Text-Section {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .Contact-Title {
        font-size: 20px;
          color: white;
         
          font-weight: 500;
      }
      .Contact-Text {
        font-size: 16px;
        color: white;
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        
        .Number {
          font-size: 15px;
          color: white;
white-space: nowrap;
          .Number-logo {
            width: 37px;
            height: 17px;
            color: white;
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: white;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: white;
          }
        }
        .Number-logo-1{
          width: 30px;
            height: 17px;
            color: white;
        }
      }
    }
  }


  @media all and (max-width: 1100px) {
    height: 516px;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;

      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
        padding-bottom: 90px;
        border-bottom: 2px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        margin-top: 30px;
        width: 83.5%;
        .Copy-Right-Text {
          font-size: 17px;
       
        }
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 13px;
        
white-space: nowrap;
          .Number-logo {
            width: 30px;
            height: 17px;
         
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;

          .Email-logo {
            width: 30px;
            height: 17px;
      
          }
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;

        .Contact-Link-Text {
          font-size: 16px;

          color: white;
        }
        .Social-Logo-Section {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .Social-Logo {
            width: 40px;
            color: white;
            height: 20px;
          }
        }
      }
      .ProductSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .PublicMainSection {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        align-items: flex-start;
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
     
    }
 
  }
  @media all and (max-width: 960px) {
    height: 620px;
   
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;

      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 40px;
        gap: 10px;
        padding-bottom: 90px;
        border-bottom: 2px #92989b solid;
      }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
        width: 83.5%;
        .Copy-Right-Text {
          font-size: 17px;
          color: #c5c8c9;
        }
      }
      .Number-Section {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .Number {
          font-size: 13px;
          color: white;
white-space: nowrap;
          .Number-logo {
            width: 30px;
            height: 17px;
            color: white;
          }
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: white;
          .Email-logo {
            width: 30px;
            height: 17px;
            color: white;
          }
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;

        .Contact-Link-Text {
          font-size: 16px;
width: 330px;
color: white;
        }
        .Social-Logo-Section {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          .Social-Logo {
            width: 40px;
            color: white;
            height: 20px;
          }
        }
      }
      .ProductSection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .PublicMainSection {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        align-items: flex-start;
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
      }
     
    }
 
  }
  @media all and (max-width: 674px) {
  
    height: 915px ;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: white;
        }
      }
    }
    .Number-logo-1 {
    width: 30px;
    height: 17px;
    color: white;
    padding-left: 12px;
}
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 330px;
display: flex;
text-align: center;
color: white;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: white;
          margin-bottom: 7px;
          padding-right: 10px;
        }
        .Contact-Text {
          font-size: 17px;
          color: white;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: white;
white-space: nowrap;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: white;
        
        }
  }
  @media all and (max-width: 540px) {

    height: 907px ;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: white;
        }
      }
    }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 330px;
display: flex;
text-align: center;
color: white;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: white;
          margin-bottom: 7px;
          padding-right: 48px;
        }
        .Contact-Text {
          font-size: 17px;
          color: white;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: white;
white-space: nowrap;
padding-right: 29px;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: white;
        
        }
  }
  @media all and (max-width: 380px) {
  
    height: 1000px;
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center !important;
      flex-wrap: wrap;
      width: 100%;
      height: 600px;
      .Footer-Container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        gap: 30px;

        border-bottom: 0px #92989b solid;
      }
      .ProductSection {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .PublicMainSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .Public-Title {
          font-size: 20px;
          color: white;
         
          font-weight: 500;
        }
        .Public-Text {
          font-size: 17px;
          color: white;
        }
      }
    }
      .Copy-Right-Section {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: -52px;
        width: 80%;
        text-align: center;
        border-top: 1px solid #92989b;

        .Copy-Right-Text {
          font-size: 17px;
          padding-top: 12px;
          width: 277px;
          color: #c5c8c9;
        }
      }
      .ContactLinks {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        .Contact-Link-Text {
          font-size: 17px;
width: 277px;
display: flex;
text-align: center;
color: white;
        }
      }
      .Contact-Side {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
   
        width: 245px;
        .Contact-Title {
          font-size: 19px;
          color: white;
          margin-bottom: 7px;
          padding-right: 25px;
        }
        .Contact-Text {
          font-size: 17px;
          color: white;
          width: 293px;
        }
        .Contact-Text-Section {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: flex-start;
          width: 270px;
          gap: 5px;
        }
      }
    }
    .Number {
          font-size: 13px;
          color: white;
white-space: nowrap;
  
        }
        .Email {
          font-size: 13px;
          display: flex;
          align-items: center;
          color: white;
        
        }
  }
 
  
`;
