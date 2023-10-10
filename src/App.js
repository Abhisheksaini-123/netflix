import logo from './logo.svg';
import './App.css';
import Navbar from './Netflix clone/Navbar';
import Section from './Netflix clone/Section';
import Section2 from './Netflix clone/Section2';
import Section3 from './Netflix clone/Section3';
import Section4 from './Netflix clone/Section4';
import Section5 from './Netflix clone/Section5';
import Foot from './Netflix clone/Foot';


function App() {
  return (


  <>
  
  <div className='photoback'>
    <Navbar/>
    <Section/>
   </div>
   <div>
        <Section2/>

   </div>
   <div>
   <Section3/>
   </div>
   <div>
    <Section4/>
   </div>
   <div>
  <Section5/>
      <Foot/>
   </div>

    <div>
    </div>
    


  
  </>

  );
}

export default App;
