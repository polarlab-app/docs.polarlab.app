export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#welcome'>
                    Welcome to Polar Mc
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polar MC Docs</h6>
                <h1 className='title'>General Information</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='welcome'>
                    <h2 className='chapter'>Welcome!</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'></p>
                </div>
            </div>
        </>
    );
}
