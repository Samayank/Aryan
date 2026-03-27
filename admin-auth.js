/**
 * Simple Authentication System for ARYAN Admin Panel
 * Note: This is a basic client-side authentication for demo purposes.
 * In production, implement proper server-side authentication.
 */

class AdminAuth {
    constructor() {
        this.isAuthenticated = false;
        this.sessionTimeout = 30 * 60 * 1000; // 30 minutes
        this.init();
    }

    init() {
        this.checkAuthStatus();
        this.setupEventListeners();
    }

    checkAuthStatus() {
        const authData = localStorage.getItem('aryanAdminAuth');
        if (authData) {
            const { timestamp, isAuthenticated } = JSON.parse(authData);
            const now = Date.now();
            
            if (now - timestamp < this.sessionTimeout && isAuthenticated) {
                this.isAuthenticated = true;
                this.showAdminPanel();
            } else {
                this.clearAuth();
                this.showLoginForm();
            }
        } else {
            this.showLoginForm();
        }
    }

    showLoginForm() {
        const body = document.body;
        body.innerHTML = `
            <div class="auth-container">
                <div class="auth-card">
                    <div class="auth-header">
                        <h1>ARYAN Admin</h1>
                        <p>Sign in to manage your products</p>
                    </div>
                    <form id="loginForm" class="auth-form">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" required>
                        </div>
                        <button type="submit" class="auth-btn">Sign In</button>
                    </form>
                    <div class="auth-footer">
                        <p>Default credentials: admin / admin123</p>
                    </div>
                </div>
            </div>
        `;

        // Add auth styles
        this.addAuthStyles();
        
        // Setup form submission
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
    }

    addAuthStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .auth-container {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 20px;
            }

            .auth-card {
                background: white;
                border-radius: 12px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                padding: 40px;
                width: 100%;
                max-width: 400px;
            }

            .auth-header {
                text-align: center;
                margin-bottom: 30px;
            }

            .auth-header h1 {
                color: #1e293b;
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
            }

            .auth-header p {
                color: #64748b;
                font-size: 14px;
            }

            .auth-form {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .form-group {
                display: flex;
                flex-direction: column;
            }

            .form-group label {
                font-weight: 500;
                color: #374151;
                margin-bottom: 8px;
                font-size: 14px;
            }

            .form-group input {
                padding: 12px 16px;
                border: 2px solid #e5e7eb;
                border-radius: 8px;
                font-size: 14px;
                transition: border-color 0.3s;
            }

            .form-group input:focus {
                outline: none;
                border-color: #3b82f6;
            }

            .auth-btn {
                background: #3b82f6;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.3s;
            }

            .auth-btn:hover {
                background: #2563eb;
            }

            .auth-footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
            }

            .auth-footer p {
                color: #6b7280;
                font-size: 12px;
            }

            .error-message {
                background: #fee2e2;
                color: #991b1b;
                padding: 12px;
                border-radius: 8px;
                font-size: 14px;
                margin-bottom: 20px;
                display: none;
            }
        `;
        document.head.appendChild(style);
    }

    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication (in production, use proper server-side auth)
        if (username === 'admin' && password === 'admin123') {
            this.authenticate();
        } else {
            this.showError('Invalid username or password');
        }
    }

    authenticate() {
        this.isAuthenticated = true;
        const authData = {
            isAuthenticated: true,
            timestamp: Date.now()
        };
        localStorage.setItem('aryanAdminAuth', JSON.stringify(authData));
        this.showAdminPanel();
    }

    showError(message) {
        let errorDiv = document.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            document.querySelector('.auth-form').insertBefore(errorDiv, document.querySelector('.auth-form').firstChild);
        }
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }

    showAdminPanel() {
        // Reload the page to show the admin panel
        window.location.reload();
    }

    clearAuth() {
        localStorage.removeItem('aryanAdminAuth');
        this.isAuthenticated = false;
    }

    logout() {
        this.clearAuth();
        this.showLoginForm();
    }

    setupEventListeners() {
        // Auto-logout on inactivity
        let inactivityTimer;
        const resetTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                if (this.isAuthenticated) {
                    this.logout();
                }
            }, this.sessionTimeout);
        };

        // Reset timer on user activity
        ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
            document.addEventListener(event, resetTimer, true);
        });

        resetTimer();
    }
}

// Initialize authentication when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize auth if we're on the admin page
    if (window.location.pathname.includes('admin.html')) {
        window.adminAuth = new AdminAuth();
    }
});

// Add logout functionality to admin panel
function addLogoutButton() {
    const sidebar = document.querySelector('.sidebar-header');
    if (sidebar && window.adminAuth) {
        const logoutBtn = document.createElement('button');
        logoutBtn.innerHTML = '🚪 Logout';
        logoutBtn.style.cssText = `
            background: #ef4444;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
            margin-top: 10px;
            transition: background 0.3s;
        `;
        logoutBtn.addEventListener('click', () => {
            window.adminAuth.logout();
        });
        sidebar.appendChild(logoutBtn);
    }
}

// Add logout button when admin panel loads
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('admin.html')) {
        setTimeout(addLogoutButton, 100);
    }
});
