import Login from "../../Pages/login"
describe("Login Test suite",()=>{

it("Login with valid credentials",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include',"demo")
    cy.title().should('contains',"Orange")
    const aj=new Login();
    aj.SetUsername("Admin")
    aj.SetPassword("admin123");
    aj.ClickLogin();
    aj.VerifyDashboard();

})

})