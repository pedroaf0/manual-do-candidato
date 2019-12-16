import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import MetaTags from 'react-meta-tags';



export default function index({ match }) {
    
    if (match.params.id == null){


  return (
    <div className="conteiner">
        <MetaTags>
        <title>Modalidade de acesso</title>
         <meta
      name="description"
      content="Essa ferramenta ajuda a escolher a modalidade de acesso (cota) correta para o processo seletivo IFRS"
    />
        </MetaTags>
     <div className="App">
        <img src={logo} alt="IFRS"/>
        <p style={{}} id="p">Sempre estudou em escola publica?</p>
        <button to="p2.1" id="sim" className="btn" onClick={() => r("sim")}>Sim</button>
        <button to="p4.5" id="nao" className="btn" onClick={() => r("nao")}>Não</button>
     </div>
    </div>
  );
    function r(r){
        var to = document.getElementById(r).getAttribute("to");
        var top = to.split(".");
        console.log(top);
        switch (top[0]) {
            case "p2":
              p2();
              break;
            case "p3":
              p3(top[1]);
              break;
            case "p4":
               p4(top[1]);
               break;
            case "c":
                c(top[1]);
                break;
               default:
                break;
          }
    }
    function p2(){
        document.getElementById("p").innerHTML = "Renda familiar bruta percapita menor que 1,5 salarios minimos?";
        document.getElementById("sim").setAttribute("to", "p3.1");
        document.getElementById("nao").setAttribute("to", "p3.2");
    }
    function p3(n){
        document.getElementById("p").innerHTML = "Se auto declara preto/pardo/indigena?";
        console.log(n);
        switch(n) {
            case "1":
                document.getElementById("sim").setAttribute("to", "p4.1");
                document.getElementById("nao").setAttribute("to", "p4.2");
                break;
            case "2":
                document.getElementById("sim").setAttribute("to", "p4.3");
                document.getElementById("nao").setAttribute("to", "p4.4");
                break;
            default:
                break;
        }
    }
    function p4(n){
        console.log("p4" + n)
        document.getElementById("p").innerHTML = "Possue alguma deficiência?";
       switch(n){
           case "1":
                document.getElementById("sim").setAttribute("to", "c.2");
                document.getElementById("nao").setAttribute("to", "c.3");
                break;
            case "2":
                document.getElementById("sim").setAttribute("to", "c.4");
                document.getElementById("nao").setAttribute("to", "c.5");
                break;
            case "3":
                document.getElementById("sim").setAttribute("to", "c.6");
                document.getElementById("nao").setAttribute("to", "c.7");
                break;
            case "4":
                document.getElementById("sim").setAttribute("to", "c.8");
                document.getElementById("nao").setAttribute("to", "c.9");
                break;
            case "5":
                document.getElementById("sim").setAttribute("to", "c.10");
                document.getElementById("nao").setAttribute("to", "c.1");
                break;
            default:
                    break;


       }
    }
    function c(n){
       window.location.hash = "modo-de-acesso/"+n;
    }
}else{
    var x;
    var ti = false;
    var nota_ti;
    var nota_ta;
    switch (match.params.id){
        case "1":
            x = "Acesso Universal.";
            nota_ti = "23";
            nota_ta = "17";
            break;
        case "2":
            x = "Pessoa com Deficiência (PcD) que tenha cursado integralmente o Ensino Médio em escola pública, autodeclarada/autodeclarado negra/negro (preta/preto, parda/pardo) ou indígena(PPI), com renda familiar bruta per capita igual ou inferior a 1,5 salário mínimo.";
            nota_ti = "(sem informção)";
            nota_ta = "10";
            break;
        case "3":
            x = "Candidata/Candidato que tenha cursado integralmente o Ensino Médio em escola pública, autodeclarada/autodeclarado negra/negro (preta/preto, parda/pardo) ou indígena (PPI), com renda familiar bruta per capita igual ou inferior a 1,5 salário mínimo. ";
            nota_ti = "27";
            nota_ta = "11";
            break;
        case "4":
            x = "Pessoa com Deficiência (PcD) que tenha cursado integralmente o Ensino Médio em escola pública, com renda familiar bruta per capita igual ou inferior a 1,5 salário mínimo.";
            nota_ti = "(sem informção)";
            nota_ta = "12";
            break;
        case "5":
            x = "Candidata/Candidato que tenha cursado integralmente o Ensino Médio em escola pública, com renda familiar bruta per capita igual ou inferior a 1,5 salário mínimo.";
            nota_ti = "17";
            nota_ta = "15";
            break;
        case "6":
            x = "Pessoa com Deficiência (PcD) que tenha cursado integralmente o Ensino Médio em escola pública, autodeclarada/autodeclarado negra/negro (preta/preto, parda/pardo) ou indígena (PPI), independente de renda. ";
            nota_ti = "(sem informção)";
            nota_ta = "(sem informção)";
            break;
        case "7":
            x = "Candidata/Candidato que tenha cursado integralmente o Ensino Médio em escola pública, autodeclarada/autodeclarado negra/negro (preta/preto, parda/pardo) ou indígena (PPI), independente de renda";
            nota_ti = "8";
            nota_ta = "9";
            break;
        case "8":
            x = "Pessoa com Deficiência (PcD), que tenha cursado integralmente o Ensino Médio em escola pública, independente de renda. ";
            nota_ti = "18";
            nota_ta = "17";
            break;
        case "9":
            x = "Candidata/Candidato que tenha cursado integralmente o Ensino Médio em escola pública, independente de renda";
            nota_ti = "18";
            nota_ta = "14";
            break;
        case "10":
            x = " Acesso Universal e Reserva de Vagas para Pessoa com Deficiência (PcD) independente de ter cursado integralmente o Ensino Médio em escola pública.";
            nota_ti = "(sem informção)";
            nota_ta = "(sem informção)";
            break;
        default:
                window.location.hash = "modo-de-acesso/";
            break;
    }
    return(
        <div className="conteiner">

         <MetaTags>
            <title>C{match.params.id}</title>
            <meta
            name="description"
            content="essa é a cota que devo me inscrever? "
            />
        </MetaTags>

        <div className="App">
           <img style={{width:'200px',marginTop:-100,}} src={logo} alt="IFRS"/>
           <p style={{fontSize:'30px',}} id="p"><strong>C{match.params.id}</strong></p>
           {x}
           <p style={{fontSize:'20px',}}>A nota de corte nessa cota é de <strong id="n">{nota_ti}*</strong></p>
           <select onChange={(event) =>  nota(event)} id="select">
                        <option value="1">Inscrito para TMSI</option>
                        <option value="0">Inscrito para TA</option>
            </select>
           
           <p style={{fontSize:'10px',Color:'black',}}>*<a href="https://ingresso.ifrs.edu.br/2019/wp-content/uploads/sites/19/2018/12/Campus_Sert%C3%A3o_PROVA.pdf">Notas de corte calculadas com base na primeira chamada de 2019</a></p>
        </div>
       </div>
    );

   function nota(event){
       ti = event.target.value;
      if (ti === "1") {
          document.getElementById("n").innerHTML = nota_ti+"*";
      }else{
          document.getElementById("n").innerHTML = nota_ta+"*";
      }
       console.log(ti);

    }
}

}