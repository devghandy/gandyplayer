import { v4 as uuidv4 } from "uuid";
import wizkid from './music/Wizkid.mp3'
import adekunle from './music/AdekunleGold.mp3'
import olamide from './music/Olamide.mp3'
import niniola from './music/Niniola.mp3'
import ayrastar from './music/AyraStar.mp3';
import omahlay from './music/OmahLay.mp3';
import tems from './music/Tems.mp3';

function chillHop() {
  return [
    {
      name: "High",
      cover: "https://jesusful.com/wp-content/uploads/2021/09/High-by-Adekunle-Gold-ft-Davido-Mp3-1024x576.jpg ",
      artist: "Adekunle-Gold ft Davido",
      audio: adekunle,
      color: ["#070808 ", "#979592"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Rock",
      cover:"https://trendybeatz.com/images/Olamide-Rock-Artwork.jpg  ",
      artist: "Olamide",
      audio: olamide,
      color: ["#562E26", "#8DFCFC"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Too Sweet",
      cover:" https://www.naijaloaded.com.ng/wp-content/uploads/2021/08/niniola.jpeg ",
      artist: "Niniola",
      audio: niniola,
      color: ["#ED8909 ", "#F5AD25"],
      id: uuidv4(),
      active: false,
    },
    
    {
      name: "Essence",
      cover: "https://i.pinimg.com/736x/98/6a/fb/986afbb2bbeef5363205ca9b74d12366.jpg",
      artist: "Tems ft Wizkid",
      audio: tems,
      color: ["#5A5751 ", "#B6AEA3"],
      id: uuidv4(),
      active: false,
    },
    
    {
      name: "Bloody Samaritan",
      artist: "Ayra Star",
      cover: "https://img.wapka.org/003unv.jpg",
      id: uuidv4(),
      active:false,
      color: [ '#75BBFF','#C93743'],
      audio: ayrastar,
    },
    {
      name: "Godly",
      artist: "omah Lay",
      cover: "https://trendybeatz.com/images/Omah-Lay-What-Have-We-Done-EP-Artwork2.jpg",
      id: uuidv4(),
      active:false,
      color: ['#F9F9F9', '#140419'],
      audio: omahlay,
    },
    {
      name: "Mood",
      artist: "Buju ft Wizkid",
      cover: "http://validupdates.com/wp-content/uploads/2021/08/IMG_27082021_013319.jpg",
      id: uuidv4(),
      active:false,
      color: [' #0C1A3C', '#C1C1C1'],
      audio: wizkid,
    },
  ];
}

export default chillHop;
