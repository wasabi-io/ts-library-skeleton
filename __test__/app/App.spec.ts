import App from "app/App";
import { expect } from "chai";

describe("app/App", () => {
    it("getText", () => {
        let app = new App();
        expect(app.getText()).to.be.eq("Hello World");
    });
    it("show", () => {

        try{
            let app = new App();
            app.show();
        } catch (e) {
            expect(false).to.be.true;
        }
        expect(true).to.be.true;
    });
});
