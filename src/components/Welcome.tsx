"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-purple-600 pb-2">
                WHY APS DC
              </h3>
              <Image
                src="/assets/aps.png"
                alt="Students studying"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">
                Army Public School Delhi Cantt is committed to academic
                excellence, discipline, and holistic development, shaping future
                leaders.
              </p>
              <Button
                variant="outline"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                More
              </Button>
            </div>

            {/* Infrastructure */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-orange-600 pb-2">
                INFRASTRUCTURE
              </h3>
              <Image
                src="/assets/infra.png"
                alt="School building"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">
                With modern classrooms, advanced labs, a vast library, and
                state-of-the-art sports facilities, we provide an environment
                where learning thrives.
              </p>
              <Button
                variant="outline"
                className="bg-orange-600 text-white hover:bg-orange-700"
              >
                More
              </Button>
            </div>

            {/* Admission */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-teal-600 pb-2">
                ADMISSION
              </h3>
              <Image
                src="/assets/slider3.png"
                alt="Student studying"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">
                Join our vibrant learning community where every child is
                encouraged to explore, innovate, and excel. Admission is now
                open for the upcoming session.
              </p>
              <Button
                variant="outline"
                className="bg-teal-600 text-white hover:bg-teal-700"
              >
                More
              </Button>
            </div>

            {/* Academics */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-purple-600 pb-2">
                ACADEMICS
              </h3>
              <Image
                src="/assets/acad.png"
                alt="Classroom"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">
                Our curriculum blends academic rigor with creativity, focusing
                on 21st-century skills to prepare students for higher education
                and beyond.
              </p>
              <Button
                variant="outline"
                className="bg-purple-600 text-white hover:bg-purple-700"
              >
                More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
