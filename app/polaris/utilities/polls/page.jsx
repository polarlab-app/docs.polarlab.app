import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#polls'>
                    Polls
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Utilities / Polls</h6>
                <h1 className='title'>Polls</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='polls'>
                    <h2 className='chapter'>Polls</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polaris simplifies community engagement by offering an intuitive and interactive polling
                        feature. Whether you're seeking opinions, making group decisions, or injecting some fun into
                        your server, the Polls feature in Polaris allows you to effortlessly create and manage polls.
                    </p>
                    <p className='maintext'>
                        Creating a poll with Polaris is a straightforward process. Utilize the poll command followed by
                        your question and timer. Members can cast their votes by reacting to the options provided in the
                        poll. Each reaction is counted as a vote for the corresponding option. Polls will close
                        automatically after the time expires.
                    </p>
                    <p className='maintext'>
                        Polls are by default created in channels with the topic of ppoll. You can change this behavior
                        in the Dashboard.
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
                                        <p>/poll poll time</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Creates a poll in the server</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Manager Messages</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <Image
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/support/help'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/utilities/nicking'>
                            Next Page
                        </Link>
                        <Image
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
