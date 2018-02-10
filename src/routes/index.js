import React, { Component } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Post1 from '../pages/post1'
import Sidebar from '../comps/sidebar'

export default () => (
  <BrowserRouter>
    <div className="siteWrapper">
      <Route path="/" component={Sidebar} />
      <Route path="/" component={Post1} />
    </div>
  </BrowserRouter>
)
