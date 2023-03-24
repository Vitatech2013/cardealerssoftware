const express = require('express')
const app = express()

app.get('/home', loadMainModule);
app.get('/SellerBuyerLogin', ClickForOpenSellerBuyerLogin);
app.get('/AdminLogin', ClickForOpenAdminLogin);
app.get('/Admin', ClickForOpenAdminModule);
app.get('/SellerBuyer', ClickForOpenSellBuyModule);

app.get('/SellerAndBuyerReg', ClickForOpenRegPage);


app.get('/Admin/ViewRegistrations', ClickForOpenViewReg);
app.get('/Admin/ViewStoreCars', ClickForOpenViewstoreCar);
app.get('/Admin/ViewBuyCars', ClickForOpenViewBuyCars);
app.get('/Admin/ViewLeaseCars', ClickForOpenViewLeaseCars);
app.get('/Admin/ViewTestDriveCar', ClickForOpenViewTestCars);
app.get('/Admin/ChangePassword', AdminPassword);

app.get('/SellerBuyer/ViewProfile', ClickForOpenViewprofile);
app.get('/SellerBuyer/storecars', ClickForOpenStoreCar);
app.get('/SellerBuyer/ViewMycars', ClickForOpenViewMyCars);
app.get('/SellerBuyer/buyCars', ClickForOpenBuyCar);
app.get('/SellerBuyer/leaseCars', ClickForOpenLeaseCar);
app.get('/SellerBuyer/testDrives', ClickForOpenTestDriveCar);
app.get('/SellerBuyer/ChangePassword', SellerBuyerPassword);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))

function loadMainModule(req, res) {
  console.log(__dirname);
  res.sendFile('./MainHome.html', { root: __dirname });
}
function ClickForOpenSellerBuyerLogin(req, res) {
  console.log(__dirname);
  res.sendFile('./SellerBuyerLogin.html', { root: __dirname });
}
function ClickForOpenAdminLogin(req, res) {
  console.log(__dirname);
  res.sendFile('./AdminLogin.html', { root: __dirname });
}
function ClickForOpenAdminModule(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/Adminhome.html', { root: __dirname });
}
function ClickForOpenSellBuyModule(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/SellerHome.html', { root: __dirname });
}

function ClickForOpenRegPage(req, res) {
  console.log(__dirname);
  res.sendFile('./SellerAndBuyerReg.html', { root: __dirname });
}




function ClickForOpenViewReg(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ViewRegistrations.html', { root: __dirname });
}

function ClickForOpenViewstoreCar(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ViewStoreCars.html', { root: __dirname });
}
function ClickForOpenViewBuyCars(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ViewBuyCars.html', { root: __dirname });
}
function ClickForOpenViewLeaseCars(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ViewLeaseCars.html', { root: __dirname });
}
function ClickForOpenViewTestCars(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ViewTestDriveCar.html', { root: __dirname });
}

function AdminPassword(req, res) {
  console.log(__dirname);
  res.sendFile('Admin/ChangePassword.html', { root: __dirname });
}




function ClickForOpenViewprofile(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/ViewProfile.html', { root: __dirname });
}
function ClickForOpenStoreCar(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/storecars.html', { root: __dirname });
}
function ClickForOpenViewMyCars(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/ViewMycars.html', { root: __dirname });
}

function ClickForOpenBuyCar(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/buycars.html', { root: __dirname });
}
function ClickForOpenLeaseCar(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/leaseCars.html', { root: __dirname });
}
function ClickForOpenTestDriveCar(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/testDrives.html', { root: __dirname });
}
function SellerBuyerPassword(req, res) {
  console.log(__dirname);
  res.sendFile('SellerBuyer/ChangePassword.html', { root: __dirname });
}
