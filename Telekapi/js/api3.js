chamaRM()
chamaGoT()
chamaST()

async function chamaRM(){
    try
    {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/48`)
        const obj = await resposta.json();

        const nome = obj.name
        const RMnome =document.getElementById("nom")

        const status = obj.status
        const RMstatus = document.getElementById("stat")

        RMnome.innerHTML = "Nome: "+nome
        RMstatus.innerHTML = "Status: "+status
        
    }
    catch(e)
    {    alert(e)

    }
}

async function chamaGoT(){
    try
    {
        const resposta = await fetch(`https://anapioficeandfire.com/api/characters/583`)
        const obj = await resposta.json();

        const nome2 = obj.name
        const GoTnome =document.getElementById("nom2")

        const culture = obj.culture
        const GoTculture =document.getElementById("cultur")

        const titles = obj.titles
        const GoTtitles = document.getElementById("tit")

        GoTnome.innerHTML = "Nome: "+nome2
        GoTculture.innerHTML = "Cultura: "+culture
        GoTtitles.innerHTML = "Títulos: "+titles
        
    }
    catch(e)
    {    alert(e)

    }
}

async function chamaST(){
    try
    {
        const resposta = await fetch(`https://swapi.dev/api/planets/1`)
        const obj = await resposta.json();

        const nome3 = obj.name
        const STnome = document.getElementById("nom3")

        const clima = obj.climate
        const STclima = document.getElementById("clima")

        const population = obj.population
        const STpopulation = document.getElementById("popula")


        STnome.innerHTML = "Nome do Planeta: "+nome3
        STclima.innerHTML = "Clima: "+clima
        STpopulation.innerHTML = "População: "+population
    }
    catch(e)
    {    alert(e)

    }
}
