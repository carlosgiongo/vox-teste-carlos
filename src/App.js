import './App.css';
import Navicons from './components/Navicons'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
      <div className="App-top">
        <div className="navbar"> 
          <div>
            <h1 className='app-title'>
              LOREM
            </h1>
          </div>
        </div>

        <div className='icones'>
          <Navicons/>
        </div>

        <div className='menu'>
          <Navicons/>
        </div>

        <div className="top-content">
          <h1>Lorem,<br></br> 
              Ipsum,<br></br> 
              Dolor
          </h1>
          <p>vitae eros lobortis, id accumsan lectus efficitur. <br></br>
            Nullam suscipit euismod mauris, vitae fermentum sapien. <br></br>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra. <br></br>
            Phasellus mollis posuere tortor.<br></br><br></br><b>Entre em Contato</b></p>
        </div>
      </div>

      <div className="App-mid">
        <h1>Quisque ornare ultricies <br></br> molestie sed semper</h1>
        <p className="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in <br></br>
          ultricies eros, nec efficitur leo. Quisque ornare ultricies molestie. <br></br> 
          Sed semper eleifend nisi ac pellentesque. Aliquam malesuada eu <br></br> 
          est quis vestibulum. Nullam dignissim ipsum et purus sodales imperdiet. <br></br>
          Praesent maximus odio tellus, ut aliquam massa porta eu. <br></br><br></br>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames <br></br> 
          ac turpis egestas. Vivamus condimentum nulla at facilisis semper. Donec <br></br></p>

          <p className="right">Integer viverra tempor semper. Duis ultricies molestie placerat. 
                              Duis maximus felis eu orci tristique feugiat. Phasellus sed orci <br></br>
                              iaculis, 
                              imperdiet odio ac, dapibus erat. Maecenas vulputate lacus non <br></br>
                              neque aliquet vulputate. 
                              Maecenas est quam, posuere id sagittis non, rutrum ut ligula. <br></br>
                              Cras non mi porttitor, auctor odio eu, 
                              dictum felis. Sed a nisl pretium, elementum nisl condimentum, vehicula eros.<br></br><h3>Entre em contato</h3>
          </p>
      </div>

      <div className="App-bot">
        <h1>Entre em contato com a LOREM</h1>  
        <Formulario/>
        <div className='side-bot'>
          <h2>Lorem</h2>
          <p className="tel">49 99999 9999</p><br></br>
          <p className="email">lorem@ipsum.com</p><br></br>
          <p className="endereco">Lorem, Ipsum Dolor s/nº, Chapeco-SC</p>
          </div>
      </div>
    </div>
  );
}
export default App;
