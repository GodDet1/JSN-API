import { Notify } from 'notiflix';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeForm from '../SubmitForm/SubmitForm';
import ImageCollection from '../ImageCollection/ImageCollection';
import UploadImageForm from '../Inputs/UploadImageFrom/UploadImageForm';
import Modal from '../Modal/Modal';
import {
  StyledContentWrapper,
  StyledDiv,
  StyledModalButtonsDiv,
} from './styled.module';
import {
  useGetSuperHeroByIdQuery,
  usePutSuperHeroMutation,
} from '../../Redux/API middleware/SuperHeroDataAPI';

function HeroPage({ onAddSuperHero }) {
  const [isModal, setIsModal] = useState(false);
  const [isModalImage, setIsModalImage] = useState(false);
  const { id } = useParams();

  const { data, isSuccess, refetch } = useGetSuperHeroByIdQuery(id);
  const [setData] = usePutSuperHeroMutation();

  const handleModalOpenClose = () => setIsModal(prev => !prev);
  const handleModalImageOpenClose = () => setIsModalImage(prev => !prev);

  const handleUpdateData = (id, data) => {
    setData({ data, id });
  };

  return (
    <div className="content-wrapper">
      {isSuccess && (
        <StyledDiv>
          <StyledContentWrapper>
            <ul>
              <li>
                Nickname:<span>{data.nickname}</span>
              </li>
              <li>
                Real name :<span>{data.real_name}</span>
              </li>
              <li>
                Catch phrase:<span>{data.catch_phrase}</span>
              </li>
              <li>
                Description:<span> {data.origin_description}</span>
              </li>
              <li>
                Superpowers:<span>{data.superpowers}</span>
              </li>
            </ul>

            {data.images.length === 0 ? (
              <UploadImageForm nickname={data.nickname} refetch={refetch} />
            ) : (
              <ImageCollection data={data} />
            )}
            <StyledModalButtonsDiv>
              <button type="button" onClick={handleModalOpenClose}>
                Edit hero
              </button>
              <button type="button" onClick={handleModalImageOpenClose}>
                Edit image
              </button>
            </StyledModalButtonsDiv>
          </StyledContentWrapper>
        </StyledDiv>
      )}

      {isModal && (
        <Modal onModalClose={handleModalOpenClose}>
          <ChangeForm
            data={data}
            onUpdateData={handleUpdateData}
            buttonName={'Update my Super Hero'}
            update
          />
        </Modal>
      )}

      {isModalImage && (
        <Modal onModalClose={handleModalImageOpenClose}>
          <ImageCollection data={data} edit refetch={refetch} />
          <UploadImageForm nickname={data.nickname} refetch={refetch} />
        </Modal>
      )}
    </div>
  );
}

export default HeroPage;
