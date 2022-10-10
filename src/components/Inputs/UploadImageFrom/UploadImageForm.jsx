import React from 'react';
import { usePatchSuperHeroImageMutation } from '../../../Redux/API middleware/imageSuperHeroAPI';
import { patchPicture } from '../../../service/fetchSuperHeroes';

function UploadImageForm({ nickname, refetch }) {
  const [sendImage] = usePatchSuperHeroImageMutation();

  const handleImagesChange = async event => {
    event.preventDefault();

    await sendImage({ data: event.target, nickname });

    refetch();
  };

  return (
    <form onSubmit={handleImagesChange}>
      <label>
        Add image <input type="file" multiple name="images" />
      </label>
      <button type="submit">Save picture</button>
    </form>
  );
}

export default UploadImageForm;
