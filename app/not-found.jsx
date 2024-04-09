import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <h1>Page Not Found</h1>
            <p>The page you tried to request was not found, return home with the button below</p>
            <Link href='/'>Return Home</Link>
        </>
    );
}
