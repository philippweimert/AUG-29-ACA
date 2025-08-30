import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBavDropdownOpen, setIsBavDropdownOpen] = useState(false);
  const [isBkvDropdownOpen, setIsBkvDropdownOpen] = useState(false);
  const [isBuvDropdownOpen, setIsBuvDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-acencia/95 backdrop-blur-lg border-b border-acencia-light/50 shadow-lg' 
        : 'bg-acencia/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex items-center h-32">
          {/* Logo - weiter nach links positioniert */}
          <div className="flex-shrink-0 mr-16">
            <Link to="/" className="flex items-center group smooth-slide py-2">
              <img 
                src={process.env.PUBLIC_URL + '/acencia-logo-new.png'}
                alt="ACENCIA - Wir machen bAV einfach" 
                className="h-12 w-auto object-contain transition-all duration-400 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Mittige Navigation - nur bAV, bKV, bUV */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
            {/* bAV Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBavDropdownOpen(true)}
              onMouseLeave={() => setIsBavDropdownOpen(false)}
            >
              <Link 
                to="/die-bav" 
                className="relative transition-all duration-400 group py-2 smooth-slide flex items-center"
                title="betriebliche Altersversorgung"
              >
                <svg 
                  className="h-20 w-auto cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bAV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Altersvorsorge</text>
                </svg>
                <ChevronDown className="absolute top-2 right-2 h-4 w-4 text-white transition-transform duration-200 pointer-events-none" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBavDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link 
                  to="/die-bav/x" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Für Unternehmen
                </Link>
                <Link 
                  to="/die-bav/y" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Für Arbeitnehmer
                </Link>
                <Link 
                  to="/die-bav/aktuelles" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Aktuelles
                </Link>
              </div>
            </div>
            
            {/* bKV Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBkvDropdownOpen(true)}
              onMouseLeave={() => setIsBkvDropdownOpen(false)}
            >
              <Link 
                to="/bkv" 
                className="relative transition-all duration-400 group py-2 smooth-slide flex items-center"
                title="betriebliche Krankenversicherung"
              >
                <svg 
                  className="h-20 w-auto cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bKV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Krankenversicherung</text>
                </svg>
                <ChevronDown className="absolute top-2 right-2 h-4 w-4 text-white transition-transform duration-200 pointer-events-none" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBkvDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link 
                  to="/bkv/x" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bKV Option X
                </Link>
                <Link 
                  to="/bkv/y" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bKV Option Y
                </Link>
              </div>
            </div>
            
            {/* bUV Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsBuvDropdownOpen(true)}
              onMouseLeave={() => setIsBuvDropdownOpen(false)}
            >
              <Link 
                to="/buv" 
                className="relative transition-all duration-400 group py-2 smooth-slide flex items-center"
                title="betriebliche Unfallversicherung"
              >
                <svg 
                  className="h-20 w-auto cursor-pointer transition-all duration-200 hover:transform hover:-translate-y-0.5" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '8px', overflow: 'hidden' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bUV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Unfallversicherung</text>
                </svg>
                <ChevronDown className="absolute top-2 right-2 h-4 w-4 text-white transition-transform duration-200 pointer-events-none" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isBuvDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link 
                  to="/buv/x" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bUV Option X
                </Link>
                <Link 
                  to="/buv/y" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  bUV Option Y
                </Link>
              </div>
            </div>
            
            </div>
          </div>

          {/* Rechter Bereich - über uns + Login Portal */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {/* über uns Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link 
                to="/ueber-uns" 
                className="relative text-white hover:text-orange-400 transition-all duration-400 font-medium group py-2 smooth-slide text-body flex items-center"
              >
                <span>über uns</span>
                <ChevronDown className="absolute -top-1 -right-3 h-4 w-4 transition-transform duration-200 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-smooth"></div>
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 transition-all duration-300 ${
                isAboutDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
              }`}>
                <Link 
                  to="/ueber-uns/service-team" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Service-Team
                </Link>
                <Link 
                  to="/kontakt" 
                  className="block px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200"
                >
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Login Portal */}
            <Button 
              className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-400 hover:scale-105 shadow-md micro-bounce text-body"
              onClick={() => window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank')}
            >
              Login Portal
            </Button>

            {/* Support Tooltip */}
            <div className="tooltip-wrapper relative">
              <ul className="tooltip-container">
                <li style={{"--i": "1.1s"}} className="nav-link group">
                  <div className="tooltip-tab flex items-center space-x-2 text-white hover:text-orange-400 transition-colors cursor-pointer p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{fill: "none"}}
                      fill="none"
                      viewBox="0 0 16 16"
                      height="16"
                      width="16"
                    >
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        stroke="#ffffff"
                        d="M1 10V8C1 2.5 6 1 8 1C10 1 15 2.5 15 8V10M1 10C1 10.5552 1 11.1543 1.0984 11.6204C1.24447 12.3122 2 13 3 13C4 13 4.75553 12.3122 4.9016 11.6204C5 11.1543 5 10.5552 5 10C5 9.44485 5 8.84565 4.9016 8.37961C4.75553 7.68776 4 7 3 7C2 7 1.24447 7.68776 1.0984 8.37961C1 8.84565 1 9.44485 1 10ZM15 10C15 10.5552 15 11.1543 14.9016 11.6204C14.7555 12.3122 14 13 13 13C12 13 11.2445 12.3122 11.0984 11.6204C11 11.1543 11 10.5552 11 10C11 9.44485 11 8.84565 11.0984 8.37961C11.2445 7.68776 12 7 13 7C14 7 14.7555 7.68776 14.9016 8.37961C15 8.84565 15 9.44485 15 10ZM15 10C15 15.5 12.5 15 8 15"
                      ></path>
                    </svg>
                    <span className="text-sm font-medium">Support</span>
                  </div>
                  <div className="tooltip absolute top-full right-0 mt-2 w-48 bg-acencia-light/95 backdrop-blur-lg rounded-xl shadow-xl border border-acencia-light/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <ul className="tooltip-menu-with-icon">
                      <li className="tooltip-link">
                        <a className="tooltip-links flex items-center space-x-3 px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200" href="tel:+49-6754-123456">
                          <svg
                            aria-hidden="true"
                            role="img"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m4.6.7 1.6 1.7c.6.6.7 1.6 0 2.2C5 6.1 5 6.4 7.2 8.7c2.4 2.4 2.7 2.4 4.2 1 .6-.5 1.6-.5 2.2 0l1.7 1.7v.1c.6.5.6 1.5 0 2.1v.1c-1.4 1.4-2.5 2-3.8 2h-.7c-1.6-.3-3.4-1.6-6.1-4.4C-.5 6.1-1 4 2.3.7 2.9.1 3.9.1 4.6.7m-1.2.4c-.2 0-.4.1-.5.3C.1 4 .5 5.9 5.3 10.7s6.6 5.2 9.3 2.4l.2.1-.2-.1c.3-.3.3-.7.1-1L13 10.4a.7.7 0 0 0-1 0c-1.9 1.8-2.7 1.6-5.3-1C4 6.6 3.8 5.8 5.6 4c.3-.3.3-.7 0-1L3.9 1.3a.7.7 0 0 0-.5-.2"
                              fillRule="evenodd"
                              fill="#FFF"
                            ></path>
                          </svg>
                          <span className="text-sm">06754-123456</span>
                        </a>
                      </li>
                      <li className="tooltip-link">
                        <div className="flex items-center space-x-3 px-4 py-3 text-white">
                          <svg
                            aria-hidden="true"
                            role="img"
                            viewBox="0 0 13.971 13.971"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path
                                fill="#FFF"
                                d="M6.985 13.97a6.985 6.985 0 1 1 6.986-6.985 6.993 6.993 0 0 1-6.986 6.986zm0-13.47a6.485 6.485 0 1 0 6.486 6.485A6.493 6.493 0 0 0 6.985.5"
                              ></path>
                              <path
                                fill="#FFF"
                                d="M11.1 7.235H6.986a.25.25 0 0 1-.25-.25V1.972a.25.25 0 1 1 .5 0v4.763h3.866a.25.25 0 0 1 0 .5z"
                              ></path>
                            </g>
                          </svg>
                          <span className="text-sm">Mo-Fr 8:30-17:00</span>
                        </div>
                      </li>
                      <li className="tooltip-link">
                        <a className="tooltip-links flex items-center space-x-3 px-4 py-3 text-white hover:text-orange-400 hover:bg-white/5 transition-colors duration-200" href="mailto:info@acencia.de">
                          <svg
                            aria-hidden="true"
                            role="img"
                            viewBox="0 0 18.2 13.342"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              style={{fill: "#fff"}}
                              d="M17.9 0H.3a.3.3 0 0 0-.3.3v12.742a.3.3 0 0 0 .3.3h17.6a.3.3 0 0 0 .3-.3V.3a.3.3 0 0 0-.3-.3M.85.5h16.554L9.101 6.364Zm6.983 5.576 1.124.799a.25.25 0 0 0 .29 0l1.527-1.08-.133.13 6.719 6.917H.956ZM.5 12.59V.867l6.918 4.915Zm10.533-6.978L17.7.902v11.574ZM.539.5.5.554V.5Z"
                            ></path>
                          </svg>
                          <span className="text-sm">info@acencia.de</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-orange-400 hover:bg-white/10 p-3 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-acencia-light/95 backdrop-blur-lg rounded-2xl mt-4 border border-acencia-light/50 shadow-xl">
            {/* bAV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/die-bav"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium flex items-center"
                onClick={() => setIsMenuOpen(false)}
                title="betriebliche Altersversorgung"
              >
                <svg 
                  className="h-12 w-auto mr-3" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '4px' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bAV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Altersvorsorge</text>
                </svg>
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/die-bav/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Für Unternehmen
                </Link>
                <Link
                  to="/die-bav/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Für Arbeitnehmer
                </Link>
                <Link
                  to="/die-bav/aktuelles"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Aktuelles
                </Link>
              </div>
            </div>
            
            {/* bKV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/bkv"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium flex items-center"
                onClick={() => setIsMenuOpen(false)}
                title="betriebliche Krankenversicherung"
              >
                <svg 
                  className="h-12 w-auto mr-3" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '4px' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bKV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Krankenversicherung</text>
                </svg>
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/bkv/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bKV Option X
                </Link>
                <Link
                  to="/bkv/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bKV Option Y
                </Link>
              </div>
            </div>
            
            {/* bUV with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/buv"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium flex items-center"
                onClick={() => setIsMenuOpen(false)}
                title="betriebliche Unfallversicherung"
              >
                <svg 
                  className="h-12 w-auto mr-3" 
                  viewBox="0 0 468 268"
                  style={{ borderRadius: '4px' }}
                >
                  <rect x="0" y="0" width="468" height="268" fill="#001f3c" rx="8"/>
                  <text x="234" y="90" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="80" fontWeight="bold">bUV</text>
                  <line x1="80" y1="134" x2="388" y2="134" stroke="#ffffff" strokeWidth="3"/>
                  <text x="234" y="190" textAnchor="middle" fill="#ffffff" fontFamily="DejaVu Serif, Times New Roman, serif" fontSize="42" fontWeight="bold">Unfallversicherung</text>
                </svg>
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/buv/x"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bUV Option X
                </Link>
                <Link
                  to="/buv/y"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  bUV Option Y
                </Link>
              </div>
            </div>
            
            {/* über uns with submenu in mobile */}
            <div className="space-y-1">
              <Link
                to="/ueber-uns"
                className="block px-6 py-3 text-white hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                über uns
              </Link>
              <div className="pl-4 space-y-1">
                <Link
                  to="/ueber-uns/service-team"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service-Team
                </Link>
                <Link
                  to="/kontakt"
                  className="block px-6 py-2 text-sm text-slate-300 hover:text-orange-400 hover:bg-white/5 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </div>
            </div>
            

            
            <div className="pt-2">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl py-3 transition-all duration-300"
                onClick={() => {
                  window.open('https://www.smartcloudservices.de/acencia/login/login.do', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Login Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;