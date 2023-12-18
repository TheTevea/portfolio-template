// nav menu section start
const burgerMenu = document.querySelector('.burger-button');
const closeMenu = document.querySelector('.close-button');
const navBar = document.querySelector('.menu');
const icon = burgerMenu.querySelector(".ri-menu-fill");
const menu_items = document.querySelectorAll(".menu li a");

burgerMenu.addEventListener("click", function(){
    navBar.classList.toggle("toogle");
    checkIcon();
});

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        checkIcon();
        navBar.classList.toggle("toogle");
    })
})

const checkIcon = ()=>{
    if(icon.classList.contains("ri-menu-fill")){
        icon.classList.replace("ri-menu-fill","ri-close-line");
    }
    else{
        icon.classList.replace("ri-close-line","ri-menu-fill");
    }
}
// nav menu section end


// menu list portfolio start

// active btn start
const btnMenu = document.querySelector(".btn-container");
const allBtn = document.querySelectorAll(".p-btn");
const menuWrapper = document.querySelector(".menu-wrapper .row");

btnMenu.addEventListener("click", function (e) {
  const btnId = e.target.dataset.id;

  allBtn.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
// active btn end

const menuProducts = [
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-1.jpg",
        aosValue: "zoom-in",
    },
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-2.jpg",
        aosValue: "zoom-out",
    },
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-3.jpg",
        aosValue: "zoom-in",
    },
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-4.jpg",
        aosValue: "zoom-out",
    },
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-5.jpg",
        aosValue: "zoom-in",
    },
    {
        category: "1",
        imgSrc: "../assets/images/portfolio/1-6.jpg",
        aosValue: "zoom-out",
    },

    {
        category: "2",
        imgSrc: "../assets/images/portfolio/1-1.jpg",
        aosValue: "fade-down",
    },
    {
        category: "2",
        imgSrc: "../assets/images/portfolio/1-2.jpg",
        aosValue: "fade-up",
    },

    {
        category: "2",
        imgSrc: "../assets/images/portfolio/1-3.jpg",
        aosValue: "fade-down",
    },

    {
        category: "3",
        imgSrc: "../assets/images/portfolio/3-1.jpg",
        aosValue: "flip-down",
    },
    {
        category: "3",
        imgSrc: "../assets/images/portfolio/3-2.jpg",
        aosValue: "flip-up",
    },
    
];



    allBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const id = e.currentTarget.dataset.id;

            const filterMenu = menuProducts.filter((items) => {
            return items.category == id;
            });
            if (id == "all") {
            showingProducts(menuProducts);
            } else {
            showingProducts(filterMenu);
            }
        });
    });


    window.addEventListener("DOMContentLoaded", () => {
        showingProducts(menuProducts);
    });

    const showingProducts = (arrProducts) => {
    const displayProducts = arrProducts
        .map((p) => {
        return `<div class="col-lg-4 mt-4" data-aos="${p.aosValue}" data-aos-duration="500">
                    <article class="card bg-transparent">
                        <img src="${p.imgSrc}" alt="${p.category}" class="img" />
                    </article>
                </div>`;
        })
        .join("");
    menuWrapper.innerHTML = displayProducts;
    };
// menu lisst portfolio end