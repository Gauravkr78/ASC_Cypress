describe('OrangeHRM Data-Driven Login Tests', () => {
  const testCases = [
    {
      username: 'Admin',
      password: 'admin123',
      expected: 'success',
      description: 'Valid credentials'
    },
    {
      username: 'InvalidUser',
      password: 'wrongpassword',
      expected: 'failure',
      description: 'Invalid credentials'
    },
    {
      username: '',
      password: 'admin123',
      expected: 'failure',
      description: 'Empty username'
    },
    {
      username: 'Admin',
      password: '',
      expected: 'failure',
      description: 'Empty password'
    }
  ];

  testCases.forEach((testCase) => {
    it(`should handle login for: ${testCase.description}`, () => {
      
      cy.visit('/web/index.php/auth/login');

      // Wait for page to load completely
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');

      // Take screenshot of empty login page
      cy.screenshot(`01-${testCase.description}-login-page`);

      // Type username if not empty
      if (testCase.username) {
        cy.get('input[name="username"]').type(testCase.username);
      }

      // Type password if not empty
      if (testCase.password) {
        cy.get('input[name="password"]').type(testCase.password);
      }

      // Screenshot after filling form
      cy.screenshot(`02-${testCase.description}-form-filled`);

      // Click login button
      cy.get('button[type="submit"]').click();

      if (testCase.expected === 'success') {
        // Verify success login
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-title').should('contain', 'Dashboard');
        cy.get('.oxd-userdropdown-tab').should('be.visible');

        // Screenshot after successful login
        cy.screenshot(`03-${testCase.description}-success`);
      } else {
        // Wait for potential error to appear
        cy.wait(1000);

        // Screenshot after failed login
        cy.screenshot(`03-${testCase.description}-failure`);

        // Check that URL hasn't changed
        cy.url().should('include', '/auth/login');

        // Optional: Verify error message exists
        cy.get('.oxd-alert-content-text')
          .should('be.visible')
          .and('contain.text', 'Invalid credentials');
      }
    });
  });
});
