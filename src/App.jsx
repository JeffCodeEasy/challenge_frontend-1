import './App.css'
import { ArticlesContainer } from './components/ArticlesContainer'
import { MainArticle } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { Header } from './components/header'

function App() {

  return (
    <div className='px-4 pt-6'>
      <Header/>
      <div className='lg:flex lg:gap-8 lg:mb-5'>
      <MainArticle/>
      <NewContainer/>
      </div>

      <ArticlesContainer/>
    </div>
  )
}

export default App
