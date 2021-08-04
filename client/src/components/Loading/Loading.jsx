import React from 'react';
import StyledLoading from './styled';
import load from '../../assets/image/load.gif'

const Loading = () => {
    return (
        <StyledLoading>
            <div>
                <img src={load} alt="not found" />
            </div>
        </StyledLoading>
    );
};

export default Loading;