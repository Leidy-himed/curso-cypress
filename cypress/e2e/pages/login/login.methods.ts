import { LoginElements } from "./login.elements";

export class LoginMethods{
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val', username); 
    }

    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password);
    }

    static clickOnLoginBtton(){
        LoginElements.buttons.login.click()
    }

    static Login(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginBtton()
    }
}