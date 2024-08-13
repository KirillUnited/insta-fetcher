import React from 'react'
import { DataPanel } from '@/components/shared';

interface Props {}

export default function DataSection({}: Props) {
  return (
    <section>
        <div className="container max-w-screen-lg">
            <DataPanel />
        </div>
    </section>
  )
}