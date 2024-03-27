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
                <h6 className='directory'>Polaris Docs / Logs / Member Logs</h6>
                <h1 className='title'>Member Logs</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                </div>
                <div className='chaptercontainer' id='data-logged'>
                    <h2 className='chapter'>Data Logged</h2>
                    <hr className='chapterdivider'></hr>
                </div>
                <div className='chaptercontainer' id='supported-events'>
                    <h2 className='chapter'>Supported Events</h2>
                    <hr className='chapterdivider'></hr>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
