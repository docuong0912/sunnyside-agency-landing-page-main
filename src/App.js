//import css
import './css/header.css';
import './css/content.css';
import './App.css';
import './css/client.css'
import './css/footer.css'

//import component,data
import Header from './component/Header';
import content from './data/content';
import Content from './component/Content'
import Client from './component/Client';
import Footer from './component/Footer';

//image
import icecream from './images/mobile/image-gallery-cone.jpg';
import milk from './images/mobile/image-gallery-milkbottles.jpg';
import orange from './images/mobile/image-gallery-orange.jpg';
import sugar from './images/mobile/image-gallery-sugar-cubes.jpg';
function App() {
  return (
    <div className="container">
      <Header/>
      <main>
        <div className="content-container">
        {
          content.map((val)=>{
              return <Content data={content} length={content.length} key={val.id} id={val.id} title={val.title} content={val.content}/>
          })
        }
        </div>
      
        <div className="client-container">
          <h2>client testimonial</h2>
          <div className="clients">
            <Client/>
          </div>
           
        </div>
      </main>
      <div className="decorate"></div>
      <Footer/>
    </div>
  );
}

export default App;
