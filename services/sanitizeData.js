const openAiConversation = require("./openAI");
const sanitizeData = async (data) => {
  let citations = [];
  let gptPrompots = [];
  for (let i = 0; i < data.length; i++) {
    const { article_title, article_url, best_practices } = data[i];
    citations.push({
      article_title,
      article_url,
    });
    gptPrompots.push({
      index: i,
      best_practices,
    });
  }
  const combinedBestPractices = await openAiConversation(gptPrompots);
  return {
    citations,
    combinedBestPractices,
  };
};

module.exports = sanitizeData;
