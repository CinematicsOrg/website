import Navbar from '../components/Navbar';
import ContactForm from '../components/blocks/ContactForm';
import Footer from '../components/blocks/Footer';
import ContactSocials from '../components/blocks/ContactSocials';

const Contact = () => {
  return (
    <div>
      <Navbar logoPath="/images/cinematics_logo.png" />
      <div className="flex flex-cols-2 h-[926px]">
        <ContactForm />
      </div>
      <ContactSocials />
      <Footer />
    </div>
  );
};

export default Contact;
