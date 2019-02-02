import React, { Component } from 'react';
const componentStyle = {
    paddingTop: '150px',
    paddingBottom: '150px'
};
class Content extends Component {
  render() {
    return  <div>
                <div style={componentStyle} className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>;
  }
}

export default Content;