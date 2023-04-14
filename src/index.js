import React from 'react';
import  ReactDOM  from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import { Provider } from "./context/context";

import App from './App';
import './index.css';

    ReactDOM.render(
        <SpeechProvider appid='f6cb3fcb-9e44-4d4d-a888-cfa794fff615' language='en-US'>
            <Provider>
              <App/>
            </Provider>
        </SpeechProvider>,
        
     document.getElementById ('root')
    );
