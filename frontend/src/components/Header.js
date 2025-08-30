import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../lib/utils'; // Assuming you have a utility for class names

const navLinks = [
  {
    title: 'bAV',
    href: '/die-bav',
    description: 'Betriebliche Altersvorsorge',
    subLinks: [
      { title: 'Für Unternehmen', href: '/die-bav/x' },
      { title: 'Für Arbeitnehmer', href: '/die-bav/y' },
      { title: 'Aktuelles', href: '/die-bav/aktuelles' },
    ],
  },
  {
    title: 'bKV',
    href: '/bkv',
    description: 'Betriebliche Krankenversicherung',
    subLinks: [
      { title: 'Option X', href: '/bkv/x' },
      { title: 'Option Y', href: '/bkv/y' },
    ],
  },
  {
    title: 'bUV',
    href: '/buv',
    description: 'Betriebliche Unfallversicherung',
    subLinks: [
      { title: 'Option X', href: '/buv/x' },
      { title: 'Option Y', href: '/buv/y' },
    ],
  },
  {
    title: 'Über Uns',
    href: '/ueber-uns',
    subLinks: [
        { title: 'Service-Team', href: '/ueber-uns/service-team' },
        { title: 'Kontakt', href: '/kontakt' },
    ]
  },
];

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent-100/50 focus:bg-accent-100/50',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-text-primary">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-text-secondary">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 200);
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border-subtle shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0">
          <img src={`${process.env.PUBLIC_URL}/acencia-logo-new.png`} alt="Acencia Logo" className="h-10 w-auto" />
        </Link>

        <NavigationMenu.Root className="hidden lg:flex items-center justify-center">
          <NavigationMenu.List className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavigationMenu.Item key={link.href}>
                <NavigationMenu.Trigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {link.title}
                  <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true" />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background rounded-lg shadow-lg border border-border-subtle">
                    <li className="row-span-3">
                      <NavigationMenu.Link asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-50 to-primary-400/30 p-6 no-underline outline-none focus:shadow-md" to={link.href}>
                          <div className="mt-4 mb-2 text-lg font-medium text-primary-900">{link.title}</div>
                          <p className="text-sm leading-tight text-primary-900/80">{link.description}</p>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                    {link.subLinks.map((subLink) => (
                      <ListItem key={subLink.href} href={subLink.href} title={subLink.title} />
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
             <NavigationMenu.Item>
                <NavLink to="/kontakt" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none">
                    Kontakt
                </NavLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="hidden lg:flex items-center space-x-4">
          <Button onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}>
            Login Portal
          </Button>
        </div>

        <div className="lg:hidden">
          <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/30" />
              <Dialog.Content className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-lg flex flex-col">
                <div className="flex items-center justify-between">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)}><img src={`${process.env.PUBLIC_URL}/acencia-logo-new.png`} alt="Acencia Logo" className="h-8 w-auto" /></Link>
                  <Dialog.Close asChild><Button variant="ghost" size="icon"><X className="h-6 w-6" /></Button></Dialog.Close>
                </div>
                <nav className="mt-8 flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <h4 className="px-3 py-2 font-semibold text-text-primary">{link.title}</h4>
                        <ul className="pl-4 border-l border-border-subtle">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.href}>
                              <NavLink to={subLink.href} className="block px-3 py-2 text-text-secondary hover:text-accent-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                {subLink.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                     <li>
                        <NavLink to="/kontakt" className="block px-3 py-2 font-semibold text-text-primary hover:text-accent-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Kontakt
                        </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="mt-8">
                  <Button className="w-full" onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}>
                    Login Portal
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};

export default Header;