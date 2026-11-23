import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import { FiArrowUpRight, FiArrowRight } from 'react-icons/fi';

const links = [
  { label: 'Email',    handle: 'jaggeradams77@gmail.com',              href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jaggeradams77@gmail.com', Icon: FaEnvelope },
  { label: 'LinkedIn', handle: 'linkedin.com/in/jagger-adams', href: 'https://linkedin.com/in/jagger-adams',    Icon: FaLinkedin },
  { label: 'GitHub',   handle: 'github.com/Jagger-Adams',      href: 'https://github.com/Jagger-Adams',         Icon: FaGithub },
];

export default function Contact() {
  return (
    <div className="contactRoot">
      <section className="contactSection tileSection tile1 col">
        <span className='contactTitle'>Contact</span>
        <div className='contactBody col'>
          {links.map(({ label, handle, href, Icon }) => (
            <a key={label} className="contactRow row" href={href} target="_blank" rel="noopener noreferrer">
              <div className='contactBox row'>
                <Icon className="contactIcon" aria-hidden="true" />
                <span className="contactLabel h2">{label}</span>
              </div>
              <div className='contactBox row'>
                <span className="contactHandle h4">{handle}</span>
                <FiArrowRight className="contactArrow" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}