const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.cefetmg.br/";

function getNoticiasCefet(req, res) {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const ListaDeNoticias = $(".noticias_lista.col-lg-4");
      const noticiasLista = [];
      ListaDeNoticias.each(function () {
        const categoria = $(this).find(".noticias_versal").text();
        const descricao = $(this).find(".noticias_titulo").text();
        const dia = $(this).find(".noticias_dia").text();
        const mes = $(this).find(".noticias_mes").text();
        const link = $(this).find(".noticias_lista.col-lg-4 > a").attr("href");
        noticiasLista.push({
          categoria,
          descricao,
          dia,
          mes,
          link,
        });
      });
      res.status(200).json(noticiasLista)
      return noticiasLista;
    })
    .catch(console.error);
}

module.exports = { getNoticiasCefet };
