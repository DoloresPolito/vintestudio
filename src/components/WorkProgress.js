import React, { useState } from "react";
import styled from "styled-components";
import text from "../../public/images/creativeconcept.png";
import dialogo from "../../public/images/discuss.png";
import book from "../../public/images/production.png";
import computer from "../../public/images/happyclient.png";
import { motion } from "framer-motion";
import Image from "next/image";


const WorkProgress2 = () => {


 

  return (
    <>
      <WorkProgressSection

      >
        <h2>WORK PROGRESS</h2>
        <Content >
          <div>
            <Icons>
              <Image src={dialogo} alt="discuss" />
            </Icons>

            <Numbers>
              <p>1. </p>
            </Numbers>

            <Titles>
              <p>DISCUSS</p>
            </Titles>

            <Texts>
              <p>
                Once a new client contacts us, we chat with them to get to know
                them better and what their needs and goals are.
              </p>
            </Texts>
          </div>

          <div>
            <Icons>
              <Image src={computer} alt="computer" />
            </Icons>

            <Numbers>
              <p>2.</p>
            </Numbers>

            <Titles>
              <p>CREATIVE CONCEPT</p>
            </Titles>

            <Texts>
              <p>
                Based on the chat, we analyze and send to our customers
                different proposals to be able to define the most appropriate
                graphic concept.
              </p>
            </Texts>
          </div>

          <div>
            <Icons>
              <Image src={text} alt="text" />
            </Icons>

            <Numbers>
              <p>3.</p>
            </Numbers>

            <Titles>
              <p>PRODUCTION</p>
            </Titles>

            <Texts>
              <p>
                Its time to start producing! Definitely our favorite part in
                which we try to interpret the established in the previous steps.
              </p>
            </Texts>
          </div>

          <div>
            <Icons>
              <Image src={book} alt="book" />
            </Icons>

            <Numbers>
              <p>4.</p>
            </Numbers>

            <Titles>
              <p>HAPPY CLIENT</p>
            </Titles>

            <Texts>
              <p>
                Nothing more satisfying than a happy ending. We love to know
                what our clients think about the results and how we can improve.
              </p>
            </Texts>
          </div>
        </Content>
      </WorkProgressSection>
    </>
  );
};

const WorkProgressSection = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  color: #4a4747;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;

  h2{
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: 400;
    color: #4a4747;
    text-align: center;
    margin-bottom: 100px;
  }


  @media only screen and (max-width: 1160px) {
    height: auto;
    padding-top: 50px;
  }

  /* @media only screen and (max-width: 799px) {
background-color: red;
  } */
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1160px) {
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    :hover {
      scale: 1.05;
      /* background-color: #f9f9f9 !important; */
    }
    @media only screen and (max-width: 1160px) {
      width: 300px;
      padding: 3px;
    }

    @media only screen and (max-width: 799px) {
      :hover {
        scale: 1;
        /* background-color: #f9f9f9 !important; */
      }
    }
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  img {
    height: 50px;
    width: 50px;

    @media only screen and (max-width: 1160px) {
      height: 45px;
      width: 45px;
    }
  }
`;

const Titles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
  @media only screen and (max-width: 1160px) {
    margin-top: 0px;
  }
  @media only screen and (max-width: 799px) {
    margin-top: 15px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 2px;
    font-weight: 200;
    color: #4a4747;
    text-align: center;
    width: 250px;
    @media only screen and (max-width: 1160px) {
      /* font-size: 16px; */
      line-height: 10px;
    }
  }
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
  @media only screen and (max-width: 1160px) {
    margin-top: 5px;
  }

  @media only screen and (max-width: 799px) {
    display: none !important;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 600;
    color: #4a4747;
    text-align: center;
    width: 250px;

    @media only screen and (max-width: 1160px) {
      /* font-size: 20px; */
      line-height: 15px;
    }
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start !important;
  height: 180px;
  width: 80%;
  padding: 5px;

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 200;
    color: #4a4747;
    text-align: center;
    width: 230px;


    @media only screen and (max-width: 1160px) {
      width: 350px;
      /* font-size: 12px; */
    }
  }
`;

export default WorkProgress2;
