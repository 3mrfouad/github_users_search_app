import Loader from './components/Loader'
import Header from './components/Header'
import Footer from './components/Footer'
import Instructions from './components/Instructions'
function App() {
  const [loading, setLoading] = useState(false)

function App() {
  return (
    <>
      <Header />
      <main className="app">
        <Loader loading={loading} />
        <Instructions />
      </main>
      <Footer />
    </>
  )
}

export default App
