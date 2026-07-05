/*************************************************************
 * ตั้งค่าการเชื่อมต่อ API
 * -----------------------------------------------------------
 * 1. Deploy ไฟล์ apps-script/Code.gs เป็น Web App (ดูขั้นตอนใน README.md)
 * 2. คัดลอก "Web app URL" ที่ได้ (ลงท้ายด้วย /exec) มาใส่ใน API_URL ด้านล่าง
 * 3. ถ้าตั้งค่า Script Property "API_KEY" ไว้ฝั่ง Apps Script
 *    ให้ใส่ค่าเดียวกันใน API_KEY ด้านล่างนี้ด้วย (ไม่บังคับ แต่แนะนำ)
 *************************************************************/
window.APP_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbzoDI7xUYVr3r5X0aLzm0rPErIEDxbsgPJvigZFCV6R88db5CgO5dBOzj-bvRIibgxAqw/exec',
  API_KEY: 'pormod-2026-xyz' // ใส่ค่าเดียวกับ Script Property "API_KEY" ถ้ามี
};
