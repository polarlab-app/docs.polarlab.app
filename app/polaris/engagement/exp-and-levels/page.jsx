import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#overview'>
                    Leveling Overview
                </a>
                <a className='qnsub' href='#rewards'>
                    Leveling Rewards
                </a>
                <a className='qnsub' href='#commands'>
                    Leveling Module
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Engagement / EXP & Levels</h6>
                <h1 className='title'>EXP & Leveling</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='overview'>
                    <h2 className='chapter'>Leveling Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Leveling is a great way to reward your members for being active in your server by sending
                        messages. Leveling allows you to reward your members based on how active they are and how often
                        they interact with your server.
                    </p>
                    <p className='maintext'>
                        Levels are measured in EXP (experience). By default, a member is rewarded 6exp for every message
                        they send, however this can be set to a different or dynamic value. A new level is rewarded
                        using the following formula:
                    </p>
                    <p className='maintext'>
                        <span className='codeblock'>level * level * 10 + 69</span>
                    </p>
                </div>
                <div className='chaptercontainer' id='rewards'>
                    <h2 className='chapter'>Leveling Rewards</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Leveling rewards are here to encourage your members to chat more and interact with other
                        members. Leveling rewards can be anything, roles, economy rewards, access to private channels
                        and more! Leveling rewards are only settable from the web dashboard.
                    </p>
                </div>
                <div className='chaptercontainer' id='commands'>
                    <h2 className='chapter'>Commands</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        The leveling module only features one command, and that is /rank to view your or someone elses
                        rank. All configuration is handled using the dashboard.
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
                                        <p>/rank [member]</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Displays your or another users rank</p>
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
