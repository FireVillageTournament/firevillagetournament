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
function showAdminDashboard() {
  // Update stats
  document.getElementById('totalRegistrations').textContent = registrations.length;
  document.getElementById('verifiedPlayers').textContent = registrations.filter(r => r.verified).length;
  document.getElementById('totalPayments').textContent = registrations.length * tournamentSettings.entryFee;
  
  // Populate players list
  const playersList = document.getElementById('playersList');
  playersList.innerHTML = '';
  
  registrations.forEach((player, index) => {
    const row = document.createElement('tr');
    row.className = index % 2 === 0 ? 'bg-black bg-opacity-20' : 'bg-black bg-opacity-10';
    
    row.innerHTML = `
      <td class="px-4 py-3">${player.playerName}</td>
      <td class="px-4 py-3">${player.playerUID}</td>
      <td class="px-4 py-3">${player.whatsappNumber}</td>
      <td class="px-4 py-3">
        ${player.verified ? 
          '<span class="px-2 py-1 bg-green-900 bg-opacity-40 text-green-400 rounded-full text-xs">Verified</span>' : 
          '<span class="px-2 py-1 bg-yellow-900 bg-opacity-40 text-yellow-400 rounded-full text-xs">Pending</span>'}
      </td>
      <td class="px-4 py-3">
        ${!player.verified ? 
          `<button onclick="verifyPlayer('${player.playerName}')" class="px-2 py-1 bg-green-600 hover:bg-green-500 rounded text-xs mr-2">
            <i class="fas fa-check mr-1"></i> Verify
          </button>` : ''}
        <button onclick="deletePlayer('${player.playerName}')" class="px-2 py-1 bg-red-600 hover:bg-red-500 rounded text-xs">
          <i class="fas fa-trash mr-1"></i> Delete
        </button>
      </td>
    `;
    
    playersList.appendChild(row);
  });
  
  document.getElementById('adminDashboard').classList.remove('hidden');
}
