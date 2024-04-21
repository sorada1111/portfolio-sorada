import React, { useEffect } from "react";
import Layout from "../components/Layout";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiMongodb,
  SiCsharp,
  SiTypescript,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFileSqlBold } from "react-icons/pi";
import { TbBrandKotlin } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import AOS from "aos";
AOS.init({
  duration: 1000,
});

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 mx-10 bg-theme border-white transform rotate-12 md:rotate-0">
            <div className="h-1/2 ">
              <dotlottie-player
                src="https://lottie.host/003f6d8f-6ff5-4b14-87e6-8d87d4900f68/Nzh2BbWE89.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="mx-5 px-2 border-l-4 text-white divide-white divide-y-2 max-w-max font-bold md:px-2">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hii, I am <br />
                <b className="text-yellow-500 ">Sorada Prathan</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-left">
                Software <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="mt-20">
          <h1
            className="text-4xl text-blue-800 font-bold text-center my-8"
            data-aos="slide-up"
          >
            Technologies I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20"
            />
            <FaAngular
              size={180}
              color="red"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaVuejs
              size={180}
              color="#3fb37f"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJava
              size={180}
              color="#f89412"
              className="w-full text-center mt-20"
            />

            <SiSpring
              size={180}
              color="#5fba2e"
              className="w-full text-center mt-20 animate-bounce"
            />
            <SiSpringboot
              size={180}
              color="#5fba2e"
              className="w-full text-center mt-20 "
            />
            <SiCsharp
              size={180}
              color="#963dad"
              className="w-full text-center mt-20 "
            />
            <TbBrandKotlin
              size={180}
              color="#00afff"
              className="w-full text-center mt-20 animate-bounce"
            />
            <SiTypescript
              size={180}
              color="#0078cf"
              className="w-full text-center mt-20"
            />
            <FaBootstrap
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaNodeJs
              size={180}
              color="#519a41"
              className="w-full text-center mt-20 animate-bounce"
            />
            <RiJavascriptFill
              size={180}
              color="#f9ee13"
              className="w-full text-center mt-20"
            />

            <FaHtml5
              size={180}
              color="#e54c21"
              className="w-full text-center mt-20 animate-bounce"
            />
            <SiTailwindcss
              size={180}
              color="#39abac"
              className="w-full text-center mt-20 "
            />
            <FaCss3
              size={180}
              color="dodgerblue"
              className="w-full text-center mt-20"
            />
            <SiMongodb
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <PiFileSqlBold
              size={180}
              color="mediumblue"
              className="w-full text-center mt-20 "
            />
            <FaAws
              size={180}
              color="#222d3d"
              className="w-full text-center mt-20 animate-bounce"
            />
            <GrGraphQl
              size={180}
              color="#e536ab"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaGitAlt
              size={180}
              color="orangered"
              className="w-full text-center mt-20 "
            />
          </div>
        </div>

        {/* Java Buff */}
        <div className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10">
              Yes, You Are Right...I am a Java Buff
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in-up">
              <dotlottie-player
                src="https://lottie.host/430fc472-5193-41fc-a153-4dc5493ddf6c/SwXCXRDk7G.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <p className="text-xl my-10 font-semibold md:px-5 px-14 py-10 text-justify">
              Java is a versatile programming language created by Sun
              Microsystems. It is designed to work on any platform without the
              need for recompilation, embodying the principle of "write once,
              run anywhere." Java is widely used for building enterprise
              software, mobile apps, and web applications.
            </p>
          </div>
        </div>

        {/* Dev Stack Section */}
        <div className="my-20">
          <div className="text-center h-52 bg-dev">
            <h1 className="text-white font-bold text-4xl py-10">
              My DEV Stack
            </h1>
          </div>
          <div className="md:mx-5 mx-32 shadow-xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <dotlottie-player
                src="https://lottie.host/762280b3-1ee9-4a23-811a-728a666b4ef4/ZkuIs0s37F.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="font-bold text-xl">Front End</h1>
                <hr />
                <p className="font-semibold mt-2">HTML/CSS</p>
                <p className="font-semibold mt-2">ReactJS</p>
                <p className="font-semibold mt-2">Angular</p>
                <p className="font-semibold mt-2">VueJS</p>
                <p className="font-semibold mt-2">Javascript</p>
                <p className="font-semibold mt-2">Redux</p>
              </div>

              <div className="text-center">
                <h1 className="font-bold text-xl">UI / UX</h1>
                <hr />
                <p className="font-semibold mt-2">Boostrap</p>
                <p className="font-semibold mt-2">Tailwind</p>
                <p className="font-semibold mt-2">Ant Design</p>
                <p className="font-semibold mt-2">Material UI</p>
                <p className="font-semibold mt-2">Semantic UI</p>
                <p className="font-semibold mt-2">Vuetify</p>
              </div>

              <div className="text-right">
                <h1 className="font-bold text-xl">Back End and DB</h1>
                <hr />
                <p className="font-semibold mt-2">NodeJS</p>
                <p className="font-semibold mt-2">Spring Boot</p>
                <p className="font-semibold mt-2">ExpressJS</p>
                <p className="font-semibold mt-2">MongoDB</p>
                <p className="font-semibold mt-2">MySQL</p>
                <p className="font-semibold mt-2">PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center font-bold">
            Who is Sorada Prathan?
          </h1>
          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <dotlottie-player
                src="https://lottie.host/46c90ec3-d86e-45ef-b7f0-f207b9c49219/R1gPXAipBW.json"
                background="transparent"
                speed="1"
                direction="1"
                playMode="normal"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">
                Hi There!
                <hr />
                <pre className="text-xl my-5 font-mont font-semibold">
                  {JSON.stringify(
                    {
                      Name: "Sorada Prathan",
                      Age: null,
                      Experience: "5+ years",
                      Position: "Java Developer",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Home;
