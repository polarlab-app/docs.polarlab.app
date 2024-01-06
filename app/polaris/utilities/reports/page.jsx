import Link from "next/link"

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#why-reports'>
                    What are reports?
                </a>
                <a className='qnsub' href='#reports'>
                    Reporting
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Utilities / Reports</h6>
                <h1 className='title'>Reports</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='why-reports'>
                    <h2 className='chapter'>What are Reports?</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Reports are a feature in Polaris allowing users to anonymously report people who promote racism
                        or other offensive things. This command automatically alerts the admins to take quick action.
                    </p>
                </div>
                <div className='chaptercontainer' id='reports'>
                    <h2 className='chapter'>Reports</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Reporting a member is easy, just run a command, type a reason and done! Misusing this feature
                        will usually result in a punishment as it pings the whole staff team!
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
                                        <p>/report user [reason]</p>
                                    </div>
                                </td>
                                <td className='tcell'>
                                    <div className='tddiv'>
                                        <p>Reports a user to the server Staff</p>
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
                        <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' />
                        <Link className='lastbtn' href='/polaris/utilities/nicking'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/utilities/suggestions-and-reviews'>
                            Next Page
                        </Link>
                        <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' />
                    </div>
                </div>
                <div className='spacebox'></div>
            </div>
        </>
    );  
}