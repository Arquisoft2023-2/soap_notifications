var axios = require('axios');

async function postNotification (args, callback){
    //create a axios request to the notification service and wait for the result

    await axios.post('http://notification:3000/notifications', {
        plate: args.plate,
        message: args.message
    }).then(function (response) {
        callback({
            result: response.data
        });
    }).catch(function (error) {
        console.log(error);
        callback({
            result: "Error"
        });
    });

    //the real service will receive the plate(string), and message(string) and will return the result(string)
}


async function getNotification(args, callback){
    //create a axios request to the notification service and wait for the result
    await axios.get('http://notification:3000/notifications/' + args.plate).then(function (response) {
        callback({
            result: response.data
        });
    }).catch(function (error) {
        console.log(error);
        callback({
            result: "Error"
        });
    });
    //the real service will receive the plate(string), and will return the messages(string)
}


module.exports = {
    post_notification: postNotification,
    get_notification: getNotification
};
