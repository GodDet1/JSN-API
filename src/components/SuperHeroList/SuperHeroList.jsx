import { useDispatch, useSelector } from 'react-redux';
import { updatePagination } from '../../Redux/Action/actions';
import { useGetSuperHeroQuery } from '../../Redux/API middleware/SuperHeroDataAPI';
import SuperHeroItem from '../SuperHeroItem/SuperHeroItem';
import { StyledDiv, StyledUl } from './styled';

function SuperHeroList() {
  const {
    pagination: { page, per_page },
  } = useSelector(({ superHeroReducer }) => superHeroReducer);

  const dispatch = useDispatch();

  const handleNextpage = () => {
    dispatch(updatePagination({ page: page + 1 }));
  };
  const handlePrevPage = () => {
    dispatch(updatePagination({ page: page - 1 }));
  };

  const { data, isSuccess } = useGetSuperHeroQuery({
    page,
    per_page,
  });

  return (
    <section className="content-wrapper">
      {isSuccess && (
        <StyledUl>
          {data.map(item => (
            <SuperHeroItem key={item._id} superHero={item} />
          ))}
        </StyledUl>
      )}

      <StyledDiv>
        <button type="button" onClick={handlePrevPage}>
          Prev
        </button>
        <button type="button" onClick={handleNextpage}>
          Next
        </button>
      </StyledDiv>
    </section>
  );
}

export default SuperHeroList;
