var dUsername = [];
var dNama = [];
var dEmail = [];
var dJurusan = [];

const tombolAdd = document.querySelector(".add");
const form = document.getElementById("form");
const userTR = document.querySelector(".userTR");
const inputData = document.querySelectorAll(".form-control");

tombolAdd.addEventListener("click", (e) => {
  e.preventDefault;
  add();
  Read();
});

function add() {
  let username = document.getElementById("username").value;
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let jurusan = document.getElementById("jurusan").value;

  let sUsername = JSON.parse(localStorage.getItem("username"));
  let sNama = JSON.parse(localStorage.getItem("nama"));
  let sEmail = JSON.parse(localStorage.getItem("email"));
  let sJurusan = JSON.parse(localStorage.getItem("jurusan"));

  if (username == "" || nama == "" || email == "" || jurusan == "") {
    infoAddData("tidak");
  } else {
    if (sUsername == "" || dUsername.length == 0) {
      dUsername.push(username);
      dNama.push(nama);
      dEmail.push(email);
      dJurusan.push(jurusan);

      localStorage.setItem("username", JSON.stringify(dUsername));
      localStorage.setItem("nama", JSON.stringify(dNama));
      localStorage.setItem("email", JSON.stringify(dEmail));
      localStorage.setItem("jurusan", JSON.stringify(dJurusan));
      infoAddData("belum");
      inputClear();
    } else {
      dUsername = JSON.parse(localStorage.getItem("username"));
      dNama = JSON.parse(localStorage.getItem("nama"));
      dEmail = JSON.parse(localStorage.getItem("email"));
      dJurusan = JSON.parse(localStorage.getItem("jurusan"));

      for (let i = 0; i < dUsername.length; i++) {
        if (username == dUsername[i]) {
          infoAddData("sudah");
          return;
        } else if (i == dUsername.length - 1) {
          dUsername.push(username);
          dNama.push(nama);
          dEmail.push(email);
          dJurusan.push(jurusan);
          infoAddData("belum");

          localStorage.setItem("username", JSON.stringify(dUsername));
          localStorage.setItem("nama", JSON.stringify(dNama));
          localStorage.setItem("email", JSON.stringify(dEmail));
          localStorage.setItem("jurusan", JSON.stringify(dJurusan));
          inputClear();
          return;
        }
      }
    }
  }
}

function Read() {
  userTR.innerHTML = "";
  dUsername = JSON.parse(localStorage.getItem("username"));
  dNama = JSON.parse(localStorage.getItem("nama"));
  dEmail = JSON.parse(localStorage.getItem("email"));
  dJurusan = JSON.parse(localStorage.getItem("jurusan"));
  if (dUsername != null) {
    for (let i = 0; i < dUsername.length; i++) {
      userTR.innerHTML += `
      <div class=" mt-3 cards">
				<div class="card " style="width: 18rem;">
					<div class="card-body">
						<span class = "infoValid"></span>
						<h6 class="card-title eusername">Username: ${dUsername[i]}</h6>
						<h6 class="card-title enama">Nama: ${dNama[i]}</h6>
						<h6 class="card-title eemail">Email: ${dEmail[i]}</h6>
						<h6 class="card-title ejurusan">Jurusan: ${dJurusan[i]}</h6>
						<h5 class="card-title sure"></h5>
						<span class = "edit" onclick="edit(${i})">
						<button class="mt-2 btn btn-primary ">Edit</button>
						</span>
						<span class = "delete">
							<button class="mt-2 btn btn-danger " onclick="deleteData(${i})">Delete</button>
						</span>
					</div>
				</div>
      </div>
      `;
    }
  }
}

function deleteData(user) {
  Read();
  let tombolHapus = document.querySelectorAll(".delete");
  let tombolEdit = document.querySelectorAll(".edit");
  let sure = document.querySelectorAll(".sure");

  tombolEdit[user].innerHTML = `<button class="mt-2 btn btn-danger ">Yes</button>`;
  tombolHapus[user].innerHTML = `<button class="mt-2 btn btn-secondary " >No</button>`;
  sure[user].innerHTML = `<h6 style = "font-weight : bold;"> You sure to delete this ? </h6>`;

  tombolEdit.forEach((pilYes) => {
    pilYes.addEventListener("click", function () {
      sure;
      dUsername = JSON.parse(localStorage.getItem("username"));
      dNama = JSON.parse(localStorage.getItem("nama"));
      dEmail = JSON.parse(localStorage.getItem("email"));
      dJurusan = JSON.parse(localStorage.getItem("jurusan"));

      dUsername.splice(user, 1);
      dNama.splice(user, 1);
      dEmail.splice(user, 1);
      dJurusan.splice(user, 1);

      localStorage.setItem("username", JSON.stringify(dUsername));
      localStorage.setItem("nama", JSON.stringify(dNama));
      localStorage.setItem("email", JSON.stringify(dEmail));
      localStorage.setItem("jurusan", JSON.stringify(dJurusan));

      Read();
    });
  });

  tombolHapus.forEach((pilNo) => {
    pilNo.addEventListener("click", function () {
      Read();
    });
  });
}

function edit(user) {
  Read();

  let tombolHapus = document.querySelectorAll(".delete");
  let tombolEdit = document.querySelectorAll(".edit");

  tombolEdit[user].innerHTML = `<button class="mt-2 btn btn-danger ">Cancel</button>`;
  tombolHapus[user].innerHTML = `<button class="mt-2 btn btn-secondary " >Save</button>`;

  const infoValid = document.querySelectorAll(".infoValid");
  const eUsername = document.querySelectorAll(".eusername");
  const eNama = document.querySelectorAll(".enama");
  const eEmail = document.querySelectorAll(".eemail");
  const eJurusan = document.querySelectorAll(".ejurusan");

  let Newusername = JSON.parse(localStorage.getItem("username"));
  let Newnama = JSON.parse(localStorage.getItem("nama"));
  let Newemail = JSON.parse(localStorage.getItem("email"));
  let Newjurusan = JSON.parse(localStorage.getItem("jurusan"));

  eUsername[user].innerHTML = `<h6 class="card-title eusername">Username: <input type="text" class="form-control newusername"  placeholder="New Username" value = "${dUsername[user]}" id = "newusername" /> </h6>`;
  eNama[user].innerHTML = `<h6 class="card-title eusername">Nama: <input type="text" class="form-control newnama"  placeholder="New Username" value = "${dNama[user]}" id = "newnama" /> </h6>`;
  eEmail[user].innerHTML = `<h6 class="card-title eusername">Email: <input type="text" class="form-control newemail"  placeholder="New Username" value = "${dEmail[user]}" id = "newemail" /> </h6>`;
  eJurusan[user].innerHTML = `<h6 class="card-title eusername">Jurusan: <input type="text" class="form-control newjurusan"  placeholder="New Username" value = "${dJurusan[user]}"  id = "newjurusan"/> </h6>`;

  tombolHapus[user].addEventListener("click", function () {
    Newusername[user] = document.getElementById("newusername").value;
    Newnama[user] = document.getElementById("newnama").value;
    Newemail[user] = document.getElementById("newemail").value;
    Newjurusan[user] = document.getElementById("newjurusan").value;

    if (Newusername[user] == "" || Newnama[user] == "" || Newemail[user] == "" || Newjurusan[user] == "") {
      infoValid[user].innerHTML = `<div class="alert alert-danger">Data Harus terisi semua!</div>`;
    } else {
      localStorage.setItem("username", JSON.stringify(Newusername));
      localStorage.setItem("nama", JSON.stringify(Newnama));
      localStorage.setItem("email", JSON.stringify(Newemail));
      localStorage.setItem("jurusan", JSON.stringify(Newjurusan));

      Read();
    }
  });

  tombolEdit[user].addEventListener("click", function () {
    Read();
  });
}

function infoAddData(valid) {
  if (valid == "sudah") {
    var text = "Username Sudah Ada";
    var alert = "alert-warning";
  } else if (valid == "belum") {
    var text = "Data berhasil ditambahkan!";
    var alert = "alert-primary";
  } else if (valid == "tidak") {
    var text = "Pastikan data terisi semua!";
    var alert = "alert-danger";
  }

  const info = document.querySelector(".info");
  info.innerHTML = `
	<div class="alert ${alert} infoadd">
		<p>${text}</p>
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
	`;

  timeoutInfo();
}

var inputClear = function () {
  inputData.forEach((input) => (input.value = ""));
};

function timeoutInfo() {
  setTimeout(function () {
    let alert = document.querySelectorAll(".alert");

    alert.forEach(function (pilInfo) {
      pilInfo.remove();
    });
  }, 5000);
}
