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
                <h6 className='directory'>Polaris Docs / Logs / Channel Logs</h6>
                <h1 className='title'>Channel Logs</h1>
                <hr className='divider'></hr>
                <div className='note warningnote'>
                    <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/warning.png'></img>
                    <p className='maintext'>
                        Message logs cannot be used to spy on people, and do not log every sent message. They only log
                        messages that were deleted by someone else.
                    </p>
                </div>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Message logs are a useful feature to see deleted messages, that could contain some offensive or
                        against the rules content.
                    </p>
                    <p className='maintext'>
                        The default channel where the logs are stored has a topic of{' '}
                        <span className='codeblock'>pmesssagelogs</span>. This can be modified in the web dashboard.
                    </p>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>Polaris logs the following data a message is deleted:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Message Author ID</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Message Content</span>
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
                    <p className='maintext'>As of Polaris V2.5 🍐 Pear, all events are officially supported:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>messageCreate (DEV ONLY)</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>messageDelete</span>
                            </li>
                        </ol>
                    </p>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
