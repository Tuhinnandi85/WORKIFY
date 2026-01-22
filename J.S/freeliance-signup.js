// DOB FILL
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

day.innerHTML = '<option value="">DD</option>';
for(let i=1;i<=31;i++) day.innerHTML += `<option>${i}</option>`;

const months = ["Month","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
months.forEach(m => month.innerHTML += `<option>${m}</option>`);

year.innerHTML = '<option value="">Year</option>';
for(let y=2025;y>=1950;y--) year.innerHTML += `<option>${y}</option>`;

// PASSWORD TOGGLE
function togglePass(id,icon){
  const input=document.getElementById(id);
  input.type = input.type==="password"?"text":"password";
  icon.classList.toggle("fa-eye-slash");
}

// VALIDATION
document.getElementById("registerForm").addEventListener("submit",e=>{
  e.preventDefault();
  let valid=true;

  document.querySelectorAll("input,select").forEach(el=>{
    if(el.hasAttribute("required") && !el.value){
      el.classList.add("error");
      valid=false;
    }else{
      el.classList.remove("error");
    }
  });

  if(valid) alert("Form submitted successfully!");
});