function mobileDrone(state,els,scroll){
 const box=els.canvas,shift=els.shift;if(!box||!shift)return true;
 const canvas=box.querySelector('.drone-overlay-canvas');if(!canvas)return true;
 if(innerWidth>=768){if(box.dataset.kutalMobile){for(const key of ['width','left','height'])canvas.style.removeProperty(key);for(const key of ['animation','transform'])box.style.removeProperty(key);shift.style.removeProperty('transform');delete box.dataset.kutalMobile;}return false;}
 box.dataset.kutalMobile='true';
 const vh=box.offsetHeight||innerHeight, clamp=x=>Math.max(0,Math.min(1,x));
 const cap=els.cap,visual=els.capVisual,lock=els.lock;
 const cr=cap?.getBoundingClientRect(),vr=visual?.getBoundingClientRect(),lr=lock?.getBoundingClientRect();
 const hero=document.getElementById('hero'),intro=document.getElementById('intro-section'),ir=intro?.getBoundingClientRect();
 const inCap=!!cr&&!!vr&&cr.top<innerHeight-100&&cr.bottom>76;
 const inFlight=scroll<(lock?lock.offsetTop+lock.offsetHeight:vh);
 state.landingActive.current=false;state.landingPlay.current=false;
 state.capActive.current=inCap;state.droneHidden.current=!(inCap||inFlight);
 box.style.setProperty('visibility',state.droneHidden.current?'hidden':'visible','important');
 box.style.setProperty('position','fixed','important');box.style.setProperty('top','0px','important');
 box.style.setProperty('opacity','1','important');box.style.setProperty('transition','none','important');
 box.style.setProperty('animation','none','important');box.style.setProperty('transform','none','important');
 shift.getAnimations().forEach(a=>a.cancel());
 canvas.style.setProperty('width','100%','important');canvas.style.setProperty('left','0','important');
 if(inCap){
  const start=cr.top+scroll,span=Math.max(1,cap.offsetHeight-vh);
  const progress=clamp((scroll-start)/span);state.capProgress.current=nM.capItemProgress(progress);state.capActive.current=false;state.scrollProgress.current=1;state.lockYawDeg.current=Math.sin(progress*Math.PI*2)*22;
  box.style.setProperty('clip-path',`inset(${Math.max(76,vr.top)}px 0 ${Math.max(0,vh-vr.bottom)}px 0)`,'important');
  canvas.style.setProperty('height',`${vr.height}px`,'important');
  shift.style.setProperty('transform',`translate3d(0,${vr.top}px,0)`,'important');
 }else{
  state.capProgress.current=0;
  state.scrollProgress.current=clamp(scroll/(vh*.6));
  const gear=!!lr&&lr.top<=76&&lr.bottom>vh;
  state.lockYawDeg.current=gear?Math.sin(clamp((76-lr.top)/Math.max(1,lock.offsetHeight-vh))*Math.PI*2)*24:0;
  canvas.style.setProperty('height','100%','important');
  box.style.setProperty('clip-path','none','important');
  let y=gear?-vh*.12:0;
  if(ir&&ir.top<vh*.65&&ir.bottom>0&&!gear){const image=intro.querySelector('img')?.getBoundingClientRect();if(image)y=Math.max(0,Math.min(vh*.28,image.top+image.height*.5-vh*.5));}
  shift.style.setProperty('transform',`translate3d(0,${y}px,0)`,'important');
 }
 return true;
}