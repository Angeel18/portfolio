function ContactForm (){
async function SendForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nameSurname = formData.get("nameSurname");
    const email = formData.get("email");
    const message = formData.get("message");

    const data = { name: nameSurname, email, message };

    try {
      setStatus("Sending...");
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  }
    return(
        <form action={SendForm} className="py-6 px-4 flex w-1/2 items-start flex-col gap-4 min-w-3xs">
            <div className="flex w-full flex-col gap-1">
            <label htmlFor="nameSurname">Name and Surname:</label>
            <input type="text" name="nameSurname" className="border-1 w-full rounded-xl p-2 border-slate-300/25"/>
            </div>
            <div className="flex w-full flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="border-1 w-full rounded-xl p-2 border-slate-300/25" />
            </div>
            <div className="flex w-full flex-col gap-1">
            <label htmlFor="message">Message:</label>
            <textarea type="text" name="message" className="resize-none w-full min-h-25 border-1 rounded-xl p-2 border-slate-300/25" />
            </div>
            <button type="submit" className="self-end border-1 py-2 px-4 rounded-2xl border-slate-300/50 cursor-pointer">Send</button>
        </form>
    )
}
export default ContactForm;