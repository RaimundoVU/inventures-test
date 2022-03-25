import { createGlobalStyle } from 'styled-components';

import PoppinsWoff from './Poppins.woff';
import PoppinsWoff2 from './Poppins.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
    }
`;
