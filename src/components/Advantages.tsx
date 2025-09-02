"use client";

import { BookOpen, GraduationCap, Users, Award, Target } from "lucide-react";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden font-montserrat">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
              APSDC Advantages
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Reason <span className="font-normal">Why Choose Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left advantages */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 lg:justify-end lg:text-right">
              <div className="lg:order-2">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 lg:ml-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Strong Academic Foundation
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  We emphasize quality education with a structured curriculum
                  that nurtures curiosity, knowledge, and critical thinking in
                  every student.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:justify-end lg:text-right">
              <div className="lg:order-2">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 lg:ml-auto">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Holistic Development
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Beyond academics, we focus on extracurriculars, sports, and
                  cultural activities to build confidence and leadership skills.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 lg:justify-end lg:text-right">
              <div className="lg:order-2">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 lg:ml-auto">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Experienced Faculty
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Our dedicated teachers bring knowledge, discipline, and care,
                  ensuring students receive the best guidance at every step.
                </p>
              </div>
            </div>
          </div>

          {/* Center image */}
          <div className="flex justify-center relative">
            <div className="relative">
              <Image
                src="/assets/advantages.png"
                alt="school students"
                width={320}
                height={380}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right advantages */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Values & Discipline
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Rooted in Army traditions, our school instills discipline,
                  respect, integrity, and a strong moral compass in students.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Focus on Excellence
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  We encourage students to aim high and provide them with
                  opportunities to excel academically and in co-curricular
                  fields.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Community & Belonging
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  APS Delhi Cantt fosters a sense of unity and teamwork,
                  creating a supportive environment where every child belongs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
