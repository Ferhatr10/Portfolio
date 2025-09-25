import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ArrowRightIcon } from 'lucide-react'
import { type CareerProps } from '@/types'
import { useTranslations } from 'next-intl'

export function CareerItem({ link, company, jobs, badges }: CareerProps) {
  const t = useTranslations()
  return (
    <>
      <div className='absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-[8.5px] -start-[6.5px] border border-white dark:border-black' />
      <div className='flex gap-x-2 mb-4 items-center'>
        <h3 className='text-xl font-bold text-neutral-900 dark:text-neutral-100'>
          {company}
        </h3>
        <Badge variant='secondary' className='shadow rounded-md'>
          {badges}
        </Badge>
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
          {job.achievements && (
            <div className='mt-2'>
              <h5 className='text-sm font-semibold dark:text-neutral-300 text-neutral-700 mb-1'>Achievements:</h5>
              <ul className='dark:text-neutral-400 text-neutral-600 text-pretty'>
                {job.achievements.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </div>
          )}
          {job.responsibilities && (
            <div className='mt-2'>
              <h5 className='text-sm font-semibold dark:text-neutral-300 text-neutral-700 mb-1'>Responsibilities:</h5>
              <ul className='dark:text-neutral-400 text-neutral-600 text-pretty'>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </div>
          )}
          {job.technologies && (
            <div className='mt-2'>
              <h5 className='text-sm font-semibold dark:text-neutral-300 text-neutral-700 mb-1'>Technologies:</h5>
              <ul className='dark:text-neutral-400 text-neutral-600 text-pretty'>
                {job.technologies.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {link && (
        <Button
          variant='default'
          size={null}
          className='shadow mt-4 p-2'
          asChild
        >
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <p className='font-medium'>{t('career.viewMore')}</p>
            <ArrowRightIcon className='ms-2 size-4' />
          </a>
        </Button>
      )}
    </>
  )
}
