import { useState } from 'react'
import { itinerary } from './data/itinerary'
import './styles/main.css'

function App() {
    const [activeDay, setActiveDay] = useState(0)

    return (
        <div className="app">
            <header>
                <div className="trip-dates">2025.12.24 - 12.29</div>
                <h1>濟州島六天五夜之旅</h1>
                <p style={{ marginTop: '10px', color: 'var(--color-text-light)' }}>
                    沉浸橘子香氣與海風的放鬆旅程
                </p>
            </header>

            <div className="container">
                {itinerary.map((dayItem, index) => (
                    <div key={dayItem.day} className="day-section">
                        <div className="day-header">
                            <div className="day-title">Day {dayItem.day} : {dayItem.title}</div>
                            <div className="day-meta">
                                <span style={{ marginRight: '15px' }}>{dayItem.date}</span>
                                <span className="text-primary">{dayItem.hotel}</span>
                            </div>
                        </div>

                        <div className="timeline-container">
                            {dayItem.activities.map((activity, actIndex) => (
                                <div key={actIndex} className="activity-item">
                                    <div className="time-badge">{activity.time}</div>
                                    <div className="activity-icon">{activity.icon}</div>
                                    <div className="activity-content">
                                        <div className="activity-name">{activity.name}</div>
                                        <div className="activity-desc">{activity.description}</div>
                                        {activity.address && (
                                            <div className="activity-address">
                                                <span>📍 {activity.address}</span>
                                                {activity.mapLink && (
                                                    <a
                                                        href={activity.mapLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="icon-link"
                                                        style={{ marginLeft: '10px' }}
                                                    >
                                                        開啟地圖 &rarr;
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {dayItem.mapFocus && (
                            <div className="map-embed-container" style={{ marginTop: '30px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <div style={{ padding: '15px', background: '#fff', borderBottom: '1px solid #eee', fontWeight: 'bold' }}>
                                    🗺️ 本日移動路線
                                    {dayItem.routeUrl && (
                                        <a href={dayItem.routeUrl} target="_blank" rel="noopener noreferrer" style={{ float: 'right', fontSize: '0.9rem', color: '#FF7E36', textDecoration: 'none' }}>
                                            在 Google Maps 查看完整路線 &rarr;
                                        </a>
                                    )}
                                </div>
                                <iframe
                                    width="100%"
                                    height="350"
                                    style={{ border: 0, display: 'block' }}
                                    loading="lazy"
                                    allowFullScreen
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(dayItem.mapFocus)}&t=m&z=13&output=embed&iwloc=near`}
                                ></iframe>
                            </div>
                        )}
                    </div>
                ))}

                <footer style={{ textAlign: 'center', margin: '40px 0', color: '#BDC3C7' }}>
                    <p>Designed for Your Perfect Trip</p>
                </footer>
            </div>
        </div>
    )
}

export default App
