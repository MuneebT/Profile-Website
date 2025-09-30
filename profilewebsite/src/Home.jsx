import React from "react";
import img from "./assets/img.jpg";

const Home = () => {
  return (
    <section className="min-h-screen px-8 md:px-20 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Hi, I'm</h2>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Muneeb Tariq</h1>

          <div className="text-gray-800 font-medium space-y-1 mb-6">
            <p>I'm a software engineer</p>
            <p>specializing in building</p>
            <p>exceptional digital</p>
            <p>experiences</p>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium shadow-sm">
            View Work
          </button>
        </div>

        
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          
          <img
            src={img}
            alt="Muneeb"
            className="flex-shrink-0 w-64 md:w-96 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-black font-bold pt-10 pr-150">About Me</h1>
        <div className="font-bold text-left pl-30 pt-5 text-gray-900  ">
        <pre>Hi, I’m Muneeb Tariq, a Software Engineering student at FAST NUCES Lahore with a strong passion for</pre>
        <pre>creating impactful digital solutions.I specialize in mobile app development with Flutter,full-stack</pre>
        <pre>web development using the MERN stack, and game development with Unity.I enjoy bringing ideas to life</pre>
        <pre>whether it’s building seamless user experiences, scalable web apps, or immersive game mechanics.My journey</pre>
        <pre>in software engineering has helped me sharpen my problem-solving, design, and programming skills,and I’m </pre>
        <pre>always eager to explore new technologies.Beyond academics, I love working on projects that challenge me to</pre>
        <pre>think creatively, collaborate effectively, and push the limits of what technology can do.</pre>
        
        </div>
      </div>
    </section>
  );
};

export default Home;
