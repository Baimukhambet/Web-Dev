let myobject = {}

function A(){return myobject;}
function B(){return myobject;}

alert(new A() == new B());