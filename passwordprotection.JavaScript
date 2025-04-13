const ADMIN_PASSWORD = "2580aauFVT";

function checkAdminLogin() {
  const password = document.getElementById('adminPassword').value;
  const errorElement = document.getElementById('adminError');
  
  if (password === ADMIN_PASSWORD) {
    hideAdminLogin();
    showAdminDashboard();
  } else {
    errorElement.classList.remove('hidden');
    setTimeout(() => errorElement.classList.add('hidden'), 3000);
  }
}
