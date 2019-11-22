import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import './../styles/main_content.css'
// import Home from './../home/Homepage/Home'
import Instagram from '../Instagram/Instagram';


const Routes = () => {
  return (
    <div>
      <main>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/Instagram" component={Instagram} />
          {/* <Route exact path="/Products" component={Products} />
          <Route exact path="/Products" component={Products} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default Routes