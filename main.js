import './style.css'

import { header } from './src/componentes/header/header'
document.body.append(header);

import { buttonCleaner} from './src/componentes/cleaner/cleaner';
header.append(buttonCleaner);

import { input } from './src/componentes/input/input'
header.append(input);

import { buttonInput } from './src/componentes/button/button';
header.append(buttonInput)

import { main } from './src/componentes/main/main-part'
document.body.append(main);

import { renderPhotos } from './src/componentes/api_call/api_call';
    renderPhotos()

import { searchPhotosButton } from './src/componentes/button/button';
searchPhotosButton;

import { searchPhotosEnter } from './src/componentes/button/button';
searchPhotosEnter

import { searchPhotosButton_Empty } from './src/componentes/empty_main/empty_main';
searchPhotosButton_Empty 

import { searchPhotosEnter_Empty } from './src/componentes/empty_main/empty_main';
searchPhotosEnter_Empty 