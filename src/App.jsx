import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import AppRoute from './routes/AppRoute'
function App() {
  return (
   <div >
  <div className='z-40'>
      <Navbar/>
  </div>
      <main >
        <AppRoute />
      </main>
    <Footer/>
    </div>
  )
}
export default App