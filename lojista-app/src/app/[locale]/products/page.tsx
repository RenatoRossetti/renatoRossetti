import {useTranslations} from 'next-intl';

export default function ProductsPage() {
  const t = useTranslations();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">{t('products.title')}</h1>
      {/* TODO: CRUD for products with cost/price/stock inputs and image upload */}
      <div className="border rounded p-4">Products CRUD</div>
    </div>
  );
}
