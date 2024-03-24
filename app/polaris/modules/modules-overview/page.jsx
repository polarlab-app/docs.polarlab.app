import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#overview'>
                    Modules Overview
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Modules / Overview</h6>
                <h1 className='title'>Modules Overview</h1>
                <hr className='divider'></hr>
                <div className='note correctnote'>
                    <img className='noteicon' src='https://cdn.polarlab.app/src/docs/img/correct.png' />
                    <p className='notetext'>
                        All modules made by independent developers follow strict security standards, and are always
                        checked by the official development team, before they can be submitted for public use. Third
                        party modules also cannot be enabled by default and need to first be enabled in your bot
                        settings under experiments.
                    </p>
                </div>
                <div className='chaptercontainer' id='summary'>
                    <h2 className='chapter'>Overview</h2>
                    <hr className='chapterdivider'></hr>

                    <p className='maintext'>
                        Modules are a fundamental part of Polaris. Modules allow you and us to control certain parts of
                        the bot independently on each other. Like only enabling the music module, if you are not
                        interested in the rest. In total there are 11 Official modules made by Polar Lab, and 2 modules
                        made by independent developers.
                    </p>
                    <p className='maintext'>
                        At Polar Lab we encourage developers to develop their own modules, which is why we made it as
                        easy as possible to do so, and made this guide on how to efficiently and correctly submit
                        community modules, or report issues with them.
                    </p>
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
