var other = require('./amd');
console.log(other);
//require('./test.css');

module.exports = function () {
  console.log('hello from cjs!');
  describe('foo', function () {
    it('should pass', function() {

    });
  })
};
