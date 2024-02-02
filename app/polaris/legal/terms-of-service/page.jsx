import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#'>
                    Maintenance Impact
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Legal / Terms of Service</h6>
                <h1 className='title'>ToS</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id=''>
                    <h2 className='chapter'>Maintenance Impact</h2>
                    <hr className='chapterdivider'></hr>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/releases/roadmap'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/legal/privacy'>
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
