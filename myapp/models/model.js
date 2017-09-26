//models

var fs = require("fs");
exports.showAllFolders = function(callback, next) {
    fs.readdir("./uploads", function(err, files) {
        if (err) {
            callback(err, null)
            next();
        }
        var allwjj = [];
        (function iterator(i) {
            if (i == files.length) {
                console.log(allwjj)
                callback(null, allwjj);
                return;
            }
            fs.stat("./uploads/" + files[i], function(err, stats) {
                if (err) {
                    callback("zhaobudaowenjian" + files[i], null);
                    next();
                }
                if (stats.isDirectory()) {
                    allwjj.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0)
    })
}

exports.OpenFolder = function(folderName,callback) {
    fs.readdir("./uploads/"+folderName, function(err, files) {
        if (err) {
            callback(err, null)
            
            
            return;
        }
        var AllImages = [];
        (function iterator(i) {
            if (i == files.length) {
                console.log(AllImages)
                callback(null, AllImages);
                return;
            }
            fs.stat("./uploads/"+folderName+"/" + files[i], function(err, stats) {
                if (err) {
                    callback("zhaobudaowenjian" + files[i], null);
                    next();
                }
                if (stats.isFile()) {
                    AllImages.push(files[i]);
                }
                iterator(i + 1)
            })
        })(0)
    })
}