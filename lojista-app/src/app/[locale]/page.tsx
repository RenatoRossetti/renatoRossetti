import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Dashboard() {
  const t = useTranslations();
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 h-14 border-b bg-white/80 backdrop-blur flex items-center justify-between px-4 z-50">
        <div className="font-semibold">{t('app.title')}</div>
        <div className="flex items-center gap-4">
          <Link href="sales" className="hover:underline">{t('nav.sales')}</Link>
          <Link href="products" className="hover:underline">{t('nav.products')}</Link>
          <Link href="inventory" className="hover:underline">{t('nav.inventory')}</Link>
          <Link href="finance" className="hover:underline">{t('nav.finance')}</Link>
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="settings" className="text-sm px-2 py-1 border rounded">{t('nav.settings')}</button>
          <button aria-label="theme" className="text-sm px-2 py-1 border rounded">{t('nav.theme')}</button>
        </div>
      </nav>
      <main className="pt-16 p-4">Home</main>
    </div>
  );
}
