class DistroLinux {
  constructor(
    distroBased,
    origem,
    desktopEnv,
    categoria,
    status,
    lastReleaseDate,
    paginaDownload,
    imgSize,
    arqProcessador,
    pontosAvaliacao
  ) {
    this.distroBased = distroBased;
    this.origem = origem;
    this.desktopEnv = desktopEnv;
    this.categoria = categoria;
    this.status = status;
    this.lastReleaseDate = lastReleaseDate;
    this.paginaDownload = paginaDownload;
    this.imgSize = imgSize;
    this.arqProcessador = arqProcessador;
    this.pontosAvaliacao = pontosAvaliacao;
  }
}

var _vtrDistros = [];
var _position = -1;
var _auxPosition = -1;

function addDistro(objDistro, listDistro) {
  listDistro.push(objDistro);
}

function editDistro(objDistro, listDistro, pos) {
  listDistro[pos] = objDistro;
}

function delDistro(listDistro, pos) {
  listDistro.splice(pos, 1);
}

function listingDistro(listDistro) {
  let _buildTable;

  for (let i = 0; i < _vtrDistros.length; i++) {
    _buildTable += "<tr>";
    _buildTable += "<td>" + listDistro[i].distroBased + "</td>";
    _buildTable += "<td>" + listDistro[i].origem + "</td>";
    _buildTable += "<td>" + listDistro[i].desktopEnv + "</td>";
    _buildTable += "<td>" + listDistro[i].categoria + "</td>";
    _buildTable += "<td>" + listDistro[i].status + "</td>";
    _buildTable += "<td>" + listDistro[i].lastReleaseDate + "</td>";
    _buildTable += "<td>" + listDistro[i].paginaDownload + "</td>";
    _buildTable += "<td>" + listDistro[i].imgSize + "</td>";
    _buildTable += "<td>" + listDistro[i].arqProcessador + "</td>";
    _buildTable += "<td>" + listDistro[i].pontosAvaliacao + "</td>";
    _buildTable += '<td><a href"#" class="btEditar" rel=" ' + i + '"></a></td>';
    _buildTable +=
      '<td><a href"#" class="btExcluir" rel=" ' + i + '"></a></td>';
    _buildTable +=
      '<td><a href"#" class="timeStamp" rel=" ' + i + '"></a></td>';
    _buildTable += "</tr>";
  }
  return _buildTable;
}

$(document).ready(() => {
  let timeStamp = $("#btSalvar").click(() => {
    $.ajax({
      url: "http://date.jsontest.com/",
      method: "GET",
    }).done(function (retorno) {
      $(".timeStamp").html(retorno.time);
    });
    timeStamp = toString(timeStamp);
    let distro = new DistroLinux(
      $("#distroBased").val(),
      $("#origem").val(),
      $("#desktopEnv").val(),
      $("#categoria").val(),
      $("#status").val(),
      $("#lastReleaseDate").val(),
      $("#paginaDownload").val(),
      $("#imgSize").val(),
      $("#arqProcessador").val(),
      $("#pontosAvaliacao").val(),
      $(".timeStamp").val()
    );

    if (_position == -1) {
      addDistro(distro, _vtrDistros);
    } else {
      editDistro(distro, _vtrDistros, _position);
      _position = -1;
    }

    $("#tbDistro").html(listingDistro(_vtrDistros));
    $("input").val("");
  });

  $("#tbDistro").on("click", ".btEditar", (evento) => {
    _position = evento.target.getAttribute("rel");
    _position = parseInt(_position);

    $("#distroBased").val(_vtrDistros[_position].distroBased);
    $("#origem").val(_vtrDistros[_position].origem);
    $("#desktopEnv").val(_vtrDistros[_position].desktopEnv);
    $("#categoria").val(_vtrDistros[_position].categoria);
    $("#status").val(_vtrDistros[_position].status);
    $("#lastReleaseDate").val(_vtrDistros[_position].lastReleaseDate);
    $("#paginaDownload").val(_vtrDistros[_position].paginaDownload);
    $("#imgSize").val(_vtrDistros[_position].imgSize);
    $("#arqProcessador").val(_vtrDistros[_position].arqProcessador);
    $("#pontosAvaliacao").val(_vtrDistros[_position].pontosAvaliacao);
    $(".timeStamp").val(_vtrDistros[_position].timeStamp);
  });

  $("#tbDistro").on("click", ".btExcluir", (evento) => {
    _auxPosition = evento.target.getAttribute("rel");
    _auxPosition = parseInt(_auxPosition);

    delDistro(_vtrDistros, _auxPosition);
    $("#tbDistro").html("");
    $("#tbDistro").html(listingDistro(_vtrDistros));
  });
});
