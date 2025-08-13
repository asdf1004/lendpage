// 연도
document.getElementById('y').textContent = new Date().getFullYear();

// 목적지(기본 OGAds 링크)
const BASE_URL = 'https://appverification.net/cl/i/kld9we';

// 들어온 쿼리(UTM, 광고ID 등)를 모두 목적지로 전달
// 예: ?src=tiktok&subid=abcd → OGAds로 그대로 전달되도록
function buildDestUrl() {
  const src = new URLSearchParams(window.location.search);
  if ([...src.keys()].length === 0) return BASE_URL;
  const dest = new URL(BASE_URL);
  src.forEach((v, k) => dest.searchParams.set(k, v)); // utm_source, subid, s1~s5 등
  return dest.toString();
}

const DESTINATION_URL = buildDestUrl();

// 상단/본문/스티키 CTA에 링크 세팅
function setHref(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.setAttribute('href', DESTINATION_URL);
  el.setAttribute('rel', 'nofollow noopener noreferrer');
  el.setAttribute('target', '_blank');
}
setHref('primary-cta');
setHref('primary-cta-top');

// 스티키 바 버튼은 <button>이라 클릭 시 이동
const stickyBtn = document.getElementById('primary-cta-sticky');
if (stickyBtn) {
  stickyBtn.addEventListener('click', () => {
    window.open(DESTINATION_URL, '_blank', 'noopener,noreferrer');
  });
}

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
    }
  });
});

// 인앱 브라우저 대비: 3초 후 스티키 CTA 살짝 강조
setTimeout(()=>{
  if (stickyBtn) stickyBtn.style.transform = 'translateY(-1px)';
  setTimeout(()=>{ if (stickyBtn) stickyBtn.style.transform = 'translateY(0)'; }, 120);
}, 3000);
