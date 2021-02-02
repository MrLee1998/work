class OS {
  controllerHardWare() {
    throw new Error('抽象工厂方法不允许直接调用， 需要重写')
  }
}
class AndroidOS extends OS {
  controllerHardWare() {
    console.log('我会用安卓的方式取操作硬件');
  }
}
class AppleOS extends OS {
  controllerHardWare() {
    console.log('我会用apple的方式取操作硬件');
  }
}


class HardWare {
  operateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用， 需要重写')
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('我会以高通的方式运行');
  }
}

class HuaweiHardWare extends HardWare {
  operateByOrder() {
    console.log('我会以华为的方式运行');
  }
}
class FakeStar extends MobilePhooneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用， 需要重写')
    return new AndroidOS()
  }
  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用， 需要重写')
    return new QualcommHardWare()
  }
}

const myPhone = new FakeStar()
const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()
myOS.controllerHardWare()
myHardWare.operateByOrder()

class newStarFactory extends MobilePhooneFactory {} 