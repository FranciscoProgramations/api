chamaPokemon()

async function chamaPokemon(){
    try
    {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/reshiram`)
        if(!resposta.ok)
        {
            throw new Error("Pokemon não encontrado, tente novamente.")
        }
        const obj = await resposta.json();

        const sprite = obj.sprites.front_default;
        const spriteIMG = document.getElementById("sprite");

        spriteIMG.src = sprite;
        spriteIMG.style.display = "block";

        const dex = obj.id;
        const numDex = document.getElementById("dex");

        numDex.innerHTML = dex
        
        console.log(dex)
        console.log(obj.name)
    }
    catch(e)
    {    alert(e)

    }
}