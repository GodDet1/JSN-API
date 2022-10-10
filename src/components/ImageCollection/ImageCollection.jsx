import imagePathResolver from '../../helpers/imagePathResolver';
import ImageGallery from 'react-image-gallery';
import { useDeleteSuperHeroImageMutation } from '../../Redux/API middleware/imageSuperHeroAPI';
import { StyledDiv } from './styled.module';

function ImageCollection({ edit = false, data, refetch }) {
  const [deleteImage] = useDeleteSuperHeroImageMutation();

  const images = data.images.map(image => ({
    original: imagePathResolver(data.nickname, image),
    thumbnail: imagePathResolver(data.nickname, image),
    originalHeight: 400,

    thumbnailHeight: '50px',
  }));

  if (!edit) {
    return <ImageGallery items={images} showThumbnails={false} />;
  }

  return (
    <StyledDiv>
      {images.length === 0 ? (
        <h2>Ther is no image</h2>
      ) : (
        <>
          <h2>For deleting image just click on little image</h2>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            disableThumbnailScroll={true}
            showPlayButton={false}
            autoPlay={false}
            onThumbnailClick={async (event, index) => {
              const imagePath = data.images[index];

              const nickname = data.nickname;

              await deleteImage({ nickname, imagePath });
              refetch();
            }}
          />
        </>
      )}
    </StyledDiv>
  );
}

export default ImageCollection;
