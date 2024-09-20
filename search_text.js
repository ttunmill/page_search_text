$(document).on('click', '.search_word', function() {
  pageHighlightText()
});

$(document).on('keyup', '#word_inp', function(e) {
  if(e.keyCode == 13) pageHighlightText()
});

function pageHighlightText() {
  let search = $('#word_inp').val().trim();
  if(!search) {
      alert('내용을 입력해주세요');
  } else {
      // 기존에 있던 highlight 효과 제거
      if ($('#txt_area').find('.highlight')) $('#txt_area .highlight').contents().unwrap();
      
      let regex = new RegExp(search, 'gi');
      let original = $('#txt_area').html();
      
      let highlight = original.replace(/>([^<]+)</g, function(match, text) {
          return '>' + text.replace(regex, `<span class="highlight">${search}</span>`) + '<';
      });
      $('#txt_area').html(highlight);
  }
}

// RegExp(pattern, flags?)
// flags 에는 g i m s y u 문자를 받을 수 있다.

// 1. g: 문자열 전체를 확인한다.
// 2. i: 문자열 에서 대소문자를 구분하지 않는다.
// 3. m: 문자열 에서 `^` , `$` 에서 개행문자를 허용한다.
// 4. s: 문자열 에서 `.` 에서 개행문자를 허용한다.
// 5. y: lastIndex 부터 일치하는 문자열을 반환한다.
// 6. u: Unicode 코드 포인트의 시퀀스로 처리한다.