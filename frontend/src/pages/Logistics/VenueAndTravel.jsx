import React, { useState } from 'react';
import { MapPin, Plus, Save, Download, Globe } from 'lucide-react';
import Button from '../../ui/Button'; // Import Button UI

const VenueAndTravel = ({ colors, data }) => {
    // Mock data for hotels and travel requests
    const hotelList = data.hotelList || [
        { id: 1, name: 'Hotel A (Partner)', distance: '0.5 km', rooms: 50, status: 'Active' },
        { id: 2, name: 'Hotel B', distance: '1.2 km', rooms: 0, status: 'Closed' }
    ];
    
    const travelRequests = data.travelRequests || [
        { id: 'T001', guest: 'Dr. John Smith (Keynote)', type: 'Airport Pickup', date: '2025-05-10', status: 'Confirmed' },
        { id: 'T002', guest: 'Jane Lee (VIP)', type: 'Room Reservation', date: '2025-05-11', status: 'Pending' }
    ];

    return (
        <div>
            <h2 style={{ fontSize: '28px', margin: '0 0 8px 0', fontWeight: 600 }}>Venue & Travel Management 🗺️</h2>
            <p style={{ color: colors.textLight, marginBottom: '24px' }}>
                Manage recommended hotels, room blocks, and VIP transfer/accommodation requests.
            </p>

            {/* --- Hotel Management Section --- */}
            <div style={{ 
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '24px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Hotel List & Room Blocks</h3>
                    <Button icon={Plus} size="sm" colors={colors}>Add New Hotel</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {hotelList.map(hotel => (
                        <div key={hotel.id} style={{ 
                            padding: '12px', 
                            background: colors.bg, 
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <div>
                                <strong style={{ color: hotel.status === 'Active' ? colors.primary : colors.textLight }}>{hotel.name}</strong> 
                                <span style={{ fontSize: '12px', color: colors.textLight, marginLeft: '10px' }}>({hotel.distance})</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <span style={{ color: colors.textLight }}>Rooms Remaining: {hotel.rooms}</span>
                                <Button icon={Globe} variant="secondary" size="sm" colors={colors}>View Map</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- VIP Travel Requests Section --- */}
            <div style={{ 
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Travel & Transfer Requests (VIPs)</h3>
                    <Button icon={Download} variant="secondary" size="sm" colors={colors}>Export Schedule</Button>
                </div>
                
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: colors.bg }}>
                            {["Request ID", "Guest/Role", "Type", "Date", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px", color: colors.textLight, textAlign: "left", fontSize: "13px" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {travelRequests.map((req, idx) => (
                            <tr key={req.id} style={{ borderBottom: idx < travelRequests.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                                <td style={{ padding: "12px", fontWeight: 600, color: colors.primary }}>{req.id}</td>
                                <td style={{ padding: "12px" }}>{req.guest}</td>
                                <td style={{ padding: "12px" }}>{req.type}</td>
                                <td style={{ padding: "12px" }}>{req.date}</td>
                                <td style={{ padding: "12px" }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        background: req.status === 'Confirmed' ? `${colors.success}15` : `${colors.warning}15`,
                                        color: req.status === 'Confirmed' ? colors.success : colors.warning
                                    }}>{req.status}</span>
                                </td>
                                <td style={{ padding: "12px" }}>
                                    <Button icon={Eye} size="sm" variant="secondary" colors={colors}>View</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VenueAndTravel;