import React from "react";
import Container from "./container";

export default function Video() {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden my-8 sm:my-12 lg:mb-20 rounded-xl sm:rounded-2xl">
        <div className="relative bg-indigo-300 aspect-w-16 aspect-h-9 rounded-xl sm:rounded-2xl">
          <iframe
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/A1Fz7jzvtWY?controls=0&rel=0&showinfo=0"
            title="Educite Kenya Platform Updated Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
