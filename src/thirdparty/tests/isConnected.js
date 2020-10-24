import Axios from 'axios';

export default function isConnected() {
  const lsToken = sessionStorage.getItem('token');

  if (lsToken === null || lsToken === undefined) {
    console.info('[isConnected] Token is null or undefined');
    return false;
  }
  if (lsToken) {
    Axios.get('http://back.quizztg.fr/api/equipes', {
      headers: { Authorization: `Bearer ${lsToken}` },
    })
      .catch((error) => {
        sessionStorage.removeItem('token');
        console.error(`[isConnected] Error: ${error}`);
        return false;
      })
      .then(() => {
        console.info('[isConnected] Token doesn\'t need to be refreshed');
        return true;
      });
  }

  return true;
}
