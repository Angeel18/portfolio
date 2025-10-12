function About(){
    return (
        <section id="about" className="flex justify-center gap-20 h-screen">
            <div className="flex w-3/12 justify-center items-center">
                <img src="src/assets/Profile.png" className="rounded-full" alt="Picture of me" />
            </div>
            <div className="flex flex-col w-3/12 justify-center items-center text-center">

                <h3 className="text-4xl" id="header-1-about-me">Hello, I'm Angel. </h3>
                <h3 className="text-2xl mb-4 mt-2" id="header-2-about-me">I'm a Full Stack Web Developer.</h3>
                <p id="text-about-me">
                    I'm a recently graduated in Web Application Development, 
                    and I'm currently expanding my knowledge and refining my skills through personal projects and continuous learning.
                    <br />
                    I'm passionate about building modern, efficient, and user-friendly web applications, 
                    and I enjoy exploring new technologies that help improve both the development process and user experience.
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