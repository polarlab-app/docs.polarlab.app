'use client'
 
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import pleaseworkffs from './sidenav.json';


export function SideNav() {
    const pathname = usePathname()

    return (
        <div className='sidenav' id='nav'>
            <div className='menuheader'>
                <img className='img' src='https://cdn.polarlab.app/src/docs/img/docs-default.png' align='left' />
                Polaris Docs
            </div>
            {Object.entries(pleaseworkffs).map(([header, links]) => (
                <div key={header} className='menuheader'>
                    {header} <img src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' className='rightarrow' />
                    <div className='subtexts'>
                        {Object.entries(links).map(([linkName, linkUrl]) => (
                            <Link key={linkName} className={`subtext ${pathname === `/polaris/${header.toLowerCase()}/${linkName.toLowerCase().replace(/ /g, '-')}` ? 'subtextactive' : ''}`} href={`/polaris/${header.toLowerCase()}/${linkName.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}`}>
                                <img src={linkUrl} className='imgsubtext' />
                                {linkName}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
