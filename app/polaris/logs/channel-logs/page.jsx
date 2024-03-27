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
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Channel logs are a handy feature in Polaris that logs anything and everything that happens to
                        channels in your server. This feature can be handy to detect griefers, corrupt moderators, or
                        just accidents that might happen. This feature can also serve as an audit log for anything
                        channel related past 30 days.
                    </p>
                    <p className='maintext'>
                        The default channel where the logs are stored has a topic of{' '}
                        <span className='codeblock'>pchannellogs</span>. This can be modified in the web dashboard.
                    </p>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>Polaris logs the following data when a channel gets updated:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Channel ID</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Channel Name</span>
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
                    <p className='maintext'>Polaris channel logs support the following events:</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>channelCreate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>channelDelete</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>channelUpdate</span>
                            </li>
                        </ol>
                    </p>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
