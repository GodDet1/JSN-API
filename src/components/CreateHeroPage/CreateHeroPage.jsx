import { Notify } from 'notiflix';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostSuperHeroMutation } from '../../Redux/API middleware/SuperHeroDataAPI';

import { createHero } from '../../service/fetchSuperHeroes';
import SubmitForm from '../SubmitForm/SubmitForm';

function CreateHeroPage() {
  const [setData] = usePostSuperHeroMutation();

  const navigate = useNavigate();

  const handleUpdateData = async newHeroData => {
    try {
      const { data, error } = await setData(newHeroData);

      if (error) {
        throw new Error(error.data.message);
      }

      navigate(`/${data._id}`, { replace: true });
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  return (
    <SubmitForm
      onUpdateData={handleUpdateData}
      buttonName={"Let's create new hero!"}
    />
  );
}

export default CreateHeroPage;
