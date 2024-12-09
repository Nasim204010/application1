// تحديد العناصر
const complaintForm = document.getElementById('complaintForm');
const complaintsGrid = document.getElementById('complaintsGrid');

// تحميل الشكاوى من Local Storage عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
    storedComplaints.forEach(complaint => {
        displayComplaint(complaint);
    });
});

// التعامل مع إرسال النموذج
complaintForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // الحصول على قيم الحقول
    const name = document.getElementById('name').value.trim();
    const product = document.getElementById('product').value.trim();
    const complaint = document.getElementById('complaint').value.trim();

    if (name && product && complaint) {
        const newComplaint = { name, product, complaint };

        // إضافة الشكوى إلى Local Storage
        const storedComplaints = JSON.parse(localStorage.getItem('complaints')) || [];
        storedComplaints.push(newComplaint);
        localStorage.setItem('complaints', JSON.stringify(storedComplaints));

        // عرض الشكوى
        displayComplaint(newComplaint);

        // تفريغ الحقول
        complaintForm.reset();
    } else {
        alert('يرجى ملء جميع الحقول');
    }
});

// دالة لعرض الشكوى في الواجهة
function displayComplaint(complaint) {
    const card = document.createElement('div');
    card.className = 'complaint-card';

    card.innerHTML = `
        <h3>${complaint.name}</h3>
        <p><strong>المنتج/الخدمة:</strong> ${complaint.product}</p>
        <p><strong>الشكوى:</strong> ${complaint.complaint}</p>
    `;

    complaintsGrid.appendChild(card);
}
