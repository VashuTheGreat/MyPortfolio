import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp, FaPhone,FaEnvelope, FaTelegramPlane,
  FaLinkedin, } from "react-icons/fa";


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-400 text-lg mb-8">Feel free to reach out through any of the platforms below!</p>
      
      {/* Social Icons */}
      <div className="flex gap-6 text-3xl">
          <a
    href="mailto:vanshsharma7832@gmail.com"
    className="hover:text-green-400 transition-all"
  >
    <FaEnvelope />
  </a>
  
  <a
    href="https://www.linkedin.com/in/vansh-sharma-074698331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // replace with your LinkedIn profile link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition-all"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a
  href="https://www.youtube.com/@VashuTheGreat" // replace with your actual channel URL
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-red-500 transition-all"
  title="YouTube"
>
  <FaYoutube />
</a>

      </div>
      
      {/* Contact Buttons */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <a href="https://wa.me/+919354703303" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg text-lg transition-all">
          <FaWhatsapp /> Contact on WhatsApp
        </a>
        <a href="tel:+919354703303" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg text-lg transition-all">
  <FaPhone /> Call Now
</a>


      </div>
    </div>
  );
};

export default ContactPage;
