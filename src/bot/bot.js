import TelegramBot from "node-telegram-bot-api";
import { telegramConfig } from "../config/config.js";
import { handleMessage } from "./handlers.js";

const bot = new TelegramBot(telegramConfig.token, { polling: true });

export function startBot() {
  bot.on("message", handleMessage);
}

export async function sendMessage(chatId, message) {
  return bot.sendMessage(chatId, message);
}
export function sendMessageOption(chatId, message, options) {
  return bot.sendMessage(chatId, message, options);
}
export async function sendPhoto(chatId, photo, options) {
  return bot.sendPhoto(chatId, photo, options);
}
