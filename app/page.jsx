"use client";

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import FirstSection from "@/Components/Home/FirstSection/FirstSection";
import CompanyLogo from "@/Components/Home/CompanyLogo/CompanyLogo";
import Mockup1 from "@/Components/Home/Mockup1/Mockup1";
import Cards from "@/Components/Home/Card/Cards";
import Timeline from "@/Components/Home/Timeline/Timeline";
import Services from "@/Components/Home/Services/Services";
import Glance from "@/Components/Home/Glance/Glance";
import Blog from "@/Components/Home/Card/Blog/Blog";
import Footer from "@/Components/Common/Footer/Footer";
import Newsletter from "@/Components/Home/Newsletter/Newsletter";
import FirstBg from "@/Components/Common/Animations/FirstBg";
import Service from "@/Components/FirstBg/Service";

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.bgColor || "transparent"};
  transition: background-color 1s ease-in-out;
`;

const SectionContainer = styled.div`
  min-height: 40vh;
  transition: background-color 0.3s ease-in-out;
`;

const sectionContent = [
  <Mockup1 />,
  <Cards />,
  <Services />,
  <Timeline />,
  <Glance />,
  <Newsletter />,
  <Blog />,
];

function Page() {
  const containerRefs = sectionContent.map(() => useRef(null));
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const colors = ["#5065f9", "#00c27c", "#fff", "#fff", "#fff", "#fff", "#fff"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTops = containerRefs
        .filter((ref) => ref.current !== null)
        .map((ref) => ref.current.offsetTop);

      for (let i = 0; i < sectionTops.length; i++) {
        if (
          scrollTop >= sectionTops[i] &&
          (i === sectionTops.length - 1 || scrollTop < sectionTops[i + 1])
        ) {
          setActiveSection(i);

          gsap.to(mainRef.current, {
            backgroundColor: colors[i],
            duration: 0.3,
            ease: "power2.inOut",
            yoyo: true,
          });
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HomeContainer ref={mainRef}>
        <FirstBg Component={Service} />
        <FirstSection />
        <CompanyLogo />
        {containerRefs.map((ref, index) => (
          <SectionContainer
            ref={ref}
            key={index}
            style={{
              backgroundColor:
                activeSection === index ? colors[index] : "transparent",
            }}
          >
            {sectionContent[index]}
          </SectionContainer>
        ))}
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Page;
