const projects = [
  {
    "title": "Custom dashboards & inventory systems",
    "category": "AI-ASSISTED DEVELOPMENT / BUSINESS TOOLS",
    "image": "custom-inventory-system",
    "gallery": [
      {
        "image": "stock-planning-dashboard",
        "caption": "Stock planning dashboard with days-of-stock indicators and reorder priorities"
      }
    ],
    "description": "I use AI-assisted development to create practical dashboards and inventory systems around everyday business needs. These samples bring product records, stock counts, restocking, sales, and inventory summaries into clear, easy-to-use views. Color-coded stock indicators and reorder priorities help make the next steps easier to see, so there is less time spent sorting through information and more time to act.",
    "note": "Custom business-tool samples built with AI assistance. Selected business details are obscured."
  },
  {
    "title": "AI content repurposing workflow",
    "category": "AI AUTOMATION / ZAPIER",
    "image": "ai-automation",
    "extension": "jpg",
    "description": "A draft automation built in Zapier to turn new Google Drive files into reusable content. The workflow combines file filtering, AI transcription, and blog-post drafting, with branching paths prepared for Facebook and LinkedIn. Designed to reduce repetitive steps while leaving room for content review before publishing."
  },
  {
    "title": "Shopify website design",
    "category": "ECOMMERCE / STORE DESIGN",
    "image": "copenhagen-kid",
    "description": "Shopify website design samples featuring Copenhagen Kid and Twinie. Thoughtful page layouts, clear collection navigation, and cohesive brand presentation help customers explore products with ease."
  },
  {
    "title": "Inventory & fulfillment",
    "category": "OPERATIONS / CIN7",
    "image": "inventory",
    "description": "Support for a high-volume inventory system using Cin7, Google Sheets, and backend tools. I handled order fulfillment, dispatching, shipment tracking, data cleanup, and inventory updates to keep daily operations accurate and up to date."
  },
  {
    "title": "Project performance tracker",
    "category": "PROJECT MANAGEMENT / REPORTING",
    "image": "kpi",
    "description": "A KPI tracker created to keep project tasks, deadlines, and performance metrics organized, monitored, and on track. A clear view of the details that support consistent project coordination."
  },
  {
    "title": "AI photo creation",
    "category": "AI-GENERATED / PRODUCT & FASHION VISUALS",
    "image": "ai-fashion-lookbook",
    "gallery": [
      {
        "image": "ai-product-flatlay",
        "caption": "AI-generated product flat lay"
      }
    ],
    "description": "AI-generated fashion lookbooks and styled product visuals, created with a cohesive palette, considered lighting, and attention to composition. These samples show how I can help bring visual ideas to life for ecommerce content, social media, and creative concept development.",
    "note": "AI-generated portfolio samples."
  },
  {
    "title": "Invoice preparation in Xero",
    "category": "BUSINESS SUPPORT / XERO",
    "image": "xero-invoice",
    "description": "A sample of invoice preparation and tracking in Xero, keeping billing details organized and payment status easy to follow. Clear records support timely follow-ups and smoother day-to-day business administration."
  },
  {
    "title": "Event & calendar coordination",
    "category": "ADMIN / SCHEDULING",
    "image": "events",
    "description": "Event planning support through schedule management, registrations, calendar coordination, light booking, communication, and task tracking—from preparation through execution."
  }
];
const grid=document.getElementById('projects');
const dialog=document.getElementById('project-dialog');
projects.forEach((project,index)=>{
  const button=document.createElement('button');button.type='button';button.className='project';
  button.setAttribute('aria-label','View '+project.title);button.setAttribute('aria-haspopup','dialog');
  button.innerHTML=`<div class="project-visual ${project.image==='copenhagen-kid'?'shopify-visual':''}"><img src="assets/${project.image}.${project.extension||'png'}" alt="${project.title} work sample" loading="lazy">${project.image==='copenhagen-kid'?'<img src="assets/shopify-second.png" alt="Twinie Shopify store design" loading="lazy">':''}</div><div class="project-info"><div><h3>${project.title}</h3><small>${project.category}</small></div><span class="project-arrow" aria-hidden="true">↗</span></div>`;
  button.addEventListener('click',()=>{document.getElementById('project-title').textContent=project.title;document.getElementById('project-category').textContent=project.category;document.getElementById('project-description').textContent=project.description;const img=document.getElementById('project-image');img.src=`assets/${project.image}.${project.extension||'png'}`;img.alt=project.title+' work sample';dialog.querySelectorAll('.project-gallery').forEach(el=>el.remove());
if(project.gallery){const gallery=document.createElement('div');gallery.className='project-gallery';for(const sample of project.gallery){const figure=document.createElement('figure');const photo=document.createElement('img');photo.src='assets/'+sample.image+'.png';photo.alt=sample.caption;photo.loading='lazy';const caption=document.createElement('figcaption');caption.textContent=sample.caption;figure.append(photo,caption);gallery.append(figure);}dialog.querySelector('.dialog-copy').append(gallery);}
dialog.querySelector('.confidential').textContent=project.note||'Work sample from my portfolio. Client details are kept confidential.';dialog.showModal();document.body.style.overflow='hidden';});grid.append(button);
});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.style.overflow='';});
document.getElementById('year').textContent=new Date().getFullYear();
