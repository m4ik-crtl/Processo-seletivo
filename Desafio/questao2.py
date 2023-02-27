Termo1 = int(0)
Termo2 = int(1)
Termo3 = int(0)
print ('-' *42)
print (' ' *3, 'Consulta da Sequência de Fibonacci')
print ('-' *42)
Valor = int(input('Digite um número: '))
while Valor > Termo3:
Termo3 = Termo1 + Termo2
Termo1 = Termo2
Termo2 = Termo3
if Valor == 0 or Valor == 1:
print ('O número faz parte da sequência de Fibonacci.')
elif Valor == Termo3:
print ('O número faz parte da sequência de Fibonacci.')
else:
print ('O número digitado não faz parte da sequência de Fibonacci.')

