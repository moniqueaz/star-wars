import { fetcher } from 'utils/helpers';

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
