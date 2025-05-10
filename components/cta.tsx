import React from "react";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-5 py-6 sm:px-7 sm:py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-medium lg:text-3xl">
            Ready to transform your school?
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
    </Container>
  );
}
