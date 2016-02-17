import React from 'react'

class Charts extends React.Component{
    render(){
        return (
            <div className="row placeholders">
              <div className="col-xs-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                <h4>Progress against plan</h4>
                <span className="text-muted">Something else</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                <h4>Open Defect Trend Chart</h4>
                <span className="text-muted">Something else</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                <h4>Defect Discovery Chart</h4>
                <span className="text-muted">Something else</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
                <h4>Performance</h4>
                <span className="text-muted">Something else</span>
              </div>
            </div>
        )
    }
}

export default Charts
