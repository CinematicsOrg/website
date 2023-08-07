import Navbar from '../components/Navbar';
import ContactForm from '../components/blocks/ContactForm';
import Footer from '../components/blocks/Footer';
import ContactSocials from '../components/blocks/ContactSocials';

const Contact = () => {
  return (
    <div className="bg-cover bg-[url('images/cinematics_contactbackground.png')]">
      <Navbar logoPath="/images/cinematics_logo.png" />
      <div className="md:flex flex-cols-2 py-[30px] md:py-[54px]">
        <ContactForm />
      </div>
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Contact;
