import React from 'react';
import BreadCrumbsComponent from '../components/BreadCrumbs';
import { withRouter } from 'react-router-dom';

const breadCrumbs = (props) => (<BreadCrumbsComponent currentRoute={props.location.pathname} />);

export default withRouter(breadCrumbs);
