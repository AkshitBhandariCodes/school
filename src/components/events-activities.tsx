import Image from "next/image";

export default function EventsActivities() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-semibold text-gray-900 m-2 p-2">Events & Activities</h3>
          <a href="#" className="text-sm font-medium text-amber-600 hover:underline">
            Full calendar
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <ol className="relative border-s-2 border-sky-700 pl-6 space-y-8">
              <li>
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-sky-700" aria-hidden />
                <h4 className="text-xl font-semibold text-gray-900">27 Dec, 2011 — NASA Space Camp</h4>
                <p className=" text-gray-700 leading-6">
                  APS DC trip to NASA Space Camp USA. Great success!
                </p>
              </li>

              <li>
                <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-sky-700" aria-hidden />
                <h4 className="text-xl font-semibold text-gray-900">25 Jan, 2011 — Science Exhibition</h4>
                <p className=" text-gray-700 leading-6">
                  Students presented innovative projects and experiments to parents and guests.
                </p>
              </li>

              <li>
                <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-sky-700" aria-hidden />
                <h4 className="text-xl font-semibold text-gray-900">17 Mar, 2011 — Sports Meet</h4>
                <p className=" text-gray-700 leading-6">
                  Track, field, and team events across houses celebrating sportsmanship.
                </p>
              </li>
            </ol>
          </div>

          {/* Teaser Video/Image */}
          <div>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image
                src="/assets/acad.png"
                alt="Outdoor Activity"
                width={600}
                height={300}
                className="w-full h-56 object-cover"
                priority
              />
              <div className="p-4">
                <p className=" text-gray-700">
                  Highlights from our latest activities. Join us to experience vibrant campus life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
