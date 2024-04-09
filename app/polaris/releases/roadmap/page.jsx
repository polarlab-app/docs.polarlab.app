import ButtonContainer from '@/components/core/buttonContainer';
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
                            <p className='roadmapq strong'>Q3 '23</p>
                            <p className='roadmapq strong'>Q4 '23</p>
                            <p className='roadmapq strong'>Q1 '24</p>
                            <p className='roadmapq strong'>Q2 '24</p>
                            <p className='roadmapq strong'>Q3 '24</p>
                            <p className='roadmapq strong'>Q4 '24</p>
                            <p className='roadmapq strong'>Q1 '25</p>
                            <p className='roadmapq strong'>Q2 '25</p>
                        </div>
                        <div className='roadmaptimeline'>
                            <div className='roadmappoint complete'>
                                <div className='roadmappointinside complete'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint complete'>
                                <div className='roadmappointinside complete'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint complete'>
                                <div className='roadmappointinside complete'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint inprogress'>
                                <div className='roadmappointinside inprogress'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint waiting'>
                                <div className='roadmappointinside waiting'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint waiting'>
                                <div className='roadmappointinside waiting'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint waiting'>
                                <div className='roadmappointinside waiting'></div>
                            </div>
                            <hr className='roadmapdivider'></hr>
                            <div className='roadmappoint waiting'>
                                <div className='roadmappointinside waiting'></div>
                            </div>
                        </div>
                    </div>

                    <p className='maintext'>
                        <ul className='mainlist'>
                            <li>
                                {' '}
                                <span className='strong'>Q3 '23</span> - <span className='strong'>V2.0 </span>- Core
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q3 '23</span> -{' '}
                                <span className='strong'>V2.1 🥑 Avocado </span> - QoL features + Dev Improvements
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q4 '23</span> - <span className='strong'>V2.2 🍯 Honey </span>-
                                Music Module
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q1 '24</span> - <span className='strong'>V2.3 🥧 Pie </span>-
                                Information Module
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q2 '24</span> -{' '}
                                <span className='strong'>V2.4 🥬 Lettuce </span>- Logs Module
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q3 '24</span> - <span className='strong'>V2.5 🍐 Pear</span> -
                                Economy Module
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q4 '24</span> - <span className='strong'>V2.6 🥭 Mango </span>-
                                Moderation Module
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q1 '25</span> - <span className='strong'>V2.7 🍑 Peach </span>-
                                QoL + Dev and bugfixes
                            </li>
                            <li>
                                {' '}
                                <span className='strong'>Q2 '25</span> - <span className='strong'>V2.8 🧅 Onion </span>-
                            </li>
                        </ul>
                    </p>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
