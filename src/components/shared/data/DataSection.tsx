import React from 'react'
import { cn } from '@/lib/utils';
import { INFO } from '@/constants';
import { Card } from '@/components/ui/card';
import { DataPanel } from '@/components/shared/data';

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

export default function DataSection({ className, children, ...props }: Props) {
  return (
    <section className={cn(className)} {...props}>
      <div className="container max-w-screen-lg">
        <DataPanel {...INFO} />
        <Card className='my-6'>
          <div className='px-6 py-3'>
            {children}
          </div>
        </Card>
      </div>
    </section>
  )
}
export function withDataSection(Component: React.ComponentType<any>) {
  return (props: any) => <DataSection><Component {...props} /></DataSection>
}