import React, { useState } from 'react';
import { StyledForm, StyledLabel } from './styled.module';

function SubmitForm({ data, onUpdateData, buttonName, update = false }) {
  const [superHeroData, setSuperHeroData] = useState(data || {});

  const handleChangeHero = event => {
    const newData = { [event.target.name]: event.target.value };

    setSuperHeroData(prev => ({ ...prev, ...newData }));
  };

  const handleSubmitData = async event => {
    event.preventDefault();

    if (update) {
      return onUpdateData(data._id, superHeroData);
    }

    return onUpdateData(superHeroData);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmitData}>
        <div>
          <StyledLabel>
            Nickname:
            <input
              type="text"
              name="nickname"
              value={superHeroData.nickname}
              onChange={handleChangeHero}
            />
          </StyledLabel>
          <StyledLabel>
            Real name:
            <input
              type="text"
              value={superHeroData.real_name}
              name="real_name"
              onChange={handleChangeHero}
            />
          </StyledLabel>
          <StyledLabel>
            Catch phrase:
            <input
              type="text"
              value={superHeroData.catch_phrase}
              name="catch_phrase"
              onChange={handleChangeHero}
            />
          </StyledLabel>

          <StyledLabel>
            Superpowers:
            <input
              type="text"
              value={superHeroData.superpowers}
              name="superpowers"
              onChange={handleChangeHero}
            />
          </StyledLabel>
          <StyledLabel>
            Description:
            <textarea
              type="text"
              value={superHeroData.origin_description}
              name="origin_description"
              onChange={handleChangeHero}
            />
          </StyledLabel>
        </div>
        <button type="submit">{buttonName}</button>
      </StyledForm>
    </>
  );
}

export default SubmitForm;
