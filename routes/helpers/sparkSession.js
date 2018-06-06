const crypto = require('crypto');

const md5Hash = (str) => {
    return crypto.createHash('md5').update(str).digest('hex');
}

module.exports = {
    md5Hash: md5Hash
}