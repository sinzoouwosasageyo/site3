/*header 스크롤클래스 호출*/
var header = new EzenScrollClass("header",{
  baseline: 100,
});

/*main_visual 스와이퍼 호출*/
var main_visual = new Swiper("#main_visual",{
  wrapperClass:"slider",  //슬라이드 요소를 감싸는 요소의 클래스
  slideClass:"view",  //슬라이드 요소들의 클래스
  slideActiveClass:"active",    //보이는 슬라이드에 추가되는 클래스명
  spaceBetween: 10,   //사이간격
  speed: 800,   //슬라이드 되는 시간
  loop: true,
  autoplay:{    //자동슬라이드
    delay: 5000,    //전환간격(5초)    
  },
  pagination: {   //페이지버튼 생성
    el: '.pager',   //버튼영역 지정
    clickable: true,    //클릭 시 슬라이드 전환기능 활성화
    bulletActiveClass:"active",   //활성화된 버튼에 추가되는 클래스
  },
});

/* press 스와이퍼 호출 */
var press = new Swiper("#press .inner",{
  wrapperClass:"slider",
  slideClass:"item",
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    //화면의 너비가 320 이상 적용 옵션
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    //화면의 너비가 640 이상 적용 옵션
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    //화면의 너비가 768 이상 적용 옵션
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    //화면의 너비가 1024 이상 적용 옵션
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: '.dot',
    clickable: true,
    bulletActiveClass:"active",
  },
});


//검색영역 스크립트
var search = document.getElementById("search");

function open_search(){
  search.classList.add("show");
}

function close_search(){
  search.classList.remove("show");
}

//메뉴영역 스크립트
var menu = document.querySelector(".menu");

function open_menu(btn){
  menu.classList.toggle("active");
  btn.classList.toggle("active");
}