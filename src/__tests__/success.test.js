import GameSavingLoader from '../js/load';
import appFunc from '../js/app';

beforeEach(() => {
    jest.resetModules();
});

const exampleObj = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

test('check save', async () => {
    const data = await GameSavingLoader.load();
    expect.assertions(1);
    expect(data).toBe(exampleObj);
});

test('promise successful', async () => {
    const result = await appFunc();
    const expected = JSON.parse(exampleObj);

    expect(result).toEqual(expected);
    expect.assertions(1);
});
