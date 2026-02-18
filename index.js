import{a as w,S as q,i as l}from"./assets/vendor-B5nsgUv9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const v="https://pixabay.com/api/",P="54692490-9d55b619ee1b8c5417df4aadc";async function m(o,r=1,i=15){return(await w.get(v,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i}})).data}const p=document.querySelector(".gallery");document.querySelector(".loader");const x=new q(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:S,downloads:b})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img
              class="gallery-image" 
              src="${i}" 
              alt="${e}" 
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><p class="info-item-text">Likes</p> <p class="info-item-value">${t}</p></li>
            <li class="info-item"><p class="info-item-text">Views</p> <p class="info-item-value">${s}</p></li>
            <li class="info-item"><p class="info-item-text">Comments</p> <p class="info-item-value">${S}</p></li>
            <li class="info-item"><p class="info-item-text">Downloads</p> <p class="info-item-value">${b}</p></li>
          </ul>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",r),x.refresh()}function E(){p.innerHTML=""}function y(){document.querySelector(".loader").hidden=!1}function g(){document.querySelector(".loader").hidden=!0}const L=document.querySelector(".form"),R=L.elements["search-text"],c=document.querySelector(".load-button");let u="",a=1,d=0;const f=15;L.addEventListener("submit",$);c.addEventListener("click",M);async function $(o){o.preventDefault();const r=R.value.trim();if(!r){l.warning({message:"Please enter a search query!",position:"topRight"});return}u=r,a=1,E(),c.hidden=!0,y();try{const i=await m(u,a,f);if(!i.hits.length){l.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}d=Math.ceil(i.totalHits/f),h(i.hits),a<d&&(c.hidden=!1)}catch{l.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}}async function M(){a+=1,y();try{const o=await m(u,a,f);h(o.hits),O(),a>=d&&(c.hidden=!0,l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{l.error({message:"Failed to load more images.",position:"topRight"})}finally{g()}}function O(){const o=document.querySelector(".gallery-item");if(!o)return;const{height:r}=o.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
