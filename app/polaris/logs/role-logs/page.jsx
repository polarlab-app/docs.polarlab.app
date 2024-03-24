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
                <h6 className='directory'>Polaris Docs / Logs / Role Logs</h6>
                <h1 className='title'>Role Logs</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Role logs are a handy feature for every server owner. These logs allow you to monitor changes in
                        your role list and permission changes for each role. This is mainly usable for large servers
                        with a moderation team to avoid mod abuse. This feature can also server as a long lasting audit
                        log.
                    </p>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Role logs collect some data from actions to give you as much information as possible. Role logs
                        collect the following data:
                    </p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Role ID</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>Role Name</span>
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
                    <p className='maintext'>As of Polaris V2.3 🥧 Pie, all log events are supported officially.</p>
                    <p className='maintext'>
                        <ol className='mainlist'>
                            <li className='mainlistitem'>
                                <span className='codeblock'>roleCreate</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>roleDelete</span>
                            </li>
                            <li className='mainlistitem'>
                                <span className='codeblock'>roleUpdate</span>
                            </li>
                        </ol>
                    </p>
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
