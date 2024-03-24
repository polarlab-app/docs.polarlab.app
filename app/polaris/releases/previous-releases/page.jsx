import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#summary'>
                    Privacy Policy Summary
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Legal / Privacy Policy</h6>
                <h1 className='title'>Privacy Policy</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Summary of our Policy</h2>
                    <hr className='chapterdivider'></hr>
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
