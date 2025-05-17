import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";

export const links = [
  {
    index: 0,
    titleEN: "Find me on Github",
    titleDE: "Finden Sie mich auf Github",
    href: "https://github.com/mantra-gor",
    icon: <FaGithub />,
  },
  {
    index: 1,
    titleEN: "Find me on LinkedIn",
    titleDE: "Finden Sie mich auf LinkedIn",
    href: "https://www.linkedin.com/in/mantra-gor/",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    titleEN: "Contact me via email",
    titleDE: "Kontaktieren Sie mich per email",
    href: "mailto:mantragor77@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    titleEN: "Get my resume",
    titleDE: "Meinen Lebenslauf holen",
    href: "https://drive.google.com/file/d/1UiaCdb8c32-wmRQDvOpy3BkeYWTcfA_N/view?usp=sharing",
    icon: <GrDocumentUser />,
  },
  // {
  //   index: 3,
  //   titleEN: "Find me on Medium",
  //   titleDE: "Finden Sie mich auf Medium",
  //   href: "",
  //   icon: <FaMedium />,
  // },
  // {
  //   index: 4,
  //   titleEN: "Find me on Blog",
  //   titleDE: "Finden Sie mich auf Blog",
  //   href: "",
  //   icon: <FaBlog />,
  // },
];
