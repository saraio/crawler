const _ = require('underscore');
const fs = require('fs');


/**
 *
 * @returns {*}
 */
//var utility = function(){

    //var self = this;

    /**
     * reads the file in the async way.
     * @param fileName
     */
    exports.readFileContent = function(response,fileName){

        console.info('started reading file...')

        fs.readFile(fileName, 'utf-8', function (err, content) {
            if (err) {
                return console.log(err)
            }
            if(content){
                //console.log(JSON.stringify(content))
                var arr = content.toString().split('\n');
                //console.log(JSON.stringify(arr))
            }
            response.json(content)
        })
    }


    /**
     * sum it. sample example.
     * @param arr
     */
    exports.sum = function (arr) {
        return arr.reduce(function(a, b) {
            return a + b
        }, 0)
    }



//}

//module.exports.utility = utility();