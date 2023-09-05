import { BsTrash, BsPencilSquare, BsBoxArrowUpRight } from 'react-icons/bs';

function LatesUploads() {
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

const MovieListItem = ({ movie, onDeleteClick, onOpenClick, onEditClick }) => {
  const { poster, title, genres = [], status } = movie;
  return (
    <table className='w-full border-b'>
      <tbody>
        <tr>
          <td>
            <div className='w-24'>
              <img className='w-full aspect-video' src={poster} alt={title} />
            </div>
          </td>

          <td className='w-full pl-5'>
            <div>
              <h1 className='text-lg font-semibold text-primary dark:text-white'>
                {title}
              </h1>
              <div className='space-x-1'>
                {genres.map((g, index) => {
                  return (
                    <span
                      key={g + index}
                      className='text-primary dark:text-white text-xs'
                    >
                      {g}
                    </span>
                  );
                })}
              </div>
            </div>
          </td>

          <td className='px-5'>
            <p className='text-primary dark:text-white'>{status}</p>
          </td>

          <td>
            <div className='flex items-center space-x-3 text-primary dark:text-white text-lg'>
              <button onClick={onDeleteClick}>
                <BsTrash />
              </button>
              <button onClick={onEditClick}>
                <BsPencilSquare />
              </button>
              <button onClick={onOpenClick}>
                <BsBoxArrowUpRight />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LatesUploads;
