import React from 'react'
import EmpleadoList from '../lista-jugadores'

class JugadoresApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { jugadores: [] }
  }

  componentDidMount() {
    fetch('https://dwaapi.juvasquez88.now.sh/atp')
      .then((response) => {
        return response.json()
      })
      .then((players) => {
        console.log(players.atp.players);
        this.setState({ jugadores:players.atp.players})
        
    })
  }

  render() {
    if (this.state.jugadores.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.state.jugadores} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando jugadores...</p>
    }
  }

}

export default JugadoresApp