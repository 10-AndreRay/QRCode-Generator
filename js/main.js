//variables
const btnGenerateQRCode = document.querySelector("#btn-generate-qr");
const inputColor = document.querySelector("#color-bg-qr");
const inputText = document.querySelector("#content");
const imgQrCode = document.querySelector("img");


//event
btnGenerateQRCode.addEventListener("click", generateQRCode);

//functions
async function generateQRCode() {

    const color = getColor();

    const content = getContent();

    const urlQrCode = await getQrCode(content, color);

    setImg(urlQrCode);

};

function getColor() {

    return inputColor.value.split("#")[1];

};

function getContent() {

    return inputText.value;

};

async function getQrCode(content, color) {

    const urlBase = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    const url = urlBase + `${content}&color=${color}`;

    const response = await fetch(url);

    const urlImgQrCode = response.url
    
    return urlImgQrCode;

};

function setImg(url) {

    imgQrCode.setAttribute("src", url);

};