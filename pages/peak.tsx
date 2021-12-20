import type { NextPage } from 'next'
import Head from 'next/head'
import BreadCrumbs from '../components/breadcrumbs'


const peakName = "Peak 13,202"
const description =  ""
const elevations = [
  '13,198n',
]
const routes = [
  {name: 'Route 1. West couloir', classRating: 'Class 3', description: 'Ascended July 25, 1946, by Fritz Gerstacher and Virginia Whitacre from the Fourth Recess by a couloir that comes down just under the highest pinnacle.', slug: 'route-1-west-couloir-01d9575a21f8'},
  {name: 'Route 2. East buttress', classRating: '', description: 'Ascended August 1, 1946, by Lester Lavelle and Malcolm Smith', slug: 'route-2-east-buttress-fe3050614c9e'},
  {name: 'Route 3. West wall and north ridge', classRating: 'Class 5', description: 'First ascent August 17, 1953, by Jim Koontz, Ralph Perry, and Fred Peters. From between the third and fourth lakes in the Fourth Recess a large col is seen in the ridge north of Peak 13,202, with a chockstone below it, and a chimney containing chockstones at the base. Ascend the chockstone chimney and then up the face to the col. Traverse south along the ridge, mostly on the west face, to the western couloir, and climb this to the top.', slug: 'route-3-west-wall-and-north-ridge-0f340d14868c'},
]

const breadCrumbFields = [
  {name: 'Peaks', link: 't2', id: '3', isLast: false},
  {name: peakName, link: 't3', id: '5', isLast: true},
];

const Peak: NextPage = () => {
  return (
    <div>
    {/* <div className="h-screen w-screen bg-gradient-to-r from-slate-100 to-slate-300 text-slate-900"> */}
    <div className="text-slate-900 container mx-auto">
      <Head>
        <title>Fantastic Peaks - Peaks</title>
        <meta name="description" content="Fantastic Peaks - Peaks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 font-sans">
        {/* Top nav bar */}
        <nav className="bg-blue-300 px-5 py-3 rounded-md w-full">
          <ol className="flex">
            {/* <span>FP</span> */}
            <li><a href={'/'} className="text-blue-700 hover:text-blue-900">{'{FP}'}</a></li>
            <span className="text-gray-500 mx-1">{'>'}</span>
            {breadCrumbFields.map((e) =>
              <BreadCrumbs name={e.name} link={e.link} isLast={e.isLast} key={e.id} />
            )}
          </ol>
        </nav>

        <div className="flex flex-row">

          <aside className="pt-2">
            <nav className="hidden md:block space-y-8 w-32 border-slate-400 border-r pr-2 mr-2">
              <div className="space-y-2">
                <h2
                  className="
                  text-sm
                  font-semibold
                  tracking-widest
                  uppercase
                  text-gray-600
                  "
                >
                  Main
                </h2>
                <div className="flex flex-col space-y-1">
                  <a href="#">Peaks</a>
                  <a href="#">Passes</a>
                  <a href="#">Routes</a>
                </div>
              </div>
              <div className="space-y-2">
                <h2
                  className="
                  text-sm
                  font-semibold
                  tracking-widest
                  uppercase
                  text-gray-600
                  "
                >
                  Routes
                </h2>
                <div className="flex flex-col space-y-1">
                  <a href="#">React component</a>
                  <a href="#">Naming routes and routes and wrapping</a>
                  <a href="#">Blap</a>
                  <a href="#">BLip</a>
                  <a href="#">Blop</a>
                  <a href="#">Meh</a>
                </div>
              </div>
            </nav>
          </aside>
          <div className="pt-2 max-w-prose">
            <p className="font-semibold text-xl">
              { peakName }
            </p>
            {elevations.map((e) =>
            <div key={elevations.indexOf(e)}>{e}</div>
            )}
            <p className="mt-1">
              { description }
            </p>
              {routes.map((r) =>
                <div key={r.slug} className="">
                  <p className="italic text-lg">{r.name}</p>
                  <p className="">{r.classRating}</p>
                  <p className="border-b border-slate-400 mb-3 pb-3">{r.description}</p>
                </div>
              )}
          </div>
          <div className="hidden md:inline pt-2 border-slate-400 border-l pl-2 ml-2 mt-2"> 
            <p>
              Maybe some sort of headr/table here with elevation, prominence, first ascents, coordinates, loj/pb links, caltopo
            </p>
          </div>
        </div>
      </main>

    </div>
    </div>
  )
}

export default Peak
