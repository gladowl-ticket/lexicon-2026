const https = require('https');
const ids = ['q3W_rZ1VyWQ', 'RPuMuJjynlc', 'VwIQh-wiviY', 'v1wEMuHYywc', 'im-Y6inWMAI', '9FAjG9AcrCs', 'QQq19Eb0Oys', '2TV239uzwxo'];

function getDesc(id) {
  return new Promise(resolve => {
    https.get('https://www.youtube.com/watch?v=' + id, res => {
      let raw = '';
      res.on('data', chunk => raw += chunk);
      res.on('end', () => {
        const match = raw.match(/"shortDescription":"(.*?)"/);
        if (match) {
          resolve(id + ': ' + match[1].replace(/\\n/g, ' '));
        } else {
          resolve(id + ': no description found');
        }
      });
    });
  });
}

Promise.all(ids.map(getDesc)).then(results => results.forEach(r => console.log(r)));
