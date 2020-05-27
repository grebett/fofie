import Head from 'next/head'
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import lorem from 'lorem-ipsum-french';
import { useState } from 'react';

const globalStyles = css`
  html {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0 12.5%;
    height: 100vh;
    font-family: Avenir Next;
  }
`;

const Filigrane = styled.h1`
  position: fixed;
  top: calc(50vh - 100px);
  padding: 0;
  margin: 0;
  text-align: center;
  width: 75%;
  text-decoration: underline;
  font-size: 200px;
  color: white;
  text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
`;

const About = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  max-height: calc(100vh - 200px);
  width: calc(100vw - 22%);
  margin: 100px 11%;
  padding: 40px 80px 40px 40px;
  background: white;
  border: 2px solid black;
  overflow: scroll;

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .text {
     flex: 2;
     padding-right: 30px;
    }

    .image {
      flex: 1;
    }
  }

  button {
    position: absolute;
    top: 20px;
    right: 40px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 20px;
  }
`;

const Header = styled.header`
  box-sizing: border-box;
  background-color: white;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 75%;
  height: 100px;
  top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  a {
    text-decoration: none;
    color: inherit;
    user-select: none;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  box-sizing: border-box;
  background-color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100px;
  bottom: 0px;
  text-align: center;
`;

const Main = styled.main``;

const SlideMultiple = ({ pictures, template, legend }) => {
  const templates = {
    singlePicture: {
      columns: '1fr',
      rows: '1fr',
    },
    twoPictures: {
      columns: '1fr 1fr',
      rows: '1fr',
    },
    fourPictures: {
      columns: '1fr 1fr',
      rows: '1fr 1fr',
    },
    eightPictures: {
      columns: '1fr 1fr 1fr 1fr',
      rows: '1fr 1fr',
    },
  };

  const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 2px solid white;
    margin: 0;
    padding: 100px 0;
  `;

  const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-rows: ${props => templates[props.template].rows};
    grid-template-columns: ${props => templates[props.template].columns};
  `;

  const Legend = styled.p`
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 20px 30px;
    margin: 0;
    color: black;
  `;

  return (
    <Container>
      <Grid template={template}>
        {pictures && pictures.map((picture, i) => {
          return <div key={`pic-${i}`} className={`picture pic-${i}`}>
            <img width="100%" src={picture} />
          </div>
        })}
      </Grid>
      <Legend>
        {legend}
      </Legend>
    </Container>
  );
};

export default function Home() {
  const [shouldShowAboutPopin, toggleAboutPopin] = useState(true);

  return (
    <div className="container">
      <Global styles={globalStyles}></Global>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About show={shouldShowAboutPopin}>
        <button onClick={() => toggleAboutPopin(false)}>X</button>
        <main>
          <div className="text">
            <h1>Sophie Harand</h1>
            <p>{lorem(2)}</p>
            <p>{lorem(1)}</p>
          </div>
          <div className="image">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQGBMpzUCj_YrA/profile-displayphoto-shrink_800_800/0?e=1596067200&v=beta&t=iwtMyT9qDpL_1bGGYvXwm8kHBhtmvGpkg4FzmzcxnaE" />
          </div>
        </main>
      </About>
      <Filigrane className="title">
        SH
      </Filigrane>
      <Header>
        <a className="about" onClick={() => toggleAboutPopin(true)}>ABOUT</a>
        <div className="contact">
          <a target="_blank" href="mailto:sophieharand@gmail.com">CONTACT</a>
        </div>
        <div className="instagram">
          <a target="_blank" href="https://www.instagram.com/monsieurpoulpe/">
            <img src="/instagram.png" width="30" height="30" />
          </a>
        </div>
      </Header>
      <Main>
        <SlideMultiple
          legend="Sophie Harand est un designer de talent. Haha. Ça rime. LOL."
          template="fourPictures"
          pictures={[
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
          ]}></SlideMultiple>
        <SlideMultiple
          legend={lorem(1)}
          template="twoPictures"
          pictures={[
            `https://placem.at/things?w=1024&h=1800&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1800&random=${Math.random()}`,
          ]}></SlideMultiple>
        <SlideMultiple
          legend={lorem(1)}
          template="singlePicture"
          pictures={[`https://placem.at/things?w=1024&h=768&random=${Math.random()}`]}>
        </SlideMultiple>
        <SlideMultiple
          legend={lorem(1)}
          template="eightPictures"
          pictures={[
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=1000&random=${Math.random()}`,
          ]}></SlideMultiple>
        <SlideMultiple
          legend={lorem(1)}
          template="twoPictures"
          pictures={[
            `https://placem.at/things?w=1024&h=3000&random=${Math.random()}`,
            `https://placem.at/things?w=1024&h=3000&random=${Math.random()}`,
          ]}></SlideMultiple>

        <SlideMultiple
          legend={lorem(1)}
          template="eightPictures"
          pictures={[
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
            `https://placem.at/things?w=200&h=200&random=${Math.random()}`,
          ]}></SlideMultiple>
      </Main>
      <Footer>Sophie Harand, 2020</Footer>
    </div>
  )
}
