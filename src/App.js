import { Header } from './components/Header/'
import { Content } from './components/Content'
import { Footer } from './components/Footer'

import GlobalStyle from './global/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
