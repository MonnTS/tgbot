import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const token: string = process.env.TOKEN || ''
const groupAdminChat: number = -890945814

const bot: TelegramBot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true
  }
})

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'What would you like to do?', {
    reply_markup: {
      keyboard: [
        [{ text: 'Suggest content' }, { text: 'Suggest an idea' }],
        [{ text: 'Report recent post' }, { text: 'Ban appeal' }]
      ],
      one_time_keyboard: true
    }
  })
})

bot.on('message', (msg) => {
  const { chat, text } = msg

  switch (text) {
    case 'Suggest content':
      break
    case 'Suggest an idea':
      break
    case 'Report recent post':
      break
    case 'Ban appeal':
      break
    default:
      break
  }
})
