import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchApartment = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [formData, setFormData] = useState({
    apartmentid: '',
    apartmentOffice: '',
    includesDependents: false,
    company: '',
    immigrantNumber: '',
    availabilityDateFrom: '',
    until1: '',
    street: '',
    identityNumber: '',
    allocationDateFrom: '',
    until2: '',
    houseNumber: '',
    allocationOffice: '',
    occupancyDateFrom: '',
    until3: '',
    apartmentNumber: '',
    city: '',
    roomsFrom: '',
    roomsTo: '',
    seniorCitizensHouse: '',
    apartmentType: '',
    floorFrom: '',
    floorTo: '',
    cluster: '',
    apartmentStatus: '',
    areaFrom: '',
    areaTo: '',
    longTermRental: '',
    emergency: '',
    elevator: ''
  });

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
    setResults(mockResults);
  };

  const INPUT_WIDTH = '200px';
  const LABEL_WIDTH = '90px';

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

  const mockResults = [
    {
      id: '84146',
      type: 'מתפנית - לעולים זכאים',
      status: 'זמינה לאיכלוס - פנויה',
      allocationDate: '22-12-2024',
      referralDate: '-',
      allocationOffice: 'הדרום וירושלים',
      city: 'קרית גת',
      address: 'שמגר בן ענת 2',
      houseNumber: '1420',
      apartmentNumber: '47',
      area: '52',
      rooms: '2',
      floor: '4',
      elevator: 'אין',
      company: 'עמידר',
      availabilityDate: '22-12-2024',
      notes: '-'
    },
    {
      id: '83772',
      type: 'מתפנית - לעולים זכאים',
      status: 'זמינה לאיכלוס - פנויה',
      allocationDate: '26-12-2024',
      referralDate: '22-01-2025',
      allocationOffice: 'הדרום וירושלים',
      city: 'קרית גת',
      address: 'שמואל הנביא 7',
      houseNumber: '905',
      apartmentNumber: '11',
      area: '48',
      rooms: '2',
      floor: '4',
      elevator: 'יש',
      company: 'עמידר',
      availabilityDate: '16-06-2024',
      notes: '-'
    },
    {
      id: '83761',
      type: 'מתפנית - לעולים זכאים',
      status: 'זמינה לאיכלוס - פנויה',
      allocationDate: '03-02-2025',
      referralDate: '02-07-2024',
      allocationOffice: 'הדרום וירושלים',
      city: 'קרית גת',
      address: 'הכרמל 12',
      houseNumber: '771',
      apartmentNumber: '30',
      area: '48',
      rooms: '2',
      floor: '3',
      elevator: 'אין',
      company: 'עמידר',
      availabilityDate: '09-06-2024',
      notes: '-'
    },
    {
      id: '83606',
      type: 'מתפנית - לעולים זכאים',
      status: 'זמינה לאיכלוס - פנויה',
      allocationDate: '12-01-2025',
      referralDate: '-',
      allocationOffice: 'הדרום וירושלים',
      city: 'קרית גת',
      address: 'שמואל הנביא 17',
      houseNumber: '909',
      apartmentNumber: '16',
      area: '48',
      rooms: '2',
      floor: '4',
      elevator: 'אין',
      company: 'עמידר',
      availabilityDate: '12-03-2024',
      notes: '-'
    }
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

  const menuItems = [
    { title: 'שאילתות', options: ['שאילתה 1', 'שאילתה 2'] },
    { title: 'פעילויות', options: ['קביעת זימון', 'עדכון זימון', 'הפניה לראיה', 'הוספת בקשה לאכלוס'] },
    { title: 'מסמכים', options: ['מסמך 1', 'מסמך 2'] },
    { title: 'הדפסות', options: ['הדפסה 1', 'הדפסה 2'] }
  ];

  const handleOptionClick = () => {};

  return (
    <div style={{ fontFamily: 'Arial', direction: 'rtl', padding: '20px' }}>
      
      <div style={titleStyle}>שאילתת דירות</div>

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
        <div style={{ ...headerStyle, marginBottom: '20px' }}>פרמטרים</div>

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px 200px',
            marginLeft: 'auto',
            marginRight: '0',
            maxWidth: '1200px',
          }}>
            {/* Row 1 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="apartmentid" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>זהות דירה</label>
              <input type="text" id="apartmentid" name="apartmentid" value={formData.apartmentid} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="apartmentOffice" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>משרד דירה</label>
              <select id="apartmentOffice" name="apartmentOffice" value={formData.apartmentOffice} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="משרד 1">משרד 1</option>
                <option value="משרד 2">משרד 2</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="includesDependents" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>כולל כפופים</label>
              <input type="checkbox" id="includesDependents" name="includesDependents" checked={formData.includesDependents} onChange={handleChange} style={{ transform: 'scale(1.2)', marginTop: '2px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="company" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>חברה</label>
              <select id="company" name="company" value={formData.company} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="חברה א">חברה א</option>
                <option value="חברה ב">חברה ב</option>
              </select>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="immigrantNumber" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר עולה</label>
              <input type="text" id="immigrantNumber" name="immigrantNumber" value={formData.immigrantNumber} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="availabilityDateFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>תאריך זמינות מ</label>
              <input type="date" id="availabilityDateFrom" name="availabilityDateFrom" value={formData.availabilityDateFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="until1" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="date" id="until1" name="until1" value={formData.until1} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="street" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>רחוב</label>
              <input type="text" id="street" name="street" value={formData.street} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>

            {/* Row 3 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="identityNumber" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר זהות</label>
              <input type="text" id="identityNumber" name="identityNumber" value={formData.identityNumber} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="allocationDateFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>תאריך הקצאה מ</label>
              <input type="date" id="allocationDateFrom" name="allocationDateFrom" value={formData.allocationDateFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="until2" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="date" id="until2" name="until2" value={formData.until2} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="houseNumber" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר בית</label>
              <input type="text" id="houseNumber" name="houseNumber" value={formData.houseNumber} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>

            {/* Row 4 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="allocationOffice" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>משרד הקצאה</label>
              <select id="allocationOffice" name="allocationOffice" value={formData.allocationOffice} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="משרד 1">משרד 1</option>
                <option value="משרד 2">משרד 2</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="occupancyDateFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>תאריך אכלוס מ</label>
              <input type="date" id="occupancyDateFrom" name="occupancyDateFrom" value={formData.occupancyDateFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="until3" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="date" id="until3" name="until3" value={formData.until3} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="apartmentNumber" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מספר דירה</label>
              <input type="text" id="apartmentNumber" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>

            {/* Row 5 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="city" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>ישוב</label>
              <select id="city" name="city" value={formData.city} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="תל אביב">תל אביב</option>
                <option value="חיפה">חיפה</option>
                <option value="באר שבע">באר שבע</option>
                <option value="קרית גת">קרית גת</option>
                <option value="ירושלים">ירושלים</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="roomsFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>חדרים מ</label>
              <input type="number" id="roomsFrom" name="roomsFrom" value={formData.roomsFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="roomsTo" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="number" id="roomsTo" name="roomsTo" value={formData.roomsTo} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="seniorCitizensHouse" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>בתי גיל הזהב</label>
              <select id="seniorCitizensHouse" name="seniorCitizensHouse" value={formData.seniorCitizensHouse} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
              </select>
            </div>

            {/* Row 6 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="apartmentType" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>סוג דירה</label>
              <select id="apartmentType" name="apartmentType" value={formData.apartmentType} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="דירה מתפנית">דירה מתפנית</option>
                <option value="בתי גיל הזהב">בתי גיל הזהב</option>
                <option value="מקבץ">מקבץ</option>
                <option value="נ&quot;ר">נ"ר</option>
                <option value="דירת נ&quot;ר - אתיופים">דירת נ"ר - אתיופים</option>
                <option value="קרקע חומה">קרקע חומה</option>
                <option value="דיור מוגן">דיור מוגן</option>
                <option value="שכירות ארוכת טווח">שכירות ארוכת טווח</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="floorFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>קומה מ</label>
              <input type="number" id="floorFrom" name="floorFrom" value={formData.floorFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="floorTo" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="number" id="floorTo" name="floorTo" value={formData.floorTo} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="cluster" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מקבץ</label>
              <select id="cluster" name="cluster" value={formData.cluster} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
              </select>
            </div>

            {/* Row 7 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="apartmentStatus" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מצב דירה</label>
              <select id="apartmentStatus" name="apartmentStatus" value={formData.apartmentStatus} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="בהפניה לאיכלוס">בהפניה לאיכלוס</option>
                <option value="בהפניה לראות דירה">בהפניה לראות דירה</option>
                <option value="בוטלה">בוטלה</option>
                <option value="בפלישה">בפלישה</option>
                <option value="בשיפוץ">בשיפוץ</option>
                <option value="הוחזרה">הוחזרה</option>
                <option value="התקבלה - אינה זמינה">התקבלה - אינה זמינה</option>
                <option value="זמינה לאיכלוס - פנויה">זמינה לאיכלוס - פנויה</option>
                <option value="מאוכלסת">מאוכלסת</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="areaFrom" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>שטח מ</label>
              <input type="number" id="areaFrom" name="areaFrom" value={formData.areaFrom} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="areaTo" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>עד</label>
              <input type="number" id="areaTo" name="areaTo" value={formData.areaTo} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="longTermRental" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>שכירות טווח ארוך</label>
              <select id="longTermRental" name="longTermRental" value={formData.longTermRental} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
                <option value="">בחר</option>
                <option value="כן">כן</option>
                <option value="לא">לא</option>
              </select>
            </div>

            {/* Row 8 */}
            <div></div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="emergency" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>חירום</label>
              <input type="text" id="emergency" name="emergency" value={formData.emergency} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '32px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }} />
            </div>
            <div></div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', direction: 'rtl', gap: '10px', height: '40px' }}>
              <label htmlFor="elevator" style={{ minWidth: LABEL_WIDTH, textAlign: 'right', lineHeight: '1.5', fontSize: '14px', fontWeight: 'bold' }}>מעלית</label>
              <select id="elevator" name="elevator" value={formData.elevator} onChange={handleChange} style={{ width: INPUT_WIDTH, height: '34px', lineHeight: '1.5', fontSize: '14px', direction: 'rtl' }}>
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

              <th style={thStyle}>זהות דירה</th>
              <th style={thStyle}>סוג דירה</th>
              <th style={thStyle}>מצב דירה</th>
              <th style={thStyle}>תאריך הקצאה</th>
              <th style={thStyle}>תאריך הפניה</th>
              <th style={thStyle}>משרד הקצאה</th>
              <th style={thStyle}>בתי גיל הזהב / מקבץ</th>
              <th style={thStyle}>ישוב</th>
              <th style={thStyle}>כתובת</th>
              <th style={thStyle}>מס' בית</th>
              <th style={thStyle}>מס' דירה</th>
              <th style={thStyle}>שטח</th>
              <th style={thStyle}>חדרים</th>
              <th style={thStyle}>קומה</th>
              <th style={thStyle}>מעלית</th>
              <th style={thStyle}>חברה</th>
              <th style={thStyle}>תאריך זמינות</th>
              <th style={thStyle}>הערות</th>
            </tr>
          </thead>

          <tbody>
            {results.length > 0 ? (
              results.map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>
                    <button
                      style={{ cursor: 'pointer', padding: '4px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
                      onClick={() => navigate(`/apartment/${row.id}/${row.type}/${row.status}/${row.allocationDate}/${row.allocationOffice}/${row.city}/${row.address}/${row.houseNumber}/${row.apartmentNumber}/${row.area}/${row.rooms}/${row.floor}/${row.elevator}/${row.company}/${row.availabilityDate}/${row.notes}`)}
                      >
                      פרטים
                    </button>
                  </td>            
                  <td style={tdStyle}>{row.id}</td>
                  <td style={tdStyle}>{row.type}</td>
                  <td style={tdStyle}>{row.status}</td>
                  <td style={tdStyle}>{row.allocationDate}</td>
                  <td style={tdStyle}>{row.referralDate}</td>
                  <td style={tdStyle}>{row.allocationOffice}</td>
                  <td style={tdStyle}>{row.seniorCitizensHouseOrCluster}</td>
                  <td style={tdStyle}>{row.city}</td>
                  <td style={tdStyle}>{row.address}</td>
                  <td style={tdStyle}>{row.houseNumber}</td>
                  <td style={tdStyle}>{row.apartmentNumber}</td>
                  <td style={tdStyle}>{row.area}</td>
                  <td style={tdStyle}>{row.rooms}</td>
                  <td style={tdStyle}>{row.floor}</td>
                  <td style={tdStyle}>{row.elevator}</td>
                  <td style={tdStyle}>{row.company}</td>
                  <td style={tdStyle}>{row.availabilityDate}</td>
                  <td style={tdStyle}>{row.notes}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="19" style={{ ...tdStyle, textAlign: 'center', color: '#999' }}>
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

export default SearchApartment;