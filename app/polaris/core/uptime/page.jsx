import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';
import Image from 'next/image';
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
                
                <ButtonContainer />
            </div>
        </>
    );
}
