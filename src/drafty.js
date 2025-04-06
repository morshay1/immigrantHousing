import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApartmentToImmigrant = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const [filters, setFilters] = useState({
    ישוב: "",
    סוגתור: "",
    קודזיהוי: "",
    מספרנפשות: "",
    מענק: "",
    מועדבתוכניתדיור: ""
  });

  const [results, setResults] = useState([]);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const searchResults = () => {
    const mockData = [
      {
        מספרעולה: "12345",
        שם: "ישראל ישראלי",
        מספרבקשה: "98765",
        הענקתמעמד: "01/01/2023",
        תאריכתור: "15/03/2024",
        מספרתור: "456",
        חלקתור: "א'",
        ישובמגורים: "תל אביב",
        כתובת: "רחוב הרצל 10",
        טלפון: "03-5551234",
        נייד: "050-1234567",
        סטטוסהמתנה: "בהמתנה",
        מצבמיוחד: "אין",
        מספרנפשות: "3",
      },
      {
        מספרעולה: "67890",
        שם: "דוד כהן",
        מספרבקשה: "54321",
        הענקתמעמד: "12/05/2022",
        תאריכתור: "20/08/2024",
        מספרתור: "789",
        חלקתור: "ב'",
        ישובמגורים: "ירושלים",
        כתובת: "רחוב יפו 50",
        טלפון: "02-6667890",
        נייד: "052-7654321",
        סטטוסהמתנה: "מאושר",
        מצבמיוחד: "נכה",
        מספרנפשות: "5",
      },
    ];
    setResults(mockData);
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

  const thStyle = {
    border: '1px solid #ccc',
    padding: '6px',
    fontWeight: 'bold',
    backgroundColor: '#e6e6e6',
    textAlign: 'center'
  };

  const tdStyle = {
    border: '1px solid #ccc',
    padding: '6px',
    textAlign: 'center'
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

  const menuItems = [
    { title: 'שאילתות', options: ['שאילתה 1', 'שאילתה 2'] },
    { title: 'פעילויות', options: ['קביעת זימון', 'עדכון זימון', 'הפניה לראיה', 'הוספת בקשה לאכלוס'] },
    { title: 'מסמכים', options: ['מסמך 1', 'מסמך 2'] },
    { title: 'הדפסות', options: ['הדפסה 1', 'הדפסה 2'] }
  ];

  const handleOptionClick = () => {};

  return (
    <div style={{ fontFamily: 'Arial', direction: 'rtl', padding: '20px' }}>
      <div style={titleStyle}>שאילתת תורים - הפניה לראיה</div>

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

      <div style={{ marginTop: '20px' }}>
        <div style={headerStyle}>פרמטרים</div>

        {/* Filters Section - 3 rows evenly spaced */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px', border: '1px solid #ccc', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <label>ישוב:
            <select onChange={(e) => handleFilterChange("ישוב", e.target.value)}>
              <option value=""></option>
              <option value="קרית גת">קרית גת</option>
              <option value="תל אביב">תל אביב</option>
            </select>
          </label>
          <label>סוג תור:
            <select onChange={(e) => handleFilterChange("סוגתור", e.target.value)}>
              <option value=""></option>
              <option value="פריפריה">פריפריה</option>
              <option value="כללי">כללי</option>
            </select>
          </label>
          <label>מספר עולים:
            <input type="text" onChange={(e) => handleFilterChange("מספרנפשות", e.target.value)} />
          </label>
          <label>קוד זיהוי:
            <input type="text" onChange={(e) => handleFilterChange("קודזיהוי", e.target.value)} />
          </label>
          <label>מספר נפשות:
            <input type="text" onChange={(e) => handleFilterChange("מספרנפשות", e.target.value)} />
          </label>
          <label>החלטת ועדה:
            <select>
              <option value=""></option>
              <option value="מאושר">מאושר</option>
              <option value="נדחה">נדחה</option>
            </select>
          </label>
          <label>מענק בתוכנית דיור:
            <select onChange={(e) => handleFilterChange("מענק", e.target.value)}>
              <option value=""></option>
              <option value="כן">כן</option>
              <option value="לא">לא</option>
            </select>
          </label>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button onClick={searchResults}>חפש</button>
          </div>
        </div>
      </div>

      {/* תוצאות Header */}
      <div style={headerStyle}>תוצאות</div>

{/* Results Table */}
      <table style={{ width: "100%", borderCollapse: 'collapse', fontSize: '14px', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={thStyle}>פעולות</th>
            <th style={thStyle}>מספר עולה</th>
            <th style={thStyle}>שם</th>
            <th style={thStyle}>מספר בקשה</th>
            <th style={thStyle}>תאריך הענקת מעמד</th>
            <th style={thStyle}>תאריך תור</th>
            <th style={thStyle}>מספר תור</th>
            <th style={thStyle}>חלק תור</th>
            <th style={thStyle}>ישוב מגורים</th>
            <th style={thStyle}>כתובת</th>
            <th style={thStyle}>טלפון</th>
            <th style={thStyle}>נייד</th>
            <th style={thStyle}>סטטוס המתנה</th>
            <th style={thStyle}>מצב מיוחד</th>
            <th style={thStyle}>מספר נפשות</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0 ? (
            results.map((person, index) => (
              <tr key={index}>
                <td style={tdStyle}>
                  <button
                    onClick={() => navigate(`/Immigrant/${person.מספרעולה}`, { state: { person } })}
                    style={{ padding: '4px 10px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
                  >
                    פרטים
                  </button>
                </td>
                <td style={tdStyle}>{person.מספרעולה}</td>
                <td style={tdStyle}>{person.שם}</td>
                <td style={tdStyle}>{person.מספרבקשה}</td>
                <td style={tdStyle}>{person.הענקתמעמד}</td>
                <td style={tdStyle}>{person.תאריכתור}</td>
                <td style={tdStyle}>{person.מספרתור}</td>
                <td style={tdStyle}>{person.חלקתור}</td>
                <td style={tdStyle}>{person.ישובמגורים}</td>
                <td style={tdStyle}>{person.כתובת}</td>
                <td style={tdStyle}>{person.טלפון}</td>
                <td style={tdStyle}>{person.נייד}</td>
                <td style={tdStyle}>{person.סטטוסהמתנה}</td>
                <td style={tdStyle}>{person.מצבמיוחד}</td>
                <td style={tdStyle}>{person.מספרנפשות}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="15" style={{ textAlign: "center", padding: '10px', color: '#888' }}>לא נמצאו תוצאות</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApartmentToImmigrant;