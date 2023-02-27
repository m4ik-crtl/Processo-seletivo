import json
x = open('./auxiliares/dados.json')
dados = json.load(x)
aux = 0
maior = 0
menor = 0
soma = 0
media = 0

for dia in dados:
    if (dia['valor']) != 0:
        aux = dia['valor']
        if (aux > maior):
            maior = aux
        if(menor == 0):
            menor = aux
        elif (aux < menor):
            menor = aux
        soma += dia['valor']
        

print('O menor valor é de: R$ ' + str(menor) + '.')

print('O maior valor é de: R$ ' + str(maior) + '.')


media = soma / len(dados)
faturamentoDiario = ''

for i in dados:
    if (i['valor']) != 0:
        if (i['valor']) > media:
           faturamentoDiario += (str(i['dia']) + ' ')
      
print('Dias em que o faturamento foi maior que é a média ' + faturamentoDiario)