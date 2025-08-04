let data={
        Name:[],
        Email:[],
        Password:[]
}
function signIn(){
       const name=document.querySelector(".sname").value;
      const password=document.getElementsByClassName("spassword")[0].value;
      const email=document.getElementsByClassName("semail")[0].value;
      
      data.Name.push(name);
      data.Email.push(email);
      data.Password.push(password);
       const jsonString = JSON.stringify(data, null, 2);

       // Create a Blob from the JSON string
       const blob = new Blob([jsonString], {
         type: "application/json"
       });

       // Create a link and click it
       const link = document.createElement("a");
       link.href = URL.createObjectURL(blob);
       link.download = "user_data.json"; // File name
       link.click();
}
