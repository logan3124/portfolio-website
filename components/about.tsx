"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently studying{" "}
        <span className="font-medium">Computer Science</span> at Georiga Tech with focuses in
        {" "}
        <span className="font-medium">Artificial Intelligence</span> and{" "}
        <span className="font-medium">Media Applications</span> in addition to a minor in Spanish.
        Currently I am focusing on backend-engineering and recently completed my certification as an
        {" "}<span className="font-medium">AWS Certified Developer</span> at the Associate level. Click <b><a href="https://www.credly.com/badges/94281a7e-cd2f-44cf-8e02-46e6cefdfad5/public_url">Here</a></b> to view my certification on Credly.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        distance running, hiking, and cooking. I also enjoy{" "}
        <span className="font-medium">reading</span> a mix of fiction and non-fiction books. 
      </p>
    </motion.section>
  );
}
