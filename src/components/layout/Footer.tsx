import React from 'react'
import Section from '../shared/Section'

interface Props extends React.AllHTMLAttributes<HTMLDivElement> {

}
export default function Footer({ }: Props) {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='py-10'>
                    <p className='text-center font-light'>&copy; Bro Insta Fetcher, {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}
