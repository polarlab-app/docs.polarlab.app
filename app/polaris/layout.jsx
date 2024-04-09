import SideNav from '../../src/sideNav.jsx';
import TopBar from '../../src/topBar.jsx';
import '../../src/docs.css';
import { headers } from 'next/headers';

/*export const metadata = {
    title: 'Polaris Docs',
    description: 'Polaris Docs Website',
};*/

export async function generateMetadata() {
    const url = headers().get('referer');
    const split = url.split('/');
    if (!split[4]) {
        return {
            title: 'Polaris Docs',
            description: 'Polaris Docs',
        };
    }

    return {
        title: `${split[3]} Docs | ${split[4]} | ${split[5]}`,
        description: 'Polaris Docs',
    };
}

export default function PolarisLayout({ children }) {
    return (
        <div className='docswrapper'>
            <TopBar />
            <SideNav />
            {children}
        </div>
    );
}
