import axios from "axios";
// menggunakan kurung kurawal karena bentuk eksport bkn eksport default
import { OnlineRoot, RootPath } from "./Config";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Get;
