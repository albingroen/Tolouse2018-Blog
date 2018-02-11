import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Post1 from '../pages/post1'
import Post2 from '../pages/post2'
import Sidebar from '../comps/sidebar'

export default () => (
  <BrowserRouter>
    <div className="siteWrapper">
      <Route path="/" component={Sidebar} />
      <Route path="/post1" component={Post1} />
      <Route path="/post2" exact component={Post2} />
    </div>
  </BrowserRouter>
)
