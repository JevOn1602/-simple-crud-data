var data = [];
var isiNama = [];
var isiData = [];

const namaLengkap = document.querySelector(".nama");
const umur = document.querySelector(".umur");
const jurusan = document.querySelector(".jurusan");

const tambahData = function (namaData, data, isiNama, isiData, valueNamaLengkap, valueUumur, valueJurusan) {
  // tambah data

  this.nama = valueNamaLengkap;
  this.umur = valueUumur;
  this.jurusan = valueJurusan;

  this.Data = function (nama, umur, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
  };

  // PUSH KE VARIABLE
  if (data.length == 0) {
    data.push(namaData);
    data.push(new this.Data(this.nama, this.umur, this.jurusan));

    // pisahkan data dan nama

    this.isiNama = data.filter(function (element, index) {
      return index % 2 === 0;
    });

    isiNama.push(this.isiNama);

    this.isiData = data.filter(function (element, index) {
      return index % 2 === 1;
    });

    isiData.push(this.isiData);

    new infoAddData(usernameInvalid, "belum");
    cekData(namaData, isiNama, isiData, valueNamaLengkap, valueUumur, valueJurusan);
    inputClear();

    return "Data baru sudah ditambahkan";
  } else {
    for (let i = 0; i < data.length; i++) {
      if (namaData == data[i]) {
        // alert("nama " + namaData + " sudah ada didalam data");
        new infoAddData("sudah", usernameValid);
        return "Data sudah ada";
      } else if (i == data.length - 1) {
        data.push(namaData);
        data.push(new this.Data(this.nama, this.umur, this.jurusan));

        // pisahkan data dan nama

        this.isiNama = data.filter(function (element, index) {
          return index % 2 === 0;
        });

        isiNama.push(this.isiNama);

        this.isiData = data.filter(function (element, index) {
          return index % 2 === 1;
        });

        isiData.push(this.isiData);
        new infoAddData(usernameInvalid, "belum");
        cekData(namaData, isiNama, isiData, valueNamaLengkap, valueUumur, valueJurusan);
        inputClear();
        return "Data baru sudah ditambahkan";
      }
    }
  }
};

const tbody = document.querySelector(".tbody");

const cekData = function (namadata, isiNama, isiData, valueNamaLengkap, valueUumur, valueJurusan) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const tdDelete = document.createElement("td");
  const tombolHapus = document.createElement("button");
  const iconHapus = document.createElement("i");

  // tombol hapus

  tombolHapus.setAttribute("class", "btn");
  tombolHapus.classList.add("btn-danger");
  tombolHapus.classList.add("btn-delete");

  // icon

  iconHapus.setAttribute("class", "fas");
  iconHapus.classList.add("fa-trash-alt");

  // merge

  const usernametd = document.createTextNode(namadata);
  const namatd = document.createTextNode(valueNamaLengkap);
  const umurtd = document.createTextNode(valueUumur);
  const jurusantd = document.createTextNode(valueJurusan);

  td1.appendChild(usernametd);
  td2.appendChild(namatd);
  td3.appendChild(umurtd);
  td4.appendChild(jurusantd);
  tdDelete.appendChild(tombolHapus);
  tdDelete.classList.add("button-delete");
  tombolHapus.appendChild(iconHapus);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(tdDelete);

  tr.setAttribute("class", "databody");

  tbody.appendChild(tr);
};

const add = document.querySelector(".add");
const username = document.querySelector(".username");
const form1 = document.getElementById("form1");

add.addEventListener("click", function (e) {
  var namaData = username.value;
  var valueNamaLengkap = namaLengkap.value;
  var valueUumur = umur.value;
  var valueJurusan = jurusan.value;

  tambahData(namaData, data, isiNama, isiData, valueNamaLengkap, valueUumur, valueJurusan);
  hapusData(data, isiNama, isiData);
});

var hapusData = function (data, isiNama, isiData) {
  var tombolHapusData = document.querySelectorAll(".btn-delete");

  tombolHapusData.forEach(function (pilDelete) {
    pilDelete.addEventListener("click", function (e) {
      var cekuser = pilDelete.parentElement;
      var cekuser2 = cekuser.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      pilDelete.parentElement.parentElement.style.display = "none";

      for (let i = 0; i < isiNama.length; i++) {
        if (cekuser2 == isiNama[i]) {
          isiNama[i] = undefined;
          isiData[i] = undefined;

          for (let i = 0; i < data.length; i++) {
            if (cekuser2 == data[i]) {
              data[i] = undefined;
              data[i + 1] = undefined;
            }
          }
        }
      }
    });
  });
};

var usernameInvalid;
var usernameValid;

var infoAddData = function (usernameInvalid, usernameValid) {
  this.usernameInvalid = document.createTextNode("Username sudah ada!");
  this.usernameValid = document.createTextNode("Data berhasil ditambahkan!");

  const massageAddData = document.createElement("div");
  const isimassageAddData = document.createElement("p");
  const tombolClose = document.createElement("button");
  const formUsername = document.querySelector(".form-username");
  const formUsernameParent = document.querySelector(".form-username-parent");

  tombolClose.setAttribute("type", "button");
  tombolClose.setAttribute("class", "btn-close");
  tombolClose.setAttribute("data-bs-dismiss", "alert");
  tombolClose.setAttribute("aria-label", "Close");

  if (usernameValid == "belum") {
    isimassageAddData.appendChild(this.usernameValid);
  } else if (usernameInvalid == "sudah") {
    isimassageAddData.appendChild(this.usernameInvalid);
  }

  massageAddData.appendChild(isimassageAddData);
  massageAddData.appendChild(tombolClose);
  massageAddData.setAttribute("class", "alert");

  if (usernameValid == "belum") {
    massageAddData.classList.add("alert-primary");
  } else if (usernameInvalid == "sudah") {
    massageAddData.classList.add("alert-danger");
  }

  formUsernameParent.insertBefore(massageAddData, formUsername);
};

const inputData = document.querySelectorAll("#form1 input ");

var inputClear = function () {
  inputData.forEach((input) => (input.value = ""));
};
