"use client";

import Introduction from "./Introduction/page";
import Projects from "./Projects/page";
import Sidebar from "./Sidebar/page";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div id="home">
      <div>
        <h1 className="items-center text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          <Typewriter
            options={{
              strings: [                
                "Hello! I am RAHEEL IQBAL.",
                "I am a Front End Developer, Web Designer.",
                "Welcome! to My Portfolio Website.",
                "Enojoy YOUR Visit!",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
              delay: 80,
              
            }}
          />
        </h1>
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
