import React, { Component } from 'react';

const style = 
{
    height: "300px",
    border: "1px dashed"
}
const style2 = {
    paddingTop: "92px",
    paddingBottom: "10px",
    width: "100px"
}
const style3 = {
    letterSpacing: "-3px",
    fontWeight: "100"
}
class UploadArea extends Component {

    render() {
        return  <div>
                    <div style={style}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <img style={style2} src="assets/images/upload.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 style={style3}>Upload the resume</h2>
                            </div>
                        </div>
                        {this.props.children}
                    </div>
                </div>;
    }
}

export default UploadArea;