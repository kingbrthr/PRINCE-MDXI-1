const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3ptY7iJXCI6YhAVEREUr2zMQwkFlHKTKlSY8N83sLun52F3tpenIgtOnsxzMn+CvMAEWagB6k9QVvgKKeqOtCkRUMGwjiJUgR4IIYVABZdJ1Pql5nMbvLvhoH8Yacgpc/aACbXZeJry9o03W8sQzFfw6IGyPqY4+ANgwis3uaSH3BnIkemwR22gy46sMbbNW/6cLjw9sa9bbxJrr+DRIUJc4TwelwnKUAVTCzUuxNXX6HvD3d68jio38JthLdd8To5xzegOtGhgRqUp9YupH1KT73+NPrPQ53alBT57SYx410iRyDPXsZwbIpMr5THwXMbZireWW77RJzjOUWiGKKeYNl/uu7eArHI8O82EOZV9ptWCdGTFkrE6IS49lkaIMmpCaVqex18jvpDvUiAbLmtPadzWG2HFt2N7L8/KwbIPX24ipIl04Vp2Hf9O3K0+vHL+P33XhhoaL4jfXrJdGp1XhWFrPr4fXU83R9caDs86d4vEQzb5In3sxUZB+8Ttr7yZA9G+PUmb5KWoBsrQL86TpayMwsvBnO1un/Qhras/sZzM+2693UxbtLTEbLojopCeZWF6iF7qxWFUWIyz3yZOA+11hhdHsVlwkTHkJxKdb9DKy8TCPWzazWRFj1trSj2GaWItfn1WdEaNGQKVe/RAhWJMaAUpLvIu1ud7AIZXDwUVos/ugvZuugXkN/TuCdBJnGAAQ0vZzPPlGsuD6xUFAVuM49WOJ6+gB8qqCBAhKJxiQouqsREhMEYEqH/96IEc3embbl02geuBCFeEbvK6TAsYfoj6cQmDoKhz6jV5oHcHVAGV/QwjSnEek66NdQ6rIMFXpCeQEqBGMCXoV4GoQiFQaVWjX0OrF2HXd0ncat56NgE9kD31wCFQgcILgsJyAicNRHXwnXy7daiwLL/liIIeyGH3MVjBhoAeSJ//cKzMSwNJUhRW5AaKOvjexR+/2HbgIaIQpwSoQLd3i5wJpmPXPeXK2DC0ZazpsQY+q/twyZsMxU4akSRRBkaR7Nkmd+xxViR4m1mCoon3+CQOj0E48tyt+foPIEAFd7068Rz1k0O6mh1Iy6Sw0H07dl/QomL55bhtuMlemodbW8oFvwqbl8UxDR1irBtjmk9PPucq5Thn5Hj8YsmTfoFmw+Vrly1EVxyg35MFF/94i/pllV+XWXDShXtSRroQrhTndD9nunJ1JiYORKst86vlzY+DYb3P7+5G0+/IkqzbRJkr10xQImPvkn0Kg7UyvL359zk/6fvewk9rdbp1rxFGzzXwLtB/6fjGu3Mb++j9BvG+V/5lNodwUt8k8xCh5GJuFbtsT8PZxTykPqbM0gkO5styJ0yX7InzwOPxowfKFNKoqDKgApIdIeiBqqg775p5VPwhk67F5jiO9a7qFBKqfc7DGmeIUJiVQOUkmWNZXhqwPZA1Wll6FNKPMQJa98wKCzz+Bkesw4phBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
