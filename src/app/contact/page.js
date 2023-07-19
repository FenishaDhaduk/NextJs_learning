import Contactcard from "@/app/contact/Contactcard";
import ContactForm from "@/app/contact/ContactForm";
import style from "@/app/contact/contact.module.css";

export default function Contact() {
  return (
    <>
      <div className={style.container}>
        <h1>Contact Us</h1>
        <Contactcard />
        <section className={style.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29917954057!2d72.41493476443482!3d23.02015808934062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1689750759033!5m2!1sen!2sin"
        width={100}
        height={450}
        className={style.mapping}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
