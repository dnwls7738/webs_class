        //modal
        const modal = function () {
            //버튼을 클릭하면 modal 창을 보이게(show)
            document.querySelector(".source_btn").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("show");
                document.querySelector("#modal").classList.remove("hide");
            });
            //버튼을 클릭하면 modal 창을 안보이게(remove)
            document.querySelector(".modal_close").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("hide");
            });
            document.querySelector(".close").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("hide")
            })
        }
        modal();

        //tabMenu
        const tabMenu = function () {

            const tabBtn = document.querySelectorAll(".menu-bar > span");
            const tabCont = document.querySelectorAll(".view_cont > div");

            tabBtn.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    //모든 버튼 active 삭제
                    for (let btn of tabBtn) {
                        btn.classList.remove("active");
                    };
                    //내가 클릭한 버튼 active 추가
                    btn.classList.add("active");

                    //모든 컨텐츠 박스 안보이게
                    tabCont.forEach(cont => {
                        cont.style.display = "none";
                    });
                    //내가 클릭한 컨텐츠 박스 보이게
                    tabCont[index].style.display = "block";

                });
            });
        };
        tabMenu();