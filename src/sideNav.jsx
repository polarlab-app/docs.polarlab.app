'use client';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import pleaseworkffs from './sidenav.json';
import Image from 'next/image'

export function SideNav() {
    const pathname = usePathname();

    return (
        <div className='sidenav' id='nav'>
            <div className='menuheader'>
                <Link href='/polaris'>
                    <Image className='img' src='https://cdn.polarlab.app/src/docs/img/docs-default.png' alt='alt' align='left' />
                    Polaris Docs
                </Link>
            </div>

            {Object.entries(pleaseworkffs).map(([header, links]) => (
                <div key={header} className='menuheader'>
                    {header} <Image src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' className='rightarrow' />
                    <div className='subtexts'>
                        {Object.entries(links).map(([linkName, linkUrl]) => (
                            <Link
                                key={linkName}
                                className={`subtext ${
                                    pathname ===
                                    `/polaris/${header.toLowerCase()}/${linkName.toLowerCase().replace(/ /g, '-')}`
                                        ? 'subtextactive'
                                        : ''
                                }`}
                                href={`/polaris/${header.toLowerCase()}/${linkName
                                    .toLowerCase()
                                    .replace(/ /g, '-')
                                    .replace(/&/g, 'and')}`}>
                                <Image src={linkUrl} className='imgsubtext' alt='alt'/>
                                {linkName}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
