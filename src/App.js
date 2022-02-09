import React from 'react'
import {Provider} from 'react-redux';
import { Files } from './components/FilesComponent.js';
import generateStore from './redux/store.js';

export const App = () => {
    const store = generateStore();
    return (
        <div>
            <Provider store= {store}>
                <Files/>
            </Provider>
        </div>
    )
}

export default App;