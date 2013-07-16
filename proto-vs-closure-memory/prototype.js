function ProtoPerson() {}


ProtoPerson.prototype.getName = function getName() {
};

ProtoPerson.prototype.setName = function setName() {
};

ProtoPerson.prototype.sayHi = function sayHi() {
};

ProtoPerson.prototype.setAge = function setAge() {

};

ProtoPerson.prototype.setHobby = function setHobby() {

};

ProtoPerson.prototype.setCity = function setCity() {

};

ProtoPerson.prototype.setPhone = function setPhone() {

};

ProtoPerson.prototype.setCar = function setCar() {

};

ProtoPerson.prototype.setComputer = function setComputer() {

};

ProtoPerson.prototype.setSport = function setSport() {

};


var protoPersons = [];
for (var i = 0; i < 1000; i++) {
	protoPersons.push(new ProtoPerson);
}
