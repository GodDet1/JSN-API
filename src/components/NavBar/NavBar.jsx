import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavBar } from './styled.module';
import { ReactComponent as Logo } from '../../images/svg/Marvel_Logo.svg';
import { useDispatch } from 'react-redux';
import { updatePagination } from '../../Redux/Action/actions';

function NavBar() {
  const dispatch = useDispatch();

  const handleHomePage = () => {
    dispatch(updatePagination({ page: 1 }));
  };

  return (
    <StyledHeader>
      <StyledNavBar>
        <Logo width="200" />

        <div className="content-wrapper">
          <StyledNav>
            <NavLink to="/home" onClick={handleHomePage}>
              Home
            </NavLink>
            <NavLink to="/createHero">Create Super Hero</NavLink>
          </StyledNav>
        </div>
      </StyledNavBar>
    </StyledHeader>
  );
}

export default NavBar;
