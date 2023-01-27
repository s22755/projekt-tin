import './App.css';
import Navbar from './Navbar.js'
import CarComponent from './CarComp';
import Wow from './Wow.js';


import e46 from './images/e46-m3.jpg';
import f36 from './images/bmw-f36.jpg';
import rs7 from './images/audi-rs7.jpg';
import por from './images/por-911.jpg';

function App() {
  return (
    <body>
      <Navbar id="top"></Navbar>
      <div className="center">
        <div>
          <div className='col-2'>
          <CarComponent carName="BMW M3 E46" carDesc="Model oparty na BMW E46. Produkowany w wersji coupé i kabriolet. Wyposażony w sześciocylindrowy silnik S54 o pojemności 3246 cm³." imgsrc = {e46}
          list={["Pojemność silnika: 3.2L", "Moc: 343 HP", "5.2 sekundy do 100 km/h"]}/>
          </div>
          <div className='col-2'>
            <CarComponent carName="BMW F36 420d" carDesc="BMW zdecydowało się po raz pierwszy w historii zastosować numer '4' w ramach uporządkowania polityki nazewniczej na początku drugiej dekady XXI wieku." imgsrc = {f36}
            list={["Pojemność silnika: 2.0L", "Moc: 190 HP", "7.1 sekundy do 100 km/h"]}/>
          </div>
        </div>
        <div>
          <div className='col-2'>
          <CarComponent carName="AUDI RS7" carDesc="Pięciodrzwiowe coupe mierzy 4969 mm długości, 1908 mm szerokości, 1422 mm wysokości przy rozstawie osi 2926 mm. W jego bagażniku pomieści się od 535 do 1390 l." imgsrc = {rs7}
          list={["Pojemność silnika: 4.0L", "Moc: 560 HP", "3.9 sekundy do 100 km/h"]}/>
          </div>
          <div className='col-2'>
            <CarComponent carName="Porsche 911" carDesc="Ósma generacja sztandarowego modelu Porsche otrzymała kod fabryczny 992 i została zaprezentowana po raz pierwszy w listopadzie 2018 roku na Los Angeles Auto Show. " imgsrc = {por}
            list={["Pojemność silnika: 3.0L", "Moc: 385 HP", "4.2 sekundy do 100 km/h"]}/>
          </div>
        </div>
      </div>
      <Wow text= {"ale szybki.."} x={"10%"} y={"50%"}/>
      <Wow text= {"ale jazda..."} x={"80%"} y={"80%"}/>
    </body>
  );
}

export default App;
