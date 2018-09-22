import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from '../components/ProductBox';
import { withRouter } from 'react-router-dom';

class ProductEdit extends React.Component {
  render() {
    const productName = this.props.match.params.productName;
    return (
      <div className="wrapper wrapper-content animated fadeInRight ecommerce">
          <div className="row">
              <div className="col-lg-12">
                  <div className="tabs-container">
                          <div className="tab-content">
                              <div id="tab-1" className="tab-pane active">
                                  <div className="panel-body">
                                      <fieldset className="form-horizontal">
                                          <div className="form-group"><label className="col-sm-2 control-label">Name:</label>
                                              <div className="col-sm-10">
                                                <input type="text" className="form-control" placeholder="Product name"
                                                  defaultValue={productName}

                                                  /></div>
                                          </div>
                                          <div className="form-group"><label className="col-sm-2 control-label">Price:</label>
                                              <div className="col-sm-10"><input type="text" className="form-control" placeholder="$160.00" /></div>
                                          </div>
                                          <div className="form-group"><label className="col-sm-2 control-label">Description:</label>
                                              <div className="col-sm-10">
                                                  <div className="summernote">
                                                      <h3>Lorem Ipsum is simply</h3>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="form-group"><label className="col-sm-2 control-label">Meta Tag Title:</label>
                                              <div className="col-sm-10"><input type="text" className="form-control" placeholder="..." /></div>
                                          </div>
                                          <div className="form-group"><label className="col-sm-2 control-label">Meta Tag Description:</label>
                                              <div className="col-sm-10"><input type="text" className="form-control" placeholder="Sheets containing Lorem" /></div>
                                          </div>
                                          <div className="form-group"><label className="col-sm-2 control-label">Meta Tag Keywords:</label>
                                              <div className="col-sm-10"><input type="text" className="form-control" placeholder="Lorem, Ipsum, has, been" /></div>
                                          </div>
                                      </fieldset>
                                  </div>
                              </div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
    );
  }
}


export default withRouter(ProductEdit);
