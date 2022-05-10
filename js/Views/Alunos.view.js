export class AlunosView {
  constructor(table, materias) {
    this.tableList = table;
    this.tableHeader = this.tableList.querySelector("thead");
    this.tableBody = this.tableList.querySelector("tbody");
    this.materias = materias;

    this.renderHeader();
  }
  renderHeader() {
    let htmlTheader = document.createElement("tr");
    htmlTheader.innerHTML = "<td>Nome</dt>";

    let htmlHeaderMaterias = this.materias
      .map((materia) => {
        return `<td>${materia}</td>`;
      })
      .join("");

    htmlTheader.innerHTML += htmlHeaderMaterias;
    document;
    this.tableHeader.appendChild(htmlTheader);
  }
  render(alunos) {
    this.tableBody.innerHTML = "";

    alunos.forEach((aluno) => {
      const htmlTbody = document.createElement("tr");
      let htmlMedias = `<td><a href="edit.html?id=${aluno._id}">${aluno.nome}</a></td>`;

      let encontrado = false;

      this.materias.forEach((materia) => {
        if (materia in aluno.notas) {
          encontrado = true;
        }
      });
      if (encontrado) {
        this.materias.forEach((materia) => {
          htmlMedias += `<td>${
            aluno.media[materia] !== undefined
              ? aluno.media[materia]
              : `<a href="edit.html?id=${aluno._id}">Incluir Nota</a>`
          }</td>`;
        });
      } else {
        htmlMedias += `<td colspan="${this.materias.length}">
        <a href="edit.html?id=${aluno._id}">Incluir notas</a></td>`;
      }

      htmlTbody.innerHTML = htmlMedias;
      this.tableBody.appendChild(htmlTbody);
    });
  }
}
