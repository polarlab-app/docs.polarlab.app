import Image from 'next/image'

export default function Page() {
    return (
        <div className='mainsection'>
            <h6 className="directory">/</h6>
            <div class='infonote note'>
                <Image src='https://cdn.polarlab.app/src/docs/img/info.png' alt='alt' class='noteicon' />
                <p class='notetext'>
                    Please be advised that the section you are currently viewing is undergoing active development. We
                    are working diligently to provide you with comprehensive and detailed information. We apologize for
                    any inconvenience caused by the incomplete state of this section. Thank you for your understanding
                    and patience as we continue to work on it.
                </p>
            </div>
        </div>
    );
}
