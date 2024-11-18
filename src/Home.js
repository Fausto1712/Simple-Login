import React from 'react';

const HomePage = () => {
  const monthlyExhibitions = [
    { id: 1, name: "Expo 1", startDate: "2024-01-01", endDate: "2024-01-31" },
    { id: 2, name: "Expo 2", startDate: "2024-01-15", endDate: "2024-02-15" },
    { id: 3, name: "Expo 3", startDate: "2024-02-01", endDate: "2024-02-28" },
  ];

  return (
    <div className="home-container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="nav-brand">marco</div>
        <div className="nav-links">
          <a href="#admin">Marco Admin</a>
          <a href="#colaboradores">Colaboradores</a>
          <a href="#exposiciones">Exposiciones</a>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="welcome-section">
          <h1>Bienvenido ADMIN</h1>
          <h2>#MuseoDeTodos</h2>
        </header>

        <div className="content-grid">
          {/* Columna izquierda */}
          <div className="left-column">
            <div className="museum-image">
              <img src="/api/placeholder/600/400" alt="MARCO" className="feature-image" />
            </div>
            <button className="admin-button">Administrar Colaboradores</button>
            <button className="admin-button">Administrar Exposiciones</button>
          </div>

          {/* Columna derecha */}
          <div className="right-column">
            <div className="exhibitions-calendar">
              <h3>
                <span className="calendar-icon">📅</span>
                Exposiciones del Mes
              </h3>
              <div className="calendar-box">
                {monthlyExhibitions.map(expo => (
                  <div key={expo.id} className="exhibition-item">
                    {expo.name} - {expo.startDate} - {expo.endDate}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        .home-container {
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        .navbar {
          background-color: #E91E63;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .nav-brand {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
        }

        .logout-btn {
          background: transparent;
          border: 1px solid white;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .main-content {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .welcome-section {
          margin-bottom: 2rem;
        }

        .welcome-section h1 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .welcome-section h2 {
          color: #666;
          font-size: 1.25rem;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .feature-image {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .admin-button {
          width: 100%;
          padding: 1rem;
          background-color: #E91E63;
          color: white;
          border: none;
          border-radius: 4px;
          margin-bottom: 1rem;
          cursor: pointer;
        }

        .admin-button:hover {
          background-color: #D81B60;
        }

        .exhibitions-calendar {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 2rem;
        }

        .calendar-icon {
          margin-right: 0.5rem;
        }

        .calendar-box {
          background-color: #E91E63;
          color: white;
          padding: 1rem;
          border-radius: 4px;
          margin-top: 1rem;
        }

        .exhibition-item {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }

        .exhibition-item:last-child {
          border-bottom: none;
        }

        .ideas-section {
          background-color: white;
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
        }

        .ideas-section h2 {
          color: #333;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
