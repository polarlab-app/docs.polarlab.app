import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#cloning'>
                    Cloning Polaris
                </a>
                <a className='qnsub' href='#creating'>
                    Creating Modules
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Modules / Creating Modules</h6>
                <h1 className='title'>Creating Modules</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='cloning'>
                    <h2 className='chapter'>Cloning the repository</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Creating modules for Polaris is simple if you have fundamental understanding of Discord.js and
                        Javascript in general.
                    </p>
                    <p className='maintext'>
                        First, you need to clone the polaris repository to your local device, for local testing to work.
                        Here you can depart in 2 ways, either cloning our repository and developing onto the dev branch,
                        or forking Polaris to your account and developing there. Our preferred method is to clone the
                        repository directly, to do so, you can either go to the Polaris Github and downloading it as a
                        zip, or going to your command line and running the following command:
                    </p>
                    <p className='maintext'>
                        <span className='strong codeblock'>
                            git clone -b dev https://github.com/polarlab-app/Polaris-V2.git
                        </span>
                    </p>
                </div>
                <div className='note minornote'>
                    <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/minor.png'></img>
                    <p className='notetext'>
                        After cloning, be sure to switch and develop on the <span className='strong'>dev branch</span>.
                        All commits to <span className='strong'>master</span> will be automatically rejected. The above
                        provided command should automatically clone the dev branch, but please check to be sure!
                    </p>
                </div>
                <div className='chaptercontainer' id='creating'>
                    <h2 className='chapter'>Developing Modules</h2>
                    <hr className='chapterdivider'></hr>
                    <div className='note warningnote'>
                        <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/warning.png'></img>
                        <p className='notetext'>
                            All modules that want to be submitted to the official repository must follow a strict set of
                            standards or else they'll be rejected.
                            <ul className='list'>
                                <li>Must use the built in Embed Builder</li>
                                <li>Must not leak any confidential information</li>
                                <li>Must be clean code, mustn't be cluttered</li>
                                <li>Must use built in errorHandler for errors</li>
                                <li>Must log command using using consoleLogHandler</li>
                            </ul>
                            To accomplish most of this it is recommended to use the template.js file as a starting
                            point.
                        </p>
                    </div>
                    <p className='maintext'>
                        To actually create a module create a new folder inside "commands" or "events", with the name of
                        your module. Inside that folder you can create files for all your commands using the templates
                        stored in /templates. In this folder, you can create virtually any command or event you want.
                        These can use APIs, external images etc. For creating events, the folder must be named the asme
                        as the event name.
                    </p>
                </div>

                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/modules/modules-overview'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/modules/uploading-modules'>
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
