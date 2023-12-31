import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import background from "../../assets/images/first_bg.png";
import logo from "../../assets/icons/steam.png";
import { GlobalWrapper, Container } from "../globalStyled/GlobalStyled";

const Wrapper = styled(GlobalWrapper)`
  padding: 100px 0px 293px 0px;
  background-image: url(${background});
`;

const Title = styled.h1`
  margin: 0;
  width: 714px;
  color: #fff;
  font-size: 4rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const Subtitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #a7a7a7;
  font-family: "Inter";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

export const Hr = styled.div`
  margin-top: 84px;
  width: 420px;
  height: 5px;
  background: #ff6046;
`;

export const ButtonPlaySubtitle = styled(Subtitle)`
  margin-top: 5px;
  font-size: 1rem;
  text-align: start;
  transition: 0.5 all;
  text-align: left;
`;

export const ButtonPlay = styled(Link)`
  margin-top: 84px;
  display: flex;
  justify-content: space-around;
  padding: 0px 20px 0px 20px;
  align-items: center;
  width: 19vw;
  height: 11vh;
  background: none;
  border-radius: 10px;
  border: 2px solid #636363;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
  }

  text-decoration: none;
`;

export const Steam = styled.img`
  display: inline;
  width: 3.5vw;
`;

export const ButtonPlayLeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonPlayTitle = styled.div`
  width: 216px;
  color: #fff;
  text-align: center;
  text-shadow: 3px 0px 0.6px #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-align: left;
`;

const FirstSection = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <motion.div
            initial={{ x: "-5%", opacity: "0%" }}
            animate={{ x: "0%", opacity: "100%" }}
            transition={{ duration: 1.5 }}
          >
            <Title>Welcome to the Dota heroes portal</Title>
            <Subtitle>-ZAHARKHACH</Subtitle>
          </motion.div>
          <Hr
            as={motion.div}
            initial={{ opacity: "0%" }}
            animate={{ opacity: "100%" }}
            transition={{ duration: 3 }}
          />

          <motion.div
            initial={{ x: "-5%", opacity: "0%" }}
            animate={{ x: "0%", opacity: "100%" }}
            transition={{ duration: 1.5 }}
          >
            <ButtonPlay
              to="https://store.steampowered.com/app/570/Dota_2/"
              target="_blank"
            >
              <Steam alt="steam" src={logo} />
              <ButtonPlayLeftSide>
                <ButtonPlayTitle>play for free</ButtonPlayTitle>
                <ButtonPlaySubtitle>download on steam</ButtonPlaySubtitle>
              </ButtonPlayLeftSide>
            </ButtonPlay>
          </motion.div>
        </Container>
      </Wrapper>
    </>
  );
};

export default FirstSection;
