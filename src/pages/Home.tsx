// router
import { Link } from 'react-router-dom';
// styles
import 'styles/pages/Home.css'

const Home = () => {
  return ( 
    <>
      <h1>Poradnik Całkowania</h1>
      <h3 className='center no-gutter-top'>Czyli mini-notatki z podstaw rozwiązywania całek</h3>
      <hr />
      <div className='table-of-contents'>
        <h3>Całka Nieoznaczona</h3>
        <div className='home-list-container'>
          <ul>
            <li><Link to={'/calka_nieoznaczona'}>Definicja i własności całki nieoznaczonej</Link></li>
            <li><Link to={'/podstawianie'}>Całkowanie przez podstawianie</Link></li>
            <li><Link to={'/czesci'}>Całkowanie przez części</Link></li>
          </ul>

        </div>
        
      </div>
      <p style={{textAlign: 'center'}}>
        <i>
          Powyższe materiały zostały stworzone na podstawie skryptów z wykładów z Analizy Matematycznej I dr Frydrycha oraz dr hab. Marcina Moszyńskiego, ćwiczeń rachunkowych z mgr Bratuszewską oraz OpenAGH.
        </i>
      </p>
    </>
   );
}
 
export default Home;