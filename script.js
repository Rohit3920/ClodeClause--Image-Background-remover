console.warn("This is a CodeClause Internship project no1 ");
console.log("Image Background Remover");

let imgURL;

function uploadImage() {
    //    alert("Uplaod btn clicked")

    const fileInput = document.getElementById('chooseFile');
    const image = fileInput.files[0];
    console.log(image.name)

    const formData = new FormData();
    formData.append("image_file", image);
    formData.append('size', 'auto');

    let url = 'https://api.remove.bg/v1.0/removebg';
    const apiKey = 'ixMeo8XoRiSgapyLJ7jgPQo9'
    fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
        },
        body: formData,
    }).then((res) => {
        return res.blob();
    }).then((data) => {
        console.log(data);
        const obURL = URL.createObjectURL(data);
        imgURL = obURL;
        const img = document.createElement('img');
        img.src = obURL;
        const viewDiv2 = document.getElementById('bg-img-view');
        viewDiv2.appendChild(img);

    }).catch((err) => {
        console.log(err + "this error was catch")
    })
}

function downloadFile() {
    const anchor = document.createElement('a');
    anchor.href = imgURL;
    anchor.download = 'No-bg.png';
    const viewDiv = document.getElementById('bg-img-view');
    viewDiv.appendChild(anchor);

    anchor.click();
    viewDiv.removeChild(a)
}


const mode = () => {
    const body = document.body.classList;
    const navBar = document.getElementById('navBar').classList;
    const modeBtn = document.getElementById('modeBtn');
    const btnCls = modeBtn.classList;
    modeBtn.style.outline = 'none';

    if (body == "light") {
        navBar.add('navbar-dark');
        body.add("dark");
        btnCls.add("bg-info");
        modeBtn.innerHTML = "Light Mode";
    } else {
        navBar.remove('navbar-dark');
        body.remove("dark");
        btnCls.remove("bg-info");
        modeBtn.innerHTML = "Dark Mode";
    }
}