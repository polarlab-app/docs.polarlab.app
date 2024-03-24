import ButtonContainer from '@/components/core/buttonContainer';
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
                <a className='qnsub' href='#core'>
                    Core Module
                </a>
                <a className='qnsub' href='#economy'>
                    Economy Module
                </a>
                <a className='qnsub' href='#fun'>
                    Fun Module
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
                <p className='maintext'>
                    The economy module is vast landscape full of fun commands for you and your server to make use of,
                    trade items, build up your business, take care of your pets & much more!
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
                                    <p>/balance {'[user]'}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Shows yours or another users balance</p>
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
                                    <p>/deposit {`{amount}`}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Deposits coins into your bank account</p>
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
                                    <p>/dig</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Digs into the ground for loot or coins</p>
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
                                    <p>/fish</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Fishes for fishing in a pond for loot</p>
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
                                    <p>/hunt</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Hunts for animals for loot or coins</p>
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
                                    <p>/inventory</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Displays your inventory</p>
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
                                    <p>/sell {`{item}`}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Sells an item from your inventory</p>
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
                                    <p>/shop</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Displays the server shop</p>
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
                                    <p>/slots {'{amount}'}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Bets some money on a slot machine</p>
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
                                    <p>/withdraw {`{amount}`}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Withdraws coins into your purse</p>
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
                                    <p>/work {'[job]'}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Works at a job for coins</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>none</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='chaptercontainer' id='fun'>
                <h2 className='chapter'>Fun Module</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    The fun module contains commands that allow your members to have with their friends.
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
                                    <p>/aghpb</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns a picture from the AGHPB API (devgoldy.xyz)</p>
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
                                    <p>/cat</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns a cat picture</p>
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
                                    <p>/dice</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Rolls a dice (1-6)</p>
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
                                    <p>/fact</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns a fact from Polar API</p>
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
                                    <p>/joke {`{type}`}</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>Returns a joke from Polar API</p>
                                </div>
                            </td>
                            <td className='tcell'>
                                <div className='tddiv'>
                                    <p>none</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <ButtonContainer />
        </div>
    );
}
