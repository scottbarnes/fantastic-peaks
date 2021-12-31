// Default header and navbar for site pages, save for the landing page.

import Image from 'next/image';
import Link from 'next/link';
import fpLogo from '../public/fpLogo.png';

// Header links.
const links = [
  { href: '/getting-started', label: 'Getting  Started' },
  { href: '/regions', label: 'Regions' },
  { href: '/community', label: 'Community' },
];

// Header returns the main site header, including the logo and main nav bar.
const Header = () => (
  <header>
    <nav className="bg-blue-300 rounded-md w-full flex place-items-center">
      <div className="flex-none flex">
        <Link href="/">
          <a className="text-blue-700 hover:text-blue-900 hover:underline m-1">
            <Image src={fpLogo} alt="Site logo" height={49} width={100} />
          </a>
        </Link>
      </div>
      <ol className="grow flex justify-center">
        {links.map(({ href, label }) => (
          <li
            key={`${href}+${label}`}
            className="text-blue-700 hover:text-blue-900 hover:underline m-3"
          >
            <Link href={href}>
              <a className="">{label}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </header>
);

export default Header;
