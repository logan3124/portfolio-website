import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import AWS from "./AWS.png";
import { LuGraduationCap } from "react-icons/lu";
import punchshot from '@/public/punchshot.png';
import croplocal from '@/public/croplocal.png';
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import realappeal from "@/public/realappeal.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "GT Web Development Club - Project Manager",
    location: "Atlanta, GA",
    description:
      "Active club member for over two years. Co-led a team of around 8 students in a three semester long client project called Punchshot Pickleball.",
    icon: React.createElement(LuGraduationCap),
    date: "January 2023 - May 2024",
  },
  {
    title: "AWS Certified Developer Associate",
    location: "N/A",
    description:
      "Completed Amazon's certification with a passing score of 832/1000.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - May 2024",
  },
  {
    title: "RVO (Red Venture Optum) Health - Software Engineering Intern",
    location: "Charlotte, NC",
    description:
      "Completed a 10-Week internship program working as a Full-Stack developer for the Real Appeal application. Worked on post-migration of the site over to Next.js while boosting our web-accessibility scores to over 95% according to WCAG 2.0",
    icon: React.createElement(FaReact),
    date: "June 2024 - August 2024 ",
  },
] as const;

export const projectsData = [
  {
    title: "Punchshot Pickleball",
    description:
      "Client project aimed to make Pickleball leagues more accessible in the Atlanta area. Features: league registration, automated match scheduling, stats tracking ...",
    tags: ["React", "Typescript", "MaterialUI", "AWS S3", "MongoDB"],
    imageUrl: punchshot,
  },
  {
    title: "Crop Local",
    description:
      "Aimed to connect consumers with their favorite farmers market vendors. Features: Buy/Sells Goods, Filter stands by location, reserve items for pickup at local markets.",
    tags: ["React", "Javascript", "SASS", "MongoDB", "GoogleMaps API"],
    imageUrl: croplocal,
  },
  {
    title: "Real Appeal Developer",
    description:
      "Worked on the migration of flagship application onto newer tech stack. Tasks: Migrated Splunk alerts over to Datadog monitors and further configured user event tracking. ",
    tags: ["Next.js", "Tailwind", "Typescript", "Amplitude", "Datadog", "Splunk"],
    imageUrl: realappeal,
  },
] as const;

export const skillsData = [
  "AWS Databases and S3",
  "Encryption and IAM",
  "CloudWatch/CloudTrail",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Datadog Logging",
  "Amplitude",
  "Github Actions",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
] as const;
