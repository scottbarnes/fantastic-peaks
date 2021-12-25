import React from 'react'

export interface BreadCrumb {
  name: string,
  link: string,
  isLast: boolean,
}

interface Props {
  crumbs: BreadCrumb[]
}

// // For passing an array of BreadCrumb. React.FC would be <BreadCrumbs> with an s.
// interface BreadCrumbs {
//   fields: BreadCrumb[];
// }

// See https://stackoverflow.com/questions/57876506/typescript-types-for-react-component-where-prop-is-an-array-of-objects for this

// BreadCrumbs returns takes an array of crumb objects and breadcrumbs
// as an HTML list of  each step in the navigation tree.
const BreadCrumbs = ({ crumbs }: Props) => {
  return (
    <>
      <ol className="flex">
        <span className="text-gray-500 mx-1">{'>'}</span>
        {crumbs.map(({name, link, isLast}) => {
          // isLast isn't a link.
          if (isLast) {
            return ( 
              <React.Fragment key={`${name}+${link}`}>
                <span className="text-gray-500 mx-1">/</span>
                <li className="">{name}</li>
              </React.Fragment>
            )
          }

          return (
            <React.Fragment key={`${name}+${link}`}>
              <span className="text-gray-500 mx-1">/</span>
              <li><a href={link} className="text-blue-600 hover:text-blue-800">{name}</a></li>
            </React.Fragment>
          )
        })}
      </ol>
    </>
  )
}

export default BreadCrumbs
