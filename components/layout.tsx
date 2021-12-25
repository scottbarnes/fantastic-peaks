import Meta from './meta'

type Props = {
  children: React.ReactNode
  metaDescription: string
}

const Layout = ({ children, metaDescription }: Props) => (
  <>
    <Meta description={metaDescription} />
    <div className="min-h-screen">
      <main className="p-4 font-sans">{children}</main>
    </div>
  </>
)

export default Layout

{/* <div className="text-slate-900 container mx-auto"> */}
{/*   <Head> */}
{/*     <title>Fantastic Peaks - Peaks</title> */}
{/*     <meta name="description" content="Fantastic Peaks - `${regionName}`" /> */}
{/*     <link rel="icon" href="/favicon.ico" /> */}
{/*   </Head> */}

{/*   <main className="p-4 font-sans"> */}
{/*     {/1* Top nav bar *1/} */}
{/*     <nav className="bg-blue-300 px-5 py-3 rounded-md w-full"> */}
{/*       <ol className="flex"> */}
{/*         <li><a href={'/'} className="text-blue-700 hover:text-blue-900">{'{FP}'}</a></li> */}
{/*         <span className="text-gray-500 mx-1">{'>'}</span> */}
{/*         {breadCrumbFields.map((e) => */}
{/*           <BreadCrumbs name={e.name} link={e.link} isLast={e.isLast} key={e.id} /> */}
{/*         )} */}
{/*       </ol> */}
{/*     </nav> */}
