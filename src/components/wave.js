import React, {useState} from 'react';
import {css} from '@emotion/core';
import useSiteMetadata from '../hooks/use-sitemetadata';


const Wave = () => {

    const [waves,setWaves] = useState(0);
    const label = `👋 ${waves} ${waves ===1 ? 'wave' : 'waves'}`

    return (
        <button
        css={css`
        background: #2AA352;
        border:none;
        color: black;
        font-size:1.25rem;
        `}
        onClick={() => setWaves(waves+1)}
        >
            {label}</button>
    )
};

export default Wave; 