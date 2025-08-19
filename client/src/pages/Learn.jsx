import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Learn() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/skills/all").then((res) => {
      setSkills(res.data);
    });
  }, []);

  return (
    <div className="p-10 learn">
      <h2 className="text-xl font-semibold mb-4">Available Skills to Learn</h2>
      <ul>
        {skills.map((s, i) => (
          <li key={i} className="mb-2">{s.skill} — offered by {s.user}</li>
        ))}
      </ul>
    </div>
  );
}