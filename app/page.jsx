import Footer from './footer.jsx';
import Nav from './nav.jsx';
//import '../src/global.css';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Nav />
            <div className='main'>
                <div className='topsection'>
                    <h1 className='websiteheader'>Documentation Hub</h1>
                    <h2 className='subheader '>The hub to all the information about our services</h2>
                    <a className='gdkredirect ' href='#services'>
                        All The Docs
                    </a>
                    <p className='scroll '>Scroll</p>
                </div>
                <div className='sitesection' id='services'>
                    <h2 className='sectionheader '>Documentation Options</h2>
                    <p className='sectionsubheader '>All the docs you can find here</p>
                    <div className='featuregrid'>
                        <div className='griditem gridrowfull '>
                            <div className='gridtextcontainer'>
                                <h4 className='gridheader'>Polaris V2</h4>
                                <p className='gridcontent'>
                                    Elevate your Discord experience with weekly updates, an intuitive web dashboard,
                                    comprehensive documentation, and a commitment to reliability. Join our public test
                                    beta, and be a part of shaping the future of this dynamic Discord bot!
                                </p>
                                <Link className='gridbutton' href='/polaris'>
                                    Check It Out
                                </Link>
                            </div>
                            <img
                                className='gridimg'
                                src='https://cdn.discordapp.com/attachments/1018171583111647313/1162688572718055464/thirdtestactual.png?ex=653cd91d&is=652a641d&hm=bdd165761beb9cacddaac15d20ab3f9af3a58c92fd2681e963b219845c36d3e1&'
                                alt='alt'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
