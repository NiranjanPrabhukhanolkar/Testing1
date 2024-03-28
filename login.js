function togglePasswordVisibility() {
  var passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
      passwordField.type = 'text';
  } else {
      passwordField.type = 'password';
  }
}

function handleSubmit() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  
  if ((username === 'user1' && password === 'password1') || 
      (username === 'user2' && password === 'password2') || 
      (username === 'user3' && password === 'password3')) {
    alert('Login successful! 30 min Timmer Get start After Login ');
    window.location.href = "Home.html"; 
    return false;
  } else {
    document.getElementById('error-message').innerText = 'Invalid username or password.';
    return false; 
  }
}
