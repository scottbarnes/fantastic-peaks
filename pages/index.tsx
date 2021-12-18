import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain, faHiking, faMap, faRoute, } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import LandingPageButton from '../components/landing-page-button'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Head>
        <title>Fantastic Peaks</title>
        <meta name="description" content="Fantastic Peaks and Where to Find Them" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="sm:container sm:mx-auto p-4 font-sans">
        <p className="text-4xl md:text-5xl font-bold text-left">
          Fantastic Peaks
        </p>
        <p className="text-2xl md:text-3xl text-left">
          &#123;And Where To Find Them&#125;
        </p>
        <p className="text-2xl text-left pt-3">
          A <a href="https://www.churchofthehighsierra.org/">Church of the High Sierra</a> Project
        </p>

        <p className="text-2xl pt-3">
          Find routes, peaks, and passes from the over-crowded to the obscure.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-4 md:gap-4 uppercase font-bold pt-3">
          <LandingPageButton text="Peaks" icon={faMountain} />
          <LandingPageButton text="Route" icon={faRoute} />
          <LandingPageButton text="Passes" icon={faHiking} />
          <LandingPageButton text="Discord" icon={faDiscord} />
          {/* <div className="grid grid-cols-3 border-2 border-slate-300 md:border-slate-350 hover:bg-cyan-500 rounded p-3 items-center */}
          {/*   hover:translate-x-1 hover:border-green-300"> */}
          {/*   <div> */}
          {/*     <FontAwesomeIcon icon={faMountain} /> */}
          {/*   </div> */}
          {/*   <div className="text-center col-span-2"> */}
          {/*     Peaks */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-3 border-2 border-slate-300 md:border-slate-350 hover:bg-cyan-500 rounded p-3 items-center */}
          {/*   hover:translate-x-1 hover:border-green-300"> */}
          {/*   <div> */}
          {/*     <FontAwesomeIcon icon={faRoute} /> */}
          {/*   </div> */}
          {/*   <div className="text-center col-span-2"> */}
          {/*     Routes */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-3 border-2 border-slate-300 md:border-slate-350 hover:bg-cyan-500 rounded p-3 items-center */}
          {/*   hover:translate-x-1 hover:border-green-300"> */}
          {/*   <div> */}
          {/*     <FontAwesomeIcon icon={faHiking} /> */}
          {/*   </div> */}
          {/*   <div className="text-center col-span-2"> */}
          {/*     Passes */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className="grid grid-cols-3 border-2 border-slate-300 md:border-slate-350 hover:bg-cyan-500 rounded p-3 items-center */}
          {/*   hover:translate-x-1 hover:border-green-300"> */}
          {/*   <div> */}
          {/*     <FontAwesomeIcon icon={faDiscord} /> */}
          {/*   </div> */}
          {/*   <div className="text-center col-span-2"> */}
          {/*     Discord */}
          {/*   </div> */}
          {/* </div> */}
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
