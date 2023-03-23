import './App.css';
import './assets/fonts/fonts.css';
import Button from './Companents/button';
import HeaderMenu from './Companents/HeaderMenu';
import Logo from './assets/images/logo.svg';
import Banner from './assets/images/banner.svg';
import Vetka from './assets/images/vetka.svg'
import Brands from './Companents/Brands';
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
import Arrow from './assets/images/Arrow.png'
import Sale from './assets/images/sale-photo.png'


const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

const models = [{img:model1, title: 'Hoodies & Sweetshirt', description: 'Explore Now!', arrow: Arrow}, {img:model2, title: 'Coats & Parkas', description: 'Explore Now!', arrow: Arrow}, {img:model3, title: 'Tees & T-Shirt', description: 'Explore Now!', arrow: Arrow}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <img src= {Logo}/>
        <div className='header-info'>
        <HeaderMenu items={['CATALOGUE', 'FASHION', 'FAVOURITE', 'LIFESTYLE' ]}/>
      <Button className= 'login-button custom-button'>Sign in</Button>
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
            <h1 className='sale-title'>PAYDAY SALE NOW</h1>
            <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
            <h3 className='data'>1 June - 10 June 2021 </h3>
              <p>*Terms & Conditions apply</p>
          <Button className='custom-button sale-button'>SHOP NOW</Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
