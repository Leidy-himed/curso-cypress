import { signupElemets } from "./signup.elements";

export class signupMethods{
    static insertUsername(username){
        signupElemets.textboxes.Username.invoke('val', username); 
    }
    static insertPassword(password){
        signupElemets.textboxes.password.invoke('val', password);
    }

    static clickOnSingupButton(){
        signupElemets.buttons.signup.click();
    }

    static siginup(username,password){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSingupButton();
    }
}