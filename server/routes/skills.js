import express from "express";
import Skill from "../models/skill.js";
const router = express.Router();

router.post("/offer", async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.status(201).send(skill);
});

router.get("/all", async (req, res) => {
  const skills = await Skill.find();
  res.send(skills);
});

export default router;