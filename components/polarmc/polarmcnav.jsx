'use client';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import data from './polarmcnav.json';

export default function SideNav() {
    const pathname = usePathname();

    return (
        <div className='sidenav' id='nav'>
            <div className='menuheader'>
                <Link href='/polarmc'>
                    <img
                        className='img'
                        src='https://cdn.polarlab.app/src/docs/img/docs-default.png'
                        alt='alt'
                        align='left'
                    />
                    PolarMC Docs
                </Link>
            </div>

            {Object.entries(data).map(([header, links]) => (
                <div key={header} className='menuheader'>
                    {header}{' '}
                    <img src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' className='rightarrow' />
                    <div className='subtexts'>
                        {Object.entries(links).map(([linkName, linkUrl]) => (
                            <Link
                                key={linkName}
                                className={`subtext ${
                                    pathname ===
                                    `/polarmc/${header.toLowerCase()}/${linkName.toLowerCase().replace(/ /g, '-')}`
                                        ? 'subtextactive'
                                        : ''
                                }`}
                                href={`/polarmc/${header.toLowerCase()}/${linkName
                                    .toLowerCase()
                                    .replace(/ /g, '-')
                                    .replace(/&/g, 'and')
                                    .replace(/'/g, '')}`}>
                                <img src={linkUrl} className='imgsubtext' alt='alt' />
                                {linkName}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
