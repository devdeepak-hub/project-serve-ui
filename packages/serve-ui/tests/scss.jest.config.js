// jest config for handling scss tests, sass-true need to be run in --env=node that's why these tests can't be tested in jsdom env

module.exports = {
  verbose: true,
  testMatch : ["**/tests/scss/**/*.[jt]s?(x)"]
};
