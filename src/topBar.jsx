import Link from 'next/link';
import Image from 'next/image';

export function TopBar() {
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
            </div>
        </nav>
    );
}
