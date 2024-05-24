"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className='relative inline-block'>
      <label htmlFor="locale-select" className='sr-only'>Change Language</label>
      <select
        id="locale-select"
        defaultValue={localActive}
        className='border-2 rounded px-5 py-2 bg-white text-gray-800 appearance-none'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
      <svg className='absolute top-1/2 right-4 transform -translate-y-1/2 w-4 h-4 pointer-events-none' fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M14.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414-1.414l-3-3zM5.293 8.293a1 1 0 111.414-1.414l-3 3a1 1 0 01-1.414-1.414l3-3z" clipRule="evenodd" />
      </svg>
    </div>
  );
}
