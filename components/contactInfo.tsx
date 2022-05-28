import Image from "next/image";
import email from "../public/icons/email.svg";
import github from "../public/icons/github.svg";
import linkedin from "../public/icons/linkedin.svg";

const ContactInfo = () => {
  return (
    <ul>
      <li>
        <a href="mailto:hello@kinau.co.uk">
          <Image src={email} alt="email" width="22" height="22"></Image>
          hello@kinau.co.uk
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src={github} alt="github" width="22" height="22"></Image>
          github.com/kin-au
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/kin-au"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin" width="22" height="22"></Image>
          linkedin.com/in/kin-au
        </a>
      </li>
    </ul>
  );
};

export default ContactInfo;
