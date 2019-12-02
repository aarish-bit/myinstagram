import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import './../styles/main_content.css'
// import Home from './../home/Homepage/Home'
import Instagram from '../Instagram/Instagram';
import Game from '../Tic-tac-toe/Game';
import Matrix from '../Matrix/Matrix';


const Routes = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/Game" component={Game} />
          <Route exact path="/Instagram" component={Instagram} />
          <Route exact path="/Matrix" component={Matrix} />
        </Switch>
      </main>
    </div>
  )
}

export default Routes