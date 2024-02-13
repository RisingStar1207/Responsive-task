import Banner from './Components/Banner/Banner';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Own from './Components/Own/Own';
import Signin from './Components/Signin/Signin';
import Testimonials from './Components/Testimonials/Testimonials';


function App() {
  return (
    <>
      <Navbar />
      <Signin />
      <Explore />
      <Own />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
