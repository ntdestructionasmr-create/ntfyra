const panes=[...document.querySelectorAll('.step-pane')];
const stepNo=document.getElementById('stepNo');
const nextBtn=document.getElementById('nextBtn');
const backBtn=document.getElementById('backBtn');

let i=0;
const data={};

function show(){
  panes.forEach(p=>p.classList.remove('active'));
  panes[i].classList.add('active');
  stepNo.textContent=i+1;
  backBtn.style.visibility=i===0?'hidden':'visible';
  nextBtn.textContent = i===panes.length-1 ? 'Finish' : 'Continue';
}
show();

document.querySelectorAll('.choices button').forEach(b=>{
  b.onclick=()=>{
    b.parentElement.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    Object.assign(data, b.dataset);
  }
});

nextBtn.onclick=()=>{
  if(i===0){
    data.height=document.getElementById('height').value;
    data.weight=document.getElementById('weight').value;
    if(!data.height||!data.weight){alert('Enter height & weight');return;}
  }
  if(i<panes.length-1){ i++; show(); }
  else{
    localStorage.setItem('ntfyra_onboard', JSON.stringify(data));
    window.location.href='dashboard.html'; // create later
  }
};

backBtn.onclick=()=>{ if(i>0){ i--; show(); } };
