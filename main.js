const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    console.log('App init');
    let mainWindow =  new BrowserWindow({
        width: 600,
        height: 400
    });

    mainWindow.loadURL('https://keycloak-hml.eva.bot/auth/realms/eva.bot/protocol/openid-connect/auth?client_id=eva-cockpit&redirect_uri=https%3A%2F%2Fhml.eva.bot%2F&state=9b009021-354f-48ca-85d4-00b411502af6&response_mode=fragment&response_type=code&scope=openid&nonce=07c73c04-9525-4c74-9c74-12d3caeddd7a&code_challenge=xWy1JkLUzU8KLtXMxYID6MhwY8jRsHpfM68y93AOmjY&code_challenge_method=S256');

});

