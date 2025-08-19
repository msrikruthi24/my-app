import React, { useState } from "react";
import axios from "axios";

export default function Teach() {
  const [skill, setSkill] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/skills/offer", {
      skill,
      type: "teach",
      user: "demo@example.com",
    });
    setSkill("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <h2 className="text-xl font-semibold mb-4">What can you teach?</h2>
      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        className="border p-2 mr-2"
        placeholder="e.g. ReactJS"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}