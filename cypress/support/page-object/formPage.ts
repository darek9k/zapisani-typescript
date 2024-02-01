class FormPage {
  fillEmail(email: string) {
    cy.get('[test-id="email_main"]').type(email, { force: true })
  }

  fillPhoneNumber(phoneNumber: string) {
    cy.get('[test-id="phone_number"]').type(phoneNumber, { force: true })
  }

  fillFirstName(firstName: string) {
    cy.get('[test-id="first_name"]').type(firstName, { force: true })
  }

  fillLastName(lastName: string) {
    cy.get('[test-id="last_name"]').type(lastName, { force: true })
  }

  fillBasicField(fieldId: string, value: string) {
    cy.get(`[test-id="${fieldId}"]`).type(value, { force: true })
  }

  selectProductField1(fieldId: string) {
    cy.get(`label[for="${fieldId}"]`).click({ force: true })
  }

  clickRegistrationButton() {
    cy.get('button[test-id="registration-button"]').click()
  }

  clickTransgerBtn(){
    cy.get('[test-id="btn-transfer"]')
  }
  
  clickCashBtn(){
    cy.get('[test-id="btn-cash"]')
  }

  clickEndBtn(){
    cy.get("button[type='button']").contains("Zakończ").click()
  }

  fillFormWithTestData() {
    this.fillEmail('test@example.com')
    this.fillPhoneNumber('123456789')
    this.fillFirstName('John')
    this.fillLastName('Doe')
    this.fillBasicField('basic_field_ee0b49fb', '10')
    this.fillBasicField('basic_field_855dd2b7', 'Lorem ipsum')
    this.selectRadioBtn();
    
    //this.selectProductField('product_field_83cf9412')
  }
  selectRadioBtn() {
    cy.get('div.form-check input[type="radio"]').then($checkboxes => {
        const randomIndex = Math.floor(Math.random() * $checkboxes.length)
        cy.wrap($checkboxes[randomIndex]).check()
      })
  }
}

export default new FormPage()