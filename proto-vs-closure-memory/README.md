This benchmark measures the memory footprint of prototype pattern vs a closure pattern
-------------------

###Set up

First, I start with creating an empty function:

####Closure pattern

```js
function ClosurePerson() {

}
```

####Prototypal pattern

```js
function PrototypePerson() {

}
```

Then, I generate 1, 10, 100, and 1,000 of them, and measure the memory consumption.

###Adding functions

Then I add 1, 2, 5 and 10 methods to each function, and note again the memory footprint

```js
function ClosurePerson() {

	this.getName = function getName() {
	};

	this.setName = function setName() {
	};

	this.sayHi = function sayHi() {
	};
}
```

```js
function ProtoPerson() {}

ProtoPerson.prototype.getName = function getName() {
};

ProtoPerson.prototype.setName = function setName() {
};

ProtoPerson.prototype.sayHi = function sayHi() {
};
```

##Results

##0 methods


          | 10,000  |
Closure   | 120,000 |
Prototype | 120,000 |


they are exactly similar, so obviously, they weigh exaclty the same weight, 120,000 Bytes.

The constructor function is reported to be 12 Bytes in my dev tools.

##1 method

	          | 1       | 10      | 100     | 1,000   |
	Closure   | 48      | 192     | 1632    | 16032   |
	Prototype | 52      | 120     | 1200    | 12000   |

##2 methods

	          | 1       | 10      | 100     | 1,000   |
	Closure   | 52      | 264     | 2064    | 20064   |
	Prototype | 52      | 120     | 1200    | 12000   |

##5 methods

	          | 1       | 10      | 100     | 1,000   |
	Closure   | 64      | 480     | 3360    | 32160   |
	Prototype | 52      | 120     | 1200    | 12000   |

##10 methods

	          | 1       | 10      | 100     | 1,000   |
	Closure   | 84      | 708     | 4308    | 40308   |
	Prototype | 52      | 120     | 1200    | 12000   |

