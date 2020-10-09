
import axios from "axios";

const KEY = "AIzaSyA-t-xeCRGtb7VFRL6Hwb8smRx6abz2Bok";
 
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});