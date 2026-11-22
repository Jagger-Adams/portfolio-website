import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

const links = [
  { label: 'Email',    handle: 'jaggeradams77@gmail.com',              href: 'mailto:jaggeradams77@gmail.com',                  Icon: FaEnvelope },
  { label: 'LinkedIn', handle: 'linkedin.com/in/jagger-adams', href: 'https://linkedin.com/in/jagger-adams',    Icon: FaLinkedin },
  { label: 'GitHub',   handle: 'github.com/Jagger-Adams',      href: 'https://github.com/Jagger-Adams',         Icon: FaGithub },
];

export default function Contact() {
  return (
    <div className="contactRoot">
      <section className="contactSection tileSection tile1 col">
        <span className='h1'>Contact</span>
        <div className='col'>
          {links.map(({ label, handle, href, Icon }) => (
            <div className='contactRow row'>
              <a key={label} className="contactRow row" href={href}>
                <div className='contactRowLeft row'>
                  <Icon className="contactIcon" aria-hidden="true" />
                  <span className="contactLabel h2">{label}</span>
                </div>
                <span className="contactHandle h4">{handle}</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}