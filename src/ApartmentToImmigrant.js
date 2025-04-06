import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const ApartmentToImmigrant = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [formData, setFormData] = useState({
    city: '',
    queueType: '',
    eligibilityCode: '',
    cityType: '',
    immigrantNumber: '',
    numberOfPersons: '',
    responsibleOffice: '',
    committeeDecisions: '',
    interestedInHousingSolution: '',
  });

  const { city, allocationOffice } = useParams(); // Get the URL parameters

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setResults(mockData);
  };

  const INPUT_WIDTH = '200px';
  const LABEL_WIDTH = '90px';

  const mockData = [
    {
      immigrantNumber: "12345",
      name: "ישראל ישראלי",
      requestNumber: "98765",
      statusGrantDate: "01-01-2023",
      queueDate: "15-03-2024",
      queueNumber: "456",
      queuePart: "1",
      settlement: "קרית גת",
      address: "הרצל 10",
      phone: "03-5551234",
      mobile: "050-1234567",
      waitingStatus: "ממתין לפתרון דיור",
      specialStatus: "-",
      numberOfPersons: "3",
      internetPassword: "-",
      notInterestedInHousingSolution: "",
      refused: "-"
    },
    {
      immigrantNumber: "12346",
      name: "מור שי",
      requestNumber: "765",
      statusGrantDate: "07-12-2022",
      queueDate: "5-06-2024",
      queueNumber: "2256",
      queuePart: "2",
      settlement: "קרית גת",
      address: "הגבורה 13 דירה 6",
      phone: "03-5555555",
      mobile: "052-3456789",
      waitingStatus: "ממתין לפתרון דיור",
      specialStatus: "-",
      numberOfPersons: "1",
      internetPassword: "-",
      notInterestedInHousingSolution: "",
      refused: "-"
    },
  ];

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

  const thStyle = {
    border: '1px solid #ccc',
    padding: '6px',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'sticky',
    top: '0',
    background: '#f9f9f9',
    zIndex: '1'
  };

  const tdStyle = {
    border: '1px solid #ccc',
    padding: '6px',
    textAlign: 'center'
  };

  const menuItems = [
    { title: 'שאילתות', options: ['שאילתה 1', 'שאילתה 2'] },
    { title: 'פעילויות', options: ['קביעת זימון', 'עדכון זימון', 'הפניה לראיה', 'הוספת בקשה לאכלוס'] },
    { title: 'מסמכים', options: ['מסמך 1', 'מסמך 2'] },
    { title: 'הדפסות', options: ['הדפסה 1', 'הדפסה 2'] }
  ];

  const infoContainerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '10px',
    direction: 'rtl'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    marginBottom: '10px'
  };

  const fieldStyle = {
    flex: 1,
    textAlign: 'right'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '5px'
  };

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
                  onClick={() => { }}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        <div style={{ ...headerStyle, marginBottom: '20px' }}>פרמטרים</div>
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px 200px',
            marginLeft: 'auto',
            marginRight: '0',
            maxWidth: '1200px',
          }}>
            {/* Row 1 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="city" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>ישוב</label>
              <input type="text" id="city" name="city" value={city} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="queueType" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>סוג תור</label>
              <select id="queueType" name="queueType" value={formData.queueType} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="רגיל">רגיל</option>
                <option value="קשישים">קשישים</option>
                <option value="קומות">קומות נמוכות</option>
                <option value="נר">נ"ר</option>
                <option value="קשיש">קשיש יחיד</option>
                <option value="מתקששים">מתקששים</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="eligibilityCode" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>קוד זכאות</label>
              <select id="eligibilityCode" name="eligibilityCode" value={formData.eligibilityCode} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="cityType" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>סוג ישוב</label>
              <input type="text" id="cityType" name="cityType" value={allocationOffice} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="immigrantNumber" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר עולה</label>
              <input type="text" id="immigrantNumber" name="immigrantNumber" value={formData.immigrantNumber} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="numberOfPersons" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר נפשות</label>
              <input type="text" id="numberOfPersons" name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="responsibleOffice" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>משרד מטפל</label>
              <select id="responsibleOffice" name="responsibleOffice" value={formData.responsibleOffice} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="משרד 1">משרד 1</option>
                <option value="משרד 2">משרד 2</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="committeeDecisions" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>החלטות ועדה</label>
              <select id="committeeDecisions" name="committeeDecisions" value={formData.committeeDecisions} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="אושר">אושר</option>
                <option value="נדחה">נדחה</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="interestedInHousingSolution" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מעוניין בפתרון דיור</label>
              <select id="interestedInHousingSolution" name="interestedInHousingSolution" value={formData.interestedInHousingSolution} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'left', marginTop: '30px' }}>
            <button type="submit" style={{
              padding: '10px 30px',
              backgroundColor: '#003366',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              שלח
            </button>
          </div>
        </form>
      </div>

      {/* Results Section */}
      <div style={{ marginTop: '20px' }}>

        <div style={headerStyle}>תוצאות</div>

        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
          marginTop: '20px'
        }}>

          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th style={thStyle}>פרטים</th>

              <th style={thStyle}>מספר עולה</th>
              <th style={thStyle}>שם</th>
              <th style={thStyle}>מספר בקשה</th>
              <th style={thStyle}>ת. הענקת מעמד</th>
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
              <th style={thStyle}>סיסמא באינטרנט</th>
              <th style={thStyle}>לא מעוניין בפתרון עד</th>
              <th style={thStyle}>מסרב</th>
            </tr>
          </thead>
          <tbody>
            {results.length > 0 ? (
              results.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>
                    <button
                      style={{ cursor: 'pointer', padding: '4px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
                      onClick={() => navigate(`/Immigrant/${row.immigrantNumber}/${row.name}/${row.statusGrantDate}/${row.settlement}/${row.address}/${row.phone}/${row.mobile}/${row.waitingStatus}`)}
                    >
                      פרטים
                    </button>
                  </td>
                  <td style={tdStyle}>{row.immigrantNumber}</td>
                  <td style={tdStyle}>{row.name}</td>
                  <td style={tdStyle}>{row.requestNumber}</td>
                  <td style={tdStyle}>{row.statusGrantDate}</td>
                  <td style={tdStyle}>{row.queueDate}</td>
                  <td style={tdStyle}>{row.queueNumber}</td>
                  <td style={tdStyle}>{row.queuePart}</td>
                  <td style={tdStyle}>{row.settlement}</td>
                  <td style={tdStyle}>{row.address}</td>
                  <td style={tdStyle}>{row.phone}</td>
                  <td style={tdStyle}>{row.mobile}</td>
                  <td style={tdStyle}>{row.waitingStatus}</td>
                  <td style={tdStyle}>{row.specialStatus}</td>
                  <td style={tdStyle}>{row.numberOfPersons}</td>
                  <td style={tdStyle}>{row.internetPassword}</td>
                  <td style={tdStyle}>{row.notInterestedInHousingSolution}</td>
                  <td style={tdStyle}>{row.refused}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="18" style={{ ...tdStyle, textAlign: 'center', color: '#999' }}>
                  אין תוצאות לתצוגה
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApartmentToImmigrant;