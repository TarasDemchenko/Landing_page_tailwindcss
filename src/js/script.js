function toggleMenu() {
  const menu = document.querySelector('#mobile-menu');
  const burger = document.querySelector('#burger');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    body.classList.toggle('overflow-hidden');
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.99) {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      burger.classList.remove('active');
      body.classList.remove('overflow-hidden');
    }
  });
}
toggleMenu();

// Tabs

function toggleTabs(tabsTriggersClass, tabsContentClass){
  const tabsTriggers = document.querySelectorAll(tabsTriggersClass)
  const tabsContents = document.querySelectorAll(tabsContentClass)
   
  tabsTriggers.forEach((trigger, idx) => {
    trigger.addEventListener('click', () => {
      tabsTriggers.forEach((t) => t.classList.remove('active'))
      
      trigger.classList.add('active')

     tabsContents.forEach(content => {
        content.classList.add('hidden')
      })
tabsContents[idx].classList.remove('hidden')
    })
  })
}

toggleTabs('.tab-trigger', '.tab-content')