import styled from "styled-components";


export const CommuntiyStyled = styled.div`
width: 100%;

display: flex;
.Community-Main-Div{
    display: flex;
 flex-wrap: wrap;
    flex-direction: column;
margin-top: 100px;
padding-left: 30px;
}
.Title{
    font-size: 32px;
    font-weight: 600;
    color: white;
}
.Text{
    font-size: 16px;
    font-weight: 400;
    color: #A7ACAF;
}
.Community-Text-Section{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.Names-Form{
    display: flex;
   gap: 10px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    
}
.Form-Box-Text-Bottom{
    display: flex;
    align-items: center;
    gap: 12px;
}
.NameBox {
    width: 270px;
    height: 37px;
    background: transparent;
    font-size: 17px;
    border: none;
    padding-left: 10px;
    outline: none;
    color: white;
  }
  .FormBox {
    border: 1px white solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 290px;
  }
  .Button{
    width: 140px;
    height: 42px;
    background-color: white;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    color: black;
  }
  .Time-Section{
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .Time-Side{
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

  }
  .Time{
    font-size: 28px;
    font-weight: 600;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 70px;
    height: 70px;
    border-radius: 8px;
  }
  .Days{
    font-size: 20px;
    font-weight: 600;
    color: white;
  } 
   @media (max-width:630px){

.Text {
font-size: 16px;
font-weight: 400;
color: #A7ACAF;
width: 351px;
}


}
  @media (max-width:510px){

    .Form-Box-Text-Bottom{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
}
.Button{
    width: 300px;
    height: 42px;
    background-color: white;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    color: black;
  }
  .Text {
    font-size: 16px;
    font-weight: 400;
    color: #A7ACAF;
    /* text-align: center; */
    width: 315px;
}
 .Community-Main-Div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-top: 100px;
    padding-left: 86px;

}
}
@media (max-width:470px){
 
  .FormBox {
    border: 1px white solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 243px;
}
.Form-Box-Text-Bottom{
display: flex;
align-items: center;
flex-direction: column;
gap: 12px;
}
.Button {
        width: 252px;
        height: 42px;
        background-color: white;
        border-radius: 4px;
        border: none;
        font-weight: 600;
        font-size: 15px;
        color: black;
    }
     .Time-Section {
    display: flex;
    align-items: center;
    gap: 15px;
}
.Text {
font-size: 16px;
font-weight: 400;
color: #A7ACAF;
/* text-align: center; */
width: 315px;
}
.Community-Main-Div {
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: 100px;
justify-content: center;
padding-left: 40px;

}
}
@media (max-width:400px){
  justify-content: center;
    .FormBox {
    border: 1px white solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 243px;
}
.Form-Box-Text-Bottom{
display: flex;
align-items: center;
flex-direction: column;
gap: 12px;
}
.Button{
width: 252px;
height: 42px;
background-color: white;
border-radius: 4px;
border: none;
font-weight: 600;
font-size: 15px;
color: black;
}
.Text {
font-size: 16px;
font-weight: 400;
color: #A7ACAF;
/* text-align: center; */
width: 315px;
}
.Community-Main-Div {
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: 100px;
justify-content: center;

}
}
@media (max-width:356px){
  justify-content: center;
     .Button {
        width: 249px;
        height: 42px;
        background-color: white;
        border-radius: 4px;
        border: none;
        font-weight: 600;
        font-size: 15px;
        color: black;
    }
  .FormBox {
    border: 1px white solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    width: 243px;
}
.Form-Box-Text-Bottom{
display: flex;
align-items: center;
flex-direction: column;
gap: 12px;
}

.Text {
font-size: 16px;
font-weight: 400;
color: #A7ACAF;
 text-align: center; 
width: 292px;
}
.Community-Main-Div {
display: flex;
flex-wrap: wrap;
flex-direction: column;
margin-top: 100px;
justify-content: center;


}
}
`;