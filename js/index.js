ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.width = '30em';
    ball.style.zIndex = 1000;
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);
  
    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
  
  ball.ondragstart = function() {
    return false;
  };

ball02.onmousedown = function(event) {

    let shiftX = event.clientX - ball02.getBoundingClientRect().left;
    let shiftY = event.clientY - ball02.getBoundingClientRect().top;
  
    ball02.style.position = 'absolute';
    ball02.style.width = '15em';
    ball02.style.zIndex = 1000;
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX, pageY) {
      ball02.style.left = pageX - shiftX + 'px';
      ball02.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);
  
    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    ball02.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball02.onmouseup = null;
    };
  
  };
  
  ball02.ondragstart = function() {
    return false;
  };


  var body = document.getElementsByTagName("body")[0];

  
  var innerWidth = window.innerWidth;

  if (innerWidth <= "700" ){
      $('div').remove('#ball')
  }