"use client";

import Image from "next/image";

export default function PhotoGallery() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-semibold text-sky-900 text-balance">
            Photo Gallery
          </h3>
          <a
            href="#"
            className="text font-medium text-amber-600 hover:underline"
          >
            View all photos
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/assets/acad.png"
              alt="Classroom activity"
              width={400}
              height={176}
              className="w-full h-44 object-cover"
            />
            <figcaption className="p-3 text-gray-700">
              Classroom Activity
            </figcaption>
          </figure>

          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/assets/aps.png"
              alt="Science fair"
              width={400}
              height={176}
              className="w-full h-44 object-cover"
            />
            <figcaption className="p-3 text-gray-700">
              Science Fair
            </figcaption>
          </figure>

          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/assets/slider1.png"
              alt="Sports day"
              width={400}
              height={176}
              className="w-full h-44 object-cover"
            />
            <figcaption className="p-3  text-gray-700">
              Sports Day
            </figcaption>
          </figure>

          <figure className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            <Image
              src="/assets/slider2.png"
              alt="Art class"
              width={400}
              height={176}
              className="w-full h-44 object-cover"
            />
            <figcaption className="p-3 text-gray-700">
              Art Class
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
