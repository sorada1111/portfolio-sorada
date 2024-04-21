import React, { useEffect } from "react";
import Layout from "../components/Layout";

export function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      {/* Content container with responsive top margin and padding */}
      <div className="mt-14 md:mt-20 lg:mt-24 px-4 md:px-8">
        <h1 className="text-4xl md:text-2xl lg:text-4xl font-bold text-gray-800 text-center mb-4">
          Resume
        </h1>
        {/* PDF embed container with responsive height */}
        <div
          className="relative overflow-hidden"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <embed
            src="/spResume.pdf"
            type="application/pdf"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </Layout>
  );
}
export default Resume;
