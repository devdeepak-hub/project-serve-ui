const path = require('path');
const sassTrue = require('sass-true');

describe('Setup test', () => {
    it('Jest- SCSS Setup Test', () => {
        expect(4).toBe(4);
    })
})



// sass-true setup
let sassFile = path.join(__dirname, 'test.scss');
sassTrue.runSass(
  {
    file: sassFile,
  },
  {
    sass: require('sass'),
    describe,
    it,
  }
);






