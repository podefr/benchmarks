function ClosurePerson() {

	this.getName = function getName() {
	};

	this.setName = function setName() {
	};

	this.sayHi = function sayHi() {
	};

	this.setAge = function setAge() {
	};

	this.setHobby = function setHobby() {
	};

	this.setCity = function setCity() {
	};

	this.setPhone = function setPhone() {
	};

	this.setCar = function setCar() {
	};

	this.setComputer = function setComputer() {
	};

	this.setSport = function setSport() {
	};

}

var closurePersons = [];
for (var i = 0; i < 1000; i++) {
	closurePersons.push(new ClosurePerson);
}
