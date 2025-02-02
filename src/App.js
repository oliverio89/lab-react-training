import IdCard from './components/IdCard/Idcard'
import './App.css'
import { hydrate } from 'react-dom'
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';



function App() {
  return (
    <section>
      <div className='Idcard'>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className='Greetings'>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

      </div>

      <div className='Random'>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div className='BoxColor'>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

      </div>
      <div className='CreditCard'>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />

      </div>

      <div className='Rating'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>


      </div>

      <div className='DriverCard'>



      </div>
      <div className='LikeButton'>
        <LikeButton />
      </div>


      <div className='ClickablePicture'>

        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />

      </div>

      <div className='Dice'>
        <Dice />

      </div>

      <div className='Carousel'>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

      </div>

      <div className='NumbersTable'>

        <NumbersTable limit={12} />
      </div>


    </section>


  );
}

export default App;
