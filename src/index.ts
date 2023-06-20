import dotenv from 'dotenv'
import { Commands } from './enums'
import { Bot } from './bot/bot'
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const communityToken: string = process.env.COMMUNTIY_TOKEN || ''
const adminGroupToken: string = process.env.GROUP_TOKEN || ''
const groupAdminChat: number = -890945814

const bot = new Bot(
  communityToken,
  {
    onCallbackQuery: (msg: TelegramBot.CallbackQuery) => {
      const {
        data,
        message: {
          chat: { id: chatId }
        }
      } = msg

      const splittedData = data.split(' ')

      const command = Commands[splittedData[0]]
      const args = splittedData.slice(1)

      // TODO: verify args

      if (command) {
        command(...args)
      }
    },
    onStartText: async (bot: Bot, msg) => {
      const {
        chat: { id: chatId }
      } = msg
      await bot.sendMessage(chatId, 'What would you like to do?', {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'Suggest content', callback_data: 'content' },
              { text: 'Suggest an idea', callback_data: 'idea' }
            ],
            [
              { text: 'Report a post', callback_data: 'post' },
              { text: 'Ban appeal', callback_data: 'appeal' }
            ]
          ],
          one_time_keyboard: true
        }
      })
    }
  },
  {
    polling: {
      interval: 1,
      autoStart: true
    }
  }
)
