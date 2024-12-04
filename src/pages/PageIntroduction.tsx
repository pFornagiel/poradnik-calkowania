import {Accent, Title, TextBox, NextPageButton, LinkButton} from 'components'
import { SECONDARY, PRIMARY } from 'util/colours';
import Latex from 'react-latex-next';
import { FaFilePdf } from "react-icons/fa6";


const PageIntroduction = () => {
  return ( 
    <>
      <Title>Całka Nieoznaczona</Title>
      <h2>Definicja Całki Nieoznaczonej</h2>
      <p>
        Aby zdefiniować pojęcie całki, potrzebna jest wpierw definicja <Accent>funkcji pierwotnej</Accent>.
        Niech będzie dana funkcja <Latex>{String.raw`$f:I \rightarrow \mathbb{R}$`}</Latex>, gdzie <Latex>{String.raw`$I$`}</Latex> jest przedziałem otwartym.
      </p>

      <TextBox title='Definicja'>
        Fukcję <Latex>{String.raw`$F:I \rightarrow \mathbb{R}$`}</Latex> nazywamy funkcją pierwotną funkcji <Latex>{String.raw`$f$`}</Latex>,
        jeżeli <Latex>{String.raw`$F$`}</Latex> jest różniczkowalna oraz zachodzi:

        <Latex>{String.raw`$$\forall x∈I \ \ F'(x) = f(x)$$`}</Latex>
      </TextBox>

      <p>
        Funkcja funkcji <Latex>{String.raw`$f$`}</Latex> jest więc funkcją, która po zróżniczkowaniu jest równa <Latex>{String.raw`$f$`}</Latex>.
        Można zauważyć, że dla danej funkcji można zdefiniować nieskończenie wiele funkcji pierwotnych,
        gdyż działanie pochodnej usuwa stałą z wyrażenia. Stąd, dla każdej stałej <Latex>{String.raw`$C∈\mathbb{R}$`}</Latex> zachodzi więc:
        <Latex>{String.raw`$$(F(x) + C)' = f(x)$$`}</Latex>
        Jeżeli funkcja <Latex>{String.raw`$f$`}</Latex> ma funkcję pierwotną na przedziale <Latex>{String.raw`$I$`}</Latex>, to mówimy, że jest ona <Accent>całkowalna w sensie Newtona</Accent> na tym przedziale.
      </p>

      <TextBox title='Definicja'>
        Niech <Latex>{String.raw`$f$`}</Latex> będzie funkcją całkowalną w sensie Newtona na przedziale <Latex>{String.raw`$I$`}</Latex>, 
        a funkcja <Latex>{String.raw`$F:I \rightarrow \mathbb{R}$`}</Latex> jej funkcją pierwotną.
        Całką nieoznaczoną funkcji <Latex>{String.raw`$f$`}</Latex> nazywamy zbiór wszystkich funkcji pierwotnych tej funkcji.
        <Latex>{String.raw`$$\int f(x)dx = F(x) + C, \ C \in \mathbb{R}$$`}</Latex>
      </TextBox>
      
      <p>W powyższej definicji:
        <ul>
          <li><Latex>{String.raw`$f$`}</Latex> - nazywamy funkcją całkowalną,</li>
          <li><Latex>{String.raw`$f(x)dx$`}</Latex> - nazywamy wyrażaniem podcałkowym,</li>
          <li><Latex>{String.raw`$dx$`}</Latex> - <a href="https://en.wikipedia.org/wiki/Differential_(mathematics)">różniczka</a> zmiennej <Latex>{String.raw`$x$`}</Latex>, oznacza, że <Latex>{String.raw`$x$`}</Latex> jest zmienną względej której należy wyznaczyć funkcję pierwotną do funkcji <Latex>{String.raw`$f$`}</Latex>,</li>
          <li><Latex>{String.raw`$C$`}</Latex> - stała całkowania, zapisywana w końcowym wyniku.</li>
        </ul>
      </p>

      <p>
        Całkowanie można nazwać operacją "odwrotną" do różniczkowania, z tą różnicą, że jest to działanie niejednoznaczne. Wynikiem nie jest funkcja, 
        a <Accent>zbiór wszystkich funkcji pierwotnych</Accent> różniących się arbitralną stałą całkowania <Latex>{String.raw`$C$`}</Latex>. Mimo faktu, że całka
        jest tak naprawdę całą klasą funkcji, dla uproszczenia zawsze w rachunkach traktuje się ją praktycznie jako funkcję.
      </p>

      

      <h2>Właściwości Całek Nieoznaczonych</h2>
      <p>
        Przez wymieniony wyżej związek całek z pochodnymi można wyznaczyć następujące spostrzeżenie:
      </p>

      <TextBox title='Spostrzeżenie' color={PRIMARY} notice>
        Dla funkcji <Latex>{String.raw`$f$`}</Latex> odpowiednio całkowalnej w sensie Newtona i różniczkowalnej na przedziale <Latex>{String.raw`$I$`}</Latex> zachodzi:
        <Latex>{String.raw`$$\forall x \in I \ \left(\int f(x) dx\right)' = f(x)$$`}</Latex>
        <Latex>{String.raw`$$ \forall x \in I \ \int f'(x) dx = f(x) + C, \  C \in \mathbb{R} $$`}</Latex>
      </TextBox>

      <p>
        Dodatkowo, podobnie do różniczkowania, całkowanie jest <a href="https://en.wikipedia.org/wiki/Linear_map">przekształceniem liniowym</a>, co pozwala na następujące:
      </p>
      
      <TextBox color={SECONDARY} title='Twierdzenie o liniowości całki nieoznaczonej'>
        Niech <Latex>{String.raw`$f \text , \ g$`}</Latex> będą funkcjami całkowalnymi na <Latex>{String.raw`$I$`}</Latex> oraz <Latex>{String.raw`$a \in \mathbb{R}$`}</Latex>
        <Latex>{String.raw`$$\forall x \in I \ \int [f(x) + g(x)] dx = \int f(x) dx + \int g(x) dx$$`}</Latex>
        <Latex>{String.raw`$$ \forall x \in I \ \int [a\cdot f(x)] dx = a \cdot \int f(x) dx$$`}</Latex>
      </TextBox>

      <p>
        Także analogicznie do faktu, że różniczkowalność funkcji implikuje jej ciągłość, <Accent>ciągłość implikuje całkowalność danej funkcji</Accent>.
        Należy jendak pamiętać, że w przeciwieństwie do pochodnych,
        całki funkcji elementarnych wcale nie muszą być funkcjami elementarnymi.
      </p>

      <h2>Rozwiązywanie Całek Nieoznaczonych</h2>

      <p>
        Rozwiązywanie całek nieoznaczonych w głównej mierze polega na doprowadzeniu całki do postaci jednej z całek podstawowych i 
        skorzystaniu ze wzorów wynikających bezpośrednio ze znanych wzorów na pochodne funkcji. Dokonać tego możemy korzystając z powyższych
        właściwości i metod opisanych w kolejnych częściach notatek.
      </p>

      <p>
        Poniżej znajduje się ściągawka zawierająca wszystkie wzory na całki podstawowe oraz kilka przydatnych
        sposobów na szybkie rozwiązywanie bardziej skomplikowanych całek.
      </p>

      <LinkButton icon={<FaFilePdf/>} href='/poradnik-calkowania/pdf/Integrals.pdf'>Karty wzorów całkowych</LinkButton>
      
      <NextPageButton page={'/podstawianie'}>Całkowanie przez podstawianie</NextPageButton>
    </>
   );
}
 
export default PageIntroduction;