import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Educite Kenya</title>
        <meta
          name="description"
          content="Privacy policy for the Educite education platform in Kenya"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <div className="max-w-4xl mx-auto my-16">
          <h1 className="text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10">
            Privacy Policy
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="lead">
              Effective Date: May 1, 2023
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              At Educite Kenya, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our school management platform in accordance with the Data Protection Act of Kenya (2019).
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, including:
            </p>
            <ul>
              <li>Personal information (name, email address, phone number, national ID number when applicable)</li>
              <li>Account information (login credentials, preferences)</li>
              <li>Educational information (for students, teachers, and administrators)</li>
              <li>Payment information (M-Pesa numbers, bank account details when applicable)</li>
              <li>Communication data (messages sent through our platform)</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our services for Kenyan educational institutions</li>
              <li>Process transactions and send related information</li>
              <li>Communicate with you about services, updates, and promotions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against unauthorized access and ensure the security of our platform</li>
              <li>Comply with Kenyan educational reporting requirements when authorized</li>
            </ul>
            
            <h2>4. Information Sharing</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Kenyan educational institutions that use our platform</li>
              <li>When required by Kenyan law or to protect our rights</li>
              <li>Kenyan Ministry of Education or other government bodies, only when legally required</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information in line with Kenyan data protection standards. However, no electronic transmission or storage of information can be entirely secure, and we cannot guarantee absolute security.
            </p>
            
            <h2>6. Children's Privacy</h2>
            <p>
              We comply with Kenyan regulations regarding children's data privacy. We only collect information from children under 18 with verifiable parental or guardian consent as required by Kenyan law.
            </p>
            
            <h2>7. Your Rights Under Kenyan Law</h2>
            <p>
              Under the Data Protection Act of Kenya (2019), you have certain rights regarding your personal information, including the right to:
            </p>
            <ul>
              <li>Access personal data held about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to the processing of your data</li>
              <li>Data portability</li>
              <li>Lodge a complaint with the Data Commissioner</li>
            </ul>
            
            <h2>8. Changes to this Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@educite.co.ke or call us at +254 722 123 456.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
} 