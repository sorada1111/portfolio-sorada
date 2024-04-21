import React, { useEffect } from "react";
import Layout from "../components/Layout";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-4">
          Contact me to know more
        </h1>

        {/* Ensure vertical stacking on all small devices */}
        <div className="w-full max-w-4xl">
          {/* Lottie animation container with controlled size */}
          <div className="w-full max-w-md mx-auto mb-6">
            {" "}
            {/* mb-6 adds margin-bottom */}
            <dotlottie-player
              src="https://lottie.host/41bbd03c-5a62-4fe9-9f52-9acaf87342ad/8mDFggEjjS.json"
              background="transparent"
              speed="1"
              direction="1"
              playMode="normal"
              loop
              autoplay
              className="w-full h-auto"
            ></dotlottie-player>
          </div>

          {/* Contact form */}
          <div className="w-full max-w-md mx-auto bg-gray-50 p-6 shadow-2xl rounded-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <textarea
              placeholder="Query"
              className="w-full border border-gray-300 rounded p-2 mb-4"
              style={{ height: "150px" }}
            />
            <button className="w-full bg-red-500 rounded text-white py-2">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Contact;
