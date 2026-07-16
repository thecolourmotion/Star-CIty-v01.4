import enJSON from '@/locales/en.json'
import frJSON from '@/locales/fr.json'

export type Language = 'en' | 'fr'

const translations: Record<Language, typeof enJSON> = {
  en: enJSON,
  fr: frJSON,
}

/**
 * Get a translation value by key path (e.g., "home.welcome.title")
 */
export function getTranslation(language: Language, keyPath: string): string {
  const keys = keyPath.split('.')
  let value: any = translations[language]

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key]
    } else {
      return keyPath // Return the key path if translation not found (fallback)
    }
  }

  return typeof value === 'string' ? value : keyPath
}

export { translations }
