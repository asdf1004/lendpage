// 연도 자동 업데이트
document.getElementById('y').textContent = new Date().getFullYear();

// 주요 CTA 링크(OGAds/쿠팡/노션 등) 한 곳에서 바꿔치기
// ▼ 준의 OGAds 오퍼 링크
const DESTINATION_URL = 'https://appverification.net/cl/i/kld9we';

// 버튼에 목적지 링크 주입 + 보안/정책 속성 부여
const primary = document.getElementById('primary-cta');
if (primary) {
  primary.setAttribute('href', DESTINATION_URL);
  primary.setAttribute('rel', 'nofollow noopener noreferrer');
}

// 부드러운 스크롤(광고 느낌 없이 자연스러운 인터랙션)
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
