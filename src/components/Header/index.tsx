import React from 'react';
import {
  Link,
  useLocation
} from "react-router-dom";

import { chevronLeftWhite } from '../Icons';

const Header = () => {
    const location = useLocation();

    return (
        <header className="app-header py-3 sticky-top">
            <div className="container container-700">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-2">
                        {
                            location.pathname !== '/' ?  <Link to="/" style={{lineHeight: '16px', verticalAlign: 'top'}}>{chevronLeftWhite}</Link> : null
                        }                        
                    </div>
                    <div className="col-8 text-center">
                        <div className="header-logo">⾦融市場常識與職業道德</div>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <a className="btn btn-sm btn-outline-secondary" href="#">List</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;