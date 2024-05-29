import './style.css'

import { header } from './src/componentes/header/header'
document.body.append(header);

import { main } from './src/componentes/main/main-part';
document.body.append(main);

import { renderPhotos } from './src/componentes/main/api_call/api_call';
renderPhotos();

