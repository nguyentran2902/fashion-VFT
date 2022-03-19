// ________________Tag-UI______________________

const menuLists = document.querySelectorAll(".list-menu-items");
const contentLists = document.querySelectorAll(".ad-content-items");



menuLists.forEach(function(menuList, index) {
    var contentList = contentLists[index]
    menuList.onclick = function() {

        document.querySelector('.list-menu-items.active').classList.remove('active')
        document.querySelector('.ad-content-items.active').classList.remove('active')

        this.classList.add('active')
        contentList.classList.add('active')

    }

});

