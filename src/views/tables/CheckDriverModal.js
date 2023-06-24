

import React,{Component} from 'react';

export default class CheckDriverModal extends Component{
    render(){
        let modelStyle={
            display:"block",
            backgroundColor:"rgba(0,0,0,0.8)",

        }
    return (
        <div className="modal" show="true" fade="true"  style={modelStyle}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">the Liceance: <input type="text" value={this.props.lice} onChange={e=>this.props.licChange(e.target.value)}/> </h5>
              <button type="button" className="btn-close" onClick={this.props.hide}  >
                
              </button>
            </div>
            <div className="modal-body">
            <p value={this.props.id}> Id: {this.props.id}</p>
              <p >  Driver Name: <input type="text" value={this.props.name} onChange={e=>this.props.nameChange(e.target.value)}/></p>
              <span>Liceance photo :</span>
            <img  value={this.props.licUrl} src={this.props.licUrl} onChange={e=>this.props.licUrlChange(e.target.value)} className="img-fluid rounded border border-warning p-1 m-1" width="100%"/>
            <span>Drag test :</span>
            <img  value={this.props.drag} src={this.props.drag}  onChange={e=>this.props.dragChange(e.target.value)}  width="100%" className="img-fluid rounded border border-warning m-1 p-1"/>
            <span>Identify Card :</span>
            <img value={this.props.identify} src={this.props.identify}  onChange={e=>this.props.identifyChange(e.target.value)}  width="100%"  className="img-fluid rounded border border-warning p-1 m-1"/>
            <p >  Validation: <input type="text" value={this.props.Acception} onChange={e=>this.props.acceptChange(e.target.value)}/></p>
            </div>
            <div className="modal-footer">
              <button  onClick={ this.props.check}  type="button" className="btn btn-primary">Done</button>
              <button type="button" className="btn btn-secondary"  onClick={this.props.hide}  data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
}

}
