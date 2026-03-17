const https = require('https');
const ids = ['P8neB9ppnUM', 'JztQ6M0z_vY', 'I7vx-IppHcM', 'yRPbETS_O9E', 'chK2vVObfSI', 'hCX4CjaW4GI', '7PdAGAFIL4g', 'n21vWvnNGto', 'J85cXxk0mU0', 'HiwZdJO5k7A', 'vX73OtEkn8c', 'PS5liNO9vI0'];

async function getTitle(id) {
    return new Promise((resolve, reject) => {
        https.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    resolve(`${id} : ${json.title}`);
                } catch (e) {
                    resolve(`${id} : Failed to parse`);
                }
            });
        }).on('error', (e) => resolve(`${id} : Failed - ${e.message}`));
    });
}

async function run() {
    for (const id of ids) {
        const title = await getTitle(id);
        console.log(title);
    }
}

run();
