export class signupElemets{
    static get textboxes(){
        return {
            get Username(){
                return cy.get("input#sign-username");
            },
            get password(){
                return cy.get("input#sign-password");
            },
        };
    };

    static get buttons(){
        return{
            get close(){
                return cy.contains("button","Close").eq(1);
            },
            get signup(){
                return cy.contains("button","Sing up");
            }
        };
    };
}