import TelegramBot, {
  ConstructorOptions,
  SendMessageOptions
} from 'node-telegram-bot-api'
import { CreateBotCallbacksInterface } from '../interfaces'

export class Bot {
  private readonly _bot: TelegramBot

  constructor(
    token: string,
    createBotCallbacks: CreateBotCallbacksInterface,
    options?: ConstructorOptions
  ) {
    this._bot = new TelegramBot(token, options)

    const { onCallbackQuery, onStartText } = createBotCallbacks

    this._bot.on('callback_query', (msg) => onCallbackQuery(msg))

    this._bot.onText(/\/start/, (msg) => onStartText(this._bot, msg))
  }

  async sendMessage(
    chatId: number,
    text: string,
    options?: SendMessageOptions
  ) {
    await this._bot.sendMessage(chatId, text, options)
  }
}
