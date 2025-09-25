import { CareerItem } from './item'
import { useTranslations } from 'next-intl'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

export function Career() {
  const t = useTranslations('career')
  const companies: CareerProps[] = t.raw('companies')
  const highlights: string[] = t.raw('highlights')

  return (
    <>
      <h1 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-4xl font-bold text-balance'>
        <FileTextIcon className='size-6 animate-pulse stroke-[1.5]' />
        {t('title')}
      </h1>

      {highlights && (
        <div className='mb-8'>
          <h2 className='text-2xl font-semibold dark:text-neutral-100 text-neutral-800 mb-4'>Highlights</h2>
          <ul className='space-y-2'>
            {highlights.map((highlight, index) => (
              <li key={index} className='dark:text-neutral-300 text-neutral-700 text-pretty'>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8'>
        {companies.map((item, index) => (
          <li key={index} className='ms-[30px]'>
            <CareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}
