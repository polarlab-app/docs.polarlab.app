import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#nicking-reason'>
                    Why Nicking?
                </a>
                <a className='qnsub' href='#nicking'>
                    Nicking
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Utilities / Nicking</h6>
                <h1 className='title'>Nicking</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='nicking-reason'>
                    <h2 className='chapter'>Why Nicking?</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        You may be asking yourself, why implement nicking inside Polaris? Discord already has a
                        permissions to allow members to nick themselves?
                    </p>
                    <p className='maintext'>
                        To make polaris more accessible, we decided to opt for an approach that is fully configurable
                        through Discord, without a need for a dashboard. However, this causes a lack of permission
                        management for special features and we had to use the Change Nickname permission for our warning
                        module, hence this command!
                    </p>
                </div>
                <div className='chaptercontainer' id='nicking'>
                    <h2 className='chapter'>Nicking</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polaris allows users to effortlessly nick themselves without the need of any special
                        permissions, only 1 command!
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
                                        <p>/nick {'{nickname}'}</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Changes your nickname</p>
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
