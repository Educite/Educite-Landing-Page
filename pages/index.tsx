import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React from "react";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";



export default function Home() {
  return (
    <>
      <Head>
        <title>Educite - School Management Platform</title>
        <meta
          name="description"
          content="Educite is a comprehensive school management platform for teachers, parents, and administrators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Educite Benefits"
        title="Why choose our education platform">
        Educite is a comprehensive school management platform designed for teachers,
        parents, and administrators. It provides real-time communication, financial management, 
        and academic tracking tools.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="See Educite in action">
        Take a quick tour of our platform to see how Educite can transform your educational institution's administrative workflow and improve communication.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="What our users say">
        Here's what educational institutions using Educite have to say about their experience.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Find answers to common questions about Educite's platform, features, and implementation process.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
