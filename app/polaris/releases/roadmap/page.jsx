import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#roadmap'>
                    Roadmap
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Releases / Roadmap</h6>
                <h1 className='title'>Roadmap</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Our Roadmap</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        A roadmap is an important aspect of every publicly available project. It helps inform users
                        about what they could expect and when. For Polaris, this roadmap is rather unpolished and just a
                        rough estimate, we are still working out the details
                    </p>

                    <div className='roadmap'>
                        <div className='roadmaptext'>
                            <p className='roadmapq strong'>Q4 '24</p>
                            <p className='roadmapq strong'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                            <p className='roadmapq'>Q4 '24</p>
                        </div>
                        <div className='roadmaptimeline'>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint'>
                                <div className='roadmappointinside'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/releases/previous-releases'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/legal/terms-of-service'>
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
