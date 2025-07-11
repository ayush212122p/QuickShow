import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import SeatLayout from './pages/SeatLayout.jsx'
import MyBookings from './pages/MyBookings.jsx'
import Favorite from './pages/Favorite.jsx'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/admin/Layout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import AddShows from './pages/admin/AddShows.jsx'
import ListShows from './pages/admin/ListShows.jsx'
import ListBookings from './pages/admin/ListBookings.jsx'

function App() {
  const isAdmin = useLocation().pathname.startsWith("/admin")
  return (
  <>
  <Toaster/>
  {!isAdmin && <Navbar/>}
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/movies' element={<Movie/>}/>
<Route path='/movies/:id' element={<MovieDetails/>}/>
<Route path='/movies/:id/:date' element={<SeatLayout/>}/>
<Route path='/my-bookings' element={<MyBookings/>}/>
<Route path='/favorite' element={<Favorite/>}/>
<Route path='/admin/*' element={<Layout/>}>
  <Route index element={<Dashboard/>}/>
  <Route path='add-shows' element={<AddShows/>}/>
  <Route path='list-shows' element={<ListShows/>}/>
  <Route path='list-bookings' element={<ListBookings/>}/>
</Route>
</Routes>
  {!isAdmin && <Footer/>}
  </>
  )
}

export default App
