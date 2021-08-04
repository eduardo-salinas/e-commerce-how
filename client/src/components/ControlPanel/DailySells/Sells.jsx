import { useRef, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export const Sells = ({ setVisual }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = (e) => {
    setVisual({
      dailySells: true,
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
        Ventas
      </Button>
    </div>
  );

}



export default Sells;