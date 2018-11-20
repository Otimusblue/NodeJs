var crypto = require('crypto-js');

//Ma hoa

var message = crypto.AES.encrypt('Noi dung can ma hoa','ma bi mat').toString();

console.log(message);

var bytes = crypto.AES.decrypt(message,'ma bi mat');

var message_decode = bytes.toString(crypto.enc.Utf8);

console.log(message_decode);
