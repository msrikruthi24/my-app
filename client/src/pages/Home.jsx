import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
  return (
    <div className="p-10 homepage">
      <h1 className="text-4xl font-bold mb-4">SkillLoop</h1>
      <p className="text-xl mb-6">Exchange and Learn Programming Languages with Your Peers</p>
      <br/>
      <div className="space-x-4">
        <Link to="/teach" className="bg-green-600 text-white px-4 py-2 rounded">Teach</Link><br/>
        <Link to="/learn" className="bg-indigo-600 text-white px-4 py-2 rounded">Learn</Link><br/>
        <Link to="/languages" className="bg-blue-600 text-white px-4 py-2 rounded">Explore Languages</Link><br/><br/>
        <div>Number of Pages = 4</div>
      </div>
    </div>
  );
}