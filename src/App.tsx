
// Router
import { Route, Routes } from 'react-router-dom';
// Latex
import 'katex/dist/katex.min.css';
// Components
import PageWrapper from 'components/PageWrapper/PageWrapper';
// Pages
import Home from 'pages/Home';
import Test from 'pages/Test';
import PageIntroduction from 'pages/PageIntroduction';
import PageSubstitution from 'pages/PageSubstitution';
import PageParts from 'pages/PageParts';
import PageNotFound from 'pages/PageNotFound';



function App() {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper><Home/></PageWrapper>}/>
      <Route path='/test' element={<PageWrapper backPath='/'><Test/></PageWrapper>}/>
      <Route path='/calka_nieoznaczona' element={<PageWrapper backPath='/' forwardPath='/podstawianie'><PageIntroduction/></PageWrapper>}/>
      <Route path='/podstawianie' element={<PageWrapper backPath='/calka_nieoznaczona' forwardPath='/czesci'><PageSubstitution/></PageWrapper>}/>
      <Route path='/czesci' element={<PageWrapper backPath='/podstawianie'><PageParts/></PageWrapper>}/>
      <Route path='*' element={<PageWrapper backPath='/'><PageNotFound/></PageWrapper>}></Route>
    </Routes>
  )
}


export default App
