import { alunosService } from "./js/Service/Alunos.service.js";
import { EditAlunoView } from "./js/Views/Alunos.view.js";
import { EditAlunoController } from "./js/Controllers/EditAluno.controller";
import { MateriasService } from "./js/Service/materias.service.js";
import {} from "";

const alunosService = new AlunosService();

const paramsString = window.location.search;
const URLparams = new URLSearchParams(paramsString);
const id = parseInt(URLparams.get("id"));

const aluno = alunosService.searchById(id);

document.getElementById("first_name").value = aluno.nome;

const editAlunoView = new EditAlunoView(
  document.querySelector("[data-edit-aluno-form]"),
  new MateriasService().materias
);

const editAlunoController = new EditAlunoController(
  aluno,
  editAlunoView,
  alunosService
);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.querySelector("#first_name").value;

  editAlunoController.edit(aluno, nome);
  window.location.assign("index.html");
});
