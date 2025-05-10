import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";

export default function Product() {
  return (
    <>
      <Head>
        <title>Product - Educite</title>
        <meta
          name="description"
          content="Learn about Educite's school management platform and its capabilities"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <SectionTitle
          pretitle="Our Solution"
          title="Educite School Management Platform">
          A comprehensive platform designed to streamline administrative tasks and enhance communication between schools, teachers, and parents.
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 py-6 sm:py-8 md:py-10">
          <div className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">School Administration</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Simplify administrative tasks with intuitive dashboards and automated workflows designed for educational institutions.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Teacher Tools</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Provide teachers with the resources they need to manage classrooms, track student progress, and communicate with parents.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Parent Portal</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Keep parents informed and engaged with real-time updates on their child's academic progress and school activities.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Financial Management</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Track budgets, process payments, and manage financial records with our secure and efficient financial tools.
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
