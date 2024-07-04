import LogoMain from '../assets/Logo-main.svg'
import LogoIcon from '../assets/Logo-main.svg'

function Logo({type, width, height}) {
  return (
    <>
      <img src={type="logo" ? LogoMain : LogoIcon } width={width} height={height} alt="LinkedLogo" className='logo'/>
    </>
  )
}

export default Logo