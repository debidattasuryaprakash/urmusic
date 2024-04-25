import styled from "styled-components";


export const CardsStyled = styled.div`
width: 100%;
margin-top: 60px;
padding-top: 35px;
background-color: #071D31;
.Card-Title-Container{

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:wrap;
}
.Card-Title-Section{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
}
.Text-1{
    color: white;
    font-size: 28px;
    font-weight: 600;
}
.Text{
    color: white;
    font-size: 14px;
    font-weight: 600;
    width:300px
}
.Dot-Card {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    position: relative;
    align-items: center;
    left:240px;
    top: -63px;
    display: flex;
    justify-content: center;
}
.Title-Container{
    display: flex;
    flex-direction: column;
    gap:10px
}

.Title-Text{
    font-size: 14px ;
    color: #BFC8CF;
}
.Title{
    font-size: 14;
    font-weight: 600;
    color: white;
}
.Title-Section {
    display: flex;
    justify-content: center;
    border-radius: 13px;
    align-items: center;
    width: 420px;
    height: 117px;
    background: #294A69;
    border: none;
}
.Dot-Logo{
    width: 20px;
}
@media (max-width:1240px){

.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
  
        align-items: center;
        left:170px;
    top: -63px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width:1086px){

.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
  
        align-items: center;
        left:120px;
    top: -63px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width:962px){

.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
  
        align-items: center;
        left:90px;
    top: -63px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width:913px){

.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
  
        align-items: center;
        left:70px;
    top: -63px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width:840px){

.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
  
        align-items: center;
        left:50px;
    top: -63px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width:790px){
    .Card-Title-Section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
    .Card-Title-Container {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
}
.Title-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
        left: -177px;
        align-items: center;
        top: 14px;
        display: flex;
        justify-content: center;
    }
}
@media (max-width: 460px){
    .Card-Title-Section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
    .Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
        left: -154px;
        align-items: center;
        top: 14px;
        display: flex;
        justify-content: center;
    }
    .Title-Section {
    display: flex;
    justify-content: center;
    border-radius: 13px;
    align-items: center;
    width: 350px;
    height: 117px;
    background: #294A69;
    border: none;
}
.Title-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.Title-Text{
    font-size: 14px ;
    color: #BFC8CF;
    text-align: center;
}
.Title{
    font-size: 14;
    font-weight: 600;
    
    color: white;
}
}
@media (max-width: 380px){
    .Card-Title-Section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
    .Dot-Card {
        width: 40px;
        height: 40px;
        background: white;
        border-radius: 50%;
        position: relative;
        left: -132px;
        align-items: center;
        top: 14px;
        display: flex;
        justify-content: center;
    }
    .Title-Container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
    .Title-Section {
    display: flex;
    justify-content: center;
    border-radius: 13px;
    align-items: center;
    width: 300px;
    height: 135px;
    background: #294A69;
    border: none;
}
.Title-Text{
    font-size: 14px ;
    color: #BFC8CF;
    text-align: center;
    width: 250px;
}
.Title{
    font-size: 14;
    font-weight: 600;
    
    color: white;
}

}
`;