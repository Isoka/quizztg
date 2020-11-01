import Axios from 'axios';

function isConnected() {
  const lsToken = sessionStorage.getItem('token');

  if (lsToken === null || lsToken === undefined) {
    console.info('[User Connection] Token is null or undefined');
    return false;
  }
  if (lsToken) {
    Axios.get('http://back.quizztg.fr/api/equipes', {
      headers: { Authorization: `Bearer ${lsToken}` },
    })
      .catch((error) => {
        sessionStorage.removeItem('token');
        console.error(`[User Connection] Error: ${error}`);
        return false;
      })
      .then(() => {
        console.info('[User Connection] Token doesn\'t need to be refreshed');
        return true;
      });
  }

  return true;
}

export default isConnected;
