import { Link } from 'react-router-dom';
import imagePathResolver from '../../helpers/imagePathResolver';
import { useDeleteSuperHeroMutation } from '../../Redux/API middleware/SuperHeroDataAPI';
import { ListItem } from './styled';

function SuperHeroItem({ superHero, onDelete }) {
  const [deleteData] = useDeleteSuperHeroMutation();
  return (
    <ListItem
      imagePath={imagePathResolver(superHero.nickname, superHero.images[0])}
    >
      <button
        type="button"
        onClick={() => {
          deleteData(superHero._id);
        }}
      >
        &#9587;
      </button>

      <Link to={`/${superHero._id}`}>
        <h2>{superHero.nickname}</h2>
      </Link>
    </ListItem>
  );
}

export default SuperHeroItem;
