import { Commands } from '../enums'
import {
  handleContentCommand,
  handleIdeaCommand,
  handlePostCommand,
  handleAppealCommand
} from './commands'

export const commandsHandlersMap = {
  [Commands.CONTENT]: handleContentCommand,
  [Commands.IDEA]: handleIdeaCommand,
  [Commands.POST]: handlePostCommand,
  [Commands.APPEAL]: handleAppealCommand
}
