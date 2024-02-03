import Image from 'next/image';

export default function Page() {
    return (
        <div className='mainsection'>
            <h6 className='directory'>/</h6>
            <div className='infonote note'>
                <img src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' className='noteicon' />
                <p className='notetext'>
                    Please be advised that the section you are currently viewing is undergoing active development. We
                    are working diligently to provide you with comprehensive and detailed information. We apologize for
                    any inconvenience caused by the incomplete state of this section. Thank you for your understanding
                    and patience as we continue to work on it.
                </p>
            </div>
        </div>
    );
}
