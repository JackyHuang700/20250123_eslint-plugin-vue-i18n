import { createI18n, type I18nOptions } from 'vue-i18n'
import enUS from './locales/en-US.json'
import zhTW from './locales/zh-TW.json'

export type MessageSchema = typeof enUS

export enum LOCALE {
  EN_US = 'en-US',
  ZH_TW = 'zh-TW'
}

const options: I18nOptions = {
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages: {
    [LOCALE.EN_US]: enUS,
    [LOCALE.ZH_TW]: zhTW,
  }
}
export const i18n = createI18n<false, typeof options>(options)