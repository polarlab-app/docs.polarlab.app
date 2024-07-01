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
                <h6 className='directory'>Polaris Docs / Logs / Emoji Logs</h6>
                <h1 className='title'>Emoji Logs</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Emoji logs are more of a misc feature for servers owners, these logs may not be as important to
                        you if you do not specifically run an emoji centered server. These logs log everything from
                        emoji creation, updating and deleting.
                    </p>
                    <p className='maintext'>
                        The default channel where the logs are stored has a topic of{' '}
                        <span className='codeblock'>pemojilogs</span>. This can be modified in the web dashboard.
                    </p>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>Polaris logs the following data when an emoji is altered:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Emoji ID</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Emoji Name</span>
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
                                <span className='codeblock'>emojiCreate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>emojiDelete</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>emojiUpdate</span>
                            </li>
                        </ol>
                    </p>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
