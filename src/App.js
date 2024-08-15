import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <img
          src="https://rnma.org.ar/wp-content/uploads/2024/05/IMG_20240531_123354_340.png"
          alt="Antena Negra TV Logo"
        />
        <h1>ANTENA NEGRA TV</h1>
      </header>

      <div className="content">
        <div className='ta-center'>
          <iframe
            className="main-video"
            src="https://www.youtube.com/embed/WtfOseST8V0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        <hr style={{ border: '1px solid #666', margin: '50px 0' }} />

        <div id="playlists" className="playlist-section">
          <h2 className='ta-center'>Estos son nuestros programas</h2>
          <div className="playlists-container">
            <div className="playlist-container">
              <h3>El Club del Helicóptero</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLNMEzYr5hgGl-cfbYvravzVJL0bGiEIsd"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="playlist-container">
              <h3>Roban Pero Hacen</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLNMEzYr5hgGl7dYUSeAblMv1oKzuOAhcW"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="playlist-container">
              <h3>Interferencias</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLNMEzYr5hgGly5dQZZ8gjn9X6b5ef1Pq8"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="playlist-container">
              <h3>SEMANA TRÁGICA. Crónica de una ofensiva revolucionaria</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLNMEzYr5hgGmggcWiRqbTrI1JlRTd0lJg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            <div className="playlist-container">
              <h3>En carne propia, la Reforma Laboral en cortes</h3>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/videoseries?list=PLNMEzYr5hgGl_ZOUslbRaF2XaFNMQm59b"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span>Somos parte de</span>
        <a href="https://www.rnma.org.ar" target="_blank">
          <img
            src="https://rnma.org.ar/wp-content/uploads/2016/12/images_ImagenesRNMA_logos_RNMA.jpg"
            alt="RNMA"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
