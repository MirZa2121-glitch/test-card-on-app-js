import './App.css';

function App() {
  return (
    <main className='main'>
      <div className='container'>
        <div className='main__inner'>
          <div className='main__wrapper'>
            <div className='main__text'>
              <img src="./img/avatar/avatar-jessica.jpeg" alt="avatar" className='hero'/>
              <AuthorBox />
              <LinksBio />
            </div>
          </div>
        </div>
      </div>
    </main>    
  )

}

function AuthorBox() {
  return(
    <div className='author__box'>
      <h3 className='name'>Jessica Randall</h3>
      <p className='location'>London, Unite Kingdom</p>
      <p className='job'>"Front-end developer and avid reader."</p>
    </div>
  )
}

function LinksBio() {
  return (
    <div className='btn__box'>
      <ul className='list'>
        <li><a href='#git' className='btn'>GitHub</a></li>
        <li><a href='#front' className='btn'>Front-end Mentor</a></li>
        <li><a href='#link' className='btn'>Linkeldin</a></li>
        <li><a href='#twwiter' className='btn'>Twitter</a></li>
        <li><a href='#instagram' className='btn'>Instagram</a></li>
      </ul>
    </div>
  )
}

export default App;
