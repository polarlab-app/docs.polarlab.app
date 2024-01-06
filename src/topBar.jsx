import Link from "next/link"

export function TopBar() {
    return (
        <nav>
            <div className='logocontainer'>
                <img className='polarlogo' src='https://cdn.polarlab.app/src/img/polarlogo.png' />
                <h1 className='polarlabh1 font-bold'>Polar Lab</h1>
            </div>
            <div className='navcontainer'>
                <Link className='navlink' href='/'>
                    Home
                </Link>
                <a className='navlink2' href='https://polarlab.app/discord'>
                    Join our Discord!
                </a>
                <a className='polarplus' href="https://polarlab.app/plus">Polar+</a>
            </div>
        </nav>
    );
}
