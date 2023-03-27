let allGridItems = [...document.getElementsByClassName("grid_items")];
let popupBg = document.getElementById("popup_bg");
let popupImg = document.getElementById("popup_img");

const openPopup = (e) => {
    let gridItemClicked = e.target.closest(".grid_items");
    let clickedImageName = gridItemClicked.id;
    popupBg.classList.add("active");
    popupImg.src = `../Images/${clickedImageName}.jpg`;
};

const closePopup = () =>{
    popupBg.classList.remove("active")
}

allGridItems.forEach((el) => el.addEventListener("click", openPopup));
popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);


