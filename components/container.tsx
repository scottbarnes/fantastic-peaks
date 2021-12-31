// Main container.

type Props = {
  children: React.ReactNode;
};

// Container returns the main container for the site.
const Container = ({ children }: Props) => (
  <div className="container mx-auto">{children}</div>
);

export default Container;
