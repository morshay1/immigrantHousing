import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Apartment = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const {
    id,
    type,
    status,
    allocationDate,
    allocationOffice,
    city,
    address,
    houseNumber,
    apartmentNumber,
    area,
    rooms,
    floor,
    elevator,
    company,
    availabilityDate,
    notes
  } = useParams();
    
  const titleStyle = {
    backgroundColor: 'rgb(112, 185, 227)',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'right'
  };

  const headerStyle = {
    backgroundColor: '#003366',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'right'
  };

  const grayBarStyle = {
    backgroundColor: '#d3d3d3',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '40px',
    direction: 'rtl',
    position: 'relative',
    zIndex: 10
  };

  const menuWrapperStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const menuItemStyle = {
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  const dropdownStyleBase = {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
    zIndex: 1000,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    minWidth: '140px'
  };

  const handleOptionClick = (option) => {
    if (option === 'הפניה לראיה') {
      navigate(`/ApartmentToImmigrant/${city}/${allocationOffice}`);
    }
  };

  const infoContainerStyle = {
    border: '1px solid #ccc',
    backgroundColor: 'white',
    padding: '20px',
    marginBottom: '20px',
    fontSize: '14px',
    direction: 'rtl'
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '10px'
  };

  const fieldStyle = {
    width: '30%',
    marginBottom: '6px',
    display: 'flex',
    justifyContent: 'flex-start'
  };

  const labelStyle = {
    fontWeight: 'bold',
    minWidth: '100px',
    display: 'inline-block'
  };

  const menuItems = [
    { title: 'שאילתות', options: ['שאילתה 1', 'שאילתה 2'] },
    { title: 'פעילויות', options: ['קביעת זימון', 'עדכון זימון', 'הפניה לראיה', 'הוספת בקשה לאכלוס'] },
    { title: 'מסמכים', options: ['מסמך 1', 'מסמך 2'] },
    { title: 'הדפסות', options: ['הדפסה 1', 'הדפסה 2'] }
  ];

  return (
    <div style={{ fontFamily: 'Arial', direction: 'rtl', padding: '20px' }}>
      <div style={titleStyle}>הפניות לדירה</div>

      <div style={grayBarStyle}>
        {menuItems.map((menu, index) => (
          <div
            key={index}
            style={menuWrapperStyle}
            onMouseEnter={() => setOpenMenu(index)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div style={menuItemStyle}>{menu.title}</div>
            <div style={{ ...dropdownStyleBase, display: openMenu === index ? 'flex' : 'none' }}>
              {menu.options.map((opt, i) => (
                <div
                  key={i}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Apartment Info Section */}
      <div style={{ marginTop: '20px' }}>
        <div style={headerStyle}>נתוני דירה</div>
        <div style={infoContainerStyle}>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>זהות דירה</span> {id}</div>
            <div style={fieldStyle}><span style={labelStyle}>ישוב</span> {city}</div>
            <div style={fieldStyle}><span style={labelStyle}>שטח</span> {area}</div>
          </div>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>חברה</span> {company}</div>
            <div style={fieldStyle}><span style={labelStyle}>רחוב</span> {address}</div>
            <div style={fieldStyle}><span style={labelStyle}>חדרים</span> {rooms}</div>
          </div>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>משרד הקצאה</span> {allocationOffice}</div>
            <div style={fieldStyle}><span style={labelStyle}>מס' בית</span> {houseNumber}</div>
            <div style={fieldStyle}><span style={labelStyle}>מעלית</span> {elevator}</div>
          </div>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>סוג דירה</span> {type}</div>
            <div style={fieldStyle}><span style={labelStyle}>מס' דירה</span> {apartmentNumber}</div>
            <div style={fieldStyle}><span style={labelStyle}>תאריך הקצאה</span> {allocationDate}</div>
          </div>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>מצב דירה</span> {status}</div>
            <div style={fieldStyle}><span style={labelStyle}>כניסה</span> {}</div>
            <div style={fieldStyle}><span style={labelStyle}>תאריך זמינות</span> {availabilityDate}</div>
          </div>
          <div style={rowStyle}>
            <div style={fieldStyle}><span style={labelStyle}>קומה</span> {floor}</div>
            <div style={fieldStyle}><span style={labelStyle}>הערות</span> {notes}</div>
          </div>
        </div>
      </div>

      <div style={headerStyle}>הפניות פעילות לדירה</div>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead style={{ backgroundColor: '#f0f0f0' }}>
          <tr>
            <th style={{ padding: '6px 12px' }}>מס' בקשה</th>
            <th style={{ padding: '6px 12px' }}>שם</th>
            <th style={{ padding: '6px 12px' }}>מס' עולה</th>
            <th style={{ padding: '6px 12px' }}>סוג אירוע</th>
            <th style={{ padding: '6px 12px' }}>החלטות ועדה</th>
            <th style={{ padding: '6px 12px' }}>תאריך הפניה לראיה / אכלוס</th>
            <th style={{ padding: '6px 12px' }}>הערה</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="7" style={{ textAlign: 'center', padding: '12px', color: '#666' }}>אין הפניות פעילות לדירה</td>
          </tr>
        </tbody>
      </table>

      <div style={headerStyle}>היסטורית הפניות לדירה</div>
    </div>
  );
};

export default Apartment;