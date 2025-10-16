import React from 'react';
import Nabar from '../Componenets/Nabar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Nabar/>
            <Outlet/>
        </div>
    );
};

export default Root;