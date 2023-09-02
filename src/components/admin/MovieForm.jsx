import TagsInput from '../TagsInput';

const commonInputClasses =
  'w-full bg-transparent outline-none dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary transition dark:text-white text-primary';

function MovieForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='flex space-x-3 '>
      <div className='w-[70%] h-5 space-y-5'>
        <div>
          <Label htmlFor='title'>Title</Label>
          <input
            id='title'
            type='text'
            className={
              commonInputClasses + ' border-b-2  font-semibold  text-xl'
            }
            placeholder='Titanic'
          />
        </div>

        <div>
          <Label htmlFor='storyLine'>Story line</Label>
          <textarea
            id='storyLine'
            className={commonInputClasses + ' resize-none h-24 border-b-2'}
            placeholder='Movie story line...'
          ></textarea>
        </div>

        <TagsInput />
      </div>
      <div className='w-[30%] h-5 bg-blue-400'></div>
    </form>
  );
}

const Label = ({ children, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='dark:text-dark-subtle text-light-subtle font-semibold'
    >
      {children}
    </label>
  );
};

export default MovieForm;
