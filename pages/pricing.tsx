import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing - Educite Kenya</title>
        <meta
          name="description"
          content="Educite Kenya pricing plans for schools and educational institutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <SectionTitle
          pretitle="Pricing"
          title="Plans for Kenyan Schools of All Sizes">
          Choose the plan that fits your institution's needs and budget. All plans include our core features with support for Kenyan CBC curriculum.
        </SectionTitle>
        
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 py-6 sm:py-8 md:py-10">
          {/* Starter Plan */}
          <div className="flex flex-col p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg dark:bg-gray-800">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-center">Starter</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center">For small Kenyan schools just getting started</p>
              <p className="mt-3 sm:mt-4 text-center">
                <span className="text-3xl sm:text-4xl font-bold">KES 37,500</span>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Up to 500 students</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Basic CBC curriculum tools</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Student records management</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Email support</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link href="/get-started" className="block w-full py-2 sm:py-3 text-center text-sm sm:text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="flex flex-col p-4 sm:p-5 md:p-6 bg-indigo-600 rounded-xl sm:rounded-2xl shadow-lg relative">
            <div className="absolute top-0 right-0 py-1 px-2 sm:px-3 bg-yellow-300 text-yellow-800 rounded-tr-xl sm:rounded-tr-2xl rounded-bl-xl sm:rounded-bl-2xl text-xs font-bold">POPULAR</div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-center text-white">Professional</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-indigo-100 text-center">For growing Kenyan educational institutions</p>
              <p className="mt-3 sm:mt-4 text-center text-white">
                <span className="text-3xl sm:text-4xl font-bold">KES 75,000</span>
                <span className="text-sm sm:text-base text-indigo-200">/month</span>
              </p>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-white text-sm sm:text-base">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Up to 2,000 students</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Complete CBC curriculum support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Advanced reporting and analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Priority support</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link href="/get-started" className="block w-full py-2 sm:py-3 text-center text-sm sm:text-base text-indigo-600 bg-white rounded-md hover:bg-gray-100">
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="flex flex-col p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg dark:bg-gray-800">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-center">Enterprise</h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center">For large Kenyan educational networks</p>
              <p className="mt-3 sm:mt-4 text-center">
                <span className="text-3xl sm:text-4xl font-bold">Custom</span>
              </p>
              <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Unlimited students</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">KICD curriculum alignment</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Custom integration options</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="ml-2 sm:ml-3">Dedicated Kenyan account manager</span>
                </li>
              </ul>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link href="/get-started" className="block w-full py-2 sm:py-3 text-center text-sm sm:text-base text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
