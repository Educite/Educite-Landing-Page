import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  align?: "default" | "left";
}

export default function Faq({ align = "default" }: FaqProps) {
  // For left alignment, render without the Container to avoid mx-auto centering
  if (align === "left") {
    return (
      <div className="px-3 py-4 sm:px-4 sm:py-5 md:px-6 lg:px-8 xl:px-0">
        <div className="w-full max-w-2xl p-2 rounded-2xl">
          {faqdata.map((item, index) => (
            <div key={item.question} className="mb-3 sm:mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button as="button" className="flex items-center justify-between w-full px-3 py-3 sm:px-4 sm:py-4 text-base sm:text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200">
                      <span className="pr-6">{item.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500 flex-shrink-0`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-gray-500 dark:text-gray-300">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default alignment uses Container with centered content
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-3 sm:mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button as="button" className="flex items-center justify-between w-full px-3 py-3 sm:px-4 sm:py-4 text-base sm:text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200">
                    <span className="pr-6">{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2 text-sm sm:text-base text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata: FaqItem[] = [
  {
    question: "How does Educite help improve Kenyan school administration?",
    answer: "Educite centralizes all administrative tasks including student records, attendance tracking, grade management, and communication in one platform, reducing paperwork and administrative overhead by up to 70%. Our system is fully aligned with the Kenyan Ministry of Education requirements and the CBC curriculum.",
  },
  {
    question: "Is Educite suitable for all types of Kenyan educational institutions?",
    answer: "Yes, Educite is designed to serve various educational institutions across Kenya including primary and secondary schools, colleges, universities, and specialized training centers. The platform can be customized to meet the specific requirements of both public and private institutions in Kenya.",
  },
  {
    question: "What features will be added in future updates?",
    answer: "We have an exciting roadmap of features planned for Educite including advanced analytics dashboards, AI-powered learning recommendations, parent-teacher conference scheduling, and integrated payment systems. Our development is guided by feedback from Kenyan educational institutions to ensure we meet their evolving needs.",
  },
  {
    question: "How secure is student data on the Educite platform?",
    answer: "Educite employs enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with the Data Protection Act of Kenya (2019) to ensure all student information remains secure and protected. Our data centers include local options that comply with Kenyan data sovereignty requirements.",
  },
  {
    question: "Does Educite provide training for Kenyan schools?",
    answer: "Yes, we offer comprehensive training programs tailored for Kenyan educational staff. Our training is conducted both in English and Kiswahili, and we provide in-person workshops in major Kenyan cities including Nairobi, Mombasa, Kisumu, and Eldoret, as well as remote training options for schools in rural areas.",
  },
];
