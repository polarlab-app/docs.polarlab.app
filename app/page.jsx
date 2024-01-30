//import Footer from './footer.jsx';
//import Nav from './nav.jsx';
import '../src/global.css';
import Link from 'next/link'
import Image from 'next/image'

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
                        <div className='griditem gridrowtwothirds '>
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
                            <Image 
                                className='gridimg'
                                src='https://cdn.discordapp.com/attachments/1018171583111647313/1162688572718055464/thirdtestactual.png?ex=653cd91d&is=652a641d&hm=bdd165761beb9cacddaac15d20ab3f9af3a58c92fd2681e963b219845c36d3e1&'
                                alt='alt'
                            />
                        </div>
                        <div className='griditem gridrowthird '>
                            <div className='gridtextcontainer'>
                                <h4 className='gridheader'>Polar MC</h4>
                                <p className='gridcontent'>
                                    A minecraft server for anyone. Build, explore, social with other players and more!
                                    Join to experience a breathtaking experience with all of our custom datapacks and a
                                    100 Milion chunk world.
                                </p>
                                <Link className='gridbutton' href='/polarmc'>Check It Out</Link>
                            </div>
                            <Image 
                                className='gridimg'
                                src='https://cdn.discordapp.com/attachments/1018171583111647313/1162688572718055464/thirdtestactual.png?ex=653cd91d&is=652a641d&hm=bdd165761beb9cacddaac15d20ab3f9af3a58c92fd2681e963b219845c36d3e1&'
                                alt='alt'
                            />
                        </div>
                        <div className='griditem gridrowthird'>
                            <div className='gridtextcontainer'>
                                <h4 className='gridheader'>Colors</h4>
                                <p className='gridcontent'>
                                    Testing the description of the grid to see if it fits and how well it does, if so
                                    Testing the description of the grid to see if it fits and how well it does, if so
                                    Testing the description of the grid to see if it fits and how well it does, if so
                                </p>
                                <Link className='gridbutton' href="/">Check It Out</Link>
                            </div>
                            <Image 
                                className='gridimg'
                                src='https://cdn.discordapp.com/attachments/1018171583111647313/1162688572718055464/thirdtestactual.png?ex=653cd91d&is=652a641d&hm=bdd165761beb9cacddaac15d20ab3f9af3a58c92fd2681e963b219845c36d3e1&'
                                alt='alt'
                            />
                        </div>
                        <div className='griditem gridrowtwothirds'>
                            <div className='gridtextcontainer'>
                                <h4 className='gridheader'>Glorious Development Kit</h4>
                                <p className='gridcontent'>
                                    A comprehensive toolkit designed for developers and designers. It offers a wide
                                    array of resources, including extensive color palettes, versatile generators and
                                    more!
                                </p>
                                <Link className='gridbutton' href='/glorious-development-kit'>
                                    Check It Out
                                </Link>
                            </div>
                            <Image 
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
