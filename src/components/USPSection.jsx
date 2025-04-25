import React from "react";

const uspItems = [
  {
    heading: "Consistently High Quality",
    description:
      "We offer top-tier services with a team of experienced consultants and high-quality delivery.",
  },
  {
    heading: "Round the Clock Availability",
    description:
      "Our experts are available 24/7 — whether it's day, night, weekend, or a holiday.",
  },
  {
    heading: "Faster than the Fastest",
    description:
      "Need it done yesterday? We deliver creative and presentation assets quicker than you expect.",
  },
  {
    heading: "Information Security",
    description:
      "We follow ISO 27001:2022 standards to keep your data safe and secure at all levels.",
  },
];

const USPSection = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Static Side */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <div>
            <h2 className="text-4xl font-bold">10</h2>
            <p className="text-gray-600">Min response time</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">20</h2>
            <p className="text-gray-600">Years of industry work</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">30</h2>
            <p className="text-gray-600">Countries supported</p>
          </div>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-2/3">
          {uspItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2">{item.heading}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
              <a
                href="#"
                className="text-blue-500 text-sm mt-2 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
