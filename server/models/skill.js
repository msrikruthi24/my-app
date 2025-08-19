import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  user: String,
  skill: String,
  type: String,
  availability: String,
});

export default mongoose.model("Skill", SkillSchema);