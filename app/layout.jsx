import '../src/input.css';
export const metadata = {
    title: 'Polar Lab Docs',
    description: 'Polar Lab Docs Website',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='body' id='body'>
                {children}
            </body>
        </html>
    );
}
