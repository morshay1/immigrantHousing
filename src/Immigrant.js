import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import imageSrc from './image.jpg';

const Apartment = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const [selectedSection, setSelectedSection] = useState('בקשות');

  const {
    immigrantNumber,
    name,
    statusGrantDate,
    settlement,
    address,
    phone,
    mobile,
    waitingStatus
  } = useParams();

  const immigrantsData = {
    "12345": {
      lastHousingType: "ס.פרטי",
      childrenUnder21: 0,
      id: "123456789",
      childrenOver21: 0,
      headAge: "54.1",
      originCountry: "אוקראינה",
      partnerAge: "",
      housingEndDate: "18-04-2027",
    },
    "12346": {
      lastHousingType: "ס.פרטי",
      childrenUnder21: 1,
      id: "313131313",
      childrenOver21: 2,
      headAge: "50.5",
      originCountry: "רוסיה",
      partnerAge: "25",
      housingEndDate: "06-12-2030",
    },
  };
  
 
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

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
    width: '33%',
    marginBottom: '6px',
    display: 'flex',
    justifyContent: 'flex-start'
  };

  const labelStyle = {
    fontWeight: 'bold',
    minWidth: '130px',
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
      <div style={titleStyle}>טיפול בזכאי דיור</div>

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
                  onClick={() => {}}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={headerStyle}>נתוני עולה</div>
        <div style={{ ...infoContainerStyle, display: 'flex', alignItems: 'flex-start' }}>
          {/* Image on the right */}
          <img src={imageSrc} alt="תמונת עולה" style={{ width: '150px', height: 'auto', marginLeft: '20px', border: '1px solid #ccc' }} />

          {/* Info on the left */}
          <div style={{ flex: 1 }}>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>מספר עולה</span> {immigrantNumber}</div>
              <div style={fieldStyle}><span style={labelStyle}>סוג דיור אחרון</span> {"ס.פרטי"}</div>
              <div style={fieldStyle}><span style={labelStyle}>ילדים מתחת גיל 21</span> {"0"}</div>
            </div>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>מספר זהות</span> {"123456789"}</div>
              <div style={fieldStyle}><span style={labelStyle}>ישוב מגורים</span> {settlement}</div>
              <div style={fieldStyle}><span style={labelStyle}>ילדים מעל גיל 21</span> {0}</div>
            </div>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>שם</span> {name}</div>
              <div style={fieldStyle}><span style={labelStyle}>כתובת</span> {address}</div>
              <div style={fieldStyle}><span style={labelStyle}>גיל ראש משפחה</span> {"54.1"}</div>
            </div>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>ארץ מוצא</span> {"אוקראינה"}</div>
              <div style={fieldStyle}><span style={labelStyle}>טלפון</span> {phone}</div>
              <div style={fieldStyle}><span style={labelStyle}>גיל בן/בת זוג</span> {""}</div>
            </div>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>תאריך הענקת מעמד</span> {statusGrantDate}</div>
              <div style={fieldStyle}><span style={labelStyle}>נייד</span> {mobile}</div>
              <div style={fieldStyle}></div>
            </div>
            <div style={rowStyle}>
              <div style={fieldStyle}><span style={labelStyle}>סיום זכאות לדיור</span> {"18-04-2027"}</div>
              <div style={fieldStyle}><span style={labelStyle}>סטטוס</span> {waitingStatus}</div>
              <div style={fieldStyle}></div>
            </div>
          </div>
        </div>
      </div>

      <div style={headerStyle}>
        <span
          onClick={() => handleSectionClick('בקשות')}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        >
          בקשות
        </span>
        <span
          onClick={() => handleSectionClick('כללי')}
          style={{ marginLeft: '10px', marginRight: '10px', cursor: 'pointer' }}
        >
          כללי
        </span>
        <span
          onClick={() => handleSectionClick('ועדות')}
          style={{ marginLeft: '10px', marginRight: '10px', cursor: 'pointer' }}
        >
          ועדות
        </span>
        <span
          onClick={() => handleSectionClick('אירועי דירה')}
          style={{ marginLeft: '10px', cursor: 'pointer' }}
        >
          אירועי דירה
        </span>
      </div>

      {/* Display content based on selected section */}
      <div className="section-content">
        <h3>{selectedSection}</h3>
      </div>

    </div>
  );
};

export default Apartment;