var a = 1;
function out1() {
    var a = 2;
    function func() {
        console.log(a);
    }
    return func;
}

function out2(callback) {
    callback();
}

var fn = out1();
fn();		// 2

out2(fn);	// 2