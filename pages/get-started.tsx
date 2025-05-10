import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import SectionTitle from "../components/sectionTitle";

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Get Started - Educite</title>
        <meta
          name="description"
          content="Begin your journey with Educite's school management platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <SectionTitle
          pretitle="Join Educite"
          title="Get Started Today">
          Complete the form below to begin your journey with Educite's comprehensive school management platform.
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto py-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              />
            </div>
            
            <div>
              <label htmlFor="institution" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Institution Name*
              </label>
              <input
                type="text"
                id="institution"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                required
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Role*
              </label>
              <select
                id="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                required
              >
                <option value="">Select your role</option>
                <option value="administrator">Administrator</option>
                <option value="principal">Principal</option>
                <option value="teacher">Teacher</option>
                <option value="it_manager">IT Manager</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="plan" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Interested Plan
              </label>
              <select
                id="plan"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
              >
                <option value="">Select a plan</option>
                <option value="starter">Starter</option>
                <option value="professional">Professional</option>
                <option value="enterprise">Enterprise</option>
                <option value="not_sure">Not sure yet</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600"
                placeholder="Tell us about your institution's needs..."
              ></textarea>
            </div>
            
            <div className="flex items-start">
              <input
                id="privacy"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                I agree to Educite's <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a>*
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Request Demo
              </button>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
