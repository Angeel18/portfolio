import ContactForm from "./ContactForm"
function Contact (){
    return(
        <section id="Contact" className="flex justify-center items-center min-h-fit my-5 mb-20 ">
            <div className="flex flex-col gap-8 justify-between items-center w-2/3">
                <div className="text-center">
                <h2 className="text-2xl md:text-3xl">Want to work together?</h2>
                <h2 className="text-xl md:text-2xl">Leave your details and I'll get back to you as soon as possible.</h2>
                </div>
                <ContactForm />
            </div>
        </section>
    )

}

export default Contact;