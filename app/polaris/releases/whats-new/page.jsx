'use client'
import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState(null);
    const [subchapters, setSubchapters] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/repos/polarlab-app/Polaris-V2/releases/latest');
            const data = await response.json();

            const lines = data.body.split('\n');

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

            setData(data);
            setSubchapters(subchapters);
        }

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
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
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
