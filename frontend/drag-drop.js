const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('file_name');
const er = document.getElementById("error");

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.style.border = '2px dashed green';
});

dropZone.addEventListener('dragleave', () => {
    dropZone.style.border = '2px solid rgba(228, 10, 10, 0.39)';
  });

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.style.border = '2px solid rgba(228, 10, 10, 0.39)';
    
    const droppedFile = e.dataTransfer.files[0];

if (droppedFile) {
      fileInput.files = e.dataTransfer.files;
      handleFile(droppedFile);
    }
});

function handleFile(file) {
    let filee = file.name.split(".");
    let file_len = filee.length-1;
    
    const lastIndex = filee[file_len];

    if(lastIndex === "xlsx"){
        er.style.color = "green";
        dropZone.style.border = '2px solid none';
        er.innerHTML = file.name;
    }else{
        er.style.color = "red"
        er.innerHTML = "File must be in .xlsx";
    }
    console.log('File dropped:', file.name);
}
