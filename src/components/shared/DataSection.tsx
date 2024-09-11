import React from 'react'
import { DataPanel, DataTable } from '@/components/shared';
import { cn } from '@/lib/utils';
import { Card, CardHeader } from '../ui/card';

const FAKE_DATA = {
  url: 'https://www.instagram.com/san_vino/',
  avatar: '/images/account-avatar.jpg',
  name: '@san_vino',
  title: 'San Vino',
}

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function DataSection({ className, ...props }: Props) {
  return (
    <section className={cn(className)} {...props}>
      <div className="container max-w-screen-lg">
        <DataPanel {...FAKE_DATA} />
        <Card className='my-6'>
          <div className='px-6 py-3'>
            <DataTable />
          </div>
        </Card>
      </div>
    </section>
  )
}