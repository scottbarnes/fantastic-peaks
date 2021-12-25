import Meta from './meta'

type Props = {
  children: React.ReactNode
  metaDescription: string
}

// Layout sets the screen size and the meta description for the page.
const Layout = ({ children, metaDescription }: Props) => (
  <>
    <Meta description={metaDescription} />
    <div className="min-h-screen">
      <main className="p-4 font-sans">{children}</main>
    </div>
  </>
)

export default Layout
