
  System.import('test.json').then(function(test) { console.log(test.glossary); });
  System.import('sub/cjs').then(function(cjs) { console.log(cjs); });

  describe('systemjs test', function () {
    it('should pass', function(done) {
      System.import('phosphor-menus').then(function(index) {
        console.log(index);
        done();
      });
    });
  });

