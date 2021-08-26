!(function(){
  var movie = document.querySelector('.hero .movieArea'),
      slide = document.querySelector('.hero .slideArea');
  if(w.pc){
    movie.insertAdjacentHTML('beforeend','<video loop muted class="video" data-object-fit="cover"><source src="'+movie.dataset.movie+'" type="video/mp4"></video>');
    movie.querySelector('.video').play();
  }else{
    Array.prototype.forEach.call(slide.querySelectorAll('.swiper-slide'),function(e){
      e.style.backgroundImage = 'url('+e.dataset.slide+')';
    });
  }
  var heroSlider = new Swiper('.hero .swiper-container',{
    loop:true,
    effect:"fade",
    speed:800,
    autoplay:{
      delay:4000,
      disableOnInteraction:false
    }
  });
  var slideList01 = new Swiper('.slideList.list01 .swiper-container',{
    loop:true,
    slidesPerView:2,
    spaceBetween:12,
    breakpoints:{
      767:{
        slidesPerView:1,
        spaceBetween:0
      }
    },
    navigation:{
      nextEl:'.swiper-arrow.next',
      prevEl:'.swiper-arrow.prev',
    }
  });
  var slideView02 = 2;
  if(document.querySelector('.slideList.list02')){
    var slideItem02 = document.querySelector('.slideList.list02 .swiper-wrapper').childElementCount;
    if(slideItem02 > 2) {
      slideView02 = 3;
    }
  }
  var slideList02 = new Swiper('.slideList.list02 .swiper-container',{
    loop:true,
    slidesPerView:slideView02,
    spaceBetween:12,
    breakpoints:{
      767:{
        slidesPerView:1,
        spaceBetween:0
      }
    },
    navigation:{
      nextEl:'.swiper-arrow.next',
      prevEl:'.swiper-arrow.prev',
    }
  });
  var instagram = document.querySelector('.snsBox.instagram'),
      facebook  = document.querySelector('.snsBox.facebook');
  if(w.pc){
    facebook.insertAdjacentHTML('beforeend','<div class="fb-page" data-href="https://www.facebook.com/umimuko" data-tabs="timeline" data-width="440" data-height="440" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/umimuko" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/umimuko">海ノ向こうコーヒー</a></blockquote></div>');
  }else{
    facebook.insertAdjacentHTML('beforeend','<div class="fb-page" data-href="https://www.facebook.com/umimuko" data-tabs="timeline" data-width="480" data-height="320" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/umimuko" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/umimuko">海ノ向こうコーヒー</a></blockquote></div>');
  }
  var hhead = document.querySelector('.homeHead'),
      headY = 480;
  if(w.pc){
    headY = 320;
  }
  var hstory = document.querySelector('.homeBody.story'),
      storyY = 320,
      storyP = -320;
  if(w.pc){
    storyY = 480;
    storyP = -480;
  }
  window.addEventListener('scroll',_.throttle(function(){
    if(hhead.getBoundingClientRect().top<=headY && !hhead.classList.contains('is-show')){
      hhead.classList.add('is-show');
    }
  },200),false);
  window.addEventListener('scroll',function(){
    Array.prototype.forEach.call(hstory.querySelectorAll('.img'),function(e){
      if(hstory.getBoundingClientRect().top < 0){
        e.style.transform = '';
      }else{
        e.style.transform = 'translateY('+hstory.getBoundingClientRect().top/2+'px)';
      }
    });
  },false);
}());