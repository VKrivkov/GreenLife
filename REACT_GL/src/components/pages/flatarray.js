//flat plan images
import oneroom1 from '../../assets/1room1.jpg';
import oneroom2 from '../../assets/1room2.jpg';
import oneroom3 from '../../assets/1room3.jpg';
import oneroom4 from '../../assets/1room4.jpg';
import tworoom1 from '../../assets/2room1.jpg';
import tworoom2 from '../../assets/2room2.jpg';
import tworoom3 from '../../assets/2room3.jpg';
import tworoom4 from '../../assets/2room4.jpg';
import threeroom1 from '../../assets/3room1.jpg';
import threeroom2 from '../../assets/3room2.jpg';
import threeroom3 from '../../assets/3room3.jpg';
import threeroom4 from '../../assets/3room4.jpg';
import threeroom5 from '../../assets/3room5.jpg';

//general plan images
import plan1room1 from '../../assets/Wholeplan1room1.png';


//flat interior pictures
import {photos} from './photos.js';

{/*
[0] - specials;
[1] - amount of rooms; 
[2] - total area; 
[3] - plan image; 
[4] - price; 
[5] - floor; 
[6] - highlighted full plan image; 
[7] - array of photos;
*/}


const flatarray = [
    ['', '1 Room', '43,4', oneroom1, '123,456 USD', '1st', plan1room1, photos[0]],
    ['veranda', '1 Room', '45,4', oneroom2, '123,456 USD', '1st', plan1room1, photos[1]],
    ['sea view', '1 Room', '45,6', oneroom3, '123,456 USD', '1st', plan1room1, photos[2]],
    ['rooftop', '1 Room', '50,1', oneroom4, '123,456 USD', '1st', plan1room1, photos[3]],
    ['rooftop', '2 Rooms', '61,7', tworoom1, '123,456 USD', '1st', plan1room1, photos[4]],
    ['rooftop', '2 Rooms', '62,0', tworoom2, '123,456 USD', '1st', plan1room1, photos[5]],
    ['sea view', '2 Rooms', '62,8', tworoom3, '123,456 USD', '1st', plan1room1, photos[6]],
    ['sea view', '2 Rooms', '64,1', tworoom4, '123,456 USD', '1st', plan1room1, photos[7]],
    ['', '3 Rooms', '77,9', threeroom1, '123,456 USD', '1st', plan1room1, photos[8]],
    ['sea view', '3 Rooms', '83,0', threeroom2, '123,456 USD', '1st', plan1room1, photos[9]],
    ['veranda', '3 Rooms', '87,8', threeroom3, '123,456 USD', '1st', plan1room1, photos[10]],
    ['rooftop', '3 Rooms', '94,3', threeroom4, '123,456 USD', '1st', plan1room1, photos[11]],
    ['', '3 Rooms', '104,1', threeroom5, '123,456 USD', '1st', plan1room1, photos[12]],
];

export {flatarray}