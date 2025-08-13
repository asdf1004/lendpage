// 연도 자동 업데이트
document.getElementById('y').textContent = new Date().getFullYear();

// 주요 CTA 링크(OGAds/쿠팡/노션 등) 한 곳에서 바꿔치기
// ↓ 여기에 네 실제 목적지 링크를 넣어줘
const DESTINATION_URL = 'https://your-target-link.example';
document.getElementById('primary-cta').setAttribute('href', DESTINATION_URL);

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
