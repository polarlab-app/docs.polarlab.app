import ButtonContainer from '@/components/core/buttonContainer';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#module'>
                    Module Command
                </a>
                <a className='qnsub' href='#controlling'>
                    Controlling Modules
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polaris Docs / Modules / Using Modules</h6>
                <h1 className='title'>Controlling Modules</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='module'>
                    <h2 className='chapter'>Enabling Modules</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        For all actions regarding modules, we have a special module command in place. This command is an
                        easy gateway for controlling specific modules of Polaris. This command can be used to enable,
                        disable and reload modules. It is only accessible to server owners for security.
                    </p>
                    <p className='maintext'>
                        <span className='codeblock strong'>
                            /module {'{action}'} {'{module}'}
                        </span>
                    </p>
                    <p className='maintext'>
                        To enable a module, run this command with the action being enable, and then your desired module!
                        It's that simple! Just wait for the command to give you a confirmation message (It might take a
                        while) and you can have fun with your newly enabled commands!
                    </p>
                </div>
                <div className='chaptercontainer' id='controlling'>
                    <h2 className='chapter'>Controlling Modules</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Modules can additionally be disable if you no longer need them, or just wanted to test them out.
                        Modules also need to be reloaded after every update, because we use guild commands for modules.
                        Using guild commands doesn't allow commands to be automatically updated by Discord.
                    </p>
                </div>

                
                <ButtonContainer />
            </div>
        </>
    );
}
