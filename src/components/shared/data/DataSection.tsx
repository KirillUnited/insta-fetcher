import React from 'react'
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { DataPanel } from '@/components/shared/data';
import {Props as DataPanelProps} from '@/components/shared/data/DataPanel'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  withPanel?: boolean,
  data: DataPanelProps,
  children: React.ReactNode
}

export default function DataSection({ className, withPanel, data, children, ...props }: Props) {
  return (
    <section className={cn(className)} {...props}>
      <div className="container max-w-screen-lg">
        {
          withPanel && <DataPanel {...data} />
        }
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
  return (props: any) => <DataSection {...props}><Component {...props} /></DataSection>
}