import React, { useState } from 'react';

export default (props) => {
    const [pageItemClass, setPageItemClass] = useState("page-item");
    
    const handleClick = () => {
        setPageItemClass("page-item page-item--clicked");
    };
    return <div className={pageItemClass} onClick={handleClick}>{props.nav}</div>
}
