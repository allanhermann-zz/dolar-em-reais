const axios = require('axios');

const fetchDadosDolar = () => {
    return axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
      .then((result) => {
        console.log(result);
        return (result.data.USD);
    })
    .catch(err => {
        console.error(err);
        return err;
    })
}

export default fetchDadosDolar;