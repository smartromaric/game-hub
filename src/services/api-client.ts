import axios from "axios"
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:"924412ecfb4648e384d72f87f27dff3c"
    },
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

  // rawg.io apikey : 924412ecfb4648e384d72f87f27dff3c