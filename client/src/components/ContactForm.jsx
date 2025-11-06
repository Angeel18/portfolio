function ContactForm (){
async function SendForm(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const data = { name, email, message };

    try {
      const res = await fetch("/api/contact",  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        e.target.reset();
      } else {
      }
    } catch (error) {
      console.error(error);

    }
  }
    return(
        <form action={SendForm} className="py-6 px-4 flex w-1/2 items-start flex-col gap-4 min-w-3xs">
            <div className="flex w-full flex-col gap-1">
            <label htmlFor="name">Name and Surname:</label>
            <input type="text" name="name" className="border-1 w-full rounded-xl p-2 border-slate-300/25"/>
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