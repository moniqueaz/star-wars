import { fetcher, getRandomInteger } from 'utils/helpers';

describe('fetcher', () => {
  const unmockedFetch = global.fetch;
  beforeAll(() => {
    global.fetch = jest.fn().mockResolvedValue(Promise.resolve( { json: () => Promise.resolve([]) } ));
  } );

  afterAll(() => {
    global.fetch = unmockedFetch;
  } );

  it('should execute', () => {
    const result = fetcher('/');
    expect(result).toEqual(Promise.resolve( {} ));
  } );
} );

describe('getRandomInteger', () => {
  it('should execute', () => {
    const mockMath = Object.create(global.Math);
    mockMath.floor = () => 6;
    global.Math = mockMath;

    const result = getRandomInteger(0, 10);
    expect(result).toEqual(6);
  } );
} );
