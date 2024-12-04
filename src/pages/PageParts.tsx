import {Accent, Title, TextBox, Reference , LinkButton} from 'components'
import { TERTIARY, SECONDARY, PRIMARY } from 'util/colours';
import Latex from 'react-latex-next';
import { Link } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa6";

const PageParts = () => {
  return ( 
    <>
      <Title>Całkowanie przez części</Title>

      <h2>Twierdzenie o całkowaniu przez części</h2>

      <p>
        Drugą metodą całkowania, będącą konsekwencją 
        <Reference content={<Latex>{String.raw`$$[f(x) \cdot g(x)]' = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$`}</Latex>}> twierdzenia o pochodnej iloczynu </Reference>
        jest całkowanie przez części.
      </p>

      <TextBox title='Twierdzenie o całkowaniu przez części' color={SECONDARY}>
        Jeżeli funckje <Latex>{String.raw`$f$`}</Latex> i <Latex>{String.raw`$g$`}</Latex> mają pochodne ciągłe, to zachodzi:
        <Latex>{String.raw`$$\int f(x) \cdot g'(x) dx = f(x) \cdot g(x) - \int f'(x) \cdot g(x) dx$$`}</Latex>
      </TextBox>

      <p>
        Jak to twierdzenie może przydać się w praktyce? Pokażmy na przykładzie:
      </p>

      <TextBox title='Przykład' color={TERTIARY} notice>
        Rozwiąż całkę:
        <Latex>{String.raw`$$\int x^2 \arctan{(x)} dx$$`}</Latex>
      </TextBox>

      <h4 className='solution'>Rozwiązanie:</h4>

      <p>
        Całka nie jest całką podstawową, ani nie da się jej w prosty sposób rozwiązać przez podstawianie. Można jednak zauważyć, że jest
        ona iloczynem dwóch wyrażeń: <Latex>{String.raw`$x^2$ `}</Latex> oraz <Latex>{String.raw`$\arctan{(x)}$`}</Latex>.
        W takich sytuacjach powinniśmy pomyśleć o całkowaniu przez części i podzielić naszą całkę na dwie części:
        <ul>
          <li>Część, którą potrafimy <Accent color={PRIMARY}>zróżniczkować</Accent> i która będzie naszym <Latex>{String.raw`$f(x)$`}</Latex></li>
          <li>Część, którą potrafimy <Accent>zcałkować</Accent> i która będzie naszym <Latex>{String.raw`$g'(x)$`}</Latex></li>
        </ul>
        <br />
        W naszej całce, jako że nie znamy wzoru na całkę z <Latex>{String.raw`$\arctan{(x)}$`}</Latex>, będzie on wyrażeniem,
        które zróżniczkujemy, a całkować będziemy <Latex>{String.raw`$x^2$`}</Latex>.
        Mamy więc:
      </p>

      <Latex>{String.raw`$$ 
        \int x^2 \arctan{(x)} \, dx = 
        \left| \begin{matrix} \overset{\text{\color{${PRIMARY}}{różczniczkujemy}}}{f(x) = \arctan{(x)}} & 
        \overset{\text{\color{red}{całkujemy}}}{g'(x) = x^2}  \\
        f'(x) = \frac{1}{1+x^2} & g(x) = \frac{x^3}{3} \, dx \end{matrix} \right| = 
        \frac{x^3\arctan{(x)}}{3} - \frac{1}{3} \int \frac{x^3}{1+x^2} \, dx $$`}</Latex>


      <p>
        Dzięki całkowaniu przez części doprowadziliśmy całkę do formy, którą możemy rozwiązać odpowiednio manipulując pierwiastkiem 
        pod całką i używając podstawiania (a dokładniej <Link to='/podstawianie'> włączenia pod różniczkę</Link> ).
      </p>

      <Latex>{String.raw`$$\begin{gather*}
        \int \frac{x^3}{1+x^2} \, dx =
        \int x \cdot \frac{x^2}{1+x^2} \, dx =
        \int x \cdot \left( \frac{1+x^2}{1+x^2} - \frac{1}{1+x^2} \right) \, dx = \\[20pt]
      = \int x \, dx - \int \frac{x}{1+x^2} \, dx =
        \frac{x^2}{2} - {\color{red}{\frac{1}{2}}} \int \frac{{\color{red}{2}}x}{x^2 + 1} \, dx=
        \frac{x^2}{2} - \frac{1}{2}\ln{|x^2+1|} + C \end{gather*}
      $$`}
      </Latex>
      

      <p>Koniec końców otrzymaliśmy:</p>

      <Latex>{String.raw`$$\int x^2 \arctan{(x)} dx =  \frac{x^3\arctan{(x)}}{3} + \frac{ \ln{|x^2+1|} - x^2}{6} + C$$`}</Latex>

      <h2>Co różniczkować, a co całkować?</h2>

      <p>
        Poniżej zostawiam małą <Accent>"hierarchię różniczkowania"</Accent>  w całkowaniu przez części. Są to wyrażenia,
        które powinni mieć pierwszeństwo, gdy wybieramy, które z dwóch części należy zróżniczkować.

        <ol type='I'>
          <li><b>Logarytmy</b> <Latex>{String.raw`$\;\;\rightarrow\;\; \ln(x),\; \log_2(x), \;\text{etc.}$`}</Latex></li>
          <li><b>Arcusy</b> <Latex>{String.raw`$\;\;\rightarrow\;\; \arctan(x), \;\arccos(x),\; \arcsin(x), \;\text{arccot}(x)$`}</Latex></li>
          <li><b>Wielomiany</b> <Latex>{String.raw`$\;\;\rightarrow\;\; x^n,\; \frac{1}{2 x^n},\; \text{etc.}$`}</Latex></li>
          <li><b>Trygonometria</b> <Latex>{String.raw`$\;\;\rightarrow\;\; \tan(x),\; \cos(x),\; \sin(x),\; \text{cot}(x)$`}</Latex></li>
          <li><b>Wykładnicze</b> <Latex>{String.raw`$\;\;\rightarrow\;\; e^x, 2^x,\; \text{etc.}$`}</Latex></li>
        </ol>
      </p>

      <h2>Metoda Tabularyczna / Metoda DI</h2>

      <p>
        Jako, że całkowanie przez części może być początkowo mało intuicyjne, 
        bardzo polecam zapoznać się z metodą nazwywaną Metodą Tabularyczną lub Metodą DI. Poniżej pozostawiam
        link do materiału stworzonego przez <i><a href="https://www.youtube.com/@blackpenredpen">blackpenredpen</a></i>, który w 15 minut bardzo jasno przedstawia, jak 
        w prosty sposób korzystać z tej metody. Objaśnia on również jakie są 3 typy całek, z ktorymi ma się zwykle do czynienia podczas całkowania przez części.
      </p>

      <LinkButton href='https://www.youtube.com/watch?v=2I-_SV8cwsw' icon={<FaYoutube/>}>Integration by Parts</LinkButton>
        
    </>
      
        
   );
}
 
export default PageParts;