import React,{useState} from 'react';
import './home.css'
import birthday from '../assets/birthday.jpg';
import Container from '../container/Container';

const Home = () => {
    const [clicked, setclicked] = useState(false);
  return (
    <section className='cover'>
        <button className='name-btn' onClick={()=>{setclicked(!clicked)}} hidden={clicked}>Sanchari</button>
        
        {clicked?<Container/>:<></>}
    </section>
  )
}

export default Home