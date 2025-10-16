import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import AppRoute from './routes/AppRoute'
function App() {
  return (
    <div >
      <div className='fixed w-full z-40'>
        <Navbar />
      </div>
      <main className='pt-18'>
        <AppRoute />
      </main>
<Footer/>
    </div>
  )
}
export default App