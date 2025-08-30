import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    { title: 'Rechtliche Prüfung & Einrichtung', href: '#' },
    { title: 'Digitale bAV-Verwaltung', href: '#' },
    { title: 'Mitarbeiterkommunikation', href: '#' },
    { title: 'Persönliche Beratung', href: '#' },
  ],
  company: [
    { title: 'Über uns', href: '/ueber-uns' },
    { title: 'Service-Team', href: '/ueber-uns/service-team' },
    { title: 'Kontakt', href: '/kontakt' },
    { title: 'Termin vereinbaren', href: 'https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', isExternal: true },
  ],
  legal: [
    { title: 'Datenschutzerklärung', href: '/datenschutz' },
    { title: 'Impressum', href: '/impressum' },
  ],
};

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-400 hover:text-white transition-colors duration-200"
  >
    <Icon className="h-6 w-6" />
    <span className="sr-only">{href.includes('linkedin') ? 'LinkedIn' : 'YouTube'}</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Social */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <Link to="/">
              <img
                src="/acencia-logo-new.png"
                alt="Acencia Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-neutral-300 text-base">
              Über 30 Jahre Erfahrung in der betrieblichen Altersvorsorge – einfach und digital.
            </p>
            <div className="flex items-center space-x-4">
              <SocialLink href="https://www.linkedin.com/company/acencia/" icon={Linkedin} />
              <SocialLink href="https://www.youtube.com/@ACENCIAde" icon={Youtube} />
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <span className="text-neutral-300 hover:text-white transition-colors">
                    {link.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-neutral-300 hover:text-white transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-400/30 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} ACENCIA GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
             <p className="text-sm text-neutral-500">ACENCIA GmbH, Hackenheim, Deutschland</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;