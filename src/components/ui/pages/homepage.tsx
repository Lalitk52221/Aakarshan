"use client";
import UserButton from "@/components/user-button";
import { SessionProvider } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

    <div className="container mx-auto p-6">
      <SessionProvider>
        {/* Navbar */}
        <nav className="flex justify-center gap-5 md:justify-between items-center py-4 bg-white text-black px-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Aakarshan</h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          <ul
            className={`flex-col font-semibold md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:border-0 md:static md:bg-transparent w-32 md:w-auto right-5 top-24 md:top-auto md:opacity-0 transition-all text-xl ${
              isMenuOpen ? "opacity-100 transition-all bg-white/50 rounded-lg p-2 backdrop-blur border z-10 " : "opacity-0"
            } md:opacity-100 transition-all`}
          >
            <li>
              <a
                href="#courses"
                onClick={(e) => handleSmoothScroll(e, "courses")}
                className={`hover:bg-blue-500 ${isMenuOpen && "border-b-2 text-base"} hover:text-white px-4 py-2 rounded transition-all block md:inline`}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className={`hover:bg-blue-500 ${isMenuOpen && "border-b-2 text-base"} hover:text-white px-4 py-2 rounded transition-all block md:inline`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={`hover:bg-blue-500 ${isMenuOpen && "text-base"} hover:text-white px-4 py-2 rounded transition-all block md:inline`}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="">
            <UserButton />
          </div>
        </nav>

        {/* Header */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-blue-600 animate__animated animate__fadeInDown">
            Aakarshan Skill Development Center
          </h1>
          <p className="text-lg text-gray-700 mt-2 animate__animated animate__fadeInUp">
            Empowering Skills, Transforming Lives
          </p>
        </header>

        {/* Courses Section */}
        <section id="courses" className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* Course 1 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/computer-training.jpg"
                alt="Computer Training"
                width={500}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Computer Training
              </h3>
              <p className="text-gray-600 mt-2">
                Learn essential computer skills to excel in the digital world.
              </p>
            </div>
            {/* Course 2 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/Tally.jpg"
                alt="Tally"
                width={500}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">Tally</h3>
              <p className="text-gray-600 mt-2">
                Master Tally for accounting and financial management.
              </p>
            </div>
            {/* Course 3 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/Spoken.jpg"
                alt="Spoken English"
                width={500}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Spoken English
              </h3>
              <p className="text-gray-600 mt-2">
                Enhance your communication skills with our Spoken English
                course.
              </p>
            </div>
            {/* Course 4 */}
            <div className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/Beauty.jpg"
                alt="Beauty & Wellness"
                width={500}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                Beauty & Wellness
              </h3>
              <p className="text-gray-600 mt-2">
                Learn the art of beauty and wellness for a rewarding career.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            About Us
          </h2>
          <p className="text-gray-700 mt-4 text-center max-w-2xl mx-auto">
            Aakarshan Skill Development Center is dedicated to providing
            high-quality training in various fields to empower individuals and
            help them achieve their career goals. Our experienced trainers and
            comprehensive courses ensure that our students are well-prepared
            for the challenges of the professional world.
          </p>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="text-center py-6 mt-10 border-t bg-gray-100"
        >
          <p className="text-gray-600">
            &copy; 2025 Aakarshan Skill Development Center. All rights reserved.
          </p>
        </footer>
      </SessionProvider>
    </div>

  );
};

export default HomePage;
