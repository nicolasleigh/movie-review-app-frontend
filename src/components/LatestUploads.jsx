import { MovieListItem } from './MovieListItem';

function LatestUploads() {
  return (
    <div className='bg-white dark:shadow shadow dark:bg-secondary p-5 rounded col-span-2'>
      <h1 className='font-semibold text-2xl mb-2 text-primary dark:text-white '>
        Recent Uploads
      </h1>

      <MovieListItem
        movie={{
          poster:
            'https://images.unsplash.com/photo-1682686581362-796145f0e123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=300&q=80',
          title: 'The Dark Knight',
          status: 'public',
          genres: ['Action', 'Crime', 'Drama'],
        }}
      />
    </div>
  );
}

export default LatestUploads;
