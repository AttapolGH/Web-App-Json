// ฐานข้อมูลรายการบันทึก
let incomeRecords = [];
let expenseRecords = [];

function addRecord() {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;

    if (isNaN(amount) || amount <= 0) {
        alert('โปรดกรอกจำนวนเงินที่ถูกต้อง');
        return;
    }

    const record = { type, amount, date, description };

    if (type === 'income') {
        incomeRecords.push(record);
    } else {
        expenseRecords.push(record);
    }

    updateRecordList();
}

function updateRecordList() {
    const incomeList = document.getElementById('incomeList');
    const expenseList = document.getElementById('expenseList');

    incomeList.innerHTML = generateRecordList(incomeRecords);
    expenseList.innerHTML = generateRecordList(expenseRecords);
}

function generateRecordList(records) {
    let listHTML = '<ul>';
    for (const record of records) {
        listHTML += `<li>${record.date} - ${record.description}: ${record.amount} บาท</li>`;
    }
    listHTML += '</ul>';
    return listHTML;
}
// ปรับแก้ไขฟังก์ชั่น updateRecordList ในไฟล์ script.js

function updateRecordList() {
    const incomeList = document.getElementById('incomeList');
    const expenseList = document.getElementById('expenseList');
    const incomeTableBody = document.getElementById('incomeTableBody');

    incomeList.innerHTML = generateRecordList(incomeRecords);
    expenseList.innerHTML = generateRecordList(expenseRecords);
    incomeTableBody.innerHTML = generateTableRows(incomeRecords);
}

function generateTableRows(records) {
    let rowsHTML = '';
    for (const record of records) {
        rowsHTML += `<tr>
                        <td>${record.date}</td>
                        <td>${record.description}</td>
                        <td>${record.amount}</td>
                    </tr>`;
    }
    return rowsHTML;
}
// ลบ

function generateTableRows(records) {
    let rowsHTML = '';
    for (const record of records) {
        rowsHTML += `<tr>
                        <td>${record.date}</td>
                        <td>${record.description}</td>
                        <td>${record.amount}</td>
                        <td><button onclick="deleteRecord(${records.indexOf(record)}, 'income')">ลบ</button></td>
                    </tr>`;
    }
    return rowsHTML;
}

function deleteRecord(index, type) {
    if (type === 'income') {
        incomeRecords.splice(index, 1);
    } else {
      
    }
    updateRecordList();
}
// ปรับแก้ไขฟังก์ชัน updateRecordList ในไฟล์ script.js

function updateRecordList() {
    const incomeList = document.getElementById('incomeList');
    const expenseList = document.getElementById('expenseList');
    const incomeTableBody = document.getElementById('incomeTableBody');
    const expenseTableBody = document.getElementById('expenseTableBody');

    incomeList.innerHTML = generateRecordList(incomeRecords);
    expenseList.innerHTML = generateRecordList(expenseRecords);
    incomeTableBody.innerHTML = generateTableRows(incomeRecords, 'income');
    expenseTableBody.innerHTML = generateTableRows(expenseRecords, 'expense');
}

function generateTableRows(records, type) {
    let rowsHTML = '';
    for (const record of records) {
        rowsHTML += `<tr>
                        <td>${record.date}</td>
                        <td>${record.description}</td>
                        <td>${record.amount}</td>
                        <td><button onclick="deleteRecord(${records.indexOf(record)}, '${type}')">ลบ</button></td>
                    </tr>`;
    }
    return rowsHTML;
}
// ปรับแก้ไขฟังก์ชันในไฟล์ script.js

function generateTableRows(records, type) {
    let rowsHTML = '';
    for (const record of records) {
        rowsHTML += `<tr>
                        <td>${record.date}</td>
                        <td>${record.description}</td>
                        <td>${record.amount}</td>
                        <td><button onclick="deleteRecord(${records.indexOf(record)}, '${type}')">ลบ</button></td>
                    </tr>`;
    }
    return rowsHTML;
}

function deleteRecord(index, type) {
    if (type === 'income') {
        incomeRecords.splice(index, 1);
    } else {
        expenseRecords.splice(index, 1);
    }
    updateRecordList();
}
