import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TitleNavigation from './features/Navigation/TitleNavigation'
import NavigationBar from './features/Navigation/NavigationBar'
import Home from './features/Home/Home'
import Latest from './features/Latest/Latest'
import Lyrics from './features/LyricsAndAlbums/Lyrics'
import Registration from './features/Registration/Registration'
import LogIn from './features/Registration/LogIn/LogIn'
import SongDetails from './features/LyricsAndAlbums/components/SongDetails/SongDetails'
import Favorites from './features/Favorites/Favorites'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <TitleNavigation />
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/lyrics' element={<Lyrics />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/logIn' element={<LogIn />} />
          <Route path='/lyrics/:id' element={<SongDetails />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
