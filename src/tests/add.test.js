const add = (a,b) => a+b;

test('should add two numbers', () => { 
    const res = add(2,10);
    expect(res).toBe(12);
});