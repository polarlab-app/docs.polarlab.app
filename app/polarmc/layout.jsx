import TopBar from '../../src/topBar.jsx';
import SideNav from '@/components/polarmc/polarmcnav.jsx';
import '../../src/docs.css';

export const metadata = {
    title: 'PolarMC Docs',
    description: 'PolarMC Docs Website',
};

export default function PolarisLayout({ children }) {
    return (
        <section>
            <TopBar />
            <SideNav />
            {children}
        </section>
    );
}
