import React from 'react';

// Toda vez que usar react no browser precisa dessa lib
import { render } from 'react-dom';

import App from '../App';

render(<App />, document.getElementById('app'));