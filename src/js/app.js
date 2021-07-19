import GameSavingLoader from './load';

export default async function appFunc() {
    try {
        const saving = await GameSavingLoader.load();
        return JSON.parse(saving);
    } catch (e) {
        return 'parse error';
    }
}
