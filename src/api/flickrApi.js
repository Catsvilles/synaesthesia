import axios from "axios";
import credentials from "./flickrApiCredentials";
export const getImages = (page, group) => {
  // return axios.get(
  //   `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
  //     credentials.key
  //   }&tags=${tags}&text=${text}&sort=interestingness-desc&per_page=25&page=${index}&extras=url_c&format=json&nojsoncallback=1`
  // );

  return axios.get(
    `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=${
      credentials.key
    }&group_id=${group}&extras=url_q&per_page=50&page=${page}&format=json&nojsoncallback=1`
  );
};
