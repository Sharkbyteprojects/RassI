module.exports = function render(gpios){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>GPIO Control</title>
    </head>
    <body>
        <h1>GPIO Control</h1>
        <table>
        <thead><tr><th>GPIO Pin Number</th><th>Active</th><th>Switches</th></tr><thead>
        <tbody>
        ${gpios
        .map(gpios => `<tr><td>${gpios.id}</td><td>${gpios.active}</td></tr>`)
        .join('')}
        </tbody>
        </table>
        <hr><a href="gpio/raw#gpionames">RAW GPIO Data</a>
    </body>
    </html>`;
};