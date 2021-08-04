import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import { getOrders } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

const Orders=({visual, setVisual})=> {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const dispatch = useDispatch();
  
    const handleClick = (e) => {
            dispatch(getOrders());
            setVisual({
                orders: true
            })
        
        if (anchorRef.current && anchorRef.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
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
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                Ordenes
            </Button>
        </div>
    );
};

export default Orders;