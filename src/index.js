function sayhelloprivate(){
    return 'Hello World' . arguments[0];
}

exports.say = function(){
    console.log(sayhelloprivate('Pedro'));
}