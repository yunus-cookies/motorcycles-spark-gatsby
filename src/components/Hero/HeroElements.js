import styled from "styled-components"

export const HeroSection = styled.div`
  width: 100%;
  height: 100%;
  margin: 160px auto 0 auto;
  max-width: 100%;

  @media screen and (max-width: 1150px) {
    max-width: 100%;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 100px;
    max-width: 100%;
  }
`

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2000px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
  }
`

export const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
export const HeroCol = styled.div`
  position: relative;
  width: 100%;
`

export const Motorcycle = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: auto;
`

export const MotorcycleElements = styled.div`
  @media screen and (max-width: 1024px) {
    width: 750px;
  }
`

export const LeftDoodle = styled.div`
  animation: leftDoodle 2s infinite;
  animation-timing-function: ease-in;
  animation-duration: 0.8s;
  position: absolute;
  top: 45%;
  left: 35%;

  @keyframes leftDoodle {
    0%,
    100% {
      left: 36%;
    }
    50% {
      left: 35%;
    }
  }
`

export const RightDoodle = styled.div`
  animation: rightDoodle 2s infinite;
  animation-timing-function: ease-in;
  animation-duration: 0.8s;
  position: absolute;
  top: 25%;
  left: 70%;

  @keyframes rightDoodle {
    0%,
    100% {
      left: 69%;
    }
    50% {
      left: 70%;
    }
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 125px;
  font-weight: 600;
  font-size: 5.1rem;
  font-style: italic;

  @media screen and (min-width: 1025px) {
    width: 1000px;
    z-index: 999;
    line-height: 5.5rem;
  }
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    padding: 0;
    position: relative;
  }
`

export const Description = styled.p`
  margin-top: 300px;
  margin-bottom: 50px;
  width: 66%;
  line-height: 33px;
  padding-left: 125px;
  font-weight: 400;
  font-size: 1.1rem;

  @media screen and (max-width: 1024px) {
    margin-top: 25px;
    margin-bottom: 50px;
    width: 100%;
    padding: 0 10px;
  }
`

export const BelowBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 125px;

  @media screen and (max-width: 1024px) {
    padding: 0 10px;
    margin-bottom: 80px;
  }
`

export const BelowBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 1.1rem;
  }
`

export const BelowBoxOuterContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    margin: 0 auto;
  }
`

export const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 125px;
  padding-top: 75px;
  width: 66%;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    width: 100%;
    padding: 0 10px 10px 10px;
  }
`
export const MediaText = styled.p`
  font-size: 1.25rem;
  color: #969696;
`

export const MediaImages = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 400px;
    width: 100%;
    align-items: center;

    * {
      margin: 0 !important;
    }
  }
`
