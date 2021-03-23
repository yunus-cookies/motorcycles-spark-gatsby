import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import {
  HeroSection,
  HeroContainer,
  HeroRow,
  HeroCol,
  Title,
  Description,
  Motorcycle,
  MotorcycleElements,
  BelowBoxContainer,
  BelowBoxOuterContainer,
  BelowBox,
  MediaImages,
  BottomRow,
  MediaText,
  RightDoodle,
  LeftDoodle,
} from "./HeroElements.js"
import { Button } from "../ButtonElements.js"

const Hero = () => {
  const [mobile, setMobile] = useState(true)

  const showMobile = () => {
    if (window.innerWidth <= 500) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }

  useEffect(() => {
    showMobile()
    window.addEventListener("resize", showMobile)
    return () => {
      window.removeEventListener("resize", showMobile)
    }
  }, [])

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <HeroRow>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.33 }}
            >
              <Title>
                THE ULTIMATE<br></br> MODERN BATTERY FOR<br></br> ANY MOTORCYCLE
              </Title>
            </motion.div>
            <HeroCol>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.33 }}
              >
                <Description>
                  Whether you're running a vintage, building your perfect cafè
                  racer or just making your daily motorcycle as reliable as it
                  can be.
                </Description>
                <BelowBox>
                  <BelowBoxOuterContainer>
                    <BelowBoxContainer>
                      <p>
                        We got you covered from <b>€99</b>.
                      </p>
                      <Button hero>PREORDER</Button>
                    </BelowBoxContainer>
                    <StaticImage
                      formats={["AUTO", "WEBP", "AVIF"]}
                      placeholder="blurred"
                      alt="arrow"
                      src="../../images/doodle_arrow.svg"
                      style={{ marginLeft: 20 }}
                    />
                  </BelowBoxOuterContainer>
                </BelowBox>
              </motion.div>
            </HeroCol>
            <HeroCol>
              <Motorcycle>
                <StaticImage
                  alt="motorcycle"
                  src="../../images/bmw-r80-bobber.jpg"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                  style={{
                    transform: `scale(1.5) translateX(8%) translateY(13%)`,
                  }}
                />
              </Motorcycle>
              <MotorcycleElements>
                <RightDoodle>
                  <StaticImage
                    alt="right"
                    src="../../images/doodle_heat_right.svg"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    placeholder="blurred"
                  />
                </RightDoodle>
                <LeftDoodle>
                  <StaticImage
                    alt="left"
                    src="../../images/doodle_heat_left.svg"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    placeholder="blurred"
                  />
                </LeftDoodle>
                <StaticImage
                  style={
                    mobile
                      ? {
                          position: "absolute",
                          top: "-10%",
                          left: "37%",
                        }
                      : {
                          position: "absolute",
                          top: "-23%",
                          left: "30%",
                        }
                  }
                  alt="light"
                  src="../../images/doodle_light.svg"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  placeholder="blurred"
                />
              </MotorcycleElements>
            </HeroCol>
          </HeroRow>
          <BottomRow>
            <MediaText>As seen in</MediaText>
            <MediaImages>
              <StaticImage
                alt="left"
                src="../../images/media_bikeexif.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                style={{ marginRight: 25 }}
              />
              <StaticImage
                alt="light"
                src="../../images/media_pipeburn.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                style={{ marginRight: 25 }}
              />
              <StaticImage
                alt="light"
                src="../../images/Greasy.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                style={{ marginRight: 25 }}
              />
              <StaticImage
                alt="light"
                src="../../images/media_chopcult.png"
                formats={["AUTO", "WEBP", "AVIF"]}
                placeholder="blurred"
                style={{ marginRight: 25 }}
              />
            </MediaImages>
          </BottomRow>
        </HeroContainer>
      </HeroSection>
    </>
  )
}

export default Hero
