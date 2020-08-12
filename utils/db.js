const fs = require('fs');
module.exports = {
    save: (path, data) => {
        fs.writeFile(path, JSON.stringify(data), (err) => {
            if(err) return console.log(err);
            console.log('SAVE!');
        })
    }
}