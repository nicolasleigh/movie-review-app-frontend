import Container from './Container';
import NotVerified from './user/NotVerified';
import TopRatedMovies from './user/TopRatedMovies';
import TopRatedTVSeries from './user/TopRatedTVSeries';
import TopRatedWebSeries from './user/TopRatedWebSeries';

function Home() {
  return (
    <div className='dark:bg-primary bg-white min-h-screen'>
      <Container>
        <NotVerified />
        {/* slider */}
        {/* Most rated movies */}
        <TopRatedMovies />
        <TopRatedWebSeries />
        <TopRatedTVSeries />
      </Container>
    </div>
  );
}

export default Home;
