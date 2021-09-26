var t={exports:{}};!function(i,r){function o(t,i){if(!(this instanceof o))return new o(t,i);this.x=t||0,this.y=i||0}t.exports=o,o.fromArray=function(t){return new o(t[0]||0,t[1]||0)},o.fromObject=function(t){return new o(t.x||0,t.y||0)},o.prototype.addX=function(t){return this.x+=t.x,this},o.prototype.addY=function(t){return this.y+=t.y,this},o.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},o.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},o.prototype.addScalarX=function(t){return this.x+=t,this},o.prototype.addScalarY=function(t){return this.y+=t,this},o.prototype.subtractX=function(t){return this.x-=t.x,this},o.prototype.subtractY=function(t){return this.y-=t.y,this},o.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},o.prototype.subtractScalar=function(t){return this.x-=t,this.y-=t,this},o.prototype.subtractScalarX=function(t){return this.x-=t,this},o.prototype.subtractScalarY=function(t){return this.y-=t,this},o.prototype.divideX=function(t){return this.x/=t.x,this},o.prototype.divideY=function(t){return this.y/=t.y,this},o.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},o.prototype.divideScalar=function(t){return 0!==t?(this.x/=t,this.y/=t):(this.x=0,this.y=0),this},o.prototype.divideScalarX=function(t){return 0!==t?this.x/=t:this.x=0,this},o.prototype.divideScalarY=function(t){return 0!==t?this.y/=t:this.y=0,this},o.prototype.invertX=function(){return this.x*=-1,this},o.prototype.invertY=function(){return this.y*=-1,this},o.prototype.invert=function(){return this.invertX(),this.invertY(),this},o.prototype.multiplyX=function(t){return this.x*=t.x,this},o.prototype.multiplyY=function(t){return this.y*=t.y,this},o.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},o.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},o.prototype.multiplyScalarX=function(t){return this.x*=t,this},o.prototype.multiplyScalarY=function(t){return this.y*=t,this},o.prototype.normalize=function(){var t=this.length();return 0===t?(this.x=1,this.y=0):this.divide(o(t,t)),this},o.prototype.norm=o.prototype.normalize,o.prototype.limit=function(t,i){return Math.abs(this.x)>t&&(this.x*=i),Math.abs(this.y)>t&&(this.y*=i),this},o.prototype.randomize=function(t,i){return this.randomizeX(t,i),this.randomizeY(t,i),this},o.prototype.randomizeX=function(t,i){var r=Math.min(t.x,i.x),o=Math.max(t.x,i.x);return this.x=e(r,o),this},o.prototype.randomizeY=function(t,i){var r=Math.min(t.y,i.y),o=Math.max(t.y,i.y);return this.y=e(r,o),this},o.prototype.randomizeAny=function(t,i){return Math.round(Math.random())?this.randomizeX(t,i):this.randomizeY(t,i),this},o.prototype.unfloat=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},o.prototype.toFixed=function(t){return void 0===t&&(t=8),this.x=this.x.toFixed(t),this.y=this.y.toFixed(t),this},o.prototype.mixX=function(t,i){return void 0===i&&(i=.5),this.x=(1-i)*this.x+i*t.x,this},o.prototype.mixY=function(t,i){return void 0===i&&(i=.5),this.y=(1-i)*this.y+i*t.y,this},o.prototype.mix=function(t,i){return this.mixX(t,i),this.mixY(t,i),this},o.prototype.clone=function(){return new o(this.x,this.y)},o.prototype.copyX=function(t){return this.x=t.x,this},o.prototype.copyY=function(t){return this.y=t.y,this},o.prototype.copy=function(t){return this.copyX(t),this.copyY(t),this},o.prototype.zero=function(){return this.x=this.y=0,this},o.prototype.dot=function(t){return this.x*t.x+this.y*t.y},o.prototype.cross=function(t){return this.x*t.y-this.y*t.x},o.prototype.projectOnto=function(t){var i=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y);return this.x=i*t.x,this.y=i*t.y,this},o.prototype.horizontalAngle=function(){return Math.atan2(this.y,this.x)},o.prototype.horizontalAngleDeg=function(){return s(this.horizontalAngle())},o.prototype.verticalAngle=function(){return Math.atan2(this.x,this.y)},o.prototype.verticalAngleDeg=function(){return s(this.verticalAngle())},o.prototype.angle=o.prototype.horizontalAngle,o.prototype.angleDeg=o.prototype.horizontalAngleDeg,o.prototype.direction=o.prototype.horizontalAngle,o.prototype.rotate=function(t){var i=this.x*Math.cos(t)-this.y*Math.sin(t),r=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=i,this.y=r,this},o.prototype.rotateDeg=function(t){return t=h(t),this.rotate(t)},o.prototype.rotateTo=function(t){return this.rotate(t-this.angle())},o.prototype.rotateToDeg=function(t){return t=h(t),this.rotateTo(t)},o.prototype.rotateBy=function(t){var i=this.angle()+t;return this.rotate(i)},o.prototype.rotateByDeg=function(t){return t=h(t),this.rotateBy(t)},o.prototype.distanceX=function(t){return this.x-t.x},o.prototype.absDistanceX=function(t){return Math.abs(this.distanceX(t))},o.prototype.distanceY=function(t){return this.y-t.y},o.prototype.absDistanceY=function(t){return Math.abs(this.distanceY(t))},o.prototype.distance=function(t){return Math.sqrt(this.distanceSq(t))},o.prototype.distanceSq=function(t){var i=this.distanceX(t),r=this.distanceY(t);return i*i+r*r},o.prototype.length=function(){return Math.sqrt(this.lengthSq())},o.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},o.prototype.magnitude=o.prototype.length,o.prototype.isZero=function(){return 0===this.x&&0===this.y},o.prototype.isEqualTo=function(t){return this.x===t.x&&this.y===t.y},o.prototype.toString=function(){return"x:"+this.x+", y:"+this.y},o.prototype.toArray=function(){return[this.x,this.y]},o.prototype.toObject=function(){return{x:this.x,y:this.y}};var n=180/Math.PI;function e(t,i){return Math.floor(Math.random()*(i-t+1)+t)}function s(t){return t*n}function h(t){return t/n}}();var i=t.exports;export{i as V};
