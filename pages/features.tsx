import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";
import Faq from "../components/faq";

export default function Features() {
  return (
    <>
      <Head>
        <title>Features - Educite</title>
        <meta
          name="description"
          content="Explore the features of Educite's school management platform"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        {/* Left Aligned Section Title */}
        <SectionTitle
          pretitle="Platform Capabilities"
          title="Educite Features"
          align="left"
        >
          Discover the powerful tools and capabilities that make Educite the
          ideal platform for educational institutions.
        </SectionTitle>

        <div className="sm:py-8 md:py-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 md:space-y-12">

            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Attendance Tracking
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Automatically track student attendance with digital check-ins
                  and generate comprehensive reports for administrators and
                  parents.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Grade Management
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Streamline the grading process with our intuitive interface.
                  Record, calculate, and visualize student performance across
                  subjects and time periods.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-start md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Calendar & Scheduling
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Manage school events, class schedules, and important dates
                  with our comprehensive calendar system. Send automated
                  reminders to staff, students, and parents.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>

      {/* FAQ Section with Left Alignment */}
      <Container>
        <SectionTitle
          pretitle="Common Questions"
          title="Frequently Asked Questions"
          align="left"
        >
          Find answers to common questions about Educite's features and how they can benefit your institution.
        </SectionTitle>
        <Faq align="left" />
      </Container>
      
      <Footer />
    </>
  );
}
