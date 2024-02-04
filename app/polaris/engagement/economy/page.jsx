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
                    <p className='maintext'>
                        For different commands to work, you need to have money in different places. Your purse or your
                        bank account. To move money between these 2 areas, use the following commands:
                    </p>
                    <p className='maintext'>
                        <span className='codeblock'>
                            <span className='strong'>/deposit {'{user}'} - </span> Deposits money into your bank account
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/withdraw {'{user}'} - </span> Withdraws money into your purse
                        </span>{' '}
                        <br />
                    </p>
                    <h3 className='subchapter'>Sending Money</h3>
                    <p className='maintext'>
                        Within Polaris, there are 2 ways of sending money to other members or your friends. You can
                        either send money to their purse, which is not always recommended as it can be easily stolen by
                        other people, or you can transfer money into their bank account, which is better, as for this to
                        be stolen a bankrob must be initiated and that takes a while.
                    </p>
                    <p className='maintext'>
                        <span className='codeblock'>
                            <span className='strong'>
                                /pay {'{user}'} {'{amount}'} -{' '}
                            </span>{' '}
                            This command sends money from purse to purse to another user
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>
                                /transfer {'{user}'} {'{amount}'} -{' '}
                            </span>{' '}
                            This command transfers money from yours to someone elses bank account
                        </span>{' '}
                        <br />
                    </p>
                    <h3 className='subchapter'>Robbing Others :D</h3>
                    <p className='maintext'>
                        If you really feel like someone has too much money in their purse or bank account, you can rob
                        them! There are 2 ways to rob people, one is to rob someone of the money that they have in their
                        purse, this method is quick, easy and basically uncounterable.
                    </p>
                    <p className='maintext'>
                        However if your're feeling really fancy, you can break into someone bank account. This requires
                        multiple people to join you, and a money investment from each one of you. This method is more
                        dangerous, because if you happen to be caught or the user calls the police on you, everyone
                        involved will lose a lot of money and possibly go to jail. However if you do manage to bankrob
                        someone, the rewards are greater.
                    </p>
                    <p className='maintext'>
                        <span className='codeblock'>
                            <span className='strong'>/rob {'{user}'} - </span> This will rob someone of their money (10%
                            chances of getting caught)
                        </span>{' '}
                        <br />
                        <span className='codeblock'>
                            <span className='strong'>/bankrob {'{user}'} - </span> Bankrobs someone, if not enough
                            people join, this will fail (3+ people required)
                        </span>{' '}
                        <br />
                    </p>
                    <div className='minornote note'>
                        <img src='https://cdn.polarlab.app/src/docs/img/minor.png' alt='alt' className='noteicon' />
                        <p className='notetext'>
                            Leaving a lot of money in your purse for extended periods of time is basically an invitation
                            for someone to rob you. It is recommended to move most of your money into your bank account.
                            It is also generally advised to keep as little money as possible and buy items instead.
                        </p>
                    </div>
                </div>
                <div className='chaptercontain'>
                    <h2 className='chapter'>Items</h2>
                    <hr className='chapterdivider' />
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
