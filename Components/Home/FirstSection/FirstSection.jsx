"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import bg from "@/Assets/Images/first-bg.png";
import Top from "./Components/Top";

const FirstSectionContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;
  a {
    text-decoration: none;
  }
`;

const BackgroundImage = styled(Image)`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  padding: 2rem 10rem;
  padding-top: 10vh;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem 5rem;
    padding-top: 15vh;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 16vh;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  backdrop-filter: blur(50px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 20rem);
  height: 100%;
  gap: 2rem;
  background: #e0d1fb50;
  padding: 2rem 0;
  border-radius: 50px;
  -webkit-border-radius: 50px;
  -moz-border-radius: 50px;
  -ms-border-radius: 50px;
  -o-border-radius: 50px;

  @media screen and (max-width: 1024px) {
    padding: 2rem 0;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    width: calc(100vw - 10rem);
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 2rem);
  }
`;

const Heading3 = styled.h3`
  font-size: 1.2rem;
  font-family: var(--font);
  color: var(--text-color);
  letter-spacing: 0.5px;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

const InputContainer = styled.div`
  position: relative;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 1rem 3rem;
  height: 4rem;
  border: 2px solid var(--text-color);
  border-top: none;
  border-bottom: none;
  font-size: 1rem;
  background: transparent;
  outline: none;
  box-shadow: 7px 7px 0px 0px var(--text-color);
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;

  &:focus {
    box-shadow: none;
    transition: all 0.5s;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 20px;
  transition: all 0.5s;
  z-index: -1;
  font-size: 0.8rem;
  font-family: var(--font);
  color: var(--text-grey);

  ${Input}:focus ~ & {
    top: -10px;
    left: 10px;
    color: var(--text-grey);
  }
`;

const TopLine = styled.div`
  position: absolute;
  content: "";
  background-color: var(--text-color);
  height: 2px;
  right: 0;
  top: 0;
  width: 100%;
  transition: all 0.5s;

  ${Input}:focus ~ & {
    width: 35%;
    height: 1.5px;
  }
`;

const Underline = styled.div`
  position: absolute;
  content: "";
  background-color: var(--text-color);
  height: 2px;
  right: 0;
  bottom: 0;
  transition: all 0.5s;

  ${Input}:focus ~ & {
    height: 1.5px;
    width: 100%;
  }
`;

const Button = styled.button`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--text-color);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--text-color);
  background: transparent;
  box-shadow: 5px 5px var(--text-color);
  cursor: pointer;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

function FirstSection() {
  return (
    <>
      <FirstSectionContainer>
        <BackgroundImage alt="shipexindia first section background" src={bg} />
        <ContentContainer>
          <Top />
          <BottomContainer>
            <Heading3>Track Your Shipment</Heading3>
            <InputSection>
              <InputContainer>
                <Input name="text" type="text" />
                <Label htmlFor="input">Enter AWB/OrderId</Label>
                <TopLine></TopLine>
                <Underline></Underline>
              </InputContainer>
              <Button>Track Now</Button>
            </InputSection>
          </BottomContainer>
        </ContentContainer>
      </FirstSectionContainer>
    </>
  );
}

export default FirstSection;
