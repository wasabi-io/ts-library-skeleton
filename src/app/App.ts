export default class App {
    public getText(): string{
        return "Hello World";
    }
    public show(){
        console.log(this.getText());
    }
}