import React from 'react';
import PageItem from './PageItem';
import './PageNavigator.css';

export default (props) => {
    const pageItems = ["<", ...Array.from({length:props.cant}, (e, i)=>i+1), ">"];
    return <div className="page-navigator">
        {pageItems.map(nav => <PageItem nav={nav}/>)}
    </div>
}
