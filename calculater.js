let data = {
  Name: [],
  Email: [],
  Password: []
};

function signIn() {
  // get values from the second form (bars)
  const handle = document.getElementById("handle").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // push data (you can change how you structure this)
  data.Name.push(handle);
  data.Email.push(email);
  data.Password.push(password);

  const jsonString = JSON.stringify(data, null, 2);

  // Create a Blob and download
  const blob = new Blob([jsonString], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "user_data.json";
  document.body.appendChild(link); // required for Firefox
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function next() {
  // hide first form, show second
  document.getElementById("nameso").classList.add("hidden");
  document.getElementById("bars").classList.remove("hidden");
}

function back() {
  // hide second form, show first
  document.getElementById("bars").classList.add("hidden");
  document.getElementById("nameso").classList.remove("hidden");
}
function sign(){
  document.getElementById("nameso").classList.remove("hidden");
}