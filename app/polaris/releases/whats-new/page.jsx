import Link from 'next/link';
import { JSDOM } from 'jsdom';
export default async function Page() {
    const response = await fetch('https://api.github.com/repos/polarlab-app/Polaris-V2/releases/latest');
    const data = await response.json();

    const lines = data.body.split('\n');

    /*let subchapters = [];
    let currentSubchapter = null;

    for (const line of lines) {
        if (line.startsWith('### ') && !line.startsWith('####')) {
            const formattedLine = line.replace(/### /g, '');
            currentSubchapter = formattedLine;
            subchapters[currentSubchapter] = [];
        } else if (line.startsWith('- ') && currentSubchapter) {
            const formattedList = line.replace(/- /g, '').replace(/[**]/g, '');
            subchapters[currentSubchapter].push(formattedList);
        }
    }*/

    let currentSubchapter = null;
    let currentSubSubchapter = null;
    let subchapters = {};

    for (const line of lines) {
        if (line.startsWith('### ') && !line.startsWith('####')) {
            const formattedLine = line.replace(/### /g, '');
            currentSubchapter = formattedLine;
            subchapters[currentSubchapter] = [];
            currentSubSubchapter = null;
        } else if (line.startsWith('####')) {
            const formattedLine = line.replace(/#### /g, '');
            currentSubSubchapter = formattedLine;
            subchapters[currentSubchapter].push({
                title: currentSubSubchapter,
                items: [],
            });
        } else if (line.startsWith('- ')) {
            const formattedList = line.replace(/- /g, '').replace(/[**]/g, '');
            if (currentSubSubchapter) {
                const currentSubSubchapterItem = subchapters[currentSubchapter].find(
                    (item) => item.title === currentSubSubchapter
                );
                if (currentSubSubchapterItem) {
                    currentSubSubchapterItem.items.push(formattedList);
                }
            } else {
                subchapters[currentSubchapter].push(formattedList);
            }
        }
    }

    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#latest'>
                    Latest Update
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Releases / What's New?</h6>

                <h1 className='title'>What's New?</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='latest'>
                    <h2 className='chapter'>Polaris {data.name}</h2>
                    <hr className='chapterdivider'></hr>
                    {Object.entries(subchapters).map(([subchapter, content], index) => (
                        <div key={index}>
                            <h3 className='subchapter'>{subchapter}</h3>
                            <hr className='subchapterdivider'></hr>
                            {content.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    {typeof item === 'string' ? (
                                        <ul className='mainlist'>
                                            <li className='strong'>{item}</li>
                                        </ul>
                                    ) : (
                                        <>
                                            <h4 className='subsubchapter'>{item.title}</h4>
                                            <hr className='subsubchapterdivider'></hr>
                                            <ul className='mainlist'>
                                                {item.items.map((listItem, listItemIndex) => (
                                                    <li className='strong' key={listItemIndex}>
                                                        {listItem}
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                    {/*{Object.entries(subchapters).map(([subchapterTitle, items]) => (
                        <>
                            <h3 className='subchapter'>{subchapterTitle}</h3>
                            <hr className='subchapterdivider'></hr>
                            <ul className='mainlist'>
                                {items.map((item, index) => (
                                    <li key={index} className='strong'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </>
                                ))}*/}
                    {/*{subchapters.map((subchapter) => (
                        <>
                            <h3 className='subchapter' key={subchapter}>
                                {subchapter}
                            </h3>
                            <hr className='subchapterdivider' key={subchapter + 'abc'}></hr>
                        </>
                    ))}*/}
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
