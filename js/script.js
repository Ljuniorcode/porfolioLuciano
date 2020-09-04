document.querySelector('.hamburguer').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('show-menu');
})


document.querySelector('#qtde').addEventListener('change',atualizaPreco)
document.querySelector('#js').addEventListener('change',atualizaPreco)
document.querySelector('#layout-sim').addEventListener('change',atualizaPreco)
document.querySelector('#layout-nao').addEventListener('change',atualizaPreco)
document.querySelector('#prazo').addEventListener('change',() => {
  const prazo = document.querySelector('#prazo').value
  document.querySelector('label[for=prazo]').innerHTML = `Prazo ${prazo} semanas`
  atualizaPreco()
})


function atualizaPreco(){  
  const qtde = document.querySelector('#qtde').value;
  const vaiTerScript = document.querySelector('#js').checked;
  const incuirLayout = document.querySelector('#layout-sim').checked;
  const prazo = document.querySelector('#prazo').value


  let preco = qtde * 100;
  if(vaiTerScript) preco *= 1.1;
  if(incuirLayout) preco += 500;
  let taxaUrgencia = 1 - prazo*0.1;
  preco *= 1 + taxaUrgencia;
  document.querySelector('#preco').innerHTML = `R$ ${preco.toFixed(2)}`;
}
