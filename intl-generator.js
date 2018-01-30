let manageTranslations = require('react-intl-translations-manager').default
let {
  readMessageFiles,
  createSingleMessagesFile,
  getDefaultMessages
} = require('react-intl-translations-manager')

const messagesDirectory = 'src/intl/generated/'
const translationsDirectory = 'src/intl/locales'

// Output Default Messages (EN)
const extractedMessages = readMessageFiles(messagesDirectory)

createSingleMessagesFile({
  messages: getDefaultMessages(extractedMessages).messages,
  directory: translationsDirectory,
  fileName: 'en.json'
});

// Manage the Translations
manageTranslations({
  messagesDirectory,
  translationsDirectory,
  languages: ['fr']
});