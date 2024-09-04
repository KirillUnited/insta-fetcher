import React from 'react'
import { DataPanel } from '@/components/shared';

const FAKE_DATA = {
  url: 'https://www.instagram.com/san_vino/',
  avatar: '/images/account-avatar.jpg',
  name: '@san_vino',
  title: 'San Vino',
}

interface Props {}

export default function DataSection({}: Props) {
  return (
    <section>
        <div className="container max-w-screen-lg">
            <DataPanel {...FAKE_DATA} />
        </div>
    </section>
  )
}