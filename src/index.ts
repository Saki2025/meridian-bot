import express from 'express';
import { Telegraf, Markup } from 'telegraf';
import dotenv from 'dotenv';
import yahooFinance from 'yahoo-finance2';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bot is alive and running!');
});

app.listen(PORT, () => {
  console.log( + 'Server is listening on port ' + );
});

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error('BOT_TOKEN environment variable is missing!');
}

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply('Welcome! Meridian Bot is live and running.');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
