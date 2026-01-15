const wrap = document.getElementById("petals");

for(let i=0;i<25;i++){
  const p = document.createElement("div");
  p.className = "petal";

  p.style.left = Math.random()*100 + "vw";
  p.style.animationDuration = (6 + Math.random()*6) + "s, " + (2 + Math.random()*3) + "s";
  p.style.animationDelay = (-Math.random()*10) + "s";
  p.style.opacity = (0.4 + Math.random()*0.6);

  const size = 14 + Math.random()*22;
  p.style.width = size + "px";
  p.style.height = size + "px";

  wrap.appendChild(p);
}