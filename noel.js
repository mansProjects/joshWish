const friendsImages = document.getElementById('images')
const btn = document.getElementById('btn')
const friendName = document.getElementById('friendName')
const inputSection = document.querySelector('.photo')
const happyBirthday = document.querySelector('.image')
const titreAnnonce = document.querySelector('.h1')
btn.addEventListener('click',()=>{
    switch (friendName.value) {
        case 'Helvine':
            inputSection.classList.add('friendsImages')
            inputSection.innerHTML="<img src='helvine.jpg'><br><h2>L'age n'exclut pas la gentillesse ni l'amour, une danseuse à l'énergie au rendez-vous! Vous comptez pour moi chère Vine Kambombo alors pour ces fetes de fin d'année j'ai pu pensez à vous. Joyeux Noel et Meilleurs voeux !!!!!</h2>"
           break;
           case 'Altesse':
            inputSection.classList.add('friendsImages')
            inputSection.innerHTML="<img src='altesse.png' ><br><h2>Vous comptez pour moi chère Altesse alors pour ces fetes de fin d'année j'ai pu pensez à vous. Joyeux Noel et Meilleurs voeux !!!!!</h2>"
           break;
        case 'Dalima':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='dalima.png' ><br><h2>Un partenaire de crime ou d'affaire espèce d'imbecile idiot ! Lol Je vous aime beaucoup mon pote et grace à mes cpacités j'ai pu penser à toi, Joyeux Noel et Meilleurs voeux Dalima ou je dirai Berda?</h2>"
            break;
        case 'Emmanuel':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='emmanuel.png'><br><h2>A force de fréquenter certains établissement j'arrive à découvrir les gens biens dont toi Emma, Joyeux Noel et Meilleurs voeux bro!</h2>"
            break;
            case 'Daniel':
                happyBirthday.classList.add('friendsImages')
                inputSection.innerHTML=''
                titreAnnonce.innerHTML='Gloria a pensé à vous!'
                happyBirthday.innerHTML="<img src='Daniel.png'><br><h2>En ce jour si beau et merveuilleux, je tiens à te souhaiter un joyeux anniversaire mon ami Daniel Biloko.Tu sais je ne regrette pas d'avoir connu une telle personne comme toi dans ma vie,qu'il plaise à Dieu de te benir et t'accorde une longue vie l'Homme aux fossettes. Je t'aime beaucoup!<br><span>Gloria</span></h2>"
               break;    
        case 'Eureka':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='eureka.png'><br><h2>Mwana poto nanga !!!! Je revais te voir faire une émission aux Etats Unis j'attends toujours hein! Je vous aime beaucoup et j'ai pensé à vous en ce fin d'année. joyeux Noel et Meilleurs voeux!</h2>"
            break;
        case 'Aimerance':
                inputSection.classList.add('friendsImages')
                inputSection.innerHTML="<img src='aimerance.png'><br><h2 style='color:#113ff5'>Hey! ma petite b, Tu sais quoi ! Je t'aime énormement et tu le sais je crois, mais là n'est pas la raison principale de ce message. En ce moment de la fin je lève mon verre à ton bonheur toi qui a su rester là malgré tout</h2>"
               break;    
        case 'Ficha':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='ficha.png' ></img><br><h2>FICHA!!Jolie prénom d'abord ! Une grande femme que j'admire beaucoup, fière de t'avoir comme amie. Joyeux Noel et Meilleurs voeux!!</h2>"
            break;    
        case 'Gloria':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='gloria.png' ></img><br><h2>J'ai pas trop à dire sur toi Omba, utilisé mes compétences pour te dire Joyeux Noel et Meilleurs voeux est pour moi le plus beau cadeau que je t'offre cette année, on s'est connu en anglais et c'est ma plus grande et belle connaissance, j'espère que tu sais tout déjà ts, I love you! Feti malamu</h2>"
            break;
        case 'Esther':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='heasert.png' ></img><br><h2>Heasert!! Bien que tu as disparu de la nature, il est difficile pour moi d'oublier des personnes speciales. Joyeux Noel et Meilleurs voeux !</h2>"
            break;
        case 'Martinette':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='martinette.png'></img><br><h2>Mon baby, une très bonne amie et jumelle je ne pourrai pas t'oublier YHA MAH lol, je t'aime beaucou!J'espère que bozwi déjà kombo hein. Joyeux Noel et Meilleurs Voeux Chérie !</h2>"
            break;
        case 'Roly':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='roly.png'><br><h2>Mon pote de longtemps, tu tapes toujours les de**ières des filles quand tu marches? Joyeux Noel et Meilleurs voeux mon frère!</h2>"
            break;
        case 'Stephan':
             inputSection.classList.add('friendsImages')
             inputSection.innerHTML="<img src='steph.png'></img><br><h2>Mon frère, j'ai tellement passer des bons et mauvais moments avec toi mais j'ai surtout retenu une chose tu es mon frère et JE T'AIME BEAUCOUP. Joyeux Noel et Meilleurs voeux</h2>"
            break;
        default:
            inputSection.classList.add('friendsImages')
            inputSection.innerHTML=
            '<h3 style="color:#f51111;font-size:15px;text-align:center;">Veuillez écrire correctement votre prénoms SVP<br>Ou Le prénom doit commencer par une lettre majuscule</h3'
            break;
     }
})
