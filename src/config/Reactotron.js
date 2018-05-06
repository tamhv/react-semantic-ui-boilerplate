import Reactotron from 'reactotron-react-js'
import {reactotronRedux} from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import Immutable from 'seamless-immutable'
import apisaucePlugin from 'reactotron-apisauce'

import {trackGlobalErrors} from 'reactotron-react-js'

Reactotron
    .configure({name: 'React boilerplate'}) // we can use plugins here -- more on this later
    .use(apisaucePlugin())
    .use(trackGlobalErrors({offline: false}))
    .use(reactotronRedux({onRestore: Immutable}))
    .use(sagaPlugin())
    .connect(); // let's connect!

Reactotron.clear();