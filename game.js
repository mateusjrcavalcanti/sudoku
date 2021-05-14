const rowColObjects = document.querySelectorAll("div.row div.col-8 div.mx-auto div.row div.col-2 img");
const figOptions = document.querySelectorAll("div.row div.col-4 div.mt-3 div.col-4 img");
var figs = ['circulo', 'triangulo', 'quadrado', 'retangulo', 'pentagono', 'hexagono'],
    linesGroup = 2,
    columnsGroup = 3,
    elementSelected;


/**
 * Execução de Funções
 */
funcoesTroca();
figurasTabela(newGame(figs, linesGroup, columnsGroup))

/**
 * Declaração de funções
 */

//Instancia uma tabela
function criarTabela(valores) {
    let table = [];
    for (let i = 0; i < valores.length; i++) {
        let linha = [];
        for (let j = 0; j < valores.length; j++) {
            linha[j] = "vazio"
        }
        table[i] = linha;
    }
    return table;
}

//Retorna um intem para uso dentre os itens de preenchimento
function selecionarItemParaUso(valoresGlobais, valoresUsados) {
    let valores = [...valoresGlobais];
    for (let i = 0; i < valoresUsados.length; i++) {
        if (valores.indexOf(valoresUsados[i]) != -1) { valores.splice(valores.indexOf(valoresUsados[i]), 1); }
    }
    let numeroAleatorio = getRandomInt(0, valores.length);
    return { usar: { id: numeroAleatorio, nome: valores[numeroAleatorio] }, valores: valores };
}

//Retorna as possibilidades de posições de acordo com a quantidade de linhas e colunas
function posicoesGrupos(table, linesGroup, columnsGroup) {
    let initialGroups = [];
    for (let gi = 0; gi < table.length; gi += linesGroup) {
        for (let gj = 0; gj < table.length; gj += columnsGroup) {
            initialGroups.push([gi, gj]);
        }
    }
    //Calcula as possibilidades dos grupos de elementos
    let groupPossibilities = [];
    for (let g = 0; g < initialGroups.length; g++) {
        groupPossibilities[g] = [];
        for (let i = initialGroups[g][0]; i < (initialGroups[g][0] + linesGroup); i++) {
            for (let j = initialGroups[g][1]; j < (initialGroups[g][1] + columnsGroup); j++) {
                groupPossibilities[g].push([i, j]);
            }
        }
    }
    return { 'posicoes': initialGroups, 'possibilidades': groupPossibilities };
}

//Retorna uma valor aleatório dentro de um range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

//Remove posições de mesmo grupo
function removeGrupoUsado(gruposDisponiveis, posicao) {
    let grupos = cloneGrid(gruposDisponiveis);
    for (let i = 0; i < grupos.length; i++) {
        for (let j = 0; j < grupos[i].length; j++) {
            if (grupos[i][j][0] == posicao[0] && grupos[i][j][1] == posicao[1]) {
                grupos.splice(i, 1);
                //console.log(posicao, gruposDisponiveis);
                return grupos;
            }
        }
    }
}

//Remove Posições de Mesma Coluna ou Linha
function removeLinhaColuna(gruposDisponiveis, posicao) {
    let grupos = cloneGrid(gruposDisponiveis);
    for (let i = 0; i < grupos.length; i++) {
        for (let j = 0; j < grupos[i].length; j++) {
            if (grupos[i][j][0] == posicao[0] || grupos[i][j][1] == posicao[1]) {
                //console.log(grupos[i][j], "igual", posicao);
                grupos[i].splice(j, 1);
                j--;
            }
        }
        if (!grupos[i].length) { grupos.splice(i, 1); }
    }
    //console.log(grupos);
    return grupos;
}

//Procura e elimina a posição
function removeUsados(gruposDisponiveis, posicao) {
    let grupos = cloneGrid(gruposDisponiveis);
    for (let i = 0; i < grupos.length; i++) {
        for (let j = 0; j < grupos[i].length; j++) {
            if (grupos[i][j][0] == posicao[0] && grupos[i][j][1] == posicao[1]) {
                grupos[i].splice(j, 1);
                return grupos;
            }
        }
    }
}

function newGame(figs, linhasGrupo, colunasGrupo) {
    let contador = 0;

    //Tabela inicilizada vazia
    let tabela = criarTabela(figs);

    //Retorna todos os grupos de posições
    let gruposDisponiveisGlobal = posicoesGrupos(tabela, linhasGrupo, colunasGrupo).possibilidades;

    //Trás a primeira lista de elementos
    let elementosDisponiveis = selecionarItemParaUso(figs, []);
    let elementosUsados = [];

    //laço de repetição para tratar cada elemento
    while (elementosDisponiveis.valores.length) {

        //Grupos disponiveis para cada elemento
        let gruposDisponiveis = cloneGrid(gruposDisponiveisGlobal);

        console.log(`Trabalhando com o elemento ${elementosDisponiveis.usar.nome}`);

        while (gruposDisponiveis.length && contador < 100) {
            //seleciona uma posição aleatoria
            menoresPossibilidades(gruposDisponiveis);
            let numeroAleatorioPosicao = getRandomInt(0, gruposDisponiveis[0].length);
            let possibilidadeSelecionada = gruposDisponiveis[0][numeroAleatorioPosicao];
            console.log(possibilidadeSelecionada, gruposDisponiveis);
            tabela[possibilidadeSelecionada[0]][possibilidadeSelecionada[1]] = elementosDisponiveis.usar.nome;

            //Remove o grupo usado no preenchimento
            if (possibilidadeSelecionada != undefined) gruposDisponiveis = removeGrupoUsado(gruposDisponiveis, possibilidadeSelecionada);
            //Remove as linhas e as colunas
            if (possibilidadeSelecionada != undefined) gruposDisponiveis = removeLinhaColuna(gruposDisponiveis, possibilidadeSelecionada);
            //console.log(`posição DEPOIS ${possibilidadeSelecionada} Grupos disponiveis: ${gruposDisponiveis.length}`);

            //Remove a posição de gruposDisponiveisGlobal
            gruposDisponiveisGlobal = removeUsados(gruposDisponiveisGlobal, possibilidadeSelecionada);
            //console.log({ gruposDisponiveisGlobal });
        }

        //Coloca o elemento atual na lista de usados
        elementosUsados.push(elementosDisponiveis.usar.nome);
        //Busca o próximo elemento
        elementosDisponiveis = selecionarItemParaUso(figs, elementosUsados);
    }
    console.log(tabela);
    return tabela;
}

function cloneGrid(grid) {
    // Clone the 1st dimension (column)
    const newGrid = [...grid]
        // Clone each row
    newGrid.forEach((row, rowIndex) => newGrid[rowIndex] = [...row])
    return newGrid
        //const cloneGrid = (grid) => [...grid].map(row => [...row])
}

function menoresPossibilidades(groups) {
    groups.sort(function compare(a, b) {
        if (a.length < b.length) return -1;
        if (a.length > b.length) return 1;
        return 0;
    });
    //console.log({ groups });
}

function funcoesTroca() {
    for (i = 0; i < rowColObjects.length; i++) {
        //Determina qual a posição que deve ser trocada
        rowColObjects[i].parentNode.addEventListener("click", function() {
            if (elementSelected != null) {
                elementSelected.parentNode.classList.toggle('selected');
            }
            elementSelected = document.querySelectorAll("div.row div.col-8 div.mx-auto div.row div.col-2 img[row='" + this.firstChild.getAttribute('row') + "'][col='" + this.firstChild.getAttribute('col') + "']")[0];
            //console.log(elementSelected);
            //console.log(this);
            this.classList.toggle('selected');
        });
    }

    //Faz a troca de figuras ao clicar
    for (i = 0; i < figOptions.length; i++) {
        figOptions[i].addEventListener("click", function() {
            if (elementSelected != null) {
                elementSelected.setAttribute("src", this.getAttribute('src'));
            }
        });
    }
}

function figurasTabela(tabela) {
    for (let linha = 0; linha < tabela.length; linha++) {
        for (let coluna = 0; coluna < tabela[linha].length; coluna++) {
            if (tabela[linha][coluna] == 'vazio') document.location.reload(true);
            else {
                let elemento = document.querySelectorAll("div.row div.col-8 div.mx-auto div.row div.col-2 img[row='" + linha + "'][col='" + coluna + "']")[0];
                elemento.setAttribute("src", './img/' + tabela[linha][coluna] + '.svg');
            }
        }
    }
}