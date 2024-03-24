import '../src/footer.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='footercontainer'>
            <div className='footer'>
                <div className='footertop'>
                    <img src='https://cdn.polarlab.app/src/img/polarlogo.png' className='footerlogo' alt='alt' />
                    <h1 className='footerheader'>Polar Lab</h1>
                    <p className='dbtn' href='https://polarlab.app/discord'>
                        Discord
                    </p>
                </div>
                <div className='lists'>
                    <div className='list'>
                        <ul className='listcontainer'>
                            <li className='listheader'>
                                <p className='listheader'>Products</p>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/polaris'>
                                    Polaris V2
                                </Link>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/polarmc'>
                                    Polar MC
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul className='listcontainer'>
                            <li className='listheader'>
                                <p className='listheader'>Resources</p>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/blog'>
                                    Blog
                                </Link>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='/'>
                                    Docs
                                </Link>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/status'>
                                    Status
                                </Link>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul className='listcontainer'>
                            <li className='listheader'>
                                <p className='listheader'>Legal</p>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/privacy'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className='listcontent'>
                                <Link className='listcontent' href='https://polarlab.app/terms'>
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer2'>
                <a className='copyr' href='https://polarlab.app'>
                    ©️ 2023 Polar Lab
                </a>
                <div className='status'>
                    <Link className='product' href='https://polarlab.app/status'>
                        Polaris Status:
                    </Link>
                    <img src='https://cdn.polarlab.app/src/icons/status/indigo.png' className='statusicon' alt='alt' />
                    <Link className='statustext' href='https://polarlab.app/status'>
                        Online
                    </Link>
                </div>
                <div className='socials'>
                    <img
                        src='https://cdn.polarlab.app/src/main/img/discordlogo.png'
                        className='discordlogo'
                        alt='alt'
                    />
                    <img src='https://cdn.polarlab.app/src/main/img/githublogo.png' className='discordlogo' alt='alt' />
                </div>
            </div>
        </footer>
    );
}
