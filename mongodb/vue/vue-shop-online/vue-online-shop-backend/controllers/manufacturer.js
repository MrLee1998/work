// 模块化控制器
const  Model = require('../model/index');
const { Manufacturer } = Model;
const manufacturerConttoller = {
  create(req, res) {
    // request response
    // 逻辑
    // Model 
    // View 
    const requestBody = req.body; // 
    // console.log(requestBody, '---------');
    // mongoose Model new save 
    const newManufacturer = new Manufacturer(requestBody); // 数据保存
    // console.log(requestBody, '-------------')
    // res.json({
    //   data: '1'
    // })
    newManufacturer.save((err, saved) => {
      if( err ) {
        console.log(err);
        return;
      } 
      console.log(saved);
      Manufacturer.findOne({_id: newManufacturer._id})
      .exec((err, manufacturer) => res.json(manufacturer))
    })
  },
  all(req, res) {
    Manufacturer.find({})
    .exec((err, manufacturers) => res.json(manufacturers))
  },
  byID(req, res) {
    const idParams = req.params.id;
    Manufacturer.findOne({_id:idParams})
    .exec((err, manufacturer) => res.json(manufacturer));
  },
  remove(req, res) {
    //url 删除
    const idParams = req.params.id;
    Manufacturer.findOne({_id: idParams})
    .remove((err, removed) => res.json(idParams))
  },
  update(req, res) {
    // 修改
    const idParams = req.params.id;
    let manufacturer = req.body;
    Manufacturer.updateOne({_id: idParams}, {...manufacturer},
      (err, updated) => {
        res.json(updated)
      })

  }
}
module.exports = manufacturerConttoller;