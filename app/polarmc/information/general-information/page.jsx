export default function Page() {
    return (
        <>
            <div className='quicknav'>
                <a className='qntitle'>CONTENT</a>
                <a className='qnsub' href='#basic-information'>
                    Basic Information
                </a>
                <a className='qnsub' href='#server-access'>
                    Server Access
                </a>
            </div>
            <div className='mainsection'>
                <h6 className='directory'>Polar MC Docs / Information / General Information</h6>
                <h1 className='title'>General Information</h1>
                <hr className='divider'></hr>
                <div className='chaptercontainer' id='basic-information'>
                    <h2 className='chapter'>Info</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Polar MC is a bedrock and Java cross-compatible survival server, centered around building,
                        making friends and having a fun time. Our server has a bunch of cool plugins and datapacks to
                        enhance your vanilla experience and breathe life into the world of Minecraft.
                    </p>
                    <p className='maintext'>
                        Polar MC is completely free and accessible to anyone, no matter on what platform you are playing
                        on. It is mainly a social and interactive server, looking for players who want to enjoy the game
                        with other people and build extravagant creations.
                        <ul className='list'>
                            <li className='codeblock'>mc.polarlab.app (:25565, :19132 for bedrock)</li>
                            <li className='codeblock'>map.polarlab.app (Server Map)</li>
                        </ul>
                    </p>
                </div>
                <div className='chaptercontainer' id='server-access'>
                    <h2 className='chapter'>Server Access</h2>
                    <hr className='chapterdivider'></hr>
                    <p className='maintext'>
                        Due to security reasons, only selected individuals can access Polar MC. This is to prevent
                        hackers, griefers and overall just random people wandering around. We are trying to create a
                        safe and growing community for mature and engaged individuals.
                    </p>
                    <p className='maintext'>
                        To access Polar MC, you simply need to join our Discord
                        <a href='https://polarlab.app/discord' className='embeddedhyperlink'>
                            (Here)
                        </a>
                        and complete a quick onboarding process. Then you can simply request access accompanied by your
                        username and why you want to join Polar MC. Then our staff team will grant you access to the
                        server whitelist, and you can freely join. Requests are processed within 12 hours of the message
                        being sent.
                    </p>
                </div>
            </div>
        </>
    );
}
