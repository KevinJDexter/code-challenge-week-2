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
  let newDiv = '<div>' + innerTimesClickedParagraph + '</div>';
  $('body').append(newDiv);
}