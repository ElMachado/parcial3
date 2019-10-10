import React from 'react'
import EmpleadoRow from '../jugadores-row'

class JugadorList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((jugador) => {
              return <EmpleadoRow name={ jugador.name   }
                                  ranking={ jugador.ranking }
                                  country={ jugador.country }
                                  age={ jugador.age }
                                  points={ jugador.points }
                                  urlInfo={jugador.urlInfo} />
            })
          }
        </ul>
      </div>
    )
  }
}

export default JugadorList