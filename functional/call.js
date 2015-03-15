module.exports = function duckCount() {
 return Array.prototype.slice.call(arguments, 0).filter(function(o) {
   return Object.prototype.hasOwnProperty.call( o,'quack'); }).length;
};
