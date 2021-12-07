import React, { useState, useEffect } from "react";
import Link from "next/link";
import userData from "@constants/data";
import { useRouter } from 'next/router';
import useAboutMe from '../hooks/useAboutMe'
import es from "../locales/es";
import en from "../locales/en";
import { map } from "lodash";

function AboutMe() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'es' ? es : en;



  const { loading, aboutMe, getAboutMe } = useAboutMe()
  useEffect(async () => { getAboutMe(); }, []);
  console.log(aboutMe);

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          {t.aboutme}.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {t.intro}.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {t.contact}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {t.contactintro}{" "}
                <a
                  href="/contact"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Correo
                </a>{" "}
                {t.lojuro}.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                {t.oportunidad}
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                {t.jobs1}{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  {t.cv}
                </a>{" "}
                {t.jobs}.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              {t.social}
            </h1>
            <div className="mt-4 ml-4">
              {/* <div className="flex flex-row justify-start items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div> */}
              <div className="flex flex-row justify-start items-center">
                <a target="_blank"
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a target="_blank"
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a target="_blank"
                  href={userData.socialLinks.twitter}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">

            {map(aboutMe, ({ description_p1, description_p2, description_p3, about_image }, index) => (
              <div>
                <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                  {description_p1}
                </p>
                <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                  {description_p2}
                </p>
                <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                  {description_p3}
                </p>
                <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                  {t.pila}
                </h1>
                <div className="flex flex-row flex-wrap mt-8">
                  {map(about_image, (image, index) => (
                    <img key={index} src={image.image} alt={image.alt_text} 
                      className="h-20 w-20 mx-4 my-4"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}






export default AboutMe