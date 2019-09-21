 const fs = require('fs')
 
 async function summaryJsonFile(dir) {
    let result = [];
    readdirSync(dir)
    function readdirSync(dir) {
        fs.readdirSync(dir).forEach((filename) => {
            var path = dir + "/" + filename
            if (filename.includes('.ts')) {
                fs.unlinkSync(path)
            } else {
                if (!filename.includes('DS_Store')) {
                    var stat = fs.statSync(path)
                    if (stat && stat.isDirectory()) {
                        readdirSync(path)
                    }
                }

            }
        })
    }
    return result
}

(async () => {
    summaryJsonFile('./miniprogram')  
})()