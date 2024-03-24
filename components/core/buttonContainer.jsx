'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '@/src/css/core/buttonContainer.module.css';
import sidenavData from '@/src/button.json';

export default function ButtonContainer() {
    const pathname = usePathname();
    console.log(pathname);
    const sections = Object.keys(sidenavData);
    let previousHref = '';
    let nextHref = '';

    const category = pathname.match(/\/([^/]+)\//)[1];
    sections.forEach((section, index) => {
        const pages = Object.keys(sidenavData[section]);
        const pageIndex = pages.findIndex((page) => `/${category}/${section}/${page}` == pathname);

        if (pageIndex !== -1) {
            if (pages[pageIndex + 1]) {
                nextHref = `/${category}/${section}/${pages[pageIndex + 1]}`;
            } else {
                nextHref = `/${category}/${sections[index + 1]}/${Object.keys(sidenavData[sections[index + 1]])[0]}`;
            }

            if (pages[pageIndex - 1]) {
                previousHref = `/polaris/${section}/${pages[pageIndex - 1]}`;
            } else {
                previousHref = `/${category}/${sections[index - 1]}/${
                    Object.keys(sidenavData[sections[index - 1]])[
                        Object.keys(sidenavData[sections[index - 1]]).length - 1
                    ]
                }`;
            }
        } /*

        if (pageIndex !== -1) {
            if (index > 0) {
                const prevSection = sections[index - 1];
                const prevPages = Object.keys(sidenavData[prevSection]);
                previousHref = `/polaris/${prevSection}/${prevPages[prevPages.length - 1]}`;
            }
            if (index < sections.length - 1) {
                const nextSection = sections[index + 1];
                nextHref = `/polaris/${nextSection}/${Object.keys(sidenavData[nextSection])[0]}`;
            }
        }*/
    });
    return (
        <>
            <div className={styles.buttoncontainer}>
                <Link className={styles.lastbutton} href={previousHref}>
                    <Image
                        className={styles.lastarrow}
                        src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                        alt='alt'
                        width='201'
                        height='334'
                    />
                    Last Page
                </Link>
                <Link className={styles.nextbutton} href={nextHref}>
                    Next Page
                    <Image
                        className={styles.nextarrow}
                        src='https://cdn.polarlab.app/src/docs/img/rightarrow.png'
                        alt='alt'
                        width='201'
                        height='334'
                    />
                </Link>
            </div>
            <div className={styles.spacebox}></div>
        </>
    );
}

async function transformSidenav() {
    // Fetch your sidenav.json data here
    // For demonstration, let's assume you have the data in a variable named sidenavData

    // Transform the data
    const transformedSidenavData = {};
    for (const section in sidenavData) {
        transformedSidenavData[section.toLowerCase()] = {};
        for (const page in sidenavData[section]) {
            const transformedPage = page.replace(/\s+/g, '-').toLowerCase().replace(/&/g, 'and');
            transformedSidenavData[section.toLowerCase()][transformedPage] = sidenavData[section][page];
        }
    }

    return transformedData;
}
