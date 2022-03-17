import {checkForName} from '../js/nameChecker'

// test if the function is exist
    test('It should return true', async () => {
        expect(checkForName).toBeDefined();
    });

// test the function if it is function    
    test('It should be a function', async () => {
        expect(typeof checkForName).toBe("function");
    });
