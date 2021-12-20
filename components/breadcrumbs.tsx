interface BreadCrumb {
  name: string,
  link: string,
  isLast: boolean,
}

// // For passing an array of BreadCrumb. React.FC would be <BreadCrumbs> with an s.
// interface BreadCrumbs {
//   fields: BreadCrumb[];
// }

// See https://stackoverflow.com/questions/57876506/typescript-types-for-react-component-where-prop-is-an-array-of-objects for this

const BreadCrumbs: React.FC<BreadCrumb> = ({ name, link, isLast }) => {
  if (isLast) {
    return (
      <>
        <span className="text-gray-500 mx-1">/</span>
        <li className="">{name}</li>
      </>
    )
  }

  return (
    <>
      <span className="text-gray-500 mx-1">/</span>
      <li><a href={link} className="text-blue-600 hover:text-blue-800">{name}</a></li>
    </>
  );
}

export default BreadCrumbs
