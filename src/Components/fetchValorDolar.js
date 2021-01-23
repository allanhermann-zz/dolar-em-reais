const axios = require('axios');

const fetchValorDolar = () => {
    return axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
      .then((result) => {
        // handle success
        console.log(result);
        return (result.data.USD.ask);
    })
    .catch(err => {
        console.error(err);
        return err;
    })
}

export default fetchValorDolar;