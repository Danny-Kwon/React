import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NameForm from './chapter_11/NameForm';
import RequestForm from './chapter_11/RequestForm';
import FruitSelect from './chapter_11/FruitSelect';
import Reservation from './chapter_11/Reservation';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Calculator/>
);
reportWebVitals();