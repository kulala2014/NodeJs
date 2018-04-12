function route(handle, pathname){
    console.log("About to route a reqeust for" + pathname);
    if(typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log("No request handle found for" +pathname);
        return "404 Not found";
    }
}

exports.route = route