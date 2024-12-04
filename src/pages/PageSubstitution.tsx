import {Accent, Title, TextBox, NextPageButton, Reference} from 'components'
import { TERTIARY, SECONDARY, PRIMARY } from 'util/colours';
import Latex from 'react-latex-next';

const PageSubstitution = () => {
  return ( 
    <>
      <Title>Całkowanie przez podstawianie</Title>

      <h2>Twierdzenie o całkowaniu przez podstawianie</h2>
      
      <p>Pierwszą metodą, która jest niezbędna przy liczeniu wielu całek, jest całkowanie przez podstawianie, które jest "odwrotnością"
        <Reference content={<Latex>{String.raw`$$\left[f(g(x))\right]' = f'(g(x)) \cdot g'(x)$$`}</Latex>}> twierdzenia o pochodnej złożenia.</Reference>
      </p>

      <TextBox title='Twierdzenie o całkowaniu przez podstawianie'color={SECONDARY}>
        Jeżeli <Latex>{String.raw`$f:J\rightarrow \mathbb{R}$`}</Latex> jest całkowalna i ma funkcję pierwotną <Latex>{String.raw`$F$`}</Latex>
        oraz <Latex>{String.raw`$ {g:I \rightarrow J}$`}</Latex> jest różniczkowalna, zachodzi:
        <Latex>{String.raw`$$\int f(g(x)) \cdot g'(x) \, dx = \int f(t) \, dt \text{,}\; \text{gdzie } t = g(x)$$`}</Latex>
      </TextBox>


      <p>
        Korzystając z powyższego twierdzenia, podstawianie w rachunkach możemy przedstawić w następujący sposób:
      </p>
      <Latex>{String.raw`$$ \int f(g(x)) \cdot g'(x) \, dx = \left| \begin{matrix}
                                                                        t = g(x) \\
                                                                        dt = g'(x) \, dx
        \end{matrix} \right| = \int f(t) \, dt = F(t) + C = F(g(x)) + C. $$`}
      </Latex>

      <p>
        Właśnie w tej formie twierdzenia tego używa się zwykle rozwiązując zadania. Często, aby łatwiej było
        kontynuować rachunki, na podstawie podstawienia zapisuje się dodatkowo <Latex>{String.raw`$dx = \frac{dt}{g'(x)}$`}</Latex>,
        i bezpośrednio podstawia się wyrażenia ze zmienną <Latex>{String.raw`$t$`}</Latex> za <Latex>{String.raw`$g(x)$`}</Latex> 
        oraz <Latex>{String.raw`$dx$`}</Latex>.
      </p>

      <p>
        Całkowanie przez podstawianie funkcji zależnej od zmiennej <Latex>{String.raw`$x$`}</Latex> można więc podsumować do zastosowania następujących kroków:
        <ul>
          <li>
            Podstaw <Latex>{String.raw`$t = g(x)$`}</Latex>, będącego zazwyczaj problematyczną częścią całki
            (na przykład częścią wewnętrzną złożenia funkcji)
          </li>

          <li>
            Wyznacz <Latex>{String.raw`$dt = g'(x)dx$`}</Latex>
          </li>

          <li>
            Przedstaw funkcję podcałkową jako funkcję w całości zależną od <Latex>{String.raw`$t$`}</Latex>:
            <ul>
              <li> 
                Bezpośrednio używając  <Latex>{String.raw`$t = g(x)$`}</Latex> i <Latex>{String.raw`$dt = g'(x)dx$`}</Latex> lub
              </li>
              <li>
                Wyznaczając <Latex>{String.raw`$dx = \frac{dt}{g'(x)}$`}</Latex> i skracając <Latex>{String.raw`$g'(x)$`}</Latex>
                występujące w całce
              </li>
            </ul>
          </li>

          <li>
            Rozwiąż całkę względem nowej zmiennej <Latex>{String.raw`$t$`}</Latex>
          </li>

          <li>
            Na koniec obliczeń wróć do początkowej zmiennej i zastąp podstawienie wyrażeniem <Latex>{String.raw`$g(x)$`}</Latex>
          </li>

        </ul>
      </p>

      <h2>Podstawienie liniowe</h2>

      <p>
        Jeżeli całkując przez podstawianie nasza podstawiana funkcja jest funkcją liniową, to korzystając z faktu, że,
        <Latex>{String.raw`$\;\; \frac{d}{dx}(ax + b) = a$`}</Latex> dla <Latex>{String.raw`$a,b \in \mathbb{R}$`}</Latex>, możemy dokonać następującego spostrzeżenia:
      </p>

      <TextBox title="Spostrzeżenie" color={PRIMARY} notice>
        Jeżeli funkcja  <Latex>{String.raw`$f$`}</Latex> jest całkowalna, a jej funkcja pierwotna to <Latex>{String.raw`$F$`}</Latex> i <Latex>{String.raw`$a, \, b \in \mathbb{R}$`}</Latex>, mamy:
        <Latex>{String.raw`$$\int f(ax + b) \, dx= \frac{1}{a}\cdot F(ax + b) + C$$`}</Latex>
      </TextBox>

      <p>
        Ten całkiem prosty do zapamiętania wzór pozwala w szybki sposób uniknąć dodatkowego podstawiania.
      </p>

      <h2>Włączenie pod różcznikę</h2>
      
      <p>
        "Włączenie pod różniczkę", czy inaczej bezpośrednie użycie twierdzenia o podstawianiu, polega na ominięciu kroku podstawienia w obliczeniach w styuacji,
        gdy całkowane wyrażenie składa się z iloczynu funkcji złożenia oraz pochodnej jej funkcji wewnętrznej.
        Aby dokładniej wyjaśnić o co chodzi spójrzmy na przykładową całkę.
      </p>

      <TextBox title="Przykład" color={TERTIARY} notice>
        Rozwiąż całkę: <Latex>{String.raw`$$ \int \frac{\sin\left(x\right)}{\cos^{2}\left(x\right) + 1} \, dx$$`}</Latex>
      </TextBox>

      <h4 className='solution'>Rozwiązanie:</h4>

      <Latex>
        {String.raw`$$ \begin{gather*}
          \int \frac{\sin\left(x\right)}{\cos^{2}\left(x\right) + 1} \, dx =
          \left| \begin{matrix}  t =
          \cos(x) \\ dt =
          -\sin(x) \, dx\end{matrix} \right|
          = \int \frac{\cancel{\sin(x)}}{1+t^2} \cdot \left[-\frac{dt}{\cancel{\sin{x}}}\right] = \\[20pt]
           = -\int \frac{1}{1+t^2} \, dt = -\arctan(t) + C =
            -\arctan\left(\cos\left(x\right)\right) + C
        \end{gather*}$$`}
      </Latex>
      
      <p>
        Przedstawione powyżej rozwiązanie jest podejściem standardowym. Zauważmy jednak pewną rzecz. Jeżeli dokonamy podstawień:
      </p>

      <Latex>{String.raw`$$f(x) = \frac{1}{1+x^2} \; \text{ oraz } \; g(x) = \cos(x)$$`}</Latex>
        
      <p>
        Nasza całka sprowadza się do:
      </p>

      <Latex>{String.raw`$$\int f(g(x)) \cdot \left[- g'(x)\right] \, dx = - \int f(g(x)) \cdot g'(x) \, dx$$`}</Latex>
      
      <p>
        <Reference content={<Latex>{String.raw`$$\int f(g(x)) \cdot g'(x) \, dx = \int f(t) \, dt \text{,}\; \text{gdzie } t = g(x)$$ `}</Latex>}> Wygląda znajomo? </Reference>
        Korzystając z definicji nasz przykład możemy rozwiązać następująco:
      </p>
      
      <Latex>
        {String.raw`$$
          \int \frac{\sin\left(x\right)}{\cos^{2}\left(x\right) + 1} \, dx = \int \frac{1}{1 + \cos^{2}\left(x\right)} \cdot \left[-\sin\left(x\right) \right] \, dx = -\arctan\left(\cos\left(x\right)\right) + C
        $$`}
      </Latex>
      
      <p>
        Dzięki zauważeniu <Accent>złożenia dwóch funkcji przemnożonego przez pochodną funkcji wewnętrznej </Accent> 
        możemy bezpośrednio skorzystać z definicji całkowania przez podstawianie i skrócić rozwiązywanie całki. 
      </p>

      <NextPageButton page={'/czesci'}>Całkowanie przez części</NextPageButton>
    </>
   );
}
 
export default PageSubstitution;