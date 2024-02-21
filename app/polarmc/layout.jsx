import { TopBar } from '../../src/topBar.jsx';
import '../../src/docs.css';

export const metadata = {
    title: 'Polaris Docs',
    description: 'Polaris Docs Website',
};

export default function PolarisLayout({ children }) {
    return (
        <section>
            <TopBar />
            {/*<SideNav />*/}
            {children}
        </section>
    );
}
