import { useState } from 'react'
import './App.css'
import NavBar from './companents/NavBar'
import Photo from './assets/photo.jpeg'
import { FaDownload } from 'react-icons/fa'
function App() {


  const handleDownload = () => {
    const fileUrl = '/files/Resume.pdf';
    const fileName = 'Resume.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

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
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>role:</span> Software Engineer / Ethical Hacker</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>status:</span> Signal Lost</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>location:</span> Undetected</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>threat level:</span> Medium</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>mission:</span> Undetected</p>
  <p><span style={{  fontWeight: '700', minWidth: '140px' ,textShadow: '0 0 6px #fff, 0 0 12px rgba(0,255,255,0.2)' }}>Data:</span> Available to Download</p>
   <button onClick={handleDownload} className='ResumeBtn'>

    <p>Data Available<FaDownload/></p>
   </button>
</div>

      </div>  
<div  data-aos="fade-up" data-aos-duration="3000"  data-aos-delay="600"  className="col-lg-6">

        <div className="photo">
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
