import {useTranslations} from 'next-intl';

export default function FinancePage() {
  const t = useTranslations();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{t('finance.title')}</h1>
      {/* TODO: Dynamic charts for revenue, expenses, and profitability over time */}
      <div className="border rounded p-4">Finance charts</div>
    </div>
  );
}
