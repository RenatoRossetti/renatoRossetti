import {getRequestConfig} from 'next-intl/server';

export const locales = ['pt', 'en', 'es'] as const;
export type AppLocale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  const normalized = (locales as readonly string[]).includes(locale) ? locale : 'pt';
  return {
    messages: (await import(`./messages/${normalized}.json`)).default
  };
});
