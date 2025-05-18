import getHealthStatus from '../index';

test('health more than 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(getHealthStatus(character)).toBe('healthy');
});

test('health between 15 and 50', () => {
    const character = { name: 'Воин', health: 15 };
    expect(getHealthStatus(character)).toBe('wounded');
});

test('health less than 15', () => {
    const character = { name: 'Маг', health: 10 };
    expect(getHealthStatus(character)).toBe('critical');
});