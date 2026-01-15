document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("yesBtn");

    // ตรวจสอบว่าปุ่ม "Yes" มีอยู่จริงในหน้า
    if (btn) {
        // กำหนดตำแหน่งเริ่มต้นให้ปุ่มเป็น "absolute"
        // เพื่อให้คุณสามารถกำหนด top/left ด้วย px ได้อย่างที่โค้ดต้องการ
        // อาจจะอยู่ใน style.css ก็ได้ หรือใส่ตรงนี้ก็ได้
        btn.style.position = "absolute"; 

        function moveRandom() {
            const pad = 12;
            const rect = btn.getBoundingClientRect();

            // คำนวณขอบเขตที่ปุ่มสามารถเคลื่อนที่ได้
            // ตรวจสอบว่าเป็น window.innerWidth หรือ document.documentElement.clientWidth
            // และ window.innerHeight หรือ document.documentElement.clientHeight
            // ให้เหมาะสมกับขอบเขตที่คุณต้องการ
            const maxRight = window.innerWidth - rect.width - pad;
            const maxBottom = window.innerHeight - rect.height - pad;

            // ตรวจสอบว่า maxRight/maxBottom ไม่น้อยกว่า 0
            // เพื่อหลีกเลี่ยงการคำนวณที่ผิดพลาดหากปุ่มใหญ่กว่าหน้าจอ
            if (maxRight < 0 || maxBottom < 0) {
                 // อาจจะแสดง error หรือจัดการบางอย่าง
                 console.warn("Button is too large for the window, cannot move it randomly.");
                 return;
            }

            // สุ่มตำแหน่งใหม่
            const x = Math.random() * maxRight + pad; // สุ่มจาก pad ถึง maxRight + pad
            const y = Math.random() * maxBottom + pad; // สุ่มจาก pad ถึง maxBottom + pad


            btn.style.left = x + "px";
            btn.style.top = y + "px";
        }

        // เรียก moveRandom() ทันทีหนึ่งครั้งเมื่อหน้าโหลด
        moveRandom();

        // จากนั้นเรียกซ้ำทุกๆ 555 มิลลิวินาที
        setInterval(moveRandom, 739); // ปรับความเร็วได้

        // คุณเคยมี event listener ที่ทำให้ปุ่ม No เคลื่อนที่เมื่อ hover
        // ถ้าต้องการปุ่ม Yes เคลื่อนที่เมื่อเมาส์ชี้ด้วย ก็เพิ่มตรงนี้
        // btn.addEventListener("mouseenter", moveRandom); 
        // หรือถ้าอยากให้มันกระโดดไปเลยตาม setInterval ก็ไม่ต้องเพิ่มตรงนี้
    } else {
        console.warn("Button with ID 'yesBtn' not found on this page.");
    }
});