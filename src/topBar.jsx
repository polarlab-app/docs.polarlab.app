'use client';

import Link from 'next/link';

export function TopBar() {
    async function handleMobile() {
        if (typeof document !== 'undefined') {
            const sideNavElement = await document.getElementById('nav');
            const mainsection = await document.getElementsByClassName('mainsection');

            const menubutton = document.getElementById('menubutton');
            const closebutton = document.getElementById('closebutton');

            if (sideNavElement && mainsection[0] && closebutton && menubutton) {
                sideNavElement.classList.toggle('activesidenav');
                mainsection[0].classList.toggle('hiddenmainsection');

                closebutton.classList.toggle('block');
                menubutton.classList.toggle('hidden');
            }
        }
    }

    return (
        <nav>
            <div className='logocontainer'>
                <img className='polarlogo' src='https://cdn.polarlab.app/src/img/polarlogo.png' alt='alt' />
                <h1 className='polarlabh1'>Polar Lab</h1>
            </div>
            <div className='navcontainer'>
                <Link className='toplink' href='/'>
                    Home
                </Link>
                <a className='toplink2' href='https://polarlab.app/discord'>
                    Join our Discord!
                </a>
                <a className='polarplus' href='https://polarlab.app/plus'>
                    Polar+
                </a>
                <a href='/'>
                    <img src='https://cdn.polarlab.app/src/icons/efive/home.png' className='homeicon' />
                </a>
                <img
                    src='https://cdn.polarlab.app/src/icons/efive/sidenav.png'
                    className='menuicon'
                    id='menubutton'
                    onClick={handleMobile}></img>
                <img
                    src='https://cdn.polarlab.app/src/icons/efive/close.png'
                    className='closeicon'
                    id='closebutton'
                    onClick={handleMobile}></img>
            </div>
        </nav>
    );
}
