//Inferência Literal

function fazerRequisicao(url: string, method: 'GET' | 'POST') {
    
}

type Methods = 'GET' | 'POST';

let url = "https://google.com.br";
let method: Methods =  'GET';

fazerRequisicao(url, method);


//USANDO COM UM OBJETO

type RequestDetails = {
    url: string,
    method: 'GET' | 'POST'
};

let req: RequestDetails = {
    url: 'https://google.com.br',
    method: 'GET'
};

fazerRequisicao(req.url, req.method);