import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from '../components/form/Form';
import Page404 from '../components/Page404';


/**
 * Configuration of the routes for the app
 */
const RouterConfig = () => {

    return(

        <Router>
            <Routes>
                {/* route of the main page : renders the Form component if accessed */}
                <Route path="/" element={<Form/>} />

                {/* defines a route for undefined paths "*" and renders a 404 page to the user*/}
                <Route path='*' element={<Page404/>} status={404} />
            </Routes>
        </Router>
    );
};

export default RouterConfig;

