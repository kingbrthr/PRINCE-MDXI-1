const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3rVGOVWChEdsYgogoq3BtuNfSihgFJuVhUoTvjvG7TT0/OwO9vLU5GVkXnynJP1HeQFYdjBDdC+g5KSGnHcHnlTYqCBURVFmIIuCBFHQAPX+Txf+Jfkqrt1MU2arRCU2VVQ8JExe52uBSd6OzunBc2HL+DRBWV1TEnwm4LC7ugOSpb6VDi6ArI3pGoY6Rg3b9QbTLMZXxgoi3ykvsYv4NFWRISSPDbLBGeYotTBzQoR+jX4bDI6eAXqsKN4nOR+gMaWNIdvxd7ausUqlet6eVDOm0Txvgj/ju1M78FLrIjQlALFe2sWrsz6a1/UbbKanfl+HA6nViGyJ3xG4hyHsxDnnPDmy7xn9l24xrOtc8vg2BQj03mN41t/zE/lBSrr+UIe77Z0wfwz+xrwPNhDj1RKJO3N+HxjlyPVLcOrRss7PIoXZ5Wrqyacw5kn/wp8RT+8cv4/vJur4WR5QbK14wtbcoeS7DE4ss2j+0YN/w7VcBoeZvfKSq9ftI1tlXp9OsluJxzLZjof7+pdv76+DQ5zlMkdMexJd86Fzu36CR/xiv4OZbQzdG9nXgJFDed3ez/WS/dEq/3pNnLXGR2cbtvzoUqMk1fKtlvs46q33YwaJT7YwXLHZmpsk0TvjEJlUi4W1+GJ1xtDf3mf6IybWQg04dEFFMeEcYo4KfI2JopSF6Cw3uKAYv5OLzhP6r2/TodwHk8OG5h52/xe3Dkpwr5AXVEu/fvBiZ2zWs5eQBeUtAgwYzi0COMFbRaYMRRjBrQ//+qCHN/4U7i2HRS7ICKU8de8KtMChR+qflyiICiqnG+bPDDaA6ZA63+GMeckj1nLY5UjGiSkxkaCOANahFKGf06IKQ6BxmmFf26tUYQt8VNfH3tbxwFdkL0LQkKgAVWUZAkOoTSUJE0Q/2Dfrm1ZVJbfcsxBF6TPtOGgP1BERVFVUem3iW388RNgWy/EHJGUAQ0YznxMVsww3emcMDad6utYN2IdfA704Ywn87gZiXAR8t7Qt50Z9SszqkQWelCvidd5PRY6pDxnu7VevPxDkVY7OHDLSLiwvMmK5DUeQdk/VZe53IOKsqlOslsOBti3Evg6rZZ8v+1MhAaudiqMNkE03AlRndCeX2b24SzfkJ1Matm4vrTdQlyTAP/abAudyxSWyDYtt0/LTlbXlhovnTDBy0F5x8urZ/KFKY9d1dsocpXg1X1dFdJmsW5OF0NPp4nqNimeWtIk3ezUsZuvjPXTs+87k/54q8i7m1qp2t+I4PfVz1Er4H9L9wTeOqz/6P5S48dj8i8LOdqzOKxO1jHqTciWOAJNrAGnlofjuZxG6RTq7mVwGJh93QGPx19dUKaIRwXNgAZQHtKChKALaFG1lp3lUfGbZsZoNjP0eNJOniLG9c812JEMM46yEmjCAA77UJbV/jNrRYvSQiwBGpA26kFSW083elluOeIfWwX09jOlADz+Brx3KPBxBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
