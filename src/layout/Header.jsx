import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, PhoneCall, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isHomeHeroState = location.pathname === '/' && isAtTop;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 24;

      setIsAtTop(atTop);

      if (atTop) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    setIsAtTop(currentScrollY <= 24);
    setIsHeaderVisible(true);
    lastScrollY.current = currentScrollY;
  }, [location.pathname]);

  return (
    <header
  className={`fixed top-0 z-50 w-full transition-all duration-500 ease-out ${
    // ئەگەر مینیو کراوە بوو (تەنها لە مۆبایل)، باکگراوندەکە تۆخ بکە و Blur دابنێ
    isMenuOpen 
      ? 'bg-black/80 backdrop-blur-lg border-b border-white/5' 
      : isHomeHeroState 
        ? 'bg-transparent backdrop-blur-0' 
        : 'bg-black/50 backdrop-blur-md border-b border-white/5'
  } ${
    isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
  }`}
>
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/assets/images/logoBlack.png" alt="Grand Group" className="w-24 h-20 scale-150 pr-4" />
              {/* <div>
                <h1 className="text-xl font-bold text-gray-900">Grand Group</h1>
                <p className="text-sm text-gray-600">General Trading</p>
              </div> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 uppercase rounded-md  font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? isHomeHeroState
                      ? 'text-white  bg-transparent'
                      : 'text-white underline-1 bg-transparent'
                    : isHomeHeroState
                      ? 'text-white/85 hover:text-white hover:bg-white/10'
                      : 'text-gray-400 hover:text-white hover:border-b-gray-50/10 '
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                isHomeHeroState
                  ? 'border-white/15 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-white/15 focus:ring-white/40'
                  : 'border-white/10 bg-black/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/55 focus:ring-gray-500'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <Menu className="h-5 w-5" />
              ) : (
                <X className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div
              className={`overflow-hidden rounded-[2rem] border p-3 shadow-[0_25px_70px_rgba(0,0,0,0.22)] ${
                isHomeHeroState
                  ? 'border-white/10 bg-black/70 backdrop-blur-xl'
                  : 'border-white/10 bg-black/85 backdrop-blur-xl'
              }`}
            >
              

              <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center justify-between rounded-[1.35rem] border px-4 py-4 text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'border-[#c42424]/40 bg-gradient-to-r from-[#c42424] to-[#7f1111] text-white shadow-[0_20px_45px_rgba(196,36,36,0.28)]'
                      : 'border-white/10 bg-white/[0.03] text-white/85 hover:border-white/20 hover:bg-white/[0.08] hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div>
                    <p className="uppercase tracking-[0.2em]">{item.name}</p>
                    <p className={`mt-1 text-xs ${
                      isActive(item.href) ? 'text-white/70' : 'text-white/45 group-hover:text-white/65'
                    }`}>
                      {/* {item.href === '/' ? 'Back to the main experience' : `Open ${item.name.toLowerCase()} page`} */}
                    </p>
                  </div>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                      isActive(item.href)
                        ? 'bg-white/15 text-white'
                        : 'bg-white/5 text-white/70 group-hover:bg-white/10 group-hover:text-white'
                    }`}
                  >
                    {/* <ArrowUpRight className="h-4 w-4" /> */}
                  </div>
                </Link>
              ))}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-[1.35rem] border border-white/10 bg-white px-4 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-950 transition-colors hover:bg-white/90"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
