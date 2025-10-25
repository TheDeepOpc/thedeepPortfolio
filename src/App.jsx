import { useState } from 'react'
import './App.css'
import NavBar from './companents/NavBar'
import Photo from './assets/photo.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="Page">
  
<header className='Hamburger'>
<div className="container">
  <div className="row">
    <div className="col-lg-6">

   <div
  data-aos="fade-up"
  data-aos-duration="3000"
  data-aos-delay="300"
className='texts'
>
  <h1
    style={{
      color: '#ffffffff',
      fontSize: '22px',
      marginBottom: '20px',
      textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)'
    }}
  >
    [ User Info ]
  </h1>

  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>username:</span> TheDeep</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>fullname:</span> Sardor Shoakbarov</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>role:</span> MERN Stack Developer / Ethical Hacker</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>status:</span> Signal Lost</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>location:</span> Undetected</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>threat level:</span> Medium</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>mission:</span> Undetected</p>
</div>

      </div>  
<div  data-aos="fade-up" data-aos-duration="3000"  data-aos-delay="600"  className="col-lg-6">

        <div  className="photo mt-5">
       <img  src={Photo} alt="" />
        </div>  
     


</div>
    
  </div>
</div>

</header>
</div>    
  </>
  )
}

export default App
