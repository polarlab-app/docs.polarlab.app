'use client'
import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
    const [data, setData] = useState(null);
    const [releaseSubchapters, setReleaseSubchapters] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/repos/polarlab-app/Polaris-V2/releases');
            let releases = await response.json();

            releases = releases.filter(release => !release.prerelease).sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

            let releaseSubchapters = {};

            releases.forEach((release) => {
                const lines = release.body.split('\n');
                let currentSubchapter = null;
                let currentSubSubchapter = null;
                let subchapters = {};

                lines.forEach((line) => {
                    if (line.startsWith('### ') && !line.startsWith('####')) {
                        const formattedLine = line.replace(/### /g, '');
                        currentSubchapter = formattedLine;
                        subchapters[currentSubchapter] = [];
                        currentSubSubchapter = null;
                    } else if (line.startsWith('####')) {
                        const formattedLine = line.replace(/#### /g, '');
                        currentSubSubchapter = formattedLine;
                        if (!subchapters[currentSubchapter]) {
                            subchapters[currentSubchapter] = [];
                        }
                        subchapters[currentSubchapter].push({
                            title: currentSubSubchapter,
                            items: [],
                        });
                    } else if (line.startsWith('- ')) {
                        const formattedList = line.replace(/- /g, '').replace(/[**]/g, '');
                        if (currentSubSubchapter) {
                            const currentSubSubchapterItem = subchapters[currentSubchapter]?.find(
                                (item) => item.title === currentSubSubchapter
                            );
                            if (currentSubSubchapterItem) {
                                currentSubSubchapterItem.items.push(formattedList);
                            }
                        } else {
                            if (!subchapters[currentSubchapter]) {
                                subchapters[currentSubchapter] = [];
                            }
                            subchapters[currentSubchapter].push(formattedList);
                        }
                    }
                });

                releaseSubchapters[release.id] = subchapters;
            });

            setData(releases);
            setReleaseSubchapters(releaseSubchapters);
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
                {data.map((release, index) => (
                    <a className='qnsub' href={`#release-${release.id}`} key={index}>
                        {release.name}
                    </a>
                ))}
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Releases / Previous Releases</h6>
                <h1 className='title'>Previous Releases</h1>
                <hr className='divider'></hr>
                {data.map((release, index) => (
                    <div className='chaptercontainer' id={`release-${release.id}`} key={index}>
                        <h2 className='chapter'>Polaris {release.name}</h2>
                        <hr className='chapterdivider'></hr>
                        {Object.entries(releaseSubchapters[release.id]).map(([subchapter, content], subIndex) => (
                            <div key={subIndex}>
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
                ))}
                <ButtonContainer />
            </div>
        </>
    );
}
