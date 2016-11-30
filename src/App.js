import '../stylesheets/app.scss' // required for wepback to build css

import React from 'react'
import {render} from 'react-dom'
import Page from './components/Page'

render(<Page />, document.getElementById('root'))