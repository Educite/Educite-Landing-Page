import React, { ReactNode } from "react";
import Container from "./container";

interface SectionTitleProps {
  pretitle?: string;
  title?: string;
  children?: ReactNode;
  align?: "default" | "left";
  className?: string;
}

export default function SectionTitle({
  pretitle,
  title,
  children,
  align = "default",
  className = "",
}: SectionTitleProps) {
  const textAlignClass = align === "left" ? "text-left" : "text-center md:text-left";
  
  // Adjust container classes based on alignment
  const containerClasses = align === "left"
    ? `flex flex-col mt-3 sm:mt-4 ${className}`
    : `flex flex-col mt-3 sm:mt-4 md:items-center md:justify-center md:flex-row md:space-x-4 ${className}`;

  // Adjust width based on alignment
  const widthClass = align === "left" ? "w-full" : "w-full md:w-3/4";
  
  if (align === "left") {
    // For left alignment, render without the Container to avoid mx-auto centering
    return (
      <div className={`px-3 py-4 sm:px-4 sm:py-5 md:px-6 lg:px-8 xl:px-0 ${containerClasses}`}>
        <div className={`${widthClass} ${textAlignClass}`}>
          {pretitle && (
            <div className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 uppercase">
              {pretitle}
            </div>
          )}
          {title && (
            <h2 className="max-w-2xl mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              {title}
            </h2>
          )}
          {children && (
            <p className="max-w-2xl py-3 sm:py-4 text-base sm:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              {children}
            </p>
          )}
        </div>
      </div>
    );
  }
  
  // For default alignment, use the Container component
  return (
    <Container className={containerClasses}>
      <div className={`${widthClass} ${textAlignClass}`}>
        {pretitle && (
          <div className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 uppercase">
            {pretitle}
          </div>
        )}
        {title && (
          <h2 className="max-w-2xl mt-2 sm:mt-3 text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {title}
          </h2>
        )}
        {children && (
          <p className="max-w-2xl py-3 sm:py-4 text-base sm:text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {children}
          </p>
        )}
      </div>
    </Container>
  );
}
