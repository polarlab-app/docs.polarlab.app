import Link from "next/link"
import Image from 'next/image'
export default function Page() {

    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#ping'>
                    The ping command
                </a>
                <a className='qnsub' href='#ping-values'>
                    Ping Values
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Core / Ping</h6>
                <h1 className='title'>Ping</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='ping'>
                    <h2 className='chapter'>Ping Command</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        The Ping command in Polaris provides essential insights into server latency.
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
                                        <p>/ping</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Returns the bots current ping</p>
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
                <div className='chaptercontainer' id='ping-values'>
                    <h2 className='chapter'>Ping Values</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        The ping command can return multiple values as a result, below is a table of results and their
                        meaning.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th className='thead'>Result</th>
                                <th className='thead'>Result (text)</th>
                                <th className='thead'>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>0-50 ms</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Excellent</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Smooth and responsive connection.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>51-100 ms</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Very Good</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p> Minimal lag, suitable for most activities.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>101-150 ms</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Good</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Some delay may be noticed but generally acceptable.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>151-200 ms</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Fair</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Noticeable lag, impacting real-time activities.</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>201 ms and above</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Poor</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Significant lag, affecting user experience.</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <Image className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                        <Link className='lastbtn' href='/polaris/general/account'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/core/uptime'>
                            Next Page
                        </Link>
                        <Image className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    </div>
                </div>
                <div className='spacebox'></div>
            </div>
        </>
    );
}