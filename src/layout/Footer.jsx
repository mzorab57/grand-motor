import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "../components/ui/hover-footer";

import { FaFacebookF, FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Divisions",
    links: [
      { label: "Grand Motors", href: "/services" },
      { label: "Grand Rent A Car", href: "/services" },
      { label: "Transportation", href: "/services", pulse: true },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} className="text-[#c42424]" />,
    text: "info@grandmotorsiraq.com",
    href: "mailto:info@grandmotorsiraq.com",
  },
  {
    icon: <Phone size={18} className="text-[#c42424]" />,
    text: "+964 7503772828",
    href: "tel:+9647503772828",
  },
  {
    icon: <MapPin size={18} className="text-[#c42424]" />,
    text: "Erbil - 40 Meter - Showroom No. (22), Kurdistan Region, Iraq",
  },
];

const socialLinks = [
{
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://www.facebook.com/grandmotorsiraq",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/grandmotorsiraq",
  },
  {
    name: "Snapchat",
    icon: FaSnapchat,
    url: "https://snapchat.com/adds/grandmotorsiraq",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    url: "https://tiktok.com/grandmotorsiraq",
  },
];

const text = "Grand\nMotors";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden  bg-[#0F0F11]/95 text-gray-300 ">
      <div className="relative z-10 p-8 md:p-12 lg:p-14">
        <div className="grid grid-cols-1  gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col space-y-5 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/logoBlack.png"
                alt="Grand Group"
                className="h-72  scale-125 object-contain"
              />
              <div>
                {/* <span className="block text-2xl font-bold text-white">Grand Group</span>
                <span className="text-sm text-gray-400">for General Trading</span> */}
              </div>
            </div>
            {/* <p className="text-sm leading-relaxed text-gray-300">
              Founded by Mr. Muhanad Hasan in 2020, Grand Group has grown from a
              specialized automotive trading company into a full mobility brand
              delivering sales, rental, and transportation solutions across Iraq.
            </p> */}
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-lg font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="transition-colors hover:text-[#c42424]"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute right-[-10px] top-0 h-2 w-2 rounded-full bg-[#c42424] animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-start space-x-3">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors hover:text-[#c42424]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm md:flex-row">
          <div className="flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition-all duration-200 hover:border-[#c42424]/50 hover:bg-white/10 hover:text-white"
              >
                <item.icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Grand Motors All rights reserved. |
            Developed by{" "}
            <a
              href="https://wa.me/9647701411893"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c42424] transition-colors hover:text-white"
            >
              Al-Code
            </a>
          </p>
        </div>
      </div>

      <div className=" h-[27rem] -mb-32 -mt-32 lg:flex whitespace-pre-line">
        <TextHoverEffect text={text} className="z-10" />
        
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;
