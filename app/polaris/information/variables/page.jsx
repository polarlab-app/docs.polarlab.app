import Link from 'next/link';

export default function Page() {
    return (
        <div className='mainsection'>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#variables'>
                    What are variables?
                </a>
                <a className='qnsub' href='#variable-types'>
                    Variable Types
                </a>
            </div>
            <h6 className='directory'>Polaris Docs / Information / Variables</h6>
            <h1 className='title'>Variables</h1>
            <hr className='divider'></hr>
            <div className='chaptercontainer' id='variables'>
                <h2 className='chapter'>What are Variables?</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    Variables are sort of a placeholder that stands for something else, so under a variable called 'a'
                    could be the value 'aertic', same as under a variable called 'amount' could be the value '24'
                </p>
                <p className='maintext'>
                    Variables are important because you don't need to type out the exact value if its long, or if you
                    want to edit a variable, you can easily do so! Polaris uses variables to store user inputted data
                    from interactions, and data that we get form discord such as your member object.
                </p>
            </div>
            <div className='chaptercontainer' id='variable-types'>
                <h2 className='chapter'>Variable types</h2>
                <hr className='chapterdivider'></hr>
                <p className='maintext'>
                    Variable types can be static, so they cannot be changed, such as{'   '}
                    <span className='codeblock'>user.id</span>, but there are also dynamic variables such as a guilds
                    member count.
                </p>
                <p className='maintext'>
                    Polaris has 2 types of variables, featured across the dashboard and interaction commands, required
                    and optionals ones. The required ones will look like this:{' '}
                    <span className='codeblock'>{`{required variable}`}</span>, note the curly brackets around it. The
                    optional variables are surrounded by square brackets, such as{' '}
                    <span className='codeblock'>{`[optional variable]`}</span>.
                </p>
            </div>
            <div className='buttoncontainer'>
                <div className='lastbutton'>
                    <img className='lastarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                    <Link className='lastbtn' href='/polaris/information/commands'>
                        Last Page
                    </Link>
                </div>
                <div className='nextbutton'>
                    <Link className='nextbtn' href='/polaris/information/modules'>
                        Next Page
                    </Link>
                    <img className='nextarrow' src='https://cdn.polarlab.app/src/docs/img/rightarrow.png' alt='alt' />
                </div>
            </div>
            <div className='spacebox'></div>
        </div>
    );
}
