import React from 'react'
import Section from '../Section'

export default function Footer() {
    return (
        <Section>
            <div className='py-10'>
                <p className='text-center font-light'>&copy; Bro Insta Fetcher, {new Date().getFullYear()}</p>
            </div>
        </Section>
    )
}
