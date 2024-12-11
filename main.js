let admins = [{ 
    name: 'asan', 
    age: 24, 
    balans: 20000, 
    user: 123 
}, 
{ 
    name: 'uson', 
    age: 24, 
    balans: 14000, 
    user: 1234 
}, 
{ 
    name: 'esen', 
    age: 27, 
    balans: 6000, 
    user: 12345  
} 
];


while (true) {

    let n = prompt('Введите логин');

    for(let i = 0; i < admins.length; i++){
        if(admins[i].name == n){
            alert(`Добро пожаловать ${admins[i].name.toUpperCase().slice(0,1) + admins[i].name.slice(1)}`);

            n = prompt('Введите свой пароль цифрами');

            if(n == admins[i].user){
                n = prompt(`${admins[i].name.toUpperCase().slice(0,1) + admins[i].name.slice(1)} \n Eсли хотите узнать свой баланс, введите 1 \n Если хотите снять баланс, введите 2`)

                if(n == 1){
                    alert(`Ваш текущий баланс: ${admins[i].balans} сом`)
                }else if (n == 2) {
                    n = prompt('Сколько вы хотите снять?');
                    if(n < admins[i].balans){
                        alert(`${admins[i].name.toUpperCase().slice(0,1) + admins[i].name.slice(1)} \n Ваш текущий баланс : ${admins[i].balans} сом \n Вы сняли : ${n} сом \n ${n} - ${admins[i].balans} \n  Остаток вашего баланса : ${admins[i].balans - n} сом`)
                    }else {
                        alert('Недостаточно средств на счете.');
                    }

                }else {
                    alert('Неверный пароль. Попробуйте снова.');
                }
            }    
        }
    }
    n = prompt(`Для выхода введите 1. Хотите продолжить нажмите enter`)
    if (n == 1){
        break
    }
}
        


            



                   

