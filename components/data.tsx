import React, { ReactNode } from "react";
import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { StaticImageData } from "next/image";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

interface Bullet {
  title: string;
  desc: string;
  icon: React.ReactElement;
}

export interface BenefitData {
  title: string;
  desc: string;
  image: StaticImageData;
  bullets: Bullet[];
}

export const benefitOne: BenefitData = {
  title: "Streamline Your School Operations",
  desc: "Enhance efficiency and communication with our comprehensive management tools.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automated Attendance",
      desc: "Track student attendance automatically and generate reports instantly.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Real-time Communication",
      desc: "Connect teachers, parents, and administrators through our integrated messaging system.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Automated Reporting",
      desc: "Generate comprehensive reports on student progress, attendance, and institutional metrics.",
      icon: <CursorClickIcon />,
    },
  ],
};

export const benefitTwo: BenefitData = {
  title: "Enhanced Learning Experience",
  desc: "Our platform goes beyond administrative tools to create a better educational environment for students, teachers, and parents.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Accessible",
      desc: "Access Educite from any device with our responsive design and dedicated mobile app.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Financial Management",
      desc: "Handle tuition, fees, payments, and budgeting all within the same platform.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Light & Dark Mode",
      desc: "Customize your experience with automatic light and dark themes.",
      icon: <SunIcon />,
    },
  ],
};
