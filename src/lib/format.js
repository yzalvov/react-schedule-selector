// https://date-fns.org/v1.29.0/docs/I18n
const format = require('date-fns/format')

const locales = {
  en: require('date-fns/locale/en'),
  ru: require('date-fns/locale/ru')
}

const language = navigator.languages !== undefined ? navigator.languages[0] : navigator.language

module.exports = function(date, formatStr, lang) {
  return format(date, formatStr, {
    ...(language && locales[language] ? { locale: locales[language] } : {})
  })
}
