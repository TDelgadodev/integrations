import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className='flex items-center justify-between max-w-4xl mx-auto'>
        <Link href='/' className='text-lg font-bold'>{t('home')}</Link>
        <LocalSwitcher />
      </div>
    </header>
  );
}
