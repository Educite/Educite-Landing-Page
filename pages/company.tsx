import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";

export default function Company() {
  return (
    <>
      <Head>
        <title>Company - Educite</title>
        <meta
          name="description"
          content="Learn about Educite's mission, team, and company values"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <SectionTitle
          pretitle="About Us"
          title="Our Company">
          Founded by education and technology experts, Educite is committed to transforming school administration.
        </SectionTitle>
        
        <div className="flex flex-col mx-auto md:flex-row py-10">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Educite aims to revolutionize education management by providing intuitive tools that enhance communication, streamline administration, and improve the educational experience for all stakeholders.
            </p>
            <p className="text-lg mb-6">
              We believe that when administrative tasks are simplified, educators can focus more on what truly matters: teaching and nurturing students.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div className="ml-3">
                  <h3 className="font-bold">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">We continuously improve our platform to meet the evolving needs of educational institutions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div className="ml-3">
                  <h3 className="font-bold">Accessibility</h3>
                  <p className="text-gray-600 dark:text-gray-400">We design our solutions to be accessible to all users, regardless of technical expertise.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-indigo-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <div className="ml-3">
                  <h3 className="font-bold">Security</h3>
                  <p className="text-gray-600 dark:text-gray-400">We prioritize the security and privacy of all data within our platform.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="text-xl font-bold">Michael Chen</h3>
              <p className="text-gray-600 dark:text-gray-400">CTO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
              <h3 className="text-xl font-bold">Rachel Williams</h3>
              <p className="text-gray-600 dark:text-gray-400">Head of Education</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
