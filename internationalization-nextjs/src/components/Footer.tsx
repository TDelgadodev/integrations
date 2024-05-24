import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className='bg-gray-800 text-white text-center py-4'>
      <p className='text-sm'>{t('copyright')}</p>
    </footer>
  );
}
