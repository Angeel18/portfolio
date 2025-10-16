function About(){
    return (
        <section id="about" className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 min-h-screen">
            <div className="flex w-full md:w-5/12 xl:w-3/12 max-w-60 md:max-w-none justify-center items-center">
                <img src="src/assets/Profile.png" className="rounded-full" alt="Picture of me" />
            </div>
            <div className="flex flex-col md:w-5/12 xl:w-3/12 px-4 justify-center items-center text-center">

                <h3 className="text-3xl lg:text-4xl" id="header-1-about-me">Hello, I'm Angel. </h3>
                <h3 className="text-xl lg:text-2xl mb-4 mt-2" id="header-2-about-me">I'm a Full Stack Web Developer.</h3>
                <p id="text-about-me" className="text-sm lg:text-base">
                    I recently graduated in Web Application Development, 
                    and I'm currently expanding my knowledge and refining my skills through personal projects and continuous learning.
                    <br />
                    I'm working in improving to build modern, and user-friendly web applications, 
                    and I enjoy exploring new technologies.
                    <br />
                    My next goal is to join a team as a Junior Web Developer, 
                    where I can contribute to real-world projects, learn from experienced professionals, 
                    and continue growing as a developer.   
                </p>
            </div>
        </section>

    )

}
export default About;