import Latex from 'react-latex-next'
import { TextBox,DesmosGraph, Accent, Reference, Image, Title, NextPageButton } from 'components';

function Test() {
  return (
    <>

      <Title>Zasada Indukcji Matematycznej</Title>

      <h2>h2 - title</h2>

      <h3>h3 - title</h3>
      

      <p>
        Paragraph
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur nulla elit, elementum nec fringilla vel, pellentesque at est.
        Cras sit amet nibh fringilla, cursus sapien et, semper sapien.
        <Accent> Accent</Accent>, ut <Accent color='#8888c3'>Accent color</Accent>.
      </p>

      <p>
        <Latex> Inline Latex: $ \ 1^2 + 2 = 3 $. Block Latex:</Latex>
      </p>

        <Latex> {String.raw`$$ f(i,j) = \underset {k∈[0,i]} {min}( \ f(k,j-1) + (a_j -b_k), f(i-1,j) \ ) $$`} </Latex>

        <Latex>{String.raw`$$du = \left(\frac{du}{dx}\right) dx 
= \frac{1}{2}x^{-1/2} dx 
{\color{red}= \frac{1}{2x^{1/2}} dx} 
= \frac{1}{2\sqrt{x}} dx$$
`}</Latex>


      <p>hr</p>
      <hr />
      <p>TextBox Title</p>
      <TextBox color='#2d84d0' title='TextBox Title'>
        TextBox Body. Donec tristique massa in mauris rutrum pharetra. Mauris v enenatis dignissim eros, vitae egestas eros. Morbi ornare orci vitae ante bibendum pulvinar. Pellentesque eleifend turpis luctus, porttitor dui vitae, mollis velit. Integer rutrum, eros eu egestas rhoncus,
      </TextBox>

      <TextBox color='#e55918' title='Notice Title' notice>
        Cras vitae nulla nec suscipit. Donec tristique massa in mauris rutrum pharetra. Mauris v enenatis dignissim eros, vitae egestas eros. Morbi ornare orci vitae ante bibendum pulvinar. Pellentesque eleifend turpis luctus, porttitor dui vitae, mollis velit. Integer rutrum, eros eu egestas rhoncus
      </TextBox>


      <p>Desmos Graph</p>

      <DesmosGraph 
       options={{keypad: false, expressions: false, zoomButtons: false, settingsMenu: false}} 
       expressions={[{id: 'm', latex:'m=1.05'}, {id: 'line1', latex: 'y=mx', color: '#ff6333'}]}
       description='Plot 1: Graph description'
      />


      <p>
        Reference: <Reference content={<Latex> {String.raw`$ f(i,j) = \underset {k∈[0,i]} {min}( f(k,j-1) + {(a_j -b_k)}, {f(i-1,j)}  ) $`} </Latex>}>Twierdzenie 3.8</Reference>.
      </p>

      <p>Image</p>
      
      <Image src="/download.jpg" width={'600px'} alt="test"  description={<><b>Rysunek 2</b>: Skamieliny, ta ta ta</>}/>

      <p>NextPageButton</p>

      <NextPageButton page='/'>Next Page</NextPageButton>

    </>
  )
}

export default Test
