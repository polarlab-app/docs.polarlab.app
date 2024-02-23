import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#summary'>
                    Music
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Engagement / Music</h6>
                <h1 className='title'>Music</h1>
                <hr className='divider'></hr>
                <div className='warningnote note'>
                    <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/warning.png'></img>
                    <p className='notetext'>
                        Please note that the music feature can be turned off anytime if we receive a C&D from youtube,
                        as youtube doesnt allow listening to videos without ads, so playing songs from youtube will
                        deprecated if we are told to to avoid legal action.
                    </p>
                </div>
                <div className='chaptercontainer' id='overview'>
                    <h2 className='chapter'>Music Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Music is a simple way of entertaining members of your server. Music allows you to play songs,
                        videos and audio files inside voice channels.
                    </p>
                </div>
                <div className='minornote note'>
                    <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/minor.png'></img>
                    <p className='notetext'>
                        These commands will only work if you are in a voice channel. These will also not work if no
                        queue is active in the server.
                    </p>
                </div>
                <div className='chaptercontainer' id='music-commands'>
                    <h2 className='chapter'>Commands</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Our music module comes with a premium suite of features, ranging from playing songs to adjusting
                        the volume server-side. These commands only work if you are currently in a voice channel.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th className='thead'>Command</th>
                                <th className='thead'>Description</th>
                                <th className='thead'>Special Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/play song</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Plays audio in the server voice channels</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/pause</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Pauses the currently playing audio file</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/resume</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Resumes the paused queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/stop</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Stops playing the music & destroys the queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/clear-queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Clears all songs from the queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Displays the top 3 songs in the queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/skip</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Skips the currently playing song</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/shuffle</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Shuffles the rest of the queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>/loop</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Loops the current queue</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Speak</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
