// const Flickr = require('flickr-sdk')
const axios = require('axios')

const controller = {
  greeting: async function(req, res) {
    return res.status(200).json({
      status: 'success',
      result: 'hello world'
    });
  },
  getList: async function(req, res){
    const {
      page,
      limit,
    } = req.query

    let data = false
    let total = 0
    await axios.get('https://api.flickr.com/services/feeds/photos_public.gne', {
      params: {
        format: 'json',
        nojsoncallback: 1,
        perpage: limit || 3,
        page: page,
      }
    })
    .then((response)=> {
      total = response.data.items.length
      data = response.data.items
    }).catch(function (err) {
      console.log(err)
    });
    return res.status(200).json({
      status: 'success',
      total: total,
      result: data,
    })
  }
}

module.exports = controller
