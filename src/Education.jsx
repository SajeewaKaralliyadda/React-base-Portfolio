import { FaGraduationCap, FaCertificate, FaAward } from "react-icons/fa";

const educationData = {
  formal: [
    {
      title: "BSc (Hons) in Information Technology & Managment",
      institution: "University of Moratuwa",
      year: "2022 - Present",
    },
    {
      title: "Advanced Level",
      institution: "  Darmaraja College, Kandy",
      year: "2018 - 2020",
    },
    {
      title: "Ordinary Level",
      institution: "Teldeniya National School",
      year: "2017",
    },
  ],
  diplomas: [
    {
      title: "Diploma in English",
      institution: "SIBA Campus, Pallekele",
      year: "2018",
    },
    {
      title: "Diploma in Information Technology",
      institution: "SIBA Campus, Pallekele",
      year: "2018",
    },
  ],
  certifications: [
    {
      title: "Programming in Python - 1. Python for Beginners",
      institution: "Open Learning Platform at University of Moratuwa",
      year: "2022",
    },
    {
      title: " Web Development - 1. Web Design for Beginners",
      institution: "Open Learning Platform at University of Moratuwa",
      year: "2022",
    },
  ],
};

export default function Education() {
  const renderCards = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 hover:shadow-lg transition">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{item.institution}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {item.year}
        </span>
      </div>
    ));

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Formal Education */}
        <h2 className="flex items-center text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          <FaGraduationCap className="mr-3 text-blue-500" /> Formal Education
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {renderCards(educationData.formal)}
        </div>

        {/* Diplomas */}
        <h2 className="flex items-center text-2xl font-bold mt-12 mb-6 text-gray-800 dark:text-white">
          <FaCertificate className="mr-3 text-green-500" /> Diplomas
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {renderCards(educationData.diplomas)}
        </div>

        {/* Certifications */}
        <h2 className="flex items-center text-2xl font-bold mt-12 mb-6 text-gray-800 dark:text-white">
          <FaAward className="mr-3 text-yellow-500" /> Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {renderCards(educationData.certifications)}
        </div>
      </div>
    </section>
  );
}
