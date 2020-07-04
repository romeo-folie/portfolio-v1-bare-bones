var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

function showSideNav() {
  let sideNavToggle = document.getElementById('side-nav');
  if(sideNavToggle.className === 'side-menu'){
    sideNavToggle.className += ' show';
  } else {
    sideNavToggle.className = 'side-menu'
  }
}


function hideSideNav(){
  let sideNavToggle = document.getElementById('side-nav');
  if(sideNavToggle.className === 'side-menu show'){
    sideNavToggle.className = 'side-menu'
  }
}