// A custom method that is called when the user submits the "Contact me" form. It actually sends me an email, provides functionality to the modal displaying the appropriate message, and does the cleanup task.
const handleSubmit = (event, modalRef, setresultText, emailjs, contactForm) => {
    event.preventDefault();
    modalRef.current.click();

    setresultText({
        title: "Please Wait",
        description: "Your message is being delivered."
    });

    // EmailJS to send the information to my Email ID.
    emailjs.sendForm('service_0wcmgnv', 'template_ulzc5a7', contactForm.current, 'O0wEfR0CHzgJz00pr')
        .then(() => {
            setresultText({
                title: "<span className='text-success'>SUCCESS</span>",
                description: "<span className='text-success fw-bold'>Your message has been delivered. I will respond back shortly.</span>"
            });

        }, (error) => {
            setresultText({
                title: "<span className='text-danger'>ERROR</span>",
                description: `<span className='text-danger fw-bold'>A problem has occurred while sending your message - </span>${error.text}`
            });
        });

    event.target.reset();
}

export default handleSubmit;