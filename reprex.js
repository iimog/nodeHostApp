const spawn = require('cross-spawn');
spawn('find', ['-not', '-path', '*/.*']).stdout.on('data', data => console.log(data.toString()))
