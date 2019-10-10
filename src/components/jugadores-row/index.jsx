import React from 'react'

class JugadorRow extends React.Component {

  render() {
    return(
      <li className="media">
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.rankig} &nbsp;
            <span className="label label-info">{this.props.rankig}</span>
          </p>
           <p>
            {this.props.country} &nbsp;
            <span className="label label-info">{this.props.country}</span>
          </p>

              <p>
            {this.props.age} &nbsp;
            <span className="label label-info">{this.props.age}</span>
          </p>

              <p>
            {this.props.points} &nbsp;
            <span className="label label-info">{this.props.points}</span>
          </p>

          <a href={`${this.props.urlInfo}`}> {this.props.urlInfo}</a>
        </div>
        <hr/>
      </li>
    )
  }
}

export default JugadorRow