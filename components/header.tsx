// Default header and navbar for site pages, save for the landing page.

import Link from 'next/link'

const links = [
  // { href: '/', 'label': '{FP}' },
  { href: '/getting-started', 'label': 'Getting  Started' },
  { href: '/regions', 'label': 'Regions' },
  { href: '/community', 'label': 'Community' },
]

const Header = () => (
  <header>
    <nav className="bg-blue-300 rounded-md w-full flex">
      <div className="flex-none flex">
      <Link href="/">
        <a className="text-blue-700 hover:text-blue-900 hover:underline p-3"><span>{'{FP}'}</span></a>
      </Link>
      </div>
      <ol className="grow flex justify-center">
        {links.map(({href, label}) => (
          <li key={`${href}+${label}`} className="text-blue-700 hover:text-blue-900 hover:underline p-3">
            <Link href={href}>
              <a className="">{label}</a>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  </header>
)

export default Header
