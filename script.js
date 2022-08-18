// Base de dados [ MODELO ]
const mainDados = {
    user: [
        { userName: 'Fernanda'}
    ],
    items: [
        { 
            id: 1,
            owner: 'Fernanda',
            content: 'Primeiro Item'
        }
    ],
    createItem(dados, htmlOnly = false){
        if(!htmlOnly) {

            //cria item na memoria        
            mainDados.items.push({
                id: mainDados.items.length + 1,
                    owner: dados.owner,
                    content: dados.content
            })

        }       

        //cria item no html
        const $itemList = document.querySelector('.item-lista')
        $itemList.insertAdjacentHTML('afterbegin', `<li>${dados.content}</li>`)
    }

}

// Código Front End : WEb [ Cria novo item <li>]
const $form = document.querySelector(".formulario")
console.log($form)

// CREATE [CRUD]
$form.addEventListener('submit', function createItemController(infosDoEvento) {
    infosDoEvento.preventDefault()
    console.log('Criando novo item')

    const $createItem = document.querySelector('input[name="create-item"]')

    mainDados.createItem({ owner: "jonilei", content: $createItem.value})
    
    $createItem.value = ''
})

// READ [CRUD]
mainDados.items.forEach(({ owner, content }) => {
    mainDados.createItem({ owner: owner, content: content}, true)
})