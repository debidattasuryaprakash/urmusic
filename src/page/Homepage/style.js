import styled from "styled-components";


export const HomeStyled = styled.div`
display: flex;

flex-direction: column;
.Donate-Button{
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  top: 640px;
  left: 1400px;
  z-index: 999;
}
.Icon{
  color: blue;
  width: 40px;
  height: 40px;
}
 .Header-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 123px;
    padding-left: 30px;
}
 .Header-button {
    width: 160px;
    height: 36px;
    border: none;
    background-color: white;
    color: black;
    border-radius: 7px;
    font-size: 15px;
    font-weight: 600;
    margin-top: 34px;
}
.Header-Title {
  font-size: 60px;
  font-weight: 500;
  background: -webkit-linear-gradient(top, #5279A7, #A1B6CF, #E7EDF3);
  background: linear-gradient(to bottom, #5279A7, #A1B6CF, #E7EDF3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}

.Header-Text{
color: white;
font-size: 18px;
margin-top: 15px;

width: 440px;
}

@media (max-width: 1240px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 1100px;
}

}
@media (max-width: 1170px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 1000px;
}

}
@media (max-width: 1070px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 900px;
}

}
@media (max-width: 970px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 800px;
}

}
@media (max-width: 870px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 700px;
}

}
@media (max-width: 770px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 600px;
}

}
@media (max-width: 665px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 500px;
}

}
@media (max-width: 570px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 480px;
}

}
@media (max-width: 550px) {
    .Header-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0px;
    text-align: center;
    margin-top: 50px;
    align-items: center;
}
.Donate-Button{
  position: fixed;
  top: 640px;
  left: 400px;
}

.Header-Title {
  font-size: 40px;
  font-weight: 500;
  background: -webkit-linear-gradient(top, #5279A7, #A1B6CF, #E7EDF3);
  background: linear-gradient(to bottom, #5279A7, #A1B6CF, #E7EDF3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
}
.Header-Text{
color: white;
font-size: 16px;
margin-top: 15px;

width: 309px;
}
}
@media (max-width: 460px) {
  .Donate-Button{
  position: fixed;
  top: 640px;
  left: 340px;
}
}
@media (max-width: 405px) {
  .Donate-Button{
  position: fixed;
  top: 500px;
  left: 310px;
}
}
@media (max-width: 370px) {
  .Donate-Button{
  position: fixed;
  top: 500px;
  left: 280px;
}
}
@media (max-width: 350px) {
  .Donate-Button{
  position: fixed;
  top: 500px;
  left: 240px;
}
}
`;