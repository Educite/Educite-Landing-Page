import React, { useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";
import dynamic from 'next/dynamic';

interface FormData {
  apikey: string;
  subject: string;
  from_name: string;
  botcheck: string;
  name: string;
  email: string;
  message: string;
}

// Client-side only component to avoid useLayoutEffect warnings
function PopupWidgetClient() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormData>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit: SubmitHandler<FormData> = async (data, e) => {
    console.log(data);
    await fetch("https://api.yourdomain.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e?.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-40 flex items-center justify-center transition duration-300 bg-indigo-500 rounded-full shadow-lg right-3 sm:right-5 bottom-3 sm:bottom-5 w-12 h-12 sm:w-14 sm:h-14 focus:outline-none hover:bg-indigo-600 focus:bg-indigo-600 ease"
      >
        <span className="sr-only">Open Contact form Widget</span>
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="fixed z-50 bottom-[80px] sm:bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto">
          <div className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
            <div className="flex flex-col items-center justify-center h-24 sm:h-32 p-4 sm:p-5 bg-indigo-600">
              <h3 className="text-base sm:text-lg text-white">How can we help?</h3>
              <p className="text-sm sm:text-base text-white opacity-50">
                We usually respond in a few hours
              </p>
            </div>
            <div className="flex-grow h-full p-4 sm:p-6 overflow-auto bg-gray-50 ">
              {!isSubmitSuccessful && (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <input
                    type="hidden"
                    value="YOUR_ACCESS_KEY_HERE"
                    {...register("apikey")}
                  />
                  <input
                    type="hidden"
                    value={`${userName} sent a message from Educite Kenya`}
                    {...register("subject")}
                  />
                  <input
                    type="hidden"
                    value="Educite Kenya"
                    {...register("from_name")}
                  />
                  <input
                    type="checkbox"
                    className="hidden"
                    style={{ display: "none" }}
                    {...register("botcheck")}></input>

                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="full_name"
                      className="block mb-1 sm:mb-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Full name is required",
                        maxLength: 80,
                      })}
                      className={`w-full px-3 py-2 text-sm placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                        errors.name
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1 text-xs sm:text-sm text-red-400 invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-1 sm:mb-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Enter your email",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      placeholder="you@company.com"
                      className={`w-full px-3 py-2 text-sm placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring   ${
                        errors.email
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                      }`}
                    />

                    {errors.email && (
                      <div className="mt-1 text-xs sm:text-sm text-red-400 invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-1 sm:mb-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Your Message
                    </label>

                    <textarea
                      rows={4}
                      id="message"
                      {...register("message", {
                        required: "Enter your Message",
                      })}
                      placeholder="Your Message"
                      className={`w-full px-3 py-2 text-sm placeholder-gray-300 bg-white border border-gray-300 rounded-md h-24 sm:h-28 focus:outline-none focus:ring   ${
                        errors.message
                          ? "border-red-600 focus:border-red-600 ring-red-100"
                          : "border-gray-300 focus:border-indigo-600 ring-indigo-100"
                      }`}
                      required></textarea>
                    {errors.message && (
                      <div className="mt-1 text-xs sm:text-sm text-red-400 invalid-feedback">
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-2 sm:mb-3">
                    <button
                      type="submit"
                      className="w-full px-3 py-3 sm:py-4 text-sm sm:text-base text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">
                      {isSubmitting ? (
                        <svg
                          className="w-5 h-5 mx-auto text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                  <p
                    className="text-xs text-center text-gray-400"
                    id="result">
                  </p>
                </form>
              )}

              {isSubmitSuccessful && isSuccess && (
                <>
                  <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                    <svg
                      width="50"
                      height="50"
                      className="text-green-300 sm:w-60 sm:h-60"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C56.1283 3.33333 62.1967 4.5404 67.8586 6.88562C73.5204 9.23084 78.6649 12.6683 82.9983 17.0017C87.3317 21.3351 90.7692 26.4796 93.1144 32.1414C95.4596 37.8033 96.6666 43.8716 96.6666 50C96.6666 56.1283 95.4596 62.1967 93.1144 67.8586C90.7692 73.5204 87.3317 78.6649 82.9983 82.9983C78.6649 87.3317 73.5204 90.7692 67.8586 93.1144C62.1967 95.4596 56.1283 96.6667 50 96.6667Z"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                    <h3 className="py-3 sm:py-5 text-lg sm:text-xl text-green-500">
                      Message sent successfully
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 md:px-3">{message}</p>
                    <button
                      className="mt-4 sm:mt-6 text-sm sm:text-base text-indigo-600 focus:outline-none"
                      onClick={() => {
                        reset();
                        setIsOpen(false);
                      }}>
                      Go back
                    </button>
                  </div>
                </>
              )}

              {isSubmitSuccessful && !isSuccess && (
                <div className="flex flex-col items-center justify-center h-full text-center text-white rounded-md">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 97 97"
                    className="text-red-400 sm:w-60 sm:h-60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C54.3473 1.66667 60.4156 2.87374 66.0775 5.21896C71.7394 7.56418 76.8838 11.0016 81.2173 15.335C85.5507 19.6684 88.9881 24.8129 91.3333 30.4748C93.6786 36.1366 94.8856 42.205 94.8856 48.3333C94.8856 54.4617 93.6786 60.53 91.3333 66.1919C88.9881 71.8538 85.5507 76.9982 81.2173 81.3316C76.8838 85.6651 71.7394 89.1025 66.0775 91.4477C60.4156 93.7929 54.3473 95 48.2189 95Z"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                  </svg>
                  <h3 className="text-lg sm:text-xl text-red-400 py-4 sm:py-7">
                    Oops, Something went wrong!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 md:px-3">{message}</p>
                  <button
                    className="mt-4 sm:mt-6 text-sm sm:text-base text-indigo-600 focus:outline-none"
                    onClick={() => reset()}>
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Use dynamic import with ssr: false to ensure component only renders on client
const PopupWidget = dynamic(() => Promise.resolve(PopupWidgetClient), {
  ssr: false,
});

export default PopupWidget;
