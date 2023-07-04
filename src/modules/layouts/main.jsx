// Css & js start
import styles from "./main.module.css"
// Css end

// Imagens do projeto ---start---
import mypic from "../images/troll.jpeg"
import sixY from "../images/6ano.jpeg"
import progresso from "../images/Progress.jpg"
import ruby from "../images/Ruby.png"
import js from "../images/JS.jpg"
import linux from "../images/LINUX.png"
import React_ from "../images/REact act.png"
// footer
import Instaicon from "../images/Instaicon.png"
import Whaticon from "../images/Wicon.png"
import Gicon from "../images/Gicon.png"
import Licon from "../images/Licon.png"
// Imagens do projeto ---end---



function Main() {



    return (


    <div>
        
        <nav className={styles.topmenu} id={styles.topmenu}>
        <ul onclick="getElementById('close-menu').checked=false;" className="styles.menunav">
            <li><a href="#inicio" className="inicio1" id={styles.inicio1} onclick='topoPag()'>Início</a></li>
            <li><a href="#sobre-mim" className="sobremim" id={styles.sobre_mim1} onclick="sobremim()">Sobre mim</a></li>
            <li><a href="#projetos" className="projetos" id={styles.projetos} onclick="projetos()">Projetos</a></li>
            <li><a href="#habilidades" className="habilidades" id={styles.habilidades} onclick="habilidades()">Habilidades</a></li>
        </ul>
    </nav>
    <section className={styles.linha1}></section>

    <section className={styles.containerinicio}>
        <h3 id={styles.Hy}>Ola, Eu sou </h3>
        <h1 id={styles.nome}>Miguel Mojena</h1>
        <h4 id={styles.hy2}>Dev Front & Back end</h4>
        <a target="_blank" href="https://www.linkedin.com/in/miguel-mojena-ba9781278/" id={styles.mylinkedin} className={styles.mylinkedin}>Linkedin</a>
        <img src={mypic} alt="" className={styles.troll}/>
    </section>   

    <section className={styles.containersobremim}>
       <h1 id={styles.sobre_mim1} className={styles.sobremim1} >Um pouco sobre o Miguel.</h1>
        <p className={styles.sobremimtxt} id={styles.sobremimtxt}>Meu nome é Miguel Mojena e tenho 18 anos. Sou completamente apaixonado por tecnologia<br/>
           desde os meus 8 anos, e ao longo do tempo, desenvolvi um amor especial pela <br/>
           programação e pela CyberSecurity. Atualmente, estou cursando Análise e Desenvolvimento<br/>
           de Sistemas, mergulhando ainda mais nesse mundo fascinante. Estou animado para explorar<br/>
           todas as possibilidades que essa área em constante evolução tem a oferecer. <br/>
        </p>
        <img src={sixY} alt="" className={styles.miguel}/>
    </section>

    <section>
        <h1 className={styles.projects}>Projetos</h1>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress1}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress2}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress3}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress4}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress5}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress6}/>
    </section>
    <button id={styles.ver_mais} className={styles.ver_mais}>Ver Mais</button>
    <div className={styles.ver_maisENF}>.</div>
    <div className={styles.ver_maisENF2}>.</div>
    <section id={styles.moreprojects} className={styles.moreprojects}>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress1oc}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress2oc}/>
        <img src={progresso} alt="Em Progresso" className={styles.inprogress3oc}/>
    </section>


    <section className={styles.Habilidadess}>
        <h1 className={styles.habilidades}>Minhas habilidades</h1>
        <img src={js} alt="" className={styles.JaSc}/>
        <img src={ruby} alt="" className={styles.RUBYn}/>
        <img src={React_} alt="" className={styles.photoreact}/>
        <img src={linux} alt="" className={styles.photolinux}/>
        <p className={styles.habilidadestxt}>
        De momento tenho conhecimento de algumas linguagens de programação e <br />
        demarcação como por exemplo, JavaScript, HTMl, CSS, React, alem de <br />
        conhecimentos Sobre o SO Linux. Usei todas estas tecnologias neste <br />
        Projeto! Ademais estou estudadando tecnologias como o RUBY, Versel, Git e GitHub.</p>
    </section>



<footer className={styles.rodape}>
    <h2 className={styles.Mredes}>Minhas redes sociais</h2>
    <a target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5566999772519"> <img src={Whaticon} alt="Logo WhatsApp" title="Meu numero" className={styles.whatsapp}/> </a>
    <a target="_blank" href="https://www.instagram.com/moj.exe/"> <img src={Instaicon} alt="Logo Instagram" title="Meu Instagram" className={styles.instagram} /> </a>
    <a target="_blank" href="https://github.com/Mojenaa" > <img src={Gicon} alt="Logo GitHub" title="Meu GitHub" className={styles.github}/> </a>
    <a target="_blank" href="https://www.linkedin.com/in/miguel-mojena-ba9781278/"> <img src={Licon} alt="Logo Linkedin" title="Meu Linkedin" className={styles.linkedinicon} /> </a>
</footer>

    </div>
    )    
    
}



export default Main