import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TitleNavigation from './features/Navigation/TitleNavigation'
import NavigationBar from './features/Navigation/NavigationBar'
import Home from './features/Home/Home'
import Latest from './features/Latest/Latest'
import LyricsAndAlbums from './features/LyricsAndAlbums/LyricsAndAlbums'
import Registration from './features/Registration/Registration'
import LogIn from './features/Registration/LogIn/LogIn'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <TitleNavigation />
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/lyrics&albums' element={<LyricsAndAlbums />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/logIn' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
