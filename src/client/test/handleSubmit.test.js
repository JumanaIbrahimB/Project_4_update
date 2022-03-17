import { handleSubmit } from '../js/formHandler'

// test if the function is exist
    test('It should return true', async () => {
        expect(handleSubmit).toBeDefined();
    });

// test the funtion if it is null
    test('It should return true', async () => {
        expect(handleSubmit).not.toBeNull();
    });
    
// test the function if it is function
test('It should be a function', async () => {
    expect(typeof handleSubmit).toBe("function");

});
