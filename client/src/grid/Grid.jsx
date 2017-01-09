/**
* @desc Ce component permet d'intégrer facilement une grid avec un contenu modifiable
*/

import Card from '../card/Card.jsx';

class Grid extends React.Component {

  constructor(props) {
    super(props)
    this.state = {names : ['Aviron','Badmington','Basketball','Bobsleigh', 'Equitation','Football', 'Hockey', 'Natation', 'Petanque', 'Surf', 'Ski','Tennis']}
  }

  // Le HTML qui sera incorporé à chaque fois que <Grid /> est appelé
  render () {
    return (
      <div>
        <div className="row">
          {
            this.state.names.map((n)=> {
              return (
                <div className="col s4" key={n}>
                  <Card content={n} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}

// Export section
export default Grid;