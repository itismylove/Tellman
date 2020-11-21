import React, { FC } from "react";
import { Hero, Section, WhatWeDo } from "components";
import Topography from "public/topography.svg";

const Index: FC = (props) => {
  return (
    <>
      <Section id="hero"
               jumpTo={{ href: "#what-we-do", title: "What we do" }}
               background={`url('/images/hero-bg.jpg')`}
               overlay={"radial-gradient(70% 70% at 50% 100%, var(--color-grey-bg-1) 0, var(--color-grey-bg-2) 100%)"}>
        <Hero />
      </Section>
      <Section id="what-we-do" background={<Topography />} backgroundOpacity={0.03}>
        <WhatWeDo />
      </Section>
    </>
  );
};

export default Index;
