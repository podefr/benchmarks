This benchmark measures the memory footprint of prototype pattern vs a closure pattern (Chrome Canary 30)
-------------------

In this recording, Brendan Eich compares both patterns http://www.aminutewithbrendan.com/pages/20110216. Thanks to the newest Chrome Dev Tools it's very easy to compare both solutions in terms of memory.

The prototypal pattern is incredibly more efficient in Chrome than the closure pattern. The number of methods attached to an object created via the prototypal pattern has no impact on the memory consumption, and a new object only weighs the weight of the constructor.

But as Brendan says, "
Again, you always want to measure your code; you don't want to prematurely optimise it, so I hesitate to be seen to be endorsing the prototypal pattern. I don't take a religious position here. I think closure patterns are good for encapsulation; prototypal patterns are old and quite convenient for JavaScripters who are just hacking, and don't need to use very strong encapsulation. People have different opinions on this: they always think you need strong encapsulation when you scale up your code, so you may as well use it from the start; other people think, "well, maybe my code doesn't scale up, and I'm in a hurry; I'll do it later". Again, there are trade-offs: it's up to you, as developers, to choose the right ones for you.
"


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
	          | 1,000  |
	---------------------
	Closure   | 12,000 |
	Prototype | 12,000 |


they are exactly similar, so obviously, they weigh exaclty the same weight, 12,000 Bytes.

The constructor function is reported to be 12 Bytes in my dev tools.

##1 method

	          | 1       | 10      | 100     | 1,000   |
	---------------------------------------------------
	Closure   | 48      | 192     | 1632    | 16032   |
	Prototype | 52      | 120     | 1200    | 12000   |

##2 methods

	          | 1       | 10      | 100     | 1,000   |
	 --------------------------------------------------
	Closure   | 52      | 264     | 2064    | 20064   |
	Prototype | 52      | 120     | 1200    | 12000   |

##5 methods

	          | 1       | 10      | 100     | 1,000   |
	---------------------------------------------------
	Closure   | 64      | 480     | 3360    | 32160   |
	Prototype | 52      | 120     | 1200    | 12000   |

##10 methods

	          | 1       | 10      | 100     | 1,000   |
	---------------------------------------------------
	Closure   | 84      | 708     | 4308    | 40308   |
	Prototype | 52      | 120     | 1200    | 12000   |

