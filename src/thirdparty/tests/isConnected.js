import Axios from 'axios';

export default function isConnected() {
  const lsToken = localStorage.getItem('token');

  if (lsToken === null || lsToken === undefined) {
    console.info('[isConnected] Token is null or undefined');
    return false;
  }

  Axios.get('http://back.quizztg.fr/api/users', {
    headers: { Authorization: `Bearer ${lsToken}` },
  })
    .catch((error) => {
      localStorage.removeItem('token');
      console.error(`[isConnected] Error: ${error}`);
      return false;
    })
    .then(() => {
      console.info('[isConnected] Token doesn\'t need to be refreshed');
      return true;
    });
  
  return true;
}
