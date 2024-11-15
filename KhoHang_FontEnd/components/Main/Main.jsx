import Home from './Home/Home'
import About from './About/About'
import Security from './Security/Security'
import Services from './Services/Services'
// import InfoApp from './InfoApp/InfoApp'
import ContactUs from './Contact/Contact'
import TrackOrder from './TrackOrder/TrackOrder'
import style from './Main.module.scss'

function Main() {
  return (
    <main>
      <Home />
      <About />
      <Security />
      <TrackOrder />
      <Services />
      {/* <InfoApp /> */}
      <ContactUs />
    </main>
  )
}

export default Main
