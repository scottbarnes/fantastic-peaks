import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from  '@fortawesome/fontawesome-svg-core'

type LandingPageButtonProps = {
  text: string,
  icon: IconProp,
}

// LandingPageButton returns one of the main buttons on the landing page.
const LandingPageButton = ({ text, icon}: LandingPageButtonProps) => (
  <div className="
    border-x-2
    border-t-2
    md:border-2
    border-slate-300
    basis-1/4
    hover:bg-sky-600
    hover:border-green-300
    hover:translate-x-1
    md:border-slate-350
    p-4
    rounded
    flex
    items-center
  ">
    <div>
      <FontAwesomeIcon icon={icon} className="h-10 md:h-12"/>
    </div>
    <div className="text-center basis-3/4">
      {text}
    </div>
  </div>
)

export default LandingPageButton
