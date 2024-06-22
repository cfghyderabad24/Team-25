import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import Footer from './Footer';
import Navigation from './Navigation';
import ChampStories from './ChampStories';

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className='caur'>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8eqWsfd24tEgDkmnWN46WJrOHUvmaaO_Ww&s" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKexjJpplpTuoqgO-HDlPRbIbzyD0rqNp3bQ&s" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCpU0qDxI5_GR2UrVp5xvS9lXr68EWToSvQ&s" alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </div>
      <ChampStories/>
      <div className="container about-container">
        <h2 className="about-heading">About Us</h2>
        <p className="about-lead">Connecting Science and Technology with Development</p>
        <p className="about-text">
        <span className="highlight">Indigenous and Frontier Technology Research Centre (IFTR)</span> was established in 2002 as a not-for-profit organization to help women in rural areas to stand on their own legs by using an evolving technology – eco-friendly paper production using agricultural wastes. Over the years, with the changes in expectations of people, IFTR is engaging itself in different areas to serve the masses. IFTR aims to accelerate the use of modern science and technology for the development of interventions to improve the livelihoods of people and society at large. IFTR will act as a vehicle for taking new technologies/skills to the masses. For this, IFTR will acquire, adopt, adapt, retrofit appropriate science and technology products/processes to provide solutions to practical problems faced by people. Wherever possible, IFTR will also strive to develop suitable technologies/interventions. IFTR invites everyone to participate in its mission to serve the society. IFTR is open for collaboration with like-minded organizations, institutions, and commercial organizations, and is prepared to take up research and implementation programs/projects that suit its expertise. Let us all make our world a better place for all to have a sustainable life.

        </p>
      </div>
      

      <Footer />
    </div>
  );
}

export default Home;
