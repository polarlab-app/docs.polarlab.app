import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#overview'>
                    Economy Overview
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Engagement / Economy</h6>
                <h1 className='title'>Economy Module</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='#overview'>
                    <h2 className='chapter'>Economy Overview</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        The economy module creates a virtual world in which you can perform various task and gain money,
                        wealth and status among other members. This module includes many real world tasks such as a job,
                        housing and items. This module is mainly based upon Dank Memer from which I have taken a lot of
                        inspiration.
                    </p>
                </div>
                <div className='chaptercontainer' id='#overview'>
                    <h2 className='chapter'>Economy Basics</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        It is not at all hard to progress in the economy. For starters, here are the basic methods of
                        making money: <br />
                        <span className='codeblock'>
                            <span className='strong'>/beg - </span> This command gives a small amount of coins to get
                            you started (cooldown: 5min)
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/hunt - </span> Requires a hunting rifle (/shop), hunts for animals
                            that you can sell for coins later (cooldown: 5min)
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/fish - </span> Requires a fishing rod (/shop), fish in a pond or
                            lake for fish, sellable for coins (cooldown: 5min)
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/dig - </span> Requires a shovel (/shop), digs in the ground for
                            lower-tier loot, sellable for coins (cooldown: 5min)
                        </span>{' '}
                        <br />
                    </p>
                    <p className='maintext'>
                        These are all the basic methods of making coins, these are easy, quick and require almost no
                        action from the user.
                    </p>
                </div>
                <div className='chaptercontainer'>
                    <h2 className='chapter'>Time based rewards</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polaris includes some commands that give you free coins and items, once every couple of days,
                        months or weeks. These commands are:
                    </p>
                    <p className='maintext'>
                        <span className='codeblock'>
                            <span className='strong'>/daily - </span> Can be executed once a day
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/weekly - </span> Can be executed once a week
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/monthly - </span> Can be executed once a month
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/yearly - </span> Can be executed once a year (lol)
                        </span>{' '}
                        <br />
                    </p>
                    <p className='maintext'>
                        These commands are basically a form of easy passive income, the longer the command cooldown, the
                        higher the reward.
                    </p>
                </div>
                <div className='chaptercontainer'>
                    <h2 className='chapter'>Jobs</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Jobs/Working is another way of making money in Polaris, first you need choose a job from the
                        list of available ones to you. Jobs are level-locked, meaning you need a higher level to get a
                        higher paying job (
                        <a className='embeddedhyperlink' href='/polaris/engagement/exp-and-leveling'>
                            Leveling
                        </a>
                        ).
                    </p>
                    <p className='maintext'>
                        All jobs can be found with <span className='strong'>/work list</span> and after you choose your
                        desired job, do <span className='strong'>/work {`{job}`}</span> and then{' '}
                        <span className='strong'>/work</span> to get your coins. If you work a lot, you can get a
                        promotion, which increases your salary in your current job, so you don't need to take a new one
                        every time. Promotions average after ~5 work shifts completed.
                    </p>
                </div>
                <div className='chaptercontainer'>
                    <h2 className='chapter'>Money management & Robbing</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Managing money is just as important in the real world as it is in Polaris. If you have too much
                        money, you will start losing it to inflation and you might get robbed by fellow server members.
                    </p>
                    <h3 className='subchapter'>Sending Money</h3>
                    <p className=''></p>
                </div>

                <div className='buttoncontainer'>
                    <div className='lastbutton'>
                        <img
                            className='lastarrow'
                            src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                            alt='alt'
                        />
                        <Link className='lastbtn' href='/polaris/engagement/birthdays'>
                            Last Page
                        </Link>
                    </div>
                    <div className='nextbutton'>
                        <Link className='nextbtn' href='/polaris/engagement/music'>
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
