import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className='mainsection'>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#developer-mode'>
                    What is Dev Mode?
                </a>
                <a className='qnsub' href='#enabling-developer-mode'>
                    Enabling Developer Mode
                </a>
            </div>
            <h6 className='directory'>Polaris Docs / Information / Developer Mode</h6>
            <h1 className='title'>Developer Mode</h1>
            <hr className='divider'></hr>
            <div className='chaptercontainer' id='developer-mode'>
                <h2 className='chapter'>What is Developer mode?</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    Developer mode is a handy tool Discord provides for you to copy ids of users, messages, guilds etc.
                    These ids allow you to find roles outside of a guild, or mention users that are no longer present
                    inside a guild. In the case of Polaris, this enables you to mention specific things in components or
                    messages, it also allows you to configure users or admin roles inside the dashboard.
                </p>
            </div>
            <div className='chaptercontainer' id='enabling-developer-mode'>
                <h2 className='chapter'>Enabling Developer Mode</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    Enabling developer mode is easy, no coding required! Just follow this step by step tutorial:{' '}
                    <strong className='strong maintext'>
                        Settings {`->`} Advanced {`->`} Enable Developer Mode!
                    </strong>
                </p>
                <img
                    src='https://cdn.discordapp.com/attachments/1018171583111647313/1203010126534021202/image.png?ex=65cf897d&is=65bd147d&hm=e9255a85747f7784b0d1cfca0c678a32cf45e7f3c13afa5faf7a32608e87c4a1&'
                    className='mainimg'></img>
                <p className='maintext'>
                    Thats it! You have now successfully enabled developer mode on your device! To test this, try right
                    clicking on a message and see if Copy ID shows up!
                </p>
            </div>
            <div className='buttoncontainer'>
                <div className='lastbutton'>
                    <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    <Link className='lastbtn' href='/polaris/information/notes'>
                        Last Page
                    </Link>
                </div>
                <div className='nextbutton'>
                    <Link className='nextbtn' href='/polaris/core/ping'>
                        Next Page
                    </Link>
                    <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                </div>
            </div>
            <div className='spacebox'></div>
        </div>
    );
}
