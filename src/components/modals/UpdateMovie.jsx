import { useState } from 'react';
import { updateMovie } from '../../api/movie';
import MovieForm from '../admin/MovieForm';
import ModalContainer from './ModalContainer';
import { useNotification } from '../../hooks';

function UpdateMovie({ visible, initialState, onClose, onSuccess }) {
  const [busy, setBusy] = useState(false);
  const { updateNotification } = useNotification();

  const handleSubmit = async (data) => {
    setBusy(true);
    const { error, movie, message } = await updateMovie(initialState.id, data);
    setBusy(false);
    if (error) return updateNotification('error', error);

    updateNotification('success', message);
    onSuccess(movie);
    onClose();
  };
  return (
    <ModalContainer visible={visible}>
      <MovieForm
        initialState={initialState}
        btnTitle='Update'
        onSubmit={!busy ? handleSubmit : null}
        busy={busy}
      />
    </ModalContainer>
  );
}

export default UpdateMovie;
