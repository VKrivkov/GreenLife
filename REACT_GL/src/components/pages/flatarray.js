//flat plan images
import oneroom1 from '../../assets/1room1.webp';
import oneroom2 from '../../assets/1room2.webp';
import oneroom3 from '../../assets/1room3.webp';
import oneroom4 from '../../assets/1room4.webp';
import oneroom5 from '../../assets/1room5.webp';

import tworoom1 from '../../assets/2room1.webp';
import tworoom2 from '../../assets/2room2.webp';
import tworoom3 from '../../assets/2room3.webp';
import tworoom4 from '../../assets/2room4.webp';
import tworoom5 from '../../assets/2room5.webp';
import tworoom6 from '../../assets/2room6.webp';
import tworoom7 from '../../assets/2room7.webp';
import tworoom8 from '../../assets/2room8.webp';

import threeroom1 from '../../assets/3room1.webp';
import threeroom2 from '../../assets/3room2.webp';
import threeroom3 from '../../assets/3room3.webp';
import threeroom4 from '../../assets/3room4.webp';
import threeroom5 from '../../assets/3room5.webp';

//general plan images
import plan1room1 from '../../assets/Wholeplan1room1.webp';
import plan1room2 from '../../assets/Wholeplan1room2.webp';
import plan1room3 from '../../assets/Wholeplan1room3.webp';
import plan1room4 from '../../assets/Wholeplan1room4.webp';
import plan1room5 from '../../assets/Wholeplan1room5.webp';

import plan2room1 from '../../assets/Wholeplan2room1.webp';
import plan2room2 from '../../assets/Wholeplan2room2.webp';
import plan2room3 from '../../assets/Wholeplan2room3.webp';
import plan2room4 from '../../assets/Wholeplan2room4.webp';
import plan2room5 from '../../assets/Wholeplan2room5.webp';
import plan2room6 from '../../assets/Wholeplan2room6.webp';
import plan2room7 from '../../assets/Wholeplan2room7.webp';
import plan2room8 from '../../assets/Wholeplan2room8.webp';

import plan3room1 from '../../assets/Wholeplan3room1.webp';
import plan3room2 from '../../assets/Wholeplan3room2.webp';
import plan3room3 from '../../assets/Wholeplan3room3.webp';
import plan3room4 from '../../assets/Wholeplan3room4.webp';
import plan3room5 from '../../assets/Wholeplan3room5.webp';
//flat interior pictures
import {photos} from './photos.js';

{/*
[0] - specials;
[1] - amount of; 
[2] - total area; 
[3] - plan image; 
[4] - price; 
[5] - floor; 
[6] - highlighted full plan image; 
[7] - array of photos;
[8] - balkony area;
[9] - storage are;
*/}


const flatarray = [
    ['', '1', '45', oneroom1, '123,456 EUR', '1', plan1room1, photos[0]],
    ['veranda', '1', '54', oneroom2, '123,456 EUR', '1', plan1room2, photos[1]],
    ['sea view', '1', '56', oneroom3, '123,456 EUR', '1', plan1room3, photos[2]],
    ['rooftop', '1', '54', oneroom4, '123,456 EUR', '2', plan1room4, photos[3]],
    ['rooftop', '1', '56', oneroom5, '123,456 EUR', '2', plan1room5, photos[3]],

    ['rooftop', '2', '75', tworoom1, '123,456 EUR', '1', plan2room1, photos[4]],
    ['rooftop', '2', '73', tworoom2, '123,456 EUR', '1', plan2room2, photos[5]],
    ['sea view', '2', '74', tworoom3, '123,456 EUR', '1', plan2room3, photos[6]],
    ['sea view', '2', '80', tworoom4, '123,456 EUR', '1', plan2room4, photos[7]],
    ['sea view', '2', '75', tworoom5, '123,456 EUR', '2', plan2room5, photos[7]],
    ['sea view', '2', '73', tworoom6, '123,456 EUR', '2', plan2room6, photos[7]],
    ['sea view', '2', '74', tworoom7, '123,456 EUR', '2', plan2room7, photos[7]],
    ['sea view', '2', '80', tworoom8, '123,456 EUR', '2', plan2room8, photos[7]],

    ['', '3', '103', threeroom1, '123,456 EUR', '0', plan3room1, photos[8]],
    ['sea view', '3', '98', threeroom2, '123,456 EUR', '0', plan3room2, photos[9]],
    ['veranda', '3', '108', threeroom3, '123,456 EUR', '1', plan3room3, photos[10]],
    ['rooftop', '3', '108', threeroom4, '123,456 EUR', '1', plan3room4, photos[11]],
    ['', '3', '101', threeroom5, '123,456 EUR', '2', plan3room5, photos[12]]

];

export {flatarray}