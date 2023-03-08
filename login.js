document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password,
  };
  const card = document.getElementById("card");
  const loading = document.getElementById("loading");

  loading.style.display = "block";
  card.style.display = "none";

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.userId) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspesna!");
        window.location.href = "test.html";
      } else {
        loading.style.display = "none";
        card.style.display = "block";
        alert(data.message);
        console.log(data);
      }
    });
});
