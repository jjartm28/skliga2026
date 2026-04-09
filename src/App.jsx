import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import GameResults from './pages/GameResults'
import SportDetail from './pages/SportDetail'
import AdminPanel from './pages/AdminPanel'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [selectedSport, setSelectedSport] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  const handleSelectSport = (sport) => {
    setSelectedSport(sport)
    setCurrentPage('sportDetail')
  }

  const handleBackToResults = () => {
    setCurrentPage('gameResults')
    setSelectedSport(null)
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
    setSelectedSport(null)
  }

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin)
  }

  return (
    <div className="app-container">
      {currentPage === 'landing' && (
        <LandingPage 
          onGameResults={() => setCurrentPage('gameResults')}
          onToggleAdmin={toggleAdmin}
          isAdmin={isAdmin}
        />
      )}
      
      {currentPage === 'gameResults' && (
        <GameResults 
          onSelectSport={handleSelectSport}
          onBackToLanding={handleBackToLanding}
          isAdmin={isAdmin}
        />
      )}
      
      {currentPage === 'sportDetail' && selectedSport && (
        <SportDetail 
          sport={selectedSport}
          onBack={handleBackToResults}
          isAdmin={isAdmin}
        />
      )}
    </div>
  )
}

export default App
