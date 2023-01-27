import './App.css';
import Navbar from './Navbar.js'
import CarComponent from './CarComp';


import e46 from './images/e46-m3.jpg';

function App() {
  return (
    <body>
      <Navbar></Navbar>
      <div className="center">
        <div>
          <div className='col-2'>
          <CarComponent carName="BMW" carDesc="cos" imgsrc = {e46}
          list={["360 HP","200","100"]}/>
          </div>
          <div className='col-2'>
            <CarComponent carName="BMW" carDesc="cos" imgsrc = {e46}
            list={["360 HP","200","100"]}/>
          </div>
        </div>
        <div>
          <div className='col-2'>
          <CarComponent carName="BMW" carDesc="cos" imgsrc = {e46}
          list={["360 HP","200","100"]}/>
          </div>
          <div className='col-2'>
            <CarComponent carName="BMW" carDesc="cos" imgsrc = {e46}
            list={["360 HP","200","100"]}/>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
