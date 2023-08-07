// 3. Escribir un programa que almacene las asignaturas de un curso (por ejemplo Matemáticas, Física, Química, Historia y Lengua) en un array, pregunte al usuario la nota que ha sacado en cada asignatura, y después las muestre por pantalla con el mensaje En <asignatura> has sacado <nota> donde <asignatura> es cada una des las asignaturas del array y <nota> cada una de las correspondientes notas introducidas por el usuario.
 let materias = [
  { nombre: "Matemáticas" },
  { nombre: "Física" },
  { nombre: "Química" },
  { nombre: "Historia" },
  { nombre: "Lengua" },
]

for (const materia of materias) {
  console.log(materia.nombre)
  let nota = Number(prompt("Ingrese nota de la materia " + materia.nombre))
  materia.nota = nota
}

for (const materia of materias) {
  alert(`En ${materia.nombre} sacaste ${materia.nota}`)
}