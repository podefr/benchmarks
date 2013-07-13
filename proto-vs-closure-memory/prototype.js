function ProtoPerson() {}

ProtoPerson.prototype.name = '';

ProtoPerson.prototype.getName = function getName() {
	return this.name;
};

ProtoPerson.prototype.setName = function setName(name) {
	this.name = name;
};

ProtoPerson.prototype.sayHi = function sayHi() {
	console.log(this.name + 'says hi');
};

var protoPersons = [];
for (var i = 0; i < 10000; i++) {
	protoPersons.push(new ProtoPerson);
}
