var e=[{nombre:`Promedio de notas`,lenguaje:`python`,materia:1,codigo:`def promedio(notas):
    return sum(notas) / len(notas)


cuantas = int(input("¿Cuántas notas tenés? "))
notas = []
for i in range(cuantas):
    notas.append(float(input(f"Nota {i + 1}: ")))

print(f"Tu promedio es {promedio(notas):.2f}")
if promedio(notas) >= 6:
    print("Aprobaste")
`},{nombre:`Primos`,lenguaje:`python`,materia:1,codigo:`def es_primo(n):
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True


print([n for n in range(50) if es_primo(n)])
`},{nombre:`Garantías por tipo`,lenguaje:`sql`,materia:2,codigo:`-- Las garantías que siguen vigentes, por tipo y estado
select tg.id, tg.nombre
  , g.estado
  , count(*), count(distinct id_garante)
from tipo_garantia tg
inner join garantia g
  on tg.id=g.id_tipo_garantia
where g.fecha_baja is null
group by tg.id, g.estado;
`},{nombre:`Lista enlazada`,lenguaje:`c`,materia:2,codigo:`#include <stdio.h>
#include <stdlib.h>

struct Nodo {
    int valor;
    struct Nodo *sig;
};

struct Nodo *agregar(struct Nodo *lista, int valor) {
    struct Nodo *nuevo = malloc(sizeof(struct Nodo));
    nuevo->valor = valor;
    nuevo->sig = lista;
    return nuevo;
}

int main(void) {
    struct Nodo *lista = NULL;
    int n;
    printf("¿Cuántos números? ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        int x;
        printf("Número %d: ", i + 1);
        scanf("%d", &x);
        lista = agregar(lista, x);
    }
    printf("Al revés:");
    for (struct Nodo *p = lista; p != NULL; p = p->sig) printf(" %d", p->valor);
    printf("\\n");
    while (lista != NULL) {
        struct Nodo *sig = lista->sig;
        free(lista);
        lista = sig;
    }
    return 0;
}
`}];export{e as ARCHIVOS_DEMO};