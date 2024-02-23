import { SideNav } from '../../src/sideNav.jsx';
import { TopBar } from '../../src/topBar.jsx';
import '../../src/docs.css';

export const metadata = {
    title: 'Polaris Docs',
    description: 'Polaris Docs Website',
};

export default function PolarisLayout({ children }) {
    return (
        <div className='docswrapper'>
            <TopBar />
            <SideNav />
            {children}
        </div>
    );
}
