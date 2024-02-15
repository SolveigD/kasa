import '../../sass/components/Footer.scss'
import WhiteLogo from '../../assets/WhiteLogo.svg'

function Footer () {
    return <div className='footer'>
    <img src={WhiteLogo} alt='logo blanc' className='footerLogo'/>
    <div className='footertexte'>© 2020 Kasa. All rights reserved</div>
    </div>
}
export default Footer