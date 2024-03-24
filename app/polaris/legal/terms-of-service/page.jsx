import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#'>
                    Maintenance Impact
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Legal / Terms of Service</h6>
                <h1 className='title'>ToS</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id=''>
                    <h2 className='chapter'>DEV</h2>
                    <hr className='chapterdivider'></hr>
                </div>

                <ButtonContainer />
            </div>
        </>
    );
}
