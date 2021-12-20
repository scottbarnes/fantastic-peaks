import type { NextPage } from 'next'
import Head from 'next/head'
import { faMountain, faHiking, faRoute, } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import LandingPageButton from '../components/landing-page-button'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-indigo-900">
      <Head>
        <title>Fantastic Peaks</title>
        <meta name="description" content="Fantastic Peaks and Where to Find Them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:container sm:mx-auto p-4 font-sans text-slate-100">
        <p className="text-4xl md:text-5xl font-bold text-left">
          Fantastic Peaks
        </p>
        <p className="text-2xl md:text-3xl text-left">
          {'{'}And Where To Find Them{'}'}
        </p>
        <p className="text-2xl text-left pt-3">
          A <a
            href="http://www.churchofthehighsierra.org/"
            className="text-sky-400 hover:text-sky-300"
          >Church of the High Sierra</a> Project
        </p>

        <p className="text-lg pt-3">
          Find routes, peaks, and passes from the over-crowded to the obscure.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-4 uppercase font-bold pt-3">
          <LandingPageButton text="Peaks" icon={faMountain} />
          <LandingPageButton text="Routes" icon={faRoute} />
          <LandingPageButton text="Passes" icon={faHiking} />
          <LandingPageButton text="Discord" icon={faDiscord} />
          {/* There must be a better way to handle this 'bottom' border on mobile. */}
          <div className="border-t-2 md:border-0"></div>
        </div>

        <div>
          <a href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            ...nothing.
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
