import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#summary'>
                    Overview
                </a>
                <a className='qnsub' href='#data-logged'>
                    Types of data getting logged
                </a>
                <a className='qnsub' href='#support-events'>
                    Supported Events
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Logs / Server Logs</h6>
                <h1 className='title'>Server Logs</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Server logs are a handy feature for every server owner. They allow you to observe everything
                        that happens ranging from an invite being created to the server name being changed without your
                        permissions.
                    </p>
                    <p className='maintext'>
                        The default channel where the logs are stored has a topic of{' '}
                        <span className='codeblock'>pserverlogs</span>. This can be modified in the web dashboard.
                    </p>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Server logs try to provide you with the most information as possible, while remaining in an easy
                        to read format. The following data is logged:
                    </p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Server Name</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Server ID</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>The action taken</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Before and after the action</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Action Author</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Time & Date</span>
                            </li>
                        </ol>
                    </p>
                </div>
                <div className='chaptercontainer' id='supported-events'>
                    <h2 className='chapter'>Supported Events</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>These following events are officially supported for server updates:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>guildUpdate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>inviteCreate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>inviteDelete</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>guildCreate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>guildDelete</span>
                            </li>
                        </ol>
                    </p>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
