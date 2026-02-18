import{a as p,S as d,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="54692490-9d55b619ee1b8c5417df4aadc";async function h(r){return(await p.get(y,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const i=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:o,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img
              class="gallery-image" 
              src="${s}" 
              alt="${e}" 
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><p class="info-item-text">Likes</p> <p class="info-item-value">${t}</p></li>
            <li class="info-item"><p class="info-item-text">Views</p> <p class="info-item-value">${o}</p></li>
            <li class="info-item"><p class="info-item-text">Comments</p> <p class="info-item-value">${f}</p></li>
            <li class="info-item"><p class="info-item-text">Downloads</p> <p class="info-item-value">${m}</p></li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",i),L.refresh()}function v(){c.innerHTML=""}function w(){u.classList.add("is-visible")}function x(){u.classList.remove("is-visible")}const l=document.querySelector(".form"),S=l.elements["search-text"];l.addEventListener("submit",async r=>{r.preventDefault();const i=S.value.trim();if(!i){n.warning({message:"Please enter a search query!",position:"topRight"});return}v(),w();try{const s=await h(i);if(!s.hits.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{x(),l.reset()}});
//# sourceMappingURL=index.js.map
