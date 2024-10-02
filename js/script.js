const loadCategory = () => {
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(res => res.json())
   .then(data => categoryBtn(data.categories))
   .catch(err => console.log(err))
}

const categoryBtn = (categories) =>{
   const categoryContainer = document.getElementById('category-container');
   categories.forEach((item) => {
      const button = document.createElement('button')
      button.classList = 'btn btn-error text-white font-semibold'
      button.innerText = item.category;
      categoryContainer.appendChild(button);
   })
}

const loadVideo = () => {
   fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
   .then(res => res.json())
   .then(data => videoTab(data.videos))
   .catch(err => console.log(err))
}

const videoTab = (videos) =>{
   const videoContainer = document.getElementById('videos');
   videos.forEach((video) => {
      const card = document.createElement('div')
      const isVerified = video.authors[0].verified
      card.classList = "card-compact"
      card.innerHTML= `
      <figure class="h-[180px] relative">
         <img
            src="${video.thumbnail}"
            class="w-full h-full object-cover rounded-lg" />
            ${ video.others.posted_date?.length == 0 ? "" : `<span class="absolute bottom-2 px-2 rounded bg-black text-white right-2">${timeString(video.others.posted_date)}</span>`}
      </figure>
      <div class="card-side flex gap-6 items-start pt-4">
         <figure class="rounded-full h-[50px] w-[50px]">
            <img
               src="${video.authors[0]['profile_picture']}" 
               class="object-cover w-full h-full"/>
         </figure>
         <div class="">
            <h2 class="card-title">${video.title}</h2>
            <div class="flex gap-2 items-center">
            <P>${video.authors[0]['profile_name']}</P>
            <p>${isVerified === true ? `<i class="fa-solid fa-badge-check" style="color: #146aff;"></i>`: ""}</p>
            </div>
            <p>${video.others.views} views </p>
         </div>
      </div>
      `
      videoContainer.appendChild(card)
   })
}

loadCategory()
loadVideo()

function timeString(time){
   const hrs = parseInt(time/ 3600);
   const mins = parseInt((time % 3600)/60);
   const secs = parseInt((time % 3600) % 60);
   return `${hrs} hrs ${mins} mins ${secs} secs ago`
}