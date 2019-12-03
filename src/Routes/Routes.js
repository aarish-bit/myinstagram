import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import './../styles/main_content.css'
// import Home from './../home/Homepage/Home'
import Instagram from '../Instagram/Instagram';
import Game from '../Tic-tac-toe/Game';


const Routes = () => {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/Instagram" component={Instagram} />
          <Route exact path="/Game" component={Game} />
        </Switch>
      </main>
    </div>
  )
}

export default Routes