import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#stopping-restarts'>
                    Stopping & Restarts
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Core / Stopping & Restarts</h6>
                <h1 className='title'>Stopping & Restarts</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='stopping-restarts'>
                    <h2 className='chapter'>Stopping and Restart commands</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polaris includes a couple of commands only for developers that allow us to restart or shutdown
                        the bot if needed. These commands are only going to be used for development, and or for critical
                        issues, such as a database or Token leak.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th class='thead'>Command</th>
                                <th class='thead'>Description</th>
                                <th class='thead'>Special Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/reboot</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Restarts the bot</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>devOnly</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/shutdown</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Stops the bot</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>devOnly</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' />
                        <Link className='lastbtn' href='/polaris/core/maintenance'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/moderation/banning'>
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