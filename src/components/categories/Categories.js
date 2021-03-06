import { useDispatch, useSelector } from 'react-redux';
import { statusAction } from '../../redux/categoties/categories';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const showStatus = () => {
    dispatch(statusAction());
  };

  return (
    <>
      <h2>{categories}</h2>
      <button type="button" onClick={() => showStatus()}>Check status</button>
    </>
  );
}

export default Categories;
