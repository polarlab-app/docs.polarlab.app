import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='mainsection'>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#notes'>
                    Notes Overview
                </a>
                <a className='qnsub' href='#note-types'>
                    Note Types
                </a>
            </div>
            <h6 className='directory'>Polaris Docs / Information / Notes</h6>
            <h1 className='title'>Developer Mode</h1>
            <hr className='divider'></hr>
            <div className='chaptercontainer' id='notes'>
                <h2 className='chapter'>Notes Overview</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    What are notes? Notes are helpful and informative parts of the docs or dashboard, that tell you
                    information that you might not know or warn you about potential issues that could arise with your
                    configuration. There are 4 types of notes in total, each note has a different icon and colors.
                </p>
            </div>
            <div className='chaptercontainer' id='note-types'>
                <h2 className='chapter'>Types of notes</h2>
                <hr className='chapterdivider'></hr>
                <div className='infonote note'>
                    <img src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' className='noteicon' />
                    <p className='notetext'>
                        This is an information note, its purpose is to provide you with information that may not be
                        obvious to distinguish from the docs, or newly found out content. This note may also say when
                        something is under development, or general notes about something.
                    </p>
                </div>
                <div className='warningnote note'>
                    <img src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' className='noteicon' />
                    <p className='notetext'>
                        This is a so called warning note. This notes primary purpose is to warn you about compatibility
                        issues, issues within your configuration or critical information that you should know.
                    </p>
                </div>
                <div className='minornote note'>
                    <img src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' className='noteicon' />
                    <p className='notetext'>
                        This is a minor warning note/ . This notes purpose is to give warn you about very unlikely
                        issues or just to let you acknowledge something of minor importance.
                    </p>
                </div>
                <div className='correctnote note'>
                    <img src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' className='noteicon' />
                    <p className='notetext'>
                        This is a correct/check note. This note provides helpful tips to assist you, or describes a
                        specific method to achieve optimal overall results. This note can also congratulate you on your
                        amazing work with configuration!
                    </p>
                </div>
            </div>
            <div className='buttoncontainer'>
                <div className='lastbutton'>
                    <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    <Link className='lastbtn' href='/polaris/information/modules'>
                        Last Page
                    </Link>
                </div>
                <div className='nextbutton'>
                    <Link className='nextbtn' href='/polaris/information/developer-mode'>
                        Next Page
                    </Link>
                    <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                </div>
            </div>
            <div className='spacebox'></div>
        </div>
    );
}
