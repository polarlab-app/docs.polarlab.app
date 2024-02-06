import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#overview'>
                    Overview
                </a>
                <a className='qnsub' href='#suggestions'>
                    Suggestions
                </a>
                <a className='qnsub' href='#reviews'>
                    Reviews
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Utilities / Suggestions And Reviews</h6>
                <h1 className='title'>Suggestions & Reviews</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='overview'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Reports are a feature in Polaris allowing users to anonymously report people who promote racism
                        or other offensive things. This command automatically alerts the admins to take quick action.
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
                                        <p>/suggest {'{suggestion}'}</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Suggests something to the server</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>None</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>
                                            /review {'{review}'} {'{rating}'}
                                        </p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Rates the server</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>None</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='chaptercontainer' id='suggestions'>
                    <h2 className='chapter'>Suggestions</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Suggestions are the quickest way to give advice to server owners and let other members voice
                        their opinion about these changes. Each suggestions has a couple of reactions attached so
                        members can vote on whether they think this is a good suggestion or not. Suggestions are also a
                        part of the Starboard!
                    </p>
                </div>
                <div className='chaptercontainer' id='reviews'>
                    <h2 className='chapter'>Reviews</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Reviews are an easy way to express your opinion about the server along with a 1-5 star rating.
                        People can react to your rating if they agree or disagree and ratings are one of the many
                        categories that can be voted into the starboard.
                    </p>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/utilities/reports'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/utilities/'>
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
