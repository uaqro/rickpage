import styled from "styled-components";

// GENERALS

export const MainPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(rick-bg2.png);
  background-size: cover;
`;

export const DisplayWrapper = styled.div``;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-content: center;

  padding-left: 40vw;
  input {
    border: none;
    background: white;
    border-radius: 10px;
    padding: 1vh 2vw;
    margin-bottom: 2vh;
    &:focus {
      background-color: white;
    }
  }
  button {
    margin-top: 3vh;
    border-radius: 10px;
  }
`;
export const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(bg-about.jpg);
  background-size: cover;
  align-items: center;
  h1 {
    align-self: center;
    text-align: center;

    padding-top: 28vh;
    color: navy;
    text-decoration: underline;
    padding-bottom: 5vh;
  }
`;

export const Feed = styled.div`
  width: 100vw;
  padding-top: 10vh;
  padding-left: 18vw;
  background-image: url(wp1822801.jpg);
  background-size: cover;
  .title {
    width: 82vw;
    display: flex;
    color: #b6eefd;
    justify-content: flex-start;
  }
  .iterator {
    width: 82vw;
    padding-top: 3vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding-right: 0;
    div {
      margin-right: 2vw;
      margin-bottom: 2vh;
    }
  }
`;

export const Nav = styled.div`
  position: fixed;
  width: 15vw;
  height: 100vh;
  padding-left: 2vw;
  margin-top: 0;
  img {
    height: 150px;
    margin-bottom: 10vh;
  }

  div {
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    a {
      margin-bottom: 3vh;
      color: white;
      text-decoration: none;
    }
  }
`;

//CHAR DETAIL COMPONENT

export const CharDetail = styled.div`
  background-image: url(wp1822801.jpg);
  background-size: cover;
  width: 100%;
  height: 100vh;
  color: #b6eefd;
  display: flex;
  flex-direction: row;
  padding-top: 25vh;
  .left-side {
    height: 25vh;
    margin-left: 25vw;
  }
  .right-side {
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    padding-left: 2vw;
    p:first-of-type {
      font-weight: 700;
      font-size: 1.5em;
    }
    p:last-of-type {
      font-weight: 700;
      font-size: 1.2em;
      margin: 2vh 0;
    }
  }
  .episodes {
    color: #b6eefd;
    display: flex;
    width: 70%;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      display: flex;
      text-decoration: none;
      margin: 1% 1% 1% 1%;
      background-color: #b6eefd;
      color: #262c3a;
      padding: 10px 10px;
      box-sizing: border-box;
    }
  }
`;

// EPISODE DETAIL COMPONENT

export const EpDetail = styled.div`
  background-image: url(wp1822801.jpg);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  color: #b6eefd;
  display: flex;
  flex-direction: row;
  .content {
    padding-top: 15vh;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 17vw;
    p:first-of-type {
      font-weight: 700;
      font-size: 2em;
    }
    p:nth-of-type(2) {
      font-weight: 700;
      padding-bottom: 4vh;
    }
    p:last-of-type {
      font-weight: 700;
      font-size: 1.2em;
    }
    .characters {
      padding-top: 4vh;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
export const CharMiniCard = styled.div`
  display: flex;
  flex-direction: column;
  color: #262c3a;
  background-color: rgba(6, 7, 21, 0.6);
  align-items: center;
  margin-right: 2vw;
  margin-top: 1vh;

  img {
    width: 80px;
  }
  a {
    text-decoration: none;
    color: #b6eefd;
    background-color: #262c3a;
    border: 1px solid #262c3a;
    padding: 10px 10px;
    border-radius: 20px;
  }
`;

// CARDS IN FEEDS

export const CardStyle = styled.div`
  width: 200px;
  height: 200px;
  justify-content: space-around;
  align-items: center;
  background-image: url(portal-rm.png);
  background-size: 100% 100%;
  color: #262C3A;
  .content-box {
    width: 100%;
    display:flex;
    flex-direction:column;
    align-content: center;
    p:first-of-type {
      padding-top: 9vh;
      font-size: 1.1em;
      font-weight: 700;
    }
    p:nth-child(2)  {
        font-size: 0.7em;
        height: 50px;
        align-self:center;
        font-weight: 600;
        width: 50%;
      }
      a {
        text-decoration: none;
        background-color: #262C3A;
        color:#B6EEFD;
        border: 1px solid grey;
        border-radius: 12px;
        width: 40%;
        align-self:center;
        font-weight: 500;
        background-color: #262
        &:hover  {
          color: #262C3A;
          background-color: #B6EEFD;
        }
      }
    }
  }
`;

export const EpisodeStyleCard = styled.div`
width: 200px;
height: 200px;
justify-content: space-around;
align-items: center;
background-image: url(portal-rm.png);
background-size: 100% 100%;
color: #262C3A;
.content-box {
  width: 100%;
  display:flex;
  flex-direction:column;
  align-content: center;
  p:first-of-type {
    padding-top: 9vh;
    font-size: 1.1em;
    font-weight: 700;
  }
  p:nth-child(2)  {
      font-size: 0.7em;
      height: 50px;
      align-self:center;
      font-weight: 600;
      width: 50%;
    }
    a {
      text-decoration: none;
      background-color: #262C3A;
      color:#B6EEFD;
      border: 1px solid grey;
      border-radius: 12px;
      width: 40%;
      align-self:center;
      font-weight: 500;
      background-color: #262
      &:hover  {
        color: #262C3A;
        background-color: #B6EEFD;
      }
    }
  }
}
`;
