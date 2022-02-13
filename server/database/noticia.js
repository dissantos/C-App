const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://www.cefetmg.br/noticias/"

function getNoticiaCefet(req, res) {
  axios(`${url}${req.body.path}/`)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const noticia = $(".article.col-md-8");
      const content = []
      noticia.find('p').each((id, el) => {
        const p = `
        <p>
        ${$(el).html()}
        </p>
        `
        content.push(p)
      })
      const noticiaObj = {
          title: noticia.find('.titulo_post').text(),
          subtitle: noticia.find('.subtitulo_post').text(),
          date: noticia.find('.data_post').text(),
          content: content
      }
      res.status(200).json(noticiaObj)
      return noticiaObj;
    })
    .catch(console.log('error'));
}

module.exports = { getNoticiaCefet };
