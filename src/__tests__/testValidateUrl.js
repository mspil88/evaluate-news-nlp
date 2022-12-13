import { validateUrl } from '../client/js/nameChecker';


describe("Checking validateUrl function", ()=> {
    test("validateUrl should validate the URLs", ()=> {
        expect(validateUrl("https://www.bbc.co.uk")).toBe(true);
        expect(validateUrl("https://www.avfc.co.uk")).toBe(true);
    })
})


describe("Checking validateUrl for incorrect URLs", ()=> {
    test("validateUrl should return false", ()=> {
        expect(validateUrl("this is not a url")).toBe(false);
    })
})