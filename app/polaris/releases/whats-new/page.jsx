import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#latest'>
                    Latest Update
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Releases / What's New?</h6>
                <h1 className='title'>What's New?</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='latest'>
                    <h2 className='chapter'>Polaris V2.3 🥧 Pie</h2>
                    <hr className='chapterdivider'></hr>
                    <h3 className='subchapter'>✨ New Features</h3>
                    <hr className='subchapterdivider'></hr>
                </div>

                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/legal/terms-of-service'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/bonus'>
                            Next Page
                        </Link>
                        <img
                            className='nextarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                    </div>
                </div>
                <div className='spacebox'></div>
            </div>
        </>
    );
}
