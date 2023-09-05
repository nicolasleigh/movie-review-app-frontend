import { useState } from 'react';
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

function Actors() {
  return (
    <div className='grid grid-cols-4 gap-3 my-5'>
      <ActorProfile
        profile={{
          name: 'John Doe',
          avatar:
            'https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          about:
            'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        }}
      />
      <ActorProfile
        profile={{
          name: 'John Doe',
          avatar:
            'https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          about:
            'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        }}
      />
      <ActorProfile
        profile={{
          name: 'John Doe',
          avatar:
            'https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          about:
            'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        }}
      />
      <ActorProfile
        profile={{
          name: 'John Doe',
          avatar:
            'https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
          about:
            'lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        }}
      />
    </div>
  );
}

const ActorProfile = ({ profile }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnMouseEnter = () => {
    setShowOptions(true);
  };
  const handleOnMouseLeave = () => {
    setShowOptions(false);
  };

  if (!profile) return null;
  const { name, avatar, about = '' } = profile;

  return (
    <div className='bg-white dark:shadow shadow dark:bg-secondary h-20 overflow-hidden rounded'>
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        className='flex cursor-pointer relative'
      >
        <img
          src={avatar}
          alt={name}
          className='w-20 aspect-square object-cover'
        />

        <div className='px-2'>
          <h1 className='text-xl text-primary dark:text-white font-semibold'>
            {name}
          </h1>
          <p className='text-primary dark:text-white'>
            {about.substring(0, 50)}
          </p>
        </div>

        <Options visible={showOptions} />
      </div>
    </div>
  );
};

const Options = ({ visible, onDeleteClick, onEditClick }) => {
  if (!visible) return null;

  return (
    <div className='absolute inset-0 bg-primary bg-opacity-25 backdrop-blur-sm flex justify-center items-center space-x-5'>
      <button
        onClick={onDeleteClick}
        className='p-2 rounded-full bg-white text-primary hover:opacity-80 transition'
        type='button'
      >
        <BsTrash />
      </button>
      <button
        onClick={onEditClick}
        className='p-2 rounded-full bg-white text-primary hover:opacity-80 transition'
        type='button'
      >
        <BsPencilSquare />
      </button>
    </div>
  );
};

export default Actors;
