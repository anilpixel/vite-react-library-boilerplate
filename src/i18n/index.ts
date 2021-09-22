import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import example from './zhCN/example.json'

export const zhCN = {
  example,
}

export const resources = {
  zhCN,
} as const

export const i18nNameSpace = Object.keys(resources.zhCN)

i18n.use(initReactI18next).init({
  lng: 'zhCN',
  ns: i18nNameSpace,
  resources,
})

export default i18n
