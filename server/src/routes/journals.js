const express = require("express");
const AES = require("crypto-js/aes");
const Journal = require("../models/Journal");

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, entryText } = req.body;

  const encryptedText = AES.encrypt(entryText, process.env.AES_SECRET).toString();
  const journal = await Journal.create({ userId, entryText: encryptedText });
  res.status(201).json(journal);
});

router.get("/", async (req, res) => {
  const journals = await Journal.find({ userId: req.user.id });
  res.json(journals);
});

module.exports = router;

