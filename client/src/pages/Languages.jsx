import React from "react";

const languages = [
  { name: "HTML", desc: "Structure your web content." },
  { name: "CSS", desc: "Style and layout your web pages." },
  { name: "JavaScript", desc: "Make your pages interactive." },
  { name: "Python", desc: "Popular for backend and data science." },
  { name: "C++", desc: "Great for systems and performance-critical apps." },
  { name: "Java", desc: "Widely used in enterprise and Android apps." },
];

export default function Languages() {
  return (
    <div className="p-10 explore">
      <h2 className="text-2xl font-bold mb-4">Languages to Learn</h2>
      <ul className="space-y-4">
        {languages.map((lang, i) => (
          <li key={i} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{lang.name}</h3>
            <p>{lang.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}