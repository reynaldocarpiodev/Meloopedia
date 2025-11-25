// ============================================
// SISTEMA DE AUTENTICACIÓN
// ============================================

// Verificar si hay sesión activa
function verificarSesion() {
    const session = localStorage.getItem('meloopediaSession');
    
    if (session) {
        try {
            const sessionData = JSON.parse(session);
            mostrarPerfilUsuario(sessionData);
            return sessionData;
        } catch (e) {
            localStorage.removeItem('meloopediaSession');
            mostrarBotonLogin();
            return null;
        }
    } else {
        mostrarBotonLogin();
        return null;
    }
}

// Mostrar botón de login
function mostrarBotonLogin() {
    const btnLogin = document.getElementById('btnLogin');
    const userProfile = document.getElementById('userProfile');
    
    if (btnLogin) {
        btnLogin.style.display = 'inline-flex';
    }
    
    if (userProfile) {
        userProfile.classList.remove('active');
        userProfile.style.display = 'none';
    }
}

// Mostrar perfil de usuario
function mostrarPerfilUsuario(sessionData) {
    const btnLogin = document.getElementById('btnLogin');
    const userProfile = document.getElementById('userProfile');
    const profileName = document.getElementById('profileName');
    
    if (btnLogin) {
        btnLogin.style.display = 'none';
    }
    
    if (userProfile && profileName) {
        profileName.textContent = sessionData.name || 'Usuario';
        userProfile.classList.add('active');
        userProfile.style.display = 'flex';
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('meloopediaSession');
    mostrarBotonLogin();
    
    // Opcional: recargar la página para actualizar el estado
    // window.location.reload();
}

// Inicializar autenticación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
    
    // Agregar evento al botón de cerrar sesión si existe
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                cerrarSesion();
                window.location.reload();
            }
        });
    }
});

// Exportar funciones para uso global
window.verificarSesion = verificarSesion;
window.cerrarSesion = cerrarSesion;

