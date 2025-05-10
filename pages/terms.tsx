import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Educite Kenya</title>
        <meta name="description" content="Terms and conditions for using the Educite school management platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Container>
        <div className="bg-white sm:rounded-xl p-4 sm:p-8 dark:bg-gray-800">
          <div className="prose prose-indigo dark:prose-dark max-w-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Terms of Service</h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Last updated: April 5, 2024</p>
            
            <p className="mt-4 sm:mt-6">
              Welcome to Educite Kenya, a school management platform designed specifically for Kenyan educational institutions. By accessing or using our platform, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Educite Kenya platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, as well as any additional terms and conditions and policies referenced herein.
            </p>
            
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of your educational institution to use our Service. By using our Service, you represent and warrant that you meet these eligibility requirements.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2>4. Privacy Policy</h2>
            <p>
              Our Privacy Policy explains how we collect, use, and protect your personal information when you use our Service in accordance with the Data Protection Act of Kenya (2019). By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
            </p>
            
            <h2>5. Content and Intellectual Property</h2>
            <p>
              All content, design, graphics, compilation, digital conversion, and other matters related to the Service are protected by copyright, trademark, and other intellectual property rights owned by Educite Kenya or its licensors under Kenyan and international copyright laws.
            </p>
            
            <h2>6. Service Terms</h2>
            <p>
              Access to Educite services is provided on a subscription basis. Details about specific features included in each subscription tier are provided on our website. All prices are listed in Kenyan Shillings (KES) and include applicable taxes as required by the Kenya Revenue Authority.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Educite Kenya, its officers, directors, employees, or agents, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, to the extent permitted by Kenyan law.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. If we make changes to these Terms, we will provide notice of such changes by updating the date at the top of these Terms and by maintaining a current version of the Terms on our website.
            </p>
            
            <h2>9. Dispute Resolution</h2>
            <p>
              Any dispute arising out of or in connection with these Terms shall be resolved through amicable negotiation in the first instance. If a resolution cannot be reached, the dispute shall be referred to arbitration in accordance with the Arbitration Act of Kenya. The seat of arbitration shall be Nairobi, Kenya.
            </p>
            
            <h2>10. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@educite.co.ke or call +254 722 123 456.
            </p>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
} 