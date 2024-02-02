import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='mainsection'>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#command-list'>
                    The list of commands
                </a>
            </div>
            <h6 className='directory'>Polaris Docs / Information / Commands</h6>
            <h1 className='title'>Commands</h1>
            <hr className='divider'></hr>
            <div className='chaptercontainer' id='command-list'>
                <h2 className='chapter'>Command List</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    Commands are the main part of Polaris. All commands can be divided into their respective Modules.
                    There is a total of X commands spread across over Y+ modules. Below are tables sorted by module and
                    alphabetically, these tables also contain the required permissions for each command and its simple
                    description.
                </p>
            </div>
            <div className='chaptercontainer' id='core'>
                <h2 className='chapter'>Core Module</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>The core module has all the crucial commands to control and debug Polaris.</p>
                <table>
                    <thead>
                        <tr>
                            <th className='thead'>Command</th>
                            <th className='thead'>Description</th>
                            <th className='thead'>Special Permissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/ping</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns the bots current ping</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>None</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/uptime</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns the bots uptime</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>none</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/restart</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Restarts Polaris</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Developer ONLY</p>
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
                                    <p>Shuts Polaris down</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Developer ONLY</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='chaptercontainer' id='economy'>
                <h2 className='chapter'>Economy Module</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>The economy module</p>
                <table>
                    <thead>
                        <tr>
                            <th className='thead'>Command</th>
                            <th className='thead'>Description</th>
                            <th className='thead'>Special Permissions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/beg</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Begs for coins</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>None</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/buy {`{item}`}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Buys an item from the server shop</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>none</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>/restart</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Restarts Polaris</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Developer ONLY</p>
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
                                    <p>Shuts Polaris down</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Developer ONLY</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='buttoncontainer'>
                <div className='lastbutton'>
                    <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    <Link className='lastbtn' href='/polaris'>
                        Last Page
                    </Link>
                </div>
                <div className='nextbutton'>
                    <Link className='nextbtn' href='/polaris/information/variables'>
                        Next Page
                    </Link>
                    <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                </div>
            </div>
            <div className='spacebox'></div>
        </div>
    );
}
