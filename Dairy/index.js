let data = [];
const localStorageData = localStorage.getItem('diary_data');
if (localStorageData) {
    data = JSON.parse(localStorageData);
   showData();
 } 
   else {
        localStorage.setItem('diary_data', []);
       
 }
 function addData() {
    let title = document.getElementById('title').value;
    let image = document.getElementById('image').value;
    let content = document.getElementById('content').value;
    data.push(
        {
            title,
            image,
            content
        }
    );
    localStorage.setItem('diary_data', JSON.stringify(data));
    location.reload;
    }

    
function showData() {
    let diarybox = document.getElementById('diaryBox');
    for (let i = 0; i < data.length; i++) {
        diarybox.innerHTML +=`
        
        <div class="card" style="width: 18rem;">
        <img src="${data[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <p class="card-text">${data[i].content}</p>
          <button class="btn  btn-danger" onclick="editDiary(${i})">แก้ไขข้อมูล</button>
          <button class="btn  btn-danger" onclick="deleteDiary (${i})">ลบข้อมูล</button>
        </div>
        </div>
        ` }; 
}
function editDiary(index) {
    Swal.fire({
        title: "Edit Diary",
        html: `
            <input type="text" id="title" class="form-control form-control-lg mb-3" placeholder="หัวข้อไดอารี่" value="${data[index].title}">
            <input type="url" id="image" class="form-control form-control-lg mb-3" placeholder="ลิ้งค์รูปภาพ" value="${data[index].image}">
            <textarea type="text" id="content" class="form-control form-control-lg" placeholder="เนื้อหาไดอารี่">${data[index].content}</textarea>
        `,
        confirmButtonText: "Edit",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        focusConfirm: false,
        preConfirm: () => {
            const title = Swal.getPopup().querySelector("#title").value;
            const image = Swal.getPopup().querySelector("#image").value;
            const content = Swal.getPopup().querySelector("#content").value;
            if (!title) {
                Swal.showValidationMessage(`โปรดกรอกหัวข้อไดอารี่`);
            }
            else if (!content) {
                Swal.showValidationMessage(`โปรดกรอกเนื้อหาไดอารี่`);
            }
            return { title: title, image: image, content: content };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            data[index] = result.value;
            localStorage.setItem("diary_data", JSON.stringify(data));
            Swal.fire({
                title: "Success",
                text: "แก้ไขไดอารี่สำเร็จแล้ว",
                icon: "success",
                confirmButtonText: "Ok",
            });
            let diaryBox = document.getElementById("diaryBox");
            diaryBox.innerHTML = "";
            showData();
        }
    });
}
function deleteDiary(index){
    data.splice(index,1);
    localStorage.setItem("diary_data",JSON.stringify(data));
    location.reload();
}
