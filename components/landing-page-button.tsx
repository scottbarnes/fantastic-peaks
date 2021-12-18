import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from  '@fortawesome/fontawesome-svg-core'

type LandingPageButtonProps = {
  text: string,
  icon: IconProp,
}

const LandingPageButton = ({ text, icon}: LandingPageButtonProps) => (
  <div className="
    border-x-2
    border-t-2
    md:border-2
    border-slate-300
    grid
    grid-cols-3
    hover:bg-cyan-500
    hover:border-green-300
    hover:translate-x-1
    items-center
    md:border-slate-350
    p-4
    rounded
  ">
    <div>
      <FontAwesomeIcon icon={icon} className="h-10 md:h-12"/>
    </div>
    <div className="text-center col-span-2">
      {text}
    </div>
  </div>
)

export default LandingPageButton
