class Login {
 
    txtUsername="//input[@name='username']";
    txtPassword="//input[@name='password']";
    loginBtn="//button[@type='submit']"
    DashboardLbl="//*[@id='app']/div[1]/div[1]/header/div[1]/div[1]/span/h6"

    SetUsername(username){
        cy.xpath(this.txtUsername).type(username)
    }
    SetPassword(password){
        cy.xpath(this.txtPassword).type(password)
    }
    ClickLogin(){
        cy.xpath(this.loginBtn).click();
    }
    VerifyDashboard(){
        cy.xpath(this.DashboardLbl).should('have.text',"Dashboard")
    }

}
    
    export default Login
