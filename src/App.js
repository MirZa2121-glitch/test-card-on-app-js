import './App.css';

const $valueText = {
  persone: {
    name1: 'Jessica Randall',
    city: 'London, Unite Kingdom',
    job: ' "Front-end developer and avid reader." '
  },
   socilas: {
    git: 'GitHub',
    mentor: 'Front-end Mentor',
    linkedin: 'Linkeldin',
    twitter: 'Twitter',
    instagram: 'Instagram'
  }
}

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
      <h3 className='name'>{$valueText.persone.name1}</h3>
      <p className='location'>{$valueText.persone.city}</p>
      <p className='job'>{$valueText.persone.job}</p>
    </div>
  )
}

function LinksBio() {
  return (
    <div className='btn__box'>
      <ul className='list'>
        <li><a href='#git' className='btn'>{$valueText.socilas.git}</a></li>
        <li><a href='#front' className='btn'>{$valueText.socilas.mentor}</a></li>
        <li><a href='#link' className='btn'>{$valueText.socilas.linkedin}</a></li>
        <li><a href='#twitter' className='btn'>{$valueText.socilas.twitter}</a></li>
        <li><a href='#instagram' className='btn'>{$valueText.socilas.instagram}</a></li>
      </ul>
    </div>
  )
}

export default App;
