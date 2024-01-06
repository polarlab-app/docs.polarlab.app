import Link from "next/link"
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#maintenance-impact'>
                    Maintenance Impact
                </a>
                <a className='qnsub' href='#maintenance-times'>
                    Maintenance Times & Types
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Core / Maintenance</h6>
                <h1 className='title'>Maintenance</h1>
                <hr className='divider'></hr>
                <div
                    className='chaptercontainer'
                    id='maintenance-impact'>
                    <h2 className='chapter'>Maintenance Impact</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polaris may occasionally go into maintenance mode, this may have an impact on certain services
                        of the bot. Polaris will be offline for the time of update maintenance (Pushing a new update to
                        the bot). For smaller maintenance projects only certain parts of the bot may be offline, such as
                        the moderation module.
                    </p>
                    <p className='maintext'>
                        This may impact some servers using Polaris, who mainly rely on Polaris to manage moderation,
                        verification or support. Other modules should not cause a big disruption if put into
                        maintenance. We strongly advise to have backup options in place incase Polaris goes offline
                        unexpectedly
                    </p>
                </div>
                <div
                    className='chaptercontainer'
                    id='maintenance-times'
                    >
                    <h2 className='chapter'>Maintenance Times & Types</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        All expected maintenance times will be announced in advanced on our status page
                        (https://polarlab.app/status) and in our official Discord server. Unexpected maintenances will
                        only happen if a crucial error is found in Polaris or if the bot is incapable of functioning. We
                        will always try to only disable modules that require maintenance but this may not be always
                        possible, such as when we update our bots Core when the whole bot will have to go offline for an
                        extended period of time.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th className='thead'>Maintenance Type</th>
                                <th className='thead'>Description</th>
                                <th className='thead'>Downtime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Planned Maintenance</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>
                                            Planned maintenance of the bot, such as restarts to keep optimal performance
                                        </p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>up to 1 hour</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Temporary Downtime</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>
                                            The bot can occasionally go into maintenance unexpectedly if a critical
                                            error is found in the code
                                        </p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>up to 2 hours</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Bot Update</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>
                                            Some modules of the bot will always have to go into maintenance if an update
                                            is being rolled out
                                        </p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>up to 30 minutes</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='maintext'>
                        All maintenances are expected to bring downtime to some of our modules, but are expected to
                        yield performance optimizations, bug fixes & new features in return!
                    </p>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' />
                        <Link className='lastbtn' href='/polaris/core/uptime'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/core/stopping-&-restarts'>
                            Next Page
                        </Link>
                        <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' />
                    </div>
                </div>
                <div className='spacebox'></div>
            </div>
        </>
    );
}