<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Título da página</title>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <!-- Custom styles -->
    <link href="./style.css" rel="stylesheet">
</head>

<body>
    <main>
        <div class="container">
            <h1 class="mt-4">Sudoku</h1>
            <p>Adapatado em formas geométricas.</p>
            <div class="row">
                <div class="col-8">
                    <div class="mx-auto" style="max-width: 600px">
                        <div class="row" id="first">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="0" col="5" />
                            </div>
                        </div>
                        <div class="row top-middle">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="1" col="5" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="2" col="5" />
                            </div>
                        </div>
                        <div class="row top-middle">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="3" col="5" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="4" col="5" />
                            </div>
                        </div>
                        <div class="row" id="last">
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="0" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="1" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col right-middle"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="2" />
                            </div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="3" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="4" /></div>
                            <div class="col-2 d-flex flex-wrap align-items-center themed-grid-col last"><img width="60px" src="./img/vazio.svg" class="img-fluid mx-auto" row="5" col="5" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="button">Novo Jogo</button>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/triangulo.svg" class="img-fluid" />
                        </div>
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/circulo.svg" class="img-fluid" />
                        </div>
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/quadrado.svg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/retangulo.svg" class="img-fluid" />
                        </div>
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/pentagono.svg" class="img-fluid" />
                        </div>
                        <div class="col-4 d-flex flex-wrap align-items-center">
                            <img src="./img/hexagono.svg" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
    </main>
    <!-- script game -->
    <script src="./game.js"></script>
</body>

</html>
