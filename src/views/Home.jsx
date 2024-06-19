import Banner from '../components/Banner'
import Blog from '../components/Blog'
import Heroes from '../components/Heroes'
import ProductAnimal from '../components/ProductAnimal'
import ProductOur from '../components/ProductOur'
import Seller from '../components/Seller'

function App() {

  return (
    <>
      <Heroes />
      <ProductAnimal />
      <Banner
        background="url('/img/banner-01.png'), #003459"
        headtitle="One more friend"
        title="Thousands more fun!"
        description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
        right={true}
      />
      <ProductOur />
      <Seller />
      <Blog />
    </>
  )
}

export default App
