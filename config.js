const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU246bSBT8l361lXA3WBopgG1sPHiM8ZVVHhpooDG3aRowRP73FZ6ZJA+72VmemgOqU6dOVf8AeYErtEYdmP4AJcENpGg40q5EYAq0OgwRAWMQQArBFFytdF2QeHa7pJ6byMYx7o/cDmthlgnz+cWKNyP35u7XrNE+gfsYlLWXYv8PgOpMlp+T3cir3c1IzqgVK7otOhvnWExeT3v/9bxkEvN0dvj5E7gPiBATnEfzMkYZIjBdo24LMfkc/WhhLYMXdg9ZLksk50W4SGJ8m9ld7Ahq0G96PcgZ83V9Xqifo/+iOK9xsu8mRmSorcveilB73V+zhoWL09ENRbFrjIOMK6N4o1/hKEfBKkA5xbT7tO7cannd5RK2SMysQmm7E9eHPFSN5uZlh1fLCC3Rm4sGEZj554jLO9dCE87u9erkeXi/VUYMv/MhmbkreDlsrWupeXm99PHld+Jb8uGV6//RvdX4RNbNZ8m1SyfwkkooTWEdM/Nudm66wgskTZ6YHH88Hz5Hf7t2dXO+FkPWZGBAxK9avWBVWTpMwjq7XJxCODsbTm92rP+LPqQ1+RPLRVs6Ws8Rj99KC7PacKFtkx77Op7w3UE74tib3Za9LeKrf8lvacS3UmOx/sG6Zv3WdBaTaGHnaIu5qzL3WcgGjprYT4+JrqhbBWDK3seAoAhXlECKi/xRk5kxgEHjIJ8g+pAXMMrX52grvFI57pejlcCZrinkxY4fzbARKocsipLA6+FZjp7AGJSk8FFVoWCJK1qQzkJVBSNUgelf38cgRzf6trihHc+OQYhJRQ95XaYFDD62+vER+n5R59Tpcl8fDoiAKfOrjCjFeVQNOtY5JH6MG6THkFZgGsK0Qj8nRAQFYEpJjX6mVi+CQXhVPs/c2Z4FY5A9FoKDweMcO5E4hmVkWZgK36ov7YAKy/JLjigYg/TtL0bmWI5VJF4QGJGZCt+G+v0nvwEuQBTitAJToK9hPOJtO1kZLWNfLipW1bWqDpp9zPNhjDfhPTTaMOrsMG/pAo6sK6y1/ILMoM3S5uwm3F7ABp/kSytt/wkETEHZWpq64mv9FnfPzY3ulat3E/RswXo3l7NGz7reay+ZtN7N23wfm1f+6Ek49rESMyYjtMWJHFrPyLmeKOleVNT5Xtejp6FbgBrso9+b2aUiC0kaOt1mt+VsAlloSO3XHmq2lDKiozGNwlo1xQu6Fl21ulDZPmnt7WRdF5HdxzKd0LzeHDwOJoYUJc8v+TZ+t+wjMun7VYUfZho2NbyGGD2Sn8Nhf/+5uTfeg7+Y+/g3iPer5F/iqJ34JglUldWs592pSUyDRC63xGffLD2WuyjX0SqmgnjrTR/c79/HoEwhDQuSgSmAeUAKHIAxIEU9GHaVh8UfmunqYTWzI30YPIUVVX+FYI8zVFGYlWDKTmSWk2SJU8Yg69SydCikH9kB6vAsDR3c/wbyPlsgVwcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
