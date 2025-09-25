import { useTranslations } from 'next-intl'
import { FileTextIcon } from 'lucide-react'
import { CareerProps } from '@/types'

export function SimpleCareer() {
  const t = useTranslations('career')
  const companies: CareerProps[] = t.raw('companies')

  return (
    <>
      <h1 className='dark:text-neutral-100 text-neutral-800 flex gap-x-4 items-center text-4xl font-bold text-balance'>
        <FileTextIcon className='size-6 animate-pulse stroke-[1.5]' />
        {t('title')}
      </h1>

      <ol className='relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-y-8'>
        {companies.map((item, index) => (
          <li key={index} className='ms-[30px]'>
            <SimpleCareerItem {...item} />
          </li>
        ))}
      </ol>
    </>
  )
}

function SimpleCareerItem({ company, jobs, badges }: CareerProps) {
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black' />
      <div className='flex gap-x-2 mb-4 items-center'>
        <h3 className='text-xl font-bold text-neutral-900 dark:text-neutral-100'>
          {company}
        </h3>
        <span className='text-sm bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded-md'>
          {badges}
        </span>
      </div>

      {jobs.map((job, index) => (
        <div key={index} className='mb-4'>
          <h4 className='text-lg font-medium dark:text-neutral-100 text-neutral-900'>
            {job.title}
          </h4>
          <time className='text-sm leading-none text-neutral-800 dark:text-neutral-200'>
            {job.start} — {job.end}
          </time>
          <p className='mt-1 dark:text-neutral-400 text-neutral-600 text-pretty'>
            {job.description}
          </p>
        </div>
      ))}
    </>
  )
}