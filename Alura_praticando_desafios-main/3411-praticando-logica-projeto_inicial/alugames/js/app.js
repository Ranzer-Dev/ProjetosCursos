function alterarStatus(n) {

        //provalvemte posso fazer um for, mas quero avançar no curso

        game3_childrens = document.getElementById('game-3').children

        game3_childrens_div = game3_childrens[0]
        game3_childrens_p = game3_childrens[1]
        game3_childrens_a = game3_childrens[2]

        game2_childrens = document.getElementById('game-2').children

        game2_childrens_div = game2_childrens[0]
        game2_childrens_p = game2_childrens[1]
        game2_childrens_a = game2_childrens[2]

        game1_childrens = document.getElementById('game-1').children

        game1_childrens_div = game1_childrens[0]
        game1_childrens_p = game1_childrens[1]
        game1_childrens_a = game1_childrens[2]

        if (n == 3) {
            if (game3_childrens_div.classList.value == "dashboard__item__img") {
                game3_childrens_div.classList.value = "dashboard__item__img dashboard__item__img--rented"
            } else {
                game3_childrens_div.classList.value = "dashboard__item__img"
            }
    
            if (game3_childrens_a.classList.value == "dashboard__item__button") {
                game3_childrens_a.classList.value = "dashboard__item__button dashboard__item__button--return"
                game3_childrens_a.innerHTML = 'Devolver'
            } else {
                game3_childrens_a.classList.value = "dashboard__item__button"
                game3_childrens_a.innerHTML = 'Alugar'
            }
        }
        

    if (n == 2){
        if (game2_childrens_div.classList.value == "dashboard__item__img") {
            game2_childrens_div.classList.value = "dashboard__item__img dashboard__item__img--rented"
        } else {
            game2_childrens_div.classList.value = "dashboard__item__img"
        }

        if (game2_childrens_a.classList.value == "dashboard__item__button") {
            game2_childrens_a.classList.value = "dashboard__item__button dashboard__item__button--return"
            game2_childrens_a.innerHTML = 'Devolver'
        } else {
            game2_childrens_a.classList.value = "dashboard__item__button"
            game2_childrens_a.innerHTML = 'Alugar'
        }
    }

    if(n == 1){
        if (game1_childrens_div.classList.value == "dashboard__item__img") {
            game1_childrens_div.classList.value = "dashboard__item__img dashboard__item__img--rented"
        } else {
            game1_childrens_div.classList.value = "dashboard__item__img"
        }

        if (game1_childrens_a.classList.value == "dashboard__item__button") {
            game1_childrens_a.classList.value = "dashboard__item__button dashboard__item__button--return"
            game1_childrens_a.innerHTML = 'Devolver'
        } else {
            game1_childrens_a.classList.value = "dashboard__item__button"
            game1_childrens_a.innerHTML = 'Alugar'
        }
    }
}