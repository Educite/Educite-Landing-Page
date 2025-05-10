import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Head from "next/head";
import SectionTitle from "./sectionTitle";


export default function Hero() {
  // Array of educational institutions
  const institutions = [
    "Kenyatta University",
    "Alliance High School",
    "Strathmore School",
    "Brookhouse School",
    "Ministry of Education"
  ];

  return (
    <>
      <Head>
        <title>Educite Kenya - School Management Platform</title>
        <meta
          name="description"
          content="Educite is a comprehensive school management platform for Kenyan schools, teachers, parents, and administrators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 sm:text-4xl lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Transforming Education in Kenya Through Technology
            </h1>
            <p className="py-3 sm:py-5 text-lg leading-normal text-gray-500 sm:text-xl xl:text-2xl dark:text-gray-300">
              Educite is a comprehensive school management platform designed for Kenyan teachers,
              parents, and administrators. It provides real-time communication, administration tools, 
              and academic tracking to ensure a seamless digital experience for educational institutions across Kenya.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-y-0 sm:items-center sm:flex-row sm:space-x-3">
              <a
                href="#"
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                Get Started
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-4 sm:mt-0">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Demo</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 17.5v-11l7.5 5.5-7.5 5.5z" />
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="block lg:hidden w-full max-w-md">
            <Image
              src={heroImg}
              width={616}
              height={617}
              alt="Education Management System for Kenyan Schools"
              priority
              placeholder="blur"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src={heroImg}
              width={616}
              height={617}
              alt="Education Management System for Kenyan Schools"
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-lg sm:text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-indigo-600">leading educational institutions</span> across Kenya
          </div>

          <div className="relative overflow-hidden mt-6 sm:mt-10 py-4">
            <div className="marquee-container">
              <div className="marquee">
                <div className="marquee__group">
                  {institutions.map((institution, index) => (
                    <div key={`institution-${index}`} className="text-gray-600 dark:text-gray-300 mx-8">
                      <div className="text-base sm:text-lg font-semibold">{institution}</div>
                    </div>
                  ))}
                </div>
                
                {/* Duplicate group for seamless looping */}
                <div className="marquee__group" aria-hidden="true">
                  {institutions.map((institution, index) => (
                    <div key={`institution-duplicate-${index}`} className="text-gray-600 dark:text-gray-300 mx-8">
                      <div className="text-base sm:text-lg font-semibold">{institution}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            .marquee-container {
              width: 100%;
              max-width: 100%;
              overflow: hidden;
            }
            
            .marquee {
              display: flex;
              width: max-content;
              animation: scroll 30s linear infinite;
            }
            
            .marquee__group {
              display: flex;
              align-items: center;
            }
            
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            /* Pause animation when reduced-motion is set */
            @media (prefers-reduced-motion: reduce) {
              .marquee {
                animation-play-state: paused;
              }
            }
          `}</style>
        </div>
      </Container>
      <SectionTitle
        pretitle="Educite Benefits"
        title="Why choose our education platform">
        Educite is a comprehensive school management platform built specifically for Kenyan educational institutions,
        providing real-time communication and academic tracking tools aligned with the CBC curriculum.
      </SectionTitle>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-5 py-6 sm:px-7 sm:py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-medium lg:text-3xl">
            Ready to transform your Kenyan school?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 text-base sm:text-lg lg:text-xl">
            Join hundreds of schools across Kenya already benefiting from Educite.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#"
            className="inline-block py-3 mx-auto text-base font-medium text-center text-indigo-600 bg-white rounded-md px-5 sm:px-7 lg:px-10 lg:py-5 hover:bg-gray-50 transition-colors">
            Schedule a Demo
          </a>
        </div>
      </div>
    </>
  );
}

// Replace the logo components with Kenyan institutions
function KenyattaUniversity() {
  return (
    <div className="text-lg font-semibold">Kenyatta University</div>
  );
}

function AllianceHighSchool() {
  return (
    <div className="text-lg font-semibold">Alliance High School</div>
  );
}

function StrathmoreBusiness() {
  return (
    <div className="text-lg font-semibold">Strathmore School</div>
  );
}

function BrookhouseSchool() {
  return (
    <div className="text-lg font-semibold">Brookhouse School</div>
  );
}

function MOE() {
  return (
    <div className="text-lg font-semibold">Ministry of Education</div>
  );
}
