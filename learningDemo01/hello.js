// exports.world = function () {
//     console.log("Hello world~");
// }



function Hello () {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    }
    this.sayHello = function () {
        console.log(name);
    }
}

module.exports = Hello;