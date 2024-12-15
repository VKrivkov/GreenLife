//flat plan images
import oneroom1 from '../../assets/1room1.webp';
import oneroom2 from '../../assets/1room2.webp';
import oneroom3 from '../../assets/1room3.webp';
import oneroom4 from '../../assets/1room4.webp';
import oneroom5 from '../../assets/1room5.webp';
import oneroom6 from '../../assets/1room6.webp';


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
import plan1room6 from '../../assets/Wholeplan1room6.webp';


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
    ['', '1', '57,50', oneroom1, '123,456 EUR', '1', plan1room1, photos[0], '12,5', '45,00'],
    ['', '1', '61,00', oneroom2, '123,456 EUR', '1', plan1room2, photos[1], '7,0', '54,00'],
    ['', '1', '64,00', oneroom3, '123,456 EUR', '1', plan1room3, photos[2], '8,0', '56,00'],
    ['', '1', '78,00', oneroom6, '123,456 EUR', '1', plan1room6, photos[3], '22,0', '56,00'],
    ['', '1', '61,00', oneroom4, '123,456 EUR', '2', plan1room4, photos[3], '7,0', '54,00'],
    ['', '1', '64,00', oneroom5, '123,456 EUR', '2', plan1room5, photos[3], '8,0', '56,00'],

    ['', '2', '83,00', tworoom1, '123,456 EUR', '1', plan2room1, photos[4], '8,0', '75,00'],
    ['', '2', '85,00', tworoom2, '123,456 EUR', '1', plan2room2, photos[5], '12,0', '73,00'],
    ['', '2', '90,00', tworoom3, '123,456 EUR', '1', plan2room3, photos[6], '16,0', '74,00'],
    ['', '2', '115,00', tworoom4, '123,456 EUR', '1', plan2room4, photos[7], '35,0', '80,00'] ,
    ['', '2', '83,00', tworoom5, '123,456 EUR', '2', plan2room5, photos[7], '8,0', '75,00'],
    ['', '2', '85,00', tworoom6, '123,456 EUR', '2', plan2room6, photos[7], '12,0', '73,00'],
    ['', '2', '86,00', tworoom7, '123,456 EUR', '2', plan2room7, photos[7], '12,0', '74,00'],
    ['rooftop', '2', '151,00', tworoom8, '123,456 EUR', '2', plan2room8, photos[7], '71,00', '80,00'],

    ['veranda', '3', '193,00', threeroom1, '123,456 EUR', '0', plan3room1, photos[8], '90,0', '103,00'],
    ['veranda', '3', '202,00', threeroom2, '123,456 EUR', '0', plan3room2, photos[9], '104,0', '98,00'],
    ['', '3', '177,00', threeroom3, '123,456 EUR', '1', plan3room3, photos[10], '69,0', '108,00'],
    ['rooftop', '3', '261,00', threeroom4, '123,456 EUR', '2', plan3room4, photos[11], '153,00', '108,00'],
    ['rooftop', '3', '212,00', threeroom5, '123,456 EUR', '2', plan3room5, photos[12], '111,00', '101,00']

];

export {flatarray}