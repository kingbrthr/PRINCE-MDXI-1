const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBT8l3rFGLmIqBEdsQgINo3cBKQ35qGEAku5WVwUJ/z3Cezu6XnYne3lqaiqyMqTmef8AEWJa6SjHix+gIrgDjZoWDZ9hcACLNskQQSMQAwbCBagXe194XTNV5ve89RtHwVHJTmJpqvVPnNKpPrSQaXlE4+mn8B9BKp2n+HoD4DFJPI19uWkCRNNqVbhlbqeD9fd2PQrzRPVsdu/cGKw0WdX4wncB0SICS5SpTqgHBGY6ai3ICZfox89x3NWoMxwnxr+UkpelLbYztV6rZu72VwK7MRnaWXN96vwa/Sfu7FNb/cUW3XKzYWb7CAa2/FlGmQe504og2+JfDSt5IAvb/RrnBYoXseoaHDTf1l3KB91XsYiOmU+RyWe83qiN65mFJ4qR6cgDXkUZGplO9oXda+MZkyhyW5V3HLROjvi1j+QStgu8XKjHM9rXhJipuNK6xT+TtwiH1k5/R/dQyMcs1bQlb4USvFlGuzqZ1bt2oo736Yr/KyFZmBy0D6zk6/RF50LpTmGpbPu0bIpo3htj7ZH57eMpcXZNRBLSz86PO1cok/6sGnJn1geefuMCN7pJFJhWtEKulb8bbJXbifHDykVSw1/RcLtrK4YvPaKcBWz0+PK7NVbyRTRJu5W+u11mcG0tltmT6qdMz2mT4+KTqhfx2DB3EeAoBTXDYENLovHHj0bARh3LooIah7ygqXC6bc0F/bjjponaNOiYDdXYrnUZybfW830jPhKDdM8WD+BEahIGaG6RrGG66YkvYHqGqaoBou/v49Aga7Nm3HDcxwzAgkmdeMVbZWVMP5w9eMQRlHZFo3bF5E0LBABC/pzGzUNLtJ60LEtIIkOuEPSATY1WCQwq9GvChFBMVg0pEW/ulYq40F423QUdb6VwQjkD0NwDBaAYydTYcLQjDBbcH/V3y4DKKyqbwVqwAhkj0ssO5lzU4Fj5izL88PFYX8ECjggAQf2sBj0fmc7gMeogTirwQJIhur0uiIrpsamBq2qopKKUiqCz+o+YvJmQ75Tx1iBfncy0/Fe7GtPlhl1fW2hPT92WahcnKVKYo1nxKd/AAELIJ9dy7cj0X8W+ul695KnpT+mhQr2qWdK2CF0qQnGrSBnRPSpBdNyTCV2EE4p/ZU6rg5Y4Rw5cmUhly5Ei9qqp17kIVMjEKMOR+j3x+iZ3Z83JMoiwTrKJkwlle5n18gtddV9oU+buV8WXuCZrSJSSHDzPOLMfFasX5ktddXPbeoXhjBuG29m9DSryPSze7TfAvxooOx9cOFHtAbfht8Eo8ccePfgP3x8oz2Ejb6PfkN4nyv/0pvL1+zaTQ5qtufl0mIvBlmJl7mDjX1+skKBD5aGYjtnzqFiG9zv30egymCTlCQfpmcRk/IRE1K2Q3rXRVL+4TFpuV6Laboe6s5g3YifHbHFOaobmFdgwQgCy9CzKU+/3bJIWWmwPgwp9QXh7A3x7sWqchvYfDQYEIdvSY3B/SffSNPAfAcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
