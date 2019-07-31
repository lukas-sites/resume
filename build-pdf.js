const puppeteer = require("puppeteer");
const path = require("path");

const createPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const options = {
    path: path.join("public", "pdf", "resume.pdf"),
    format: "A4",
    printBackground: true
  };

  const url = "http://localhost:8080/";
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.pdf(options);

  await browser.close();
};

createPdf();
