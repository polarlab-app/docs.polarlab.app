import Link from 'next/link';
import Image from 'next/image';
export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#welcome-to-polarlab'>
                    Welcome to Polar Lab!
                </a>
                <a className='qnsub' href='#getting-started'>
                    Getting Started
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs</h6>
                <h1 className='title'>Polaris Documentation</h1>
                <hr className='divider' />
                <div className='warningnote note'>
                    <Image src='https://cdn.polarlab.app/src/docs/img/warning.png' alt='alt' className='noteicon' />
                    <p className='notetext'>
                        Please note that this documentation is a work in progress (WIP). Certain sections may contain
                        placeholders or incomplete information. We apologize for any inconvenience caused. Our team is
                        actively expanding and refining the content to provide a more comprehensive resource. We
                        appreciate your patience and understanding as we work towards improving the documentation. Thank
                        you for your support.
                    </p>
                </div>
                <div className='chaptercontainer' id='welcome-to-polarlab'>
                    <h2 className='chapter'>Welcome to Polar Lab!</h2>
                    <hr className='chapterdivider' />
                    <p className='maintext'>
                        Welcome to Polaris, a feature-rich Discord bot developed by
                        <a href='https://polarlab.app/users/aertic/'> Aertic. </a>
                        Designed to enhance your server experience, Polaris offers a versatile range of tools for
                        efficient moderation, engaging community management, and customizable commands. With regular
                        updates and a commitment to excellence, Polaris ensures reliability and security while
                        incorporating user feedback for continuous improvement. This documentation serves as a
                        comprehensive guide, providing in-depth explanations, tutorials, and tips to maximize Polaris'
                        potential. Join us on this journey to unlock the full potential of your Discord server with
                        Polaris!
                    </p>
                </div>
                <div className='chaptercontainer' id='getting-started'>
                    <h2 className='chapter'>Getting Started</h2>
                    <hr className='chapterdivider' />
                    <p className='maintext'>
                        Welcome to our comprehensive documentation! Here, you'll find all the essential information to
                        get started with our platform. To help you navigate through the content seamlessly, we offer
                        multiple options. You can use the intuitive buttons below to move forward or backward, ensuring
                        a smooth reading experience. Alternatively, the left navigation bar provides quick access to
                        specific sections, enabling you to jump directly to the topics of your interest.
                    </p>
                    <p className='maintext'>
                        Moreover, we've incorporated a content menu on the right side of the page. This convenient menu
                        offers an overview of the document's structure, allowing you to click and explore the various
                        sections effortlessly. Whether you're a beginner or an experienced user, this user-friendly
                        layout ensures you can find the information you need promptly.
                    </p>
                </div>
                <div className='buttoncontainer'>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/information/commands'>
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
