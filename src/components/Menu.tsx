'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useMenu } from '@/context/MenuContext';

interface MenuItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, onClick }) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className="group relative inline-block text-[clamp(4.8rem,9vw,9.6rem)] font-light font-editorial uppercase tracking-tight text-[#F2F1ED] overflow-hidden leading-[1.05]"
      >
        <span className="inline-flex">
          {label.split('').map((char, index) => (
            <span
              key={`${label}-${char}-${index}`}
              style={{
                transitionDelay: `${index * 25}ms`,
                textShadow: '0 -1.5em 0 #F2F1ED',
              }}
              className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.43,0.195,0.02,1)] group-hover:translate-y-[1.5em]"
            >
              {char}
            </span>
          ))}
        </span>
      </Link>
    </li>
  );
};

export default function Menu() {
  const { menuOpen, closeMenu } = useMenu();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * -120;
      const y = (e.clientY / window.innerHeight - 0.5) * -120;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [menuOpen]);

  const primaryPages = [
    { label: 'Builds', href: '/builds' },
    { label: 'Stock', href: '/stock' },
    { label: 'Contact', href: '/contact' },
  ];

  const legalPages = [
    { label: 'Cookies', href: '/cookies' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <nav
      id="site-menu"
      aria-label="Main menu"
      aria-hidden={!menuOpen}
      className={`fixed inset-0 z-[990] bg-[#410306] transition-all duration-700 ease-[cubic-bezier(0.43,0.195,0.02,1)] ${
        menuOpen
          ? 'opacity-100 visible pointer-events-auto'
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* 20% Black Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

      {/* Floating Background Watermark Logo with Mouse Parallax */}
      <figure
        aria-hidden="true"
        className="absolute inset-[-12rem] z-[1] overflow-visible pointer-events-none select-none flex items-center justify-center opacity-15 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        <svg
          viewBox="0 0 440 796"
          className="w-full h-full fill-black max-w-[1200px] max-h-[1200px]"
          fill="currentColor"
        >
          <path d="M744.064 796H1091.95C1093.83 796 1094.85 793.785 1093.49 792.421L357.651 56.7476C321.174 20.2792 271.914 0 220.438 0H-47.8527C-49.7276 0 -50.7503 2.21537 -49.3867 3.57868L208.847 261.755C210.211 263.118 209.188 265.333 207.313 265.333H-46.8299C-98.3062 265.333 -147.737 285.783 -184.043 322.081L-654.318 792.421C-655.682 793.785 -654.659 796 -652.784 796H-304.893C-304.893 796 -303.87 795.83 -303.359 795.318L-131.544 623.542C-131.544 623.542 -129.328 622.69 -128.476 623.542L43.3388 795.318C43.3388 795.318 44.191 796 44.8729 796H392.764C394.639 796 395.661 793.785 394.298 792.421L48.6227 446.823C48.6227 446.823 47.7705 444.608 48.6227 443.756L218.563 273.854C218.563 273.854 220.779 273.002 221.631 273.854L743.211 795.318C743.211 795.318 744.064 796 744.746 796H744.064Z" />
        </svg>
      </figure>

      {/* Main Content Area */}
      <div
        ref={containerRef}
        className={`relative z-[2] w-full h-full flex flex-col items-center justify-center px-8 transition-all duration-700 ease-[cubic-bezier(0.43,0.195,0.02,1)] ${
          menuOpen ? 'scale-100 blur-0 opacity-100' : 'scale-90 blur-md opacity-0'
        }`}
      >
        {/* Primary Page Navigation */}
        <ul
          data-name="pages"
          className="flex flex-col items-center justify-center gap-3 sm:gap-6 mb-12 group/list"
        >
          {primaryPages.map((page) => (
            <div
              key={page.href}
              className="transition-opacity duration-300 group-hover/list:opacity-30 hover:!opacity-100"
            >
              <MenuItem label={page.label} href={page.href} onClick={closeMenu} />
            </div>
          ))}
        </ul>

        {/* Legal Links */}
        <ul data-name="legals" className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-8">
          {legalPages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                onClick={closeMenu}
                className="text-[1.3rem] text-[#F2F1ED]/70 hover:text-[#F2F1ED] transition-colors duration-300 tracking-wider uppercase font-medium"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Socials */}
        <div className="flex md:hidden items-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/company/forge-automotive-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="linkedin"
            className="text-[#F2F1ED]/80 hover:text-[#F2F1ED]"
          >
            <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
              <path d="M14.5 0.5H1.5C0.95 0.5 0.5 0.95 0.5 1.5V14.5C0.5 15.05 0.95 15.5 1.5 15.5H14.5C15.05 15.5 15.5 15.05 15.5 14.5V1.5C15.5 0.95 15.05 0.5 14.5 0.5ZM4.9435 13.297H2.687V6.125H4.9435V13.297ZM3.815 5.1405C3.08 5.1405 2.5 4.54 2.5 3.828C2.5 3.1 3.08 2.5 3.815 2.5C4.55 2.5 5.13 3.1 5.13 3.828C5.13 4.54 4.55 5.1405 3.815 5.1405ZM13.3105 13.297H11.1V9.828C11.1 8.98 11.1 7.95 9.925 7.95C8.75 7.95 8.6085 8.84 8.6085 9.78V13.344H6.4V6.125H8.468V7.1095H8.515C8.85 6.4 9.6 5.9375 10.63 5.9375C12.88 5.9375 13.31 7.4375 13.31 9.3595L13.3105 13.297Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/forgeautomotive/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram"
            className="text-[#F2F1ED]/80 hover:text-[#F2F1ED]"
          >
            <svg width="22" height="22" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1.85C10 1.85 10.24 1.8575 11.0305 1.8935C12.4235 2.152 13.2855 2.713 13.8465 3.575C14.105 4.968 14.15 6 14.15 8C14.15 10 14.1065 11.0305 13.848 12.4235C13.287 13.2855 12.425 13.8465 11.032 14.105C10.004 14.1485 8.0015 14.1485 5.999 14.1485C4.495 14.099 3.578 13.8465 2.716 13.2855C2.155 12.4235 1.896 11.0305 1.85 8C1.85 5.997 1.893 4.969 2.152 3.576C2.714 2.714 3.576 2.153 4.969 1.895C6 1.859 8 1.85 8 1.85ZM8 0.5C5.96 0.5 5.7 0.508 4.9 0.545C3.08 0.895 1.76 2.133 0.89 3.087C0.54 4.9 0.5 5.96 0.5 8C0.5 10.03 0.54 11.09 0.89 12.91C1.76 14.62 3.08 15.1 4.9 15.45C5.7 15.49 8 15.5 8 15.5C10.03 15.5 11.09 15.49 12.91 15.1C14.24 14.24 15.1 12.91 15.45 11.09C15.5 10.03 15.5 8 15.5 8C15.5 5.96 15.5 4.9 15.45 3.08C14.62 1.76 13.41 0.89 11.09 0.54C10.29 0.508 8 0.5 8 0.5ZM8 4.15C5.87 4.15 4.15 5.87 4.15 8C4.15 10.13 5.87 11.85 8 11.85C10.13 11.85 11.85 10.13 11.85 8C11.85 5.87 10.13 4.15 8 4.15ZM8 10.5C6.62 10.5 5.5 9.38 5.5 8C5.5 6.62 6.62 5.5 8 5.5C9.38 5.5 10.5 6.62 10.5 8C10.5 9.38 9.38 10.5 8 10.5ZM12 4.9C12.5 4.9 12.9 4.5 12.9 4C12.9 3.5 12.5 3.1 12 3.1C11.5 3.1 11.1 3.5 11.1 4C11.1 4.5 11.5 4.9 12 4.9Z" />
            </svg>
          </a>
        </div>

        {/* Bottom Credits Strip */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-center justify-between text-[1.1rem] text-[#F2F1ED]/50 tracking-wider gap-4">
          <p data-name="copyright">Copyright &copy; {new Date().getFullYear()}</p>
          <div data-name="powered">
            <a
              href="https://www.thevehiclewrappingcentre.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Navigate to WRPD"
              className="flex items-center gap-2 hover:text-[#F2F1ED] transition-colors"
            >
              <span>Powered by</span>
              <svg width="60" height="13" viewBox="0 0 72 16" fill="currentColor">
                <path d="M17.8695 15.7825H12.066L11.3043 8.56653L7.64474 15.7825H1.84592L0 0H5.54236L6.4085 7.87472L10.4075 0H15.4538L16.2217 7.9803L20.2744 0H25.869L17.871 15.7825H17.8695ZM12.6266 15.1427H17.4901L24.84 0.639811H20.6522L15.807 10.1818L14.8887 0.639811H10.7853L6.01536 10.029L4.98336 0.639811H0.703353L2.39877 15.1427H7.26696L11.7036 6.39338L12.6281 15.1427H12.6266Z" />
                <path d="M37.1698 15.7825H31.2834L29.1964 11.9752H28.4117L27.673 15.7825H22.0615L25.1391 0H32.0144C36.0518 0 38.4613 1.97932 38.4613 5.29499C38.4613 7.98818 37.0638 10.1251 34.6144 11.2077L37.1713 15.7825H37.1698ZM31.6474 15.1427H36.0917L33.7114 10.8831L34.0538 10.7507C36.4572 9.81779 37.8363 7.82902 37.8363 5.29656C37.8363 2.33862 35.7139 0.641387 32.0144 0.641387H25.6505L22.8232 15.1443H27.1616L27.9003 11.3369H29.5619L31.6489 15.1443L31.6474 15.1427ZM30.9379 8.12528H28.5115L29.3331 3.93657H31.2543C33.1401 3.93657 33.4211 5.09958 33.4211 5.79297C33.4211 7.25382 32.4936 8.12528 30.9379 8.12528ZM29.2747 7.48547H30.9394C32.1388 7.48547 32.7992 6.88506 32.7992 5.79454C32.7992 5.27292 32.6395 4.57796 31.2558 4.57796H29.846L29.2763 7.48547H29.2747Z" />
                <path d="M41.6886 15.7825H36.0771L39.1532 0H45.9656C50.0413 0 52.4754 1.99665 52.4754 5.33911C52.4754 9.36078 49.3502 12.0619 44.7017 12.0619H42.4073L41.6902 15.7825H41.6886ZM36.8373 15.1427H41.1757L41.8929 11.422H44.7001C49.0431 11.422 51.8504 9.03457 51.8504 5.33911C51.8504 2.3528 49.705 0.639811 45.964 0.639811H39.663L36.8373 15.1427Z" />
                <path d="M58.3648 15.7825H50.0781L53.1557 0H60.0725C64.9069 0 67.9107 2.58446 67.9107 6.7448C67.9107 12.1501 64.0745 15.7825 58.3648 15.7825ZM50.8414 15.1427H58.3663C63.7029 15.1427 67.2888 11.7672 67.2888 6.7448C67.2888 2.9217 64.5921 0.639811 60.074 0.639811H53.6686L50.8429 15.1427H50.8414Z" />
              </svg>
            </a>
          </div>
          <p data-name="siteby">
            <a
              href="https://12.studio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Navigate to 12 Studio"
              className="hover:text-[#F2F1ED] transition-colors"
            >
              Made by 12 Studio
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
}
