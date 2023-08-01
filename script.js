console.warn("This is a CodeClause Internship project no1 ");
console.log("Image Background Remover");


function uploadImage() {
    //    alert("Uplaod btn clicked")

    const fileInput = document.getElementById('chooseFile');
    const image = fileInput.files[0];

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
        console.log(data)
    }).catch((err) => {
        console.log(err + "this error was catch")
    })
}