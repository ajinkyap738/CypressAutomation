import Login from "../../Pages/login"
describe("Login Test suite",()=>{

it("Login with valid credentials",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include',"demo")
    cy.title().should('contgit initains',"Orange")
    const aj=new Login();
    aj.SetUsername("Admin")
    aj.SetPassword("admin123");
    aj.ClickLogin();
    aj.VerifyDashboard();

})
it.only("Login with valid credentials by using data file",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include',"demo")
    cy.title().should('contains',"Orange")
    cy.fixture("testData.json").then(function(signInData){
    const aj=new Login();
    aj.SetUsername(signInData.username)
    aj.SetPassword(signInData.password);
    aj.ClickLogin();
    aj.VerifyDashboard();
    })
})
})