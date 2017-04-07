import nock from 'nock';
import getBody from "./webUtils";

const url = 'http://swapi.co';
const request = '/api/people/?format=json';

test('test of getbody', done => {
  const expected = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  nock(url).get(request).reply(200, expected);
  getBody('http://swapi.co/api/people/?format=json').then(
    value => {
      expect(value).toBe(expected);
      done();
    },
    error => {
      expect(error).not.toBeNull();
      expect(error).toBeDefined();
      expect(error.message).not.toBeNull();
      expect(error.message).toBeDefined();
      done();
    },
  );
});
