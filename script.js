console.log('script.js');
$(document).ready(onReady);

let totalClicks = 0;

function onReady() {
  console.log('jquery-3.3.1.min.js');
  $('#btn-generate').on('click', generateDiv);
}

function generateDiv() {
  totalClicks ++;
  let innerTimesClickedParagraph = '<p>' + totalClicks + '</p>';
  let swapButton = '<button id="btn-swap">Swap Color</button>';
  let deleteButton = '<button id="btn-delete">Delete</button>';
  let newDiv = '<div class="red">' + innerTimesClickedParagraph + swapButton + deleteButton + '</div>';
  $('body').append(newDiv);
}