import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#summary'>
                    Privacy Policy Summary
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Legal / Privacy Policy</h6>
                <h1 className='title'>Privacy Policy</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Summary of our Policy</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        In short, we do not track your usage of polaris, except logs that log your user id and command
                        name that you ran. We also store data related to the economy module, eg. balance, inventory etc.
                        and we store all data that you can find inside the Dashboard (eg. guilds, various guild info).
                        We vow to never sell your data to anyone or any company. We will also never read through the
                        logs if not debugging or not necessary for development or security (So basically never lmao).
                    </p>
                    <p className='maintext'>
                        You should also probably know that the data we store is ONLY linked to info that is publicly
                        accessible by anyone, we just gather it in one place and utilize it. This data is stored
                        securely in our local Database and is not accessible by anyone other than Polaris (Bot) and the
                        Polar Lab Team.
                    </p>
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
