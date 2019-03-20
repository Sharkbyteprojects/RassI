module.exports = function render(gpios){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>RassI | GPIO Control</title>
        <link rel="icon" href="RASSI LOGO.svg">
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h1><img src="RASSI LOGO WITH RPI.svg" height="100"> RassI GPIO Control</h1>
        <table>
        <thead><tr><th>GPIO Pin Number</th><th>Switches</th></tr><thead>
        <tbody>
        ${gpios
        .map(gpios => `<tr><td>${gpios.id}</td><td><a href="/gpio/#${gpios.id}"><button>Switch GPIO</button></a></td></tr>`)
        .join('')}
        </tbody>
        </table>
        <hr><a href="gpio/raw#gpionames">RAW GPIO Data</a><br><a href="/github" target="_blanc">RassI on Github</a><br><a href="https://gitter.im/Sharkbyteprojects/RassI?utm_source=share-link&utm_medium=link&utm_campaign=share-link" target="_blanc">Devloper Chat</a>
    </body>
    </html>`;
};
