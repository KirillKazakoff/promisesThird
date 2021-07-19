import appFunc from '../js/app';
import reader from '../js/reader';

jest.mock('../js/reader');

test('promise fail', async () => {
    reader.mockReturnValue('hey');
    const result = await appFunc();
    const expected = 'parse error';

    expect(result).toEqual(expected);
    expect.assertions(1);
});
