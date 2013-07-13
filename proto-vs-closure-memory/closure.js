function ClosurePerson() {

	var _name = '';

	this.getName = function getName() {
		return _name;
	};

	this.setName = function setName(name) {
		_name = name;
	};

	this.sayHi = function sayHi() {
		console.log(_name + 'says hi');
	};

}

var closurePersons = [];
for (var i = 0; i < 10000; i++) {
	closurePersons.push(new ClosurePerson);
}
