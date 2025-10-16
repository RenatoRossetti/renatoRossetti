import {useTranslations} from 'next-intl';

export default function InventoryPage() {
  const t = useTranslations();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{t('inventory.title')}</h1>
      {/* TODO: Stock view, import from products, auto-decrement on sales */}
      <div className="border rounded p-4">Inventory table</div>
    </div>
  );
}
