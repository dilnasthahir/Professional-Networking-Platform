import Logo from '../components/Logo'
import {Link} from 'react-router-dom'

function Header({type}) {
  return (
    <>
      {type="landing" ? (
        <div className='header-landing'>
          <div className="header-landing-logo">
            <Logo type="logo" width="130px" height="100px" />
          </div>
          <div className="header-landing-navs">
            <Link to="/"><span className='header-landing-joinNow'>Join now</span></Link>
            <button className='header-landing-signIn btn'>Sign in</button>
          </div>
        </div>
      ) : (
        <Logo type="logo-icon" width="100px" height="100px" />
      )}
    </>
  )
}

export default Header