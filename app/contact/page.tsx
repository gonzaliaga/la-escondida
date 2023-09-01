"use client"
import { useState, } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");


  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "126d9267-898b-4c48-b8b5-8e6ff3050cf3";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Establecimiento La Escondida",
      subject: "Mensaje desde la Página Web!!!",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  return (
    <div className="h-screen grid grid-cols-2 gap-4 mt-10 mx-6">
      <div className="mt-44 ml-10 align-middle justify-center ">
        <span className=" text-4xl font-bold drop-shadow-lg">Conversemos</span>
        <p className="text-sm">déjame tus datos y nos conectamos</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-20 mb-10 box-content drop-shadow-md">
        <input
          type="checkbox"
          id=""
          className="hidden"
          style={{ display: "none" }}
          {...register("botcheck")}></input>

        <div className="mb-5">
          <input
            type="text"
            placeholder="Nombre Completo"
            autoComplete="false"
            className={`w-80 px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${errors.name
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("name", {
              required: "Se requiere su nombre completo",
              maxLength: 80,
            })}
          />
          {errors.name && (
            <div className="mt-1 text-red-600">
              <small>{message}</small>
            </div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email"
            /* name="email" */
            autoComplete="false"
            className={`w-80 px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("email", {
              required: "Ingrese su Email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Por favor ingrese un Email valedero",
              },
            })}
          />
          {errors.email ? (
            <div className="mt-1 text-red-600">
              <small>{message}</small>
            </div>
          ) : null}
        </div>

        <div className="mb-3">
          <textarea
            /* name="message" */
            placeholder="Ingrese su Mensaje"
            className={`w-80 px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
            {...register("message", {
              required: "Ingrese el Mensaje",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{message}</small>
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-50 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black ">
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
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
            "Enviar Mensaje"
          )}
        </button>

      </form>

      {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "El Mensaje se envio!"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Algo sucedio, envialo nuevamente"}
        </div>
      )}
    </div>
  );
}
