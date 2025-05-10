import Image from "next/image";
import React, { ReactNode } from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

interface MarkProps {
  children: ReactNode;
}

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-5 md:gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-10 md:py-14 dark:bg-gray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-100">
              Educite has <Mark>transformed</Mark> how we manage our administrative tasks at our school in Nairobi. The time saved has allowed our teachers to focus more on student engagement.
            </p>

            <Avatar
              image={userOneImg}
              name="Catherine Wanjiku"
              title="Principal, Alliance High School, Nairobi"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-10 md:py-14 dark:bg-gray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-100">
              The <Mark>parent communication</Mark> features have significantly improved our school-home relationship, especially for families in remote areas of Nakuru County.
            </p>

            <Avatar
              image={userTwoImg}
              name="John Odhiambo"
              title="Technology Director, Moi Girls Secondary School, Eldoret"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-10 md:py-14 dark:bg-gray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-100">
              As a parent, the <Mark>real-time updates</Mark> through SMS notifications have been invaluable for tracking my children's attendance and academic progress.
            </p>

            <Avatar
              image={userThreeImg}
              name="Esther Kamau"
              title="Parent, Brookhouse School, Karen"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center mt-6 md:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 sm:w-14 sm:h-14">
        <Image
          src={props.image}
          width={40}
          height={40}
          alt="Avatar"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{props.name}</div>
        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: MarkProps) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-2 sm:ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
