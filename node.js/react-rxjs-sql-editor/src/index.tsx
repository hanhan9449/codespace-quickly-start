import React from 'react'
import ReactDom from 'react-dom/client'
import {App} from './app'

const containerEl = document.querySelector('body')
const renderRoot = ReactDom.createRoot(containerEl)

renderRoot.render(<App/>)

