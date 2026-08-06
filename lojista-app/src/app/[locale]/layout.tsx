import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Lojista App',
  description: 'POS e gestão financeira para lojistas'
};

export default async function LocaleLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
