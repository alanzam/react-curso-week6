import React from 'react';
import NavBarComponent from '../components/NavBar';
import { withRouter } from 'react-router-dom';

const navBar = (props) => (<NavBarComponent linkTo={(link) => props.history.push(link)} />);

export default withRouter(navBar);
