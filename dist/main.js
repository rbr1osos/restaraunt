(()=>{"use strict";const e=function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home-content");const t=document.createElement("div");t.classList.add("left-content");const n=document.createElement("h2");n.classList.add("header-h2"),n.textContent="CHEF'S SPECIAL";const i=document.createElement("h1");i.classList.add("header-h1"),i.textContent="Freshness in Every Bite";const s=document.createElement("p");s.classList.add("header-p"),s.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet rutrum nibh, et sollicitudin.";const a=document.createElement("button");a.classList.add("book-button"),a.textContent="Book a Table";const c=document.createElement("img");return c.classList.add("hero-image"),c.src="../dist/images/hero.png",t.appendChild(n),t.appendChild(i),t.appendChild(s),t.appendChild(a),e.appendChild(t),e.appendChild(c),e}())};function t(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const n=document.querySelector(".content");n.appendChild(function(n){const i=document.createElement("header");i.setAttribute("id","header");const s=document.createElement("img");s.setAttribute("id","logo"),s.src="../dist/images/logo.png",i.appendChild(s);const a=document.createElement("div");a.setAttribute("id","right-content");const c=document.createElement("button");c.classList.add("button-nav"),c.textContent="Home",c.addEventListener("click",(n=>{n.target.classList.contains("active")||(t(c),e())}));const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Menu",d.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(d),function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h1");t.classList.add("menu-title"),t.innerHTML="our menu",e.appendChild(t),document.createElement("div").classList.add("item-container");const n=document.createElement("div");n.classList.add("food-item");const i=document.createElement("div");i.classList.add("top-listing");const s=document.createElement("h2");s.classList.add("food-name"),s.innerHTML="Food Name 1";const a=document.createElement("h3");a.classList.add("food-price"),a.innerHTML="24",i.appendChild(s),i.appendChild(a);const c=document.createElement("p");return c.classList.add("food-desc"),c.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue neque eget ex imperdiet pharetra. Etiam et sagittis magna. Sed euismod ex suscipit orci dapibus.",n.appendChild(i),n.appendChild(c),e.appendChild(n),e}())}())}));const o=document.createElement("button");return o.classList.add("button-nav"),o.textContent="About",o.addEventListener("click",(e=>{e.target.classList.contains("active")||(t(o),function(){const e=document.querySelector("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");const t=document.createElement("img");t.classList.add("chef-image"),t.src="../dist/images/chef.png";const n=document.createElement("div");n.classList.add("about-right-content");const i=document.createElement("h1");i.classList.add("about-title"),i.innerHTML="CHEFFIN NAME HERE";const s=document.createElement("div");s.classList.add("paragraph");const a=document.createElement("p");a.classList.add("about-p"),a.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur sapien in nisi aliquam molestie. Maecenas tempus vestibulum ultrices. Morbi nec maximus risus. Cras non nisl ante. Nulla facilisi. Integer tristique nunc non dolor scelerisque maximus. Fusce tincidunt eros massa, eu ullamcorper leo posuere lacinia. Fusce ut sem venenatis ligula consectetur ultricies in id ligula.";const c=document.createElement("p");return c.classList.add("about-p"),c.innerHTML="Sed quis est est. Nam non tortor dapibus, convallis enim ac, pulvinar nunc. Sed maximus sagittis tincidunt. Vestibulum sed mauris at lectus rutrum blandit. Maecenas at tellus ut ipsum pellentesque pretium ut feugiat diam. Vestibulum lobortis mauris et dui dictum sodales. Vestibulum id sodales tortor. Donec ut est vitae magna consequat molestie a a dolor.",s.appendChild(a),s.appendChild(c),n.appendChild(i),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}())}())})),a.appendChild(c),a.appendChild(d),a.appendChild(o),i.appendChild(a),i}()),n.appendChild(function(){const e=document.createElement("main");return e.classList.add("main-content"),e.setAttribute("id","main-content"),e}()),n.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent=`Copyright © ${(new Date).getFullYear()} rbr1osos`,e.appendChild(t),e}()),t(document.querySelector(".button-nav")),e()}()})();