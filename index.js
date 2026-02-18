import{a as w,S as q,i as l}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",P="54692490-9d55b619ee1b8c5417df4aadc";async function m(t,r=1,i=15){return(await w.get(v,{params:{key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i}})).data}const p=document.querySelector(".gallery");document.querySelector(".loader");const x=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const r=t.map(({webformatURL:i,largeImageURL:a,tags:e,likes:o,views:s,comments:S,downloads:b})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img
              class="gallery-image" 
              src="${i}" 
              alt="${e}" 
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><p class="info-item-text">Likes</p> <p class="info-item-value">${o}</p></li>
            <li class="info-item"><p class="info-item-text">Views</p> <p class="info-item-value">${s}</p></li>
            <li class="info-item"><p class="info-item-text">Comments</p> <p class="info-item-value">${S}</p></li>
            <li class="info-item"><p class="info-item-text">Downloads</p> <p class="info-item-value">${b}</p></li>
          </ul>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r),x.refresh()}function E(){p.innerHTML=""}function y(){const t=document.querySelector(".loader");t.hidden=!1}function g(){const t=document.querySelector(".loader");t.hidden=!0}const L=document.querySelector(".form"),R=L.elements["search-text"],c=document.querySelector(".load-button");let u="",n=1,d=0;const f=15;c.hidden=!0;L.addEventListener("submit",$);c.addEventListener("click",M);async function $(t){t.preventDefault();const r=R.value.trim();if(!r){l.warning({message:"Please enter a search query!",position:"topRight"});return}u=r,n=1,E(),c.hidden=!0,y();try{const i=await m(u,n,f);if(!i.hits.length){l.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}d=Math.ceil(i.totalHits/f),h(i.hits),c.hidden=n>=d}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}}async function M(){n+=1,y();try{const t=await m(u,n,f);h(t.hits),O(),n>=d&&(c.hidden=!0,l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({message:"Failed to load more images.",position:"topRight"})}finally{g()}}function O(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
