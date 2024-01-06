import { SideNav } from '../../src/sideNav.jsx';
import { TopBar } from '../../src/topBar.jsx';
import "../../src/input.css"
//import "../globals.css"

export default function PolarisLayout({ children }) {
    return (
        <section>
            <TopBar />
            <SideNav />
            {children}
        </section>
    );
}

