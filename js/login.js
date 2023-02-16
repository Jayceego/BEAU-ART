document.addEventListener('DOMContentLoaded', function() {
    // your code here
    const accounts = {
        users: [],
        addAccount: function(username, email, password) {
          this.users.push({ username: username, email: email, password: password });
        },
        findAccount: function(username) {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === username) {
              return this.users[i];
            }
          }
          return null;
        }
      };
      
      // Get the input values from the form
      const username = document.getElementById('userName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('pwd').value;
      
      // Add the account to the accounts object
      accounts.addAccount(username, email, password);
      
      // Get the input values from the form
      const loginUsername = document.getElementById('loginUserName').value;
      const loginPassword = document.getElementById('loginPwd').value;
      
      // Check if the username and password match an existing account
      const user = accounts.findAccount(loginUsername);
      if (user && user.password === loginPassword) {
        // Login successful
        const successAlert = document.createElement('div');
        successAlert.classList.add('alert', 'alert-success');
        successAlert.textContent = 'Login successful!';
        document.body.appendChild(successAlert);
        window.location.replace('index.html');
      } else {
        alert('Username or password incorrect. Please try again.');
      }
      
      // Check if a username and password match an existing account (this could be called from the login page)
      const testUser = accounts.findAccount('jaycee_go');
      if (testUser && testUser.password === 'password123') {
        alert('Login successful!');
      } else {
        alert('Username or password incorrect.');
      }
      
  });// Define an object to hold the user accounts