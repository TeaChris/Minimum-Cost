import Flexibility from './components/Flexibility'
import Footer from './components/Footer'
import Header from './components/Header'
import MinimumLiving from './components/MinimumLiving'
import NewProperty from './components/NewProperty'
import Pag from './components/Pag'
import Properties from './components/Properties'

const page = () => {
  return (
    <main>
      <Header />
      <MinimumLiving />
      <Properties />
      <Flexibility />
      <NewProperty />
      <Pag />
      <Footer />
    </main>
  )
}

export default page
