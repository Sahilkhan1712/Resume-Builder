function generateResume() {
    document.getElementById("rName").innerText =
        document.getElementById("name").value;

    document.getElementById("rTitle").innerText =
        document.getElementById("title").value;

    document.getElementById("rEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("rPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("rSummary").innerText =
        document.getElementById("summary").value;

    document.getElementById("rSkills").innerText =
        document.getElementById("skills").value;

    document.getElementById("rExperience").innerText =
        document.getElementById("experience").value;

    document.getElementById("rEducation").innerText =
        document.getElementById("education").value;
}

document.getElementById("imageUpload").addEventListener("change", function(e){
    let file = e.target.files[0];

    if(file){
        let reader = new FileReader();
        reader.onload = function(event){
            document.getElementById("profileImage").src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function downloadPDF() {
    let element = document.getElementById("resume");

    let opt = {
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(element).save();
}