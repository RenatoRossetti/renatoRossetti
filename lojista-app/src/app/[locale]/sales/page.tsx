import {useTranslations} from 'next-intl';

export default function SalesPage() {
  const t = useTranslations();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{t('sales.title')}</h1>
      {/* Product groups with expandable cards, cart and checkout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2 border rounded p-4">Groups & Products</div>
        <div className="border rounded p-4">Cart</div>
      </div>
    </div>
  );
}
