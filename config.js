const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUXZOiOBT9L3mVGlFEhKquGkAbUVBUUHBrHgKED+XLJKA45X/fwu6enofd2V6ewk1ycu49596foChTgpaoBdJPUOG0gRR1S9pWCEhAqaMIYcCAEFIIJDA0POGoDkMVEoFT3JW2sWGQ+IZPpjHRdYy0YG3Wgt7sry/gwYCq9rM0+APg4Xq6nWc8cre91pzOBWdqtRZV1tBU8S72M+tyX8wn8eQ6dV7Ao0OEKU6LeFYlKEcYZkvUWjDFX6M/W9pD3jwahn/WvKng3MJWTp0sNOUBvG52p4QcxXzsRFst+Bp9f1o6W6NoQm3PmshTdufL3iX+LSG5DqP8dFuZIZ9e7Is2eqNP0rhAoR6igqa0/XLd11Z+tfNJZgrrbMq/OlTobbaOe67jIG7UVs2nTsEr1e16OH+NeK9m+07/1B5huNCgsrpgbhJNaq4Z7pMZb/UV3jpNwlo1NpvfiVv4wyvn/1N31bwf6Li1bW7i4MFoMN0LTTKuAsM/GtH8zt1iK3dcO480/Wv05XlveAwOK88X4y0p3CjkEzbPVyNhxlmzm9K37/42i1vj1fukD2mN/8Tyum6s2lgsBROPlJOtZoo5Yi+mm/E7r6xttD/4/ko0PTN1+ViTW334WkaCbUztg9332EU0HJ2Rdoj7Pi/uU/a8d+DuJL88MzqjVg+BNHgwAKM4JRRDmpbFMzacMACGzQ4FGNFneUFUus2Fj+bnlt0lYmn1DXfSKyd5v2UH2lLxz6WHhTSPx51RGVDhMkCEoHCeElri1kSEwBgRIP31gwEFutE34brnuAEDohQT6hR1lZUw/FD1YxMGQVkXdNcWgdotEAYS+xlGlKZFTLo61gXEQZI2SE0gJUCKYEbQrwwRRiGQKK7Rr65Vy7ArvGEvZG7rDQAD8qcgaQgkIA45TmQH3EAY89LwO/l27VBhVX0rEAUMKGB3GGxhSwADsuedATsZCmNBEEWWH4xFafi9iz9+se3AQ0RhmpGnDXeroh/MZ6vlMglnmibrsazGMvjM7sMmbzKUB2FKkkQca2Xism2xNmd5maT7fMmJMn+LT7ziB+F0Z+31l38AARKAFJXhaTuq2psM43u/Dmqf8Dj2glXgplNr4eqHTFglK53LNry2ldUdNIIevzUa/fWQH2ZGcd8f7zie9J0IXsaN0yzUzlMMCFGTBuj3x0yHFTTBzepAJ47d0FEkLjNbRXI4ur06YTXfw15wr7bncD4qR1aVH4OxqE/HvesI2aVzu+fjyMTrnVCJWs8eaVkTt6f4zcDPBsreB1f6tFanW/cbpeg5B94F+i8d33h3bmMfzG8Q74PlX5pTga/1VdC9CCUXfS+a1f2kLC66lx1T2t+sA0/vbQ7cfMOeBjvwePxgQJVBGpU4BxIguQ8BA3BZd97Vi6j807CSY30Wx2qXdQYJlT/7wU5zRCjMKyANhAnLj3luNGBA3spVtaOQfrQRkLtvUc7B42+VePbOYgcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
