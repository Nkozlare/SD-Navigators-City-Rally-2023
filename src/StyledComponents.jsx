import styled, { createGlobalStyle } from 'styled-components';


const Body = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
    color: #383838;
    background-image: url("https://images.unsplash.com/photo-1583274283821-4c3a9be97d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: absolute;
    background-attachment: fixed;
    margin: 0px;
    overflow-x: hidden;
    min-width: 20rem;
  }
`

const Components = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #008080df;
  color: #dddddd;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 600px) {
    max-width: 100vw;
  }
`

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s
`

const RegisterButton = styled.button`
  padding: 1rem;
  width: 10rem;
  border: 1px solid #690000;
  font-size: 1rem;
  color: #690000;
  border-radius: 2px;
  transition: 0.8s;
  &:hover {
    color: #dddddd;
    border: 1px solid #004d4d;
    background-color: #690000;
  }
`

const LeftButton = styled.button`
  width: 10%;
  font-size: 1.5rem;
  height: 60%;
  border: none;
  background-color: transparent;
  color: #690000;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border-radius: 10px;
    color: #8a0000;
  }
`
// right button for carousel
const RightButton = styled.button`
  width: 10%;
  height: 60%;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  color: #690000;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border-radius: 10px;
    color: #8a0000;
  }
  @media (max-width: 600px) {
      right:30%;
    }
`

const BackToTop = styled.div`
`

const ConnectionSection = styled.div`
  width: 100vw;
  color: #690000;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 0rem;
  align-items: center;
  justify-content: center;
  h2 {
    color: #004d4d;
    margin-bottom: 3rem;
    text-align: center;
    width: 90vw;
  }
`

const Wrapped = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

const ConnectionSquare = styled.div`
    width: 45rem;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      border: 1px solid #004d4d;
      height: auto;
      min-width: 15rem;
      width: 15rem;
      margin-right: 2rem;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 20rem;
      li {
        width: 25rem;
        list-style-type: none;
        max-width: 80vw;
        a {
          color: #690000;
        }
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
      border-bottom: 1px solid #004d4d;
      padding-top: 1rem;
      img {
        margin: 0rem;
      }
      ul {
        padding: 0rem;
        li {
          font-size: 1.2rem;
          a {
            overflow-wrap: break-word;
          };
          text-align: center;
        }
      }
    }
`

export {
  Body,
  Components,
  StyledSection,
  RegisterButton,
  RightButton,
  LeftButton,
  BackToTop,
  ConnectionSection,
  ConnectionSquare, 
  Wrapped
}