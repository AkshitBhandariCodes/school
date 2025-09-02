"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight,  } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      quote:
        "You see things & you say 'Why'? But I dream things that never were and I say 'Why not'?",
      image: "/assets/slider1.png",
      bgImage: "/assets/slider1.png",
      description: "Education is the movement from darkness to light...",
      gradient: "from-purple-600/90 to-purple-500/90",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      image: "/assets/slider2.png",
      bgImage: "/assets/slider2.png",
      description: "Inspiring minds to reach their full potential...",
      gradient: "from-orange-600/90 to-orange-500/90",
    },
    {
      quote: "Education is not preparation for life; education is life itself.",
      image: "/assets/slider3.png",
      bgImage: "/assets/slider3.png",
      description: "Building tomorrow's leaders today...",
      gradient: "from-teal-600/90 to-teal-500/90",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Army Public School
              </h1>
              <p className="text-sm text-gray-600">Delhi Cantt</p>
            </div>
          </div>

          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded">
            Parent/Student/Teacher Login →
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <a href="#" className="hover:text-purple-300 transition-colors">
              OVERVIEW
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              ACADEMICS
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              LIFE AT APS DC
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              TEAM APS DC
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              ADMISSIONS
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              EVENTS
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              GALLERY
            </a>
            <a href="#" className="hover:text-purple-300 transition-colors">
              GET A QUOTE
            </a>
          </div>
        </div>
      </nav>

      {/* Hero/Sliding Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} z-10 transition-all duration-1000`}
        ></div>
        <Image
          src={slides[currentSlide].bgImage || "/placeholder.svg"}
          alt="School background"
          fill
          className="absolute inset-0 object-cover transition-all duration-1000"
        />

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Quote Section */}
            <div className="text-white">
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-6 transition-all duration-500">
                {slides[currentSlide].quote}
              </blockquote>

              {/* Slide Controls */}
              <div className="flex space-x-2 items-center">
                <button
                  onClick={prevSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                {/* <button className="bg-white text-black px-4 py-2 rounded">
                  <Play className="w-4 h-4" />
                </button> */}
                <button
                  onClick={nextSlide}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="flex space-x-2 ml-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Student Image */}
            <div className="text-center">
              <Image
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt="Student"
                width={400}
                height={400}
                className="mx-auto rounded-lg shadow-lg transition-all duration-500 max-w-sm h-auto"
              />
              <p className="text-white mt-4 text-lg transition-all duration-500">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Welcome Text */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-purple-300 pb-2">
                 WELCOME TO ARMY PUBLIC SCHOOL, DELHI CANTT 
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
               It is our privilege to welcome you to Army Public School, Delhi Cantt – a premier
                institution dedicated to academic excellence and holistic
                development. As one of the leading schools in Delhi, we provide
                a nurturing environment that fosters discipline, values, and
                all-round growth for every child.
              </p>
            </div>

            {/* Admissions CTA */}
            <div className="bg-teal-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Admissions Open</h3>
              <Button className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded font-semibold">
                Apply Now →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      
    </div>
  );
}
