import './App.css';
import Main from './Main';
import Banner from './banner';


const nft = new URL ("../img/placeholder.jpg", import.meta.url);

function App() {
  return (
   <div className="App">

    <Main />

    <Banner />

    
      <div className='auctions'>
        <p>Latest live auctions</p>
      </div>
      
      <div className='nft-scroller'>
        <div className='nft-element'>
          <img src={nft} alt='aaa'></img>
          <p className='title'>Lorem Ipsum</p>
        </div>

        <div className='nft-element'>
          <img src={nft}alt='aaa'></img>
          <p className='title'>Lorem Ipsum</p>
        </div>
        
        <div className='nft-element'>
          <img src={nft}alt='aaa'></img>
          <p className='title'>Lorem Ipsum</p>
        </div>
        
        <div className='nft-element'>
          <img src={nft}alt='aaa'></img>
          <p className='title'>Lorem Ipsum</p>
        </div>
        
        <div className='nft-element'>
          <img src={nft}alt='aaa'></img>
          <p className='title'>Lorem Ipsum</p>
        </div>
      
      </div>

      
      <div className='mid-banner'>
        <p>Overline</p>
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
        <h3>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h3>
        </div>
        
        <div className='mid-banner-pic'>
          <img src={nft}></img>
        </div>

        
        
        <div className='general-info'>
        <div className='banner-info'>
          <p>300K</p>
          <p>52,5K</p>
          <p>17,5k</p>
          <p>35.58</p>
          </div>

          <div className='activity-info'>
          <p>Users Active</p>
          <p>Artworks</p>
          <p>Artists</p>
          <p>ETH Spent</p>
          </div>

          </div>

          <div className='footer'>
            
          <div className='trademark'>
            <h2>NFT Market</h2>
          </div>

          <div className='footer-nav'>
            <a href='#'>Auctions</a>
            <a href='#'>Roadmap</a>
            <a href='#'>Discover</a>
            <a href='#'>Community</a>
          </div>

          <div className='footer-login'>
            <a href='#'>My account</a>
          </div>

          <div className='input'>
            <form>
            <input type="text" placeholder='Newsletter'></input>
            </form>
          </div>


          </div>


    </div>
  );
}

export default App;
