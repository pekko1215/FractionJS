(function() {
    fraction = function(p1, p2) {
        if (this instanceof window.constructor) {
            return new arguments.callee(...arguments)
        }
        if (!p2) {
            return new arguments.callee(...p1.split('/'));
        }
        this.on = parseInt(p1);
        this.under = parseInt(p2);
    }
    fraction.prototype.recalc = function(){
		this['='] = this.on / this.under;
    }
    var methods = {
        'toString': function() {
            return "" + this.on + "/" + this.under;
        },
        '+': function(p1, p2) {
            var target;
            if (p1 instanceof fraction) {
                target = p1;
            } else {
                target = new fraction(p1, p2);
            }
            var t = this.under * target.under;
            this.on = this.on * target.under;
            target.on = target.on * this.under;
            this.under = t;
            target.under = t;
            this.on += target.on;
            var gcd = function(a, b) {
                if (!b) {
                    return a;
                }
                return gcd(b, a % b);
            }
            t = gcd(this.on, this.under);
            this.on /= t;
            this.under /= t;
            this.recalc();
            return this;
        },
        '-': function(p1, p2) {
            var target = new fraction(p1, p2);
            target.on = -target.on
            return this['+'](target);
        },
        '*':function(p1,p2){
			var target;
            if (p1 instanceof fraction) {
                target = p1;
            } else {
                target = new fraction(p1, p2);
            }
			this.on *= target.on;
			this.under *= target.under;
			var gcd = function(a, b) {
                if (!b) {
                    return a;
                }
                return gcd(b, a % b);
            }
            t = gcd(this.on, this.under);
            this.on /= t;
            this.under /= t;
            this.recalc();
            return this;
        },
        '/':function(){
			var target;
            if (p1 instanceof fraction) {
                target = p1;
            } else {
                target = new fraction(p1, p2);
            }
            target.on = [target.under,target.under=target.on][0];
            return this['*'](target);
        }
    }
    Object.keys(methods).forEach((key)=>{
		fraction.prototype[key] = methods[key]
    })
})()