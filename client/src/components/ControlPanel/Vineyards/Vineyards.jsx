import { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { getProductsAll } from '../../../redux/actions';

export const Vineyards = ({ setVisual }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(getProductsAll());
    setVisual({
      vineyards: true,
    })
    setOpen(false);
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);


  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        value={1}
        onClick={handleClick}
      >
        Bodegas
      </Button>
    </div>
  );

}




export default Vineyards;