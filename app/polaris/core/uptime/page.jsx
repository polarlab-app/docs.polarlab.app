import Link from "next/link";
import Image from 'next/image'
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#uptime'>
                    Uptime
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Core / Uptime</h6>
                <h1 className='title'>Uptime</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='uptime'>
                    <h2 className='chapter'>Uptime</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        The uptime command provides information on how long the current Shard of the bot has been
                        running for.
                    </p>
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
                                        <p>None</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <Image className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                        <Link className='lastbtn' href='/polaris/core/ping'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/core/maintenance'>
                            Next Page
                        </Link>
                        <Image className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    </div>
                </div>
                <div className='spacebox'></div>
            </div>
        </>
    );
}