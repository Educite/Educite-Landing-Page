import React, { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-5 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
