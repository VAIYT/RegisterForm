import Modal from 'react-modal';
import React from 'react'
import './App.css'
import './assets/fonts/fonts.css'
import Button from './Companents/button'
import HeaderMenu from './Companents/HeaderMenu'
import Logo from './assets/images/logo.svg'
import Banner from './assets/images/banner.svg'
import Vetka from './assets/images/vetka.svg'
import Brands from './Companents/Brands'
import Logo1 from './assets/images/logo1.svg'
import Logo2 from './assets/images/logo2.svg'
import Logo3 from './assets/images/logo3.svg'
import Logo4 from './assets/images/logo4.svg'
import Logo5 from './assets/images/logo5.svg'
import Logo6 from './assets/images/logo6.svg'
import Card from './Companents/Card'
import model1 from './assets/images/model1.png'
import model2 from './assets/images/model2.png'
import model3 from './assets/images/model3.png'
import model4 from './assets/images/model4.png'
import model5 from './assets/images/model5.png'
import Arrow from './assets/images/Arrow.png'
import Sale from './assets/images/sale-photo.png'
import IosApp from './assets/images/ios-app.png'
import AndroidApp from './assets/images/android-app.png'
import PhoneExample from './assets/images/phone-example.jpg'
import SocialNetworks from './Companents/SocialNetworks'
import FooterIcon1 from './assets/images/footer-icon1.svg'
import FooterIcon2 from './assets/images/footer-icon2.svg'
import FooterIcon3 from './assets/images/footer-icon3.svg'
import FooterIcon4 from './assets/images/footer-icon4.svg'
import FooterNavigation from './Companents/Navigation'

const icons = [FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4]
const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

const models = [{img:model1, title: 'Hoodies & Sweetshirt', description: 'Explore Now!', arrow: Arrow}, 
{img:model2, title: 'Coats & Parkas', description: 'Explore Now!', arrow: Arrow}, 
{img:model3, title: 'Tees & T-Shirt', description: 'Explore Now!', arrow: Arrow},]
const models2 = [{img:model4, title: 'Tees & T-Shirt', description: 'Explore Now!', arrow: Arrow},
{img:model5, title: 'Tees & T-Shirt', description: 'Explore Now!', arrow: Arrow},]

function App() {
  const [modalIsOpen,  setIsOpen] = React.useState(false);
  function openModal() {
      setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <img src= {Logo}/>
        <div className='header-info'>
        <HeaderMenu items={['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE' ]}/>
      <Button className= 'login-button custom-button' onClick={openModal}>Sign in</Button>
        </div>
        </div>
        <div className='first-container'>
          <div className='first-container-info'>
          <div className='info-left'>
              <h1>LET’S EXPLORE UNIQUE CLOTHES.</h1>
              <p className='slogan-lower'>Live for Influential and Innovative fashion!</p>
                <div className='first-container-button'>
                    <img src={Vetka}/>
                  <Button className='custom-button shop-button'>Shop Now</Button>
          </div>
              </div>
          </div>
          <div className='first-container-banner'>
              <img src= {Banner}/>
          </div>
        </div>
        <div className='store-logos'>
          <div className='brands'>
          <Brands logos={logos}/>
          </div>
        </div>
        <div className='section-second'>
          <h1>NEW ARRIVALS</h1>
          <div className='models'>
          {models.map(model => <Card title={model.title} img={model.img} description={model.description} arrow={model.arrow}/>)}
          </div>
        </div>
        <div className='section-three'>
          <div className='section-three-photo'>
            <img src={Sale}/>
          </div>
          <div className='sale-info'>
            <h1>PAYDAY SALE NOW</h1>
            <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
            <h3>1 June - 10 June 2021 </h3>
              <p>*Terms & Conditions apply</p>
          <Button className='custom-button sale-button'>SHOP NOW</Button>
          </div>
        </div>
        <div className='fourth-section'>
          <h1>Young’s Favourite</h1>
          <div className='models models-second'>
             {models2.map(model => <Card title={model.title} img={model.img} description={model.description} arrow={model.arrow}/>)}
          </div>
        </div>
        <div className='fifth-section'>
          <div className='download-app'>
            <div className='download-app-title'>
              <h1>
              DOWNLOAD APP & GET THE VOUCHER!
              </h1>
              <p>
              Get 30% off for first transaction using Rondovision mobile app for now.
              </p>
            </div>
            <div className='download-images-button'>
              <img src={IosApp}/>
              <img src={AndroidApp}/>
            </div>
          </div>
          <div className='phone-example'>
              <img src={PhoneExample}/>
          </div>
        </div>
        <div className='sixth-secrion'>
          <div className='community'>
          <h1>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h1>
          <p>Type your email down below and be young wild generation</p>
          </div>
          <div className='search'>
          <input type='search' placeholder='Add your email here'></input>
          <input type='submit' value='send'></input>
          </div></div>
        <footer>
          <div className='footer'>
          <div className='left-footer'>
            <div className='title-footer'>
              <h1>FASHION</h1>
              <p>Complete your style with awesome clothes from us.</p>
            </div>
            <div className='icon-footer'>
            <SocialNetworks icons={icons}/>
            </div>
          </div>
          <div className='right-footer'>
            <div className='navigationList'>
            <FooterNavigation list={['Company', 'About', 'Contact', 'Support', 'Careers']} />
            </div>
            <div className='navigationList'>
              <FooterNavigation list={['Quick Link', 'Share Location', 'Orders Tracking','Size Guide', 'FAQs']} />
              </div>
              <div className='navigationList'>
              <FooterNavigation list={['Legal', 'Terms & conditions', 'Privacy Policy']} />
              </div>
          </div>
          </div>
        </footer>
      </header>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}>
        <input className='asdas'>
        </input>
      </Modal>
    </div>
  );
}

export default App;
