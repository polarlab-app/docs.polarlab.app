import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#cloning'>
                    Uploading Modules
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Modules / Uploading Modules</h6>
                <h1 className='title'>Uploading Modules</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='cloning'>
                    <h2 className='chapter'>Creating a pull request</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        To upload a module for it to be usable by others, you need to submit it to our github page. This
                        can be done by creating a pull request from your cloned repository. This pull request can later
                        be approved by one of the authorized Polaris developers.
                    </p>
                    <p className='maintext'>
                        To create a pull request head to our github repository, and click on create pull request.
                    </p>
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
