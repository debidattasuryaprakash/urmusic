import styled from "styled-components";


export const CardsStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
width: 100%;
padding-top: 30px;
background-color: #071D31;
flex-wrap: wrap;
.Royal-Cards-Section{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A0AAC4;
    flex-wrap: wrap;
    margin-top: 10px;
    border-radius: 12px;
    margin-bottom: 20px;
    
}
.Card-Text-Section{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
color: white;
    font-size: 14px;
    width: 250px;
   
}
.Royal-Card{
    display: flex;
 flex-direction: column;
 gap: 22px;
 width: 330px;
 height: 340px;

 align-items: center;
 justify-content: center;
}
.Cards-Logo{
   color: white;
   width: 60px;
   height: 63px;
}
.Image-Section{
    position: relative;
}
.Card-Title{
    font-size: 18px;
    font-weight: 500;
    color: white;
    flex-wrap: wrap;
    white-space: pre;
}
.Number {
    position: absolute;
    right: 4px;
    color: white;
    top: -59px;
    right: 130px;
    width: 33px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    height: 31px;
    align-items: center;
}


@media (max-width:700px) {
    .Card-Text-Section{
display: flex;
justify-content: center;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
gap: 10px;
color: white;
    font-size: 14px;
    width: 250px;
   
}
    .Royal-Card{
    display: flex;
 flex-direction: column;
 gap: 10px;
 width: 300px;
 height: 340px;

 align-items: center;
 justify-content: center;
}
.Cards-Logo{
    width: 280px;
}
}
`;