import { sendMessage, sendPhoto } from "./bot.js";

import { insertMatch, CheckMatches, insertTeam } from "../database/queries.js";

export async function handleMessage(msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    insertTeam(chatId);
    await sendMessage(chatId, "Hello, We are listening to tickets now");
  } else {
    await sendMessage(
      chatId,
      "Please choose a valid option Or your remove + from your number"
    );
  }
}

export async function sendMatchNotifications(events, chatId) {
  for (const event of events) {
    await handleMatch(chatId, event);
  }
}

async function handleMatch(chatId, item) {
  const matchId = item.ticketingUrlSlug;

  try {
    const matchStatus = CheckMatches(chatId, matchId);
    if (!matchStatus) {
      const imageUrl = item.image31?.url || item.image11?.url;
      if (imageUrl) {
        await sendPhoto(chatId, imageUrl, {
          caption: `Tickets for ${item.title} are available on the website now. You can boot it from here https://webook.com/en/events/${item.ticketingUrlSlug}/book`,
        });
      }
      insertMatch(chatId, matchId);
    }
  } catch (error) {
    console.error("Error handling match:", error);
  }
}
