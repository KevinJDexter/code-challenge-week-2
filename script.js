console.log('script.js');
$(document).ready(onReady);

let totalClicks = 0;

function onReady() {
  console.log('jquery-3.3.1.min.js');
  $('#btn-generate').on('click', generateDiv);
  $('body').on('click', '.btn-swap', swapBackgroundColor);
  $('body').on('click', '.btn-delete', deleteDiv);
}

function generateDiv() {
  totalClicks ++;
  let innerTimesClickedParagraph = '<p>' + totalClicks + '</p>';
  let swapButton = '<button class="btn-swap">Swap Color</button>';
  let deleteButton = '<button class="btn-delete">Delete</button>';
  let newDiv = '<div class="red">' + innerTimesClickedParagraph + swapButton + deleteButton + '</div>';
  $('body').append(newDiv);
}

function swapBackgroundColor () {
  $(this).parent().toggleClass('red yellow');
}

function deleteDiv () {
  $(this).parent().remove();
}