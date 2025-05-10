import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import Link from "next/link";

export default function Legal() {
  return (
    <>
      <Head>
        <title>Legal Information - Educite Kenya</title>
        <meta
          name="description"
          content="Legal information about Educite - school management platform for Kenyan educational institutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <div className="max-w-4xl mx-auto my-16">
          <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10">
            Legal Information
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Company Information</h2>
            <p>
              Educite is operated by Educite Technologies Limited<br />
              Westlands Business Park, 3rd Floor<br />
              Nairobi, 00800<br />
              Kenya
            </p>
            <p>
              Contact: legal@educite.co.ke<br />
              Phone: +254 722 123 456
            </p>
            
            <h2>Legal Documentation</h2>
            <p>
              Below are links to important legal documents regarding your use of our platform:
            </p>
            <ul>
              <li>
                <Link href="/terms" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                Data Processing Agreement (available upon request)
              </li>
              <li>
                Data Protection Act Compliance Statement
              </li>
              <li>
                Ministry of Education Compliance Statement
              </li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              Educite and all related logos, product and service names, designs, and slogans are trademarks of Educite Technologies Limited or its affiliates or licensors. You may not use such marks without the prior written permission of Educite.
            </p>
            
            <h2>Licensing Information</h2>
            <p>
              Educite is provided under a subscription-based license model. Kenyan educational institutions must purchase appropriate licenses based on the number of users and selected features. Pricing is available in Kenyan Shillings (KES).
            </p>
            
            <h2>Third-Party Licenses</h2>
            <p>
              Our platform incorporates various open-source components, each subject to its own license terms. A complete list of open-source components and their respective licenses is available upon request.
            </p>
            
            <h2>Data Compliance</h2>
            <p>
              Educite is designed to comply with Kenyan educational data privacy regulations, including:
            </p>
            <ul>
              <li>Data Protection Act of Kenya (2019)</li>
              <li>Ministry of Education Guidelines for Educational Technology</li>
              <li>Kenya National ICT Policy</li>
              <li>Communication Authority of Kenya (CA) Regulations</li>
            </ul>
            
            <h2>Legal Disputes</h2>
            <p>
              Any disputes arising from the use of our services shall be resolved according to the provisions outlined in our Terms and Conditions. The laws of Kenya shall govern all aspects of the agreement, and any disputes shall be resolved in the courts of Nairobi, Kenya.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
} 