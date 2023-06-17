const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { openAIConversation, data2 } = require("./services/openAI");
const promptData = require("./data.json");
const sanitizeData = require("./services/sanitizeData");

app.use(express.json());

app.get("/", async (req, res, next) => {
  try {
    const dataPrompt = await sanitizeData(promptData);
    res.status(200).send(dataPrompt);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error calling OpenAI Conversation");
  }
});

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`Server started, Port ${PORT}`);
});
