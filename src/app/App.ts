/**
 * This is a comment which explains the aim of the class
 * @export
 * @default App
 */
export default class App {
    /**
     * This is a comment which explains the aim or usage of the @see getText() method
     * @return {string}
     */
    public getText(): string{
        return "Hello World";
    }

    /**
     * This is a comment which explains the aim or usage of the @see show() method
     */
    public show(){
        console.log(this.getText());
    }
}