let objectiveToday = document.getElementById('objectiveTodayText');

objectiveToday.value = localStorage.getItem('objectiveToday');

let cancel

objectiveToday.addEventListener('keyup', event => {
  if(cancel) clearTimeout(cancel)
  setTimeout(()=> {
    console.log(event.target.value);
  }, 1000)
  localStorage.setItem('objectiveToday', event.target.value);
})

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('objectiveTodayText');
  link.addEventListener('click', function(){
    this.select();
  })
})