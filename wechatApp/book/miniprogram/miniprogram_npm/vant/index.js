module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1605508836788, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
Object.defineProperty(exports, "ActionBar", {
  enumerable: true,
  get: function get() {
    return _actionBar.default;
  }
});
Object.defineProperty(exports, "ActionBarButton", {
  enumerable: true,
  get: function get() {
    return _actionBarButton.default;
  }
});
Object.defineProperty(exports, "ActionBarIcon", {
  enumerable: true,
  get: function get() {
    return _actionBarIcon.default;
  }
});
Object.defineProperty(exports, "ActionSheet", {
  enumerable: true,
  get: function get() {
    return _actionSheet.default;
  }
});
Object.defineProperty(exports, "AddressEdit", {
  enumerable: true,
  get: function get() {
    return _addressEdit.default;
  }
});
Object.defineProperty(exports, "AddressList", {
  enumerable: true,
  get: function get() {
    return _addressList.default;
  }
});
Object.defineProperty(exports, "Area", {
  enumerable: true,
  get: function get() {
    return _area.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _badge.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Calendar", {
  enumerable: true,
  get: function get() {
    return _calendar.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _card.default;
  }
});
Object.defineProperty(exports, "Cell", {
  enumerable: true,
  get: function get() {
    return _cell.default;
  }
});
Object.defineProperty(exports, "CellGroup", {
  enumerable: true,
  get: function get() {
    return _cellGroup.default;
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _checkbox.default;
  }
});
Object.defineProperty(exports, "CheckboxGroup", {
  enumerable: true,
  get: function get() {
    return _checkboxGroup.default;
  }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col.default;
  }
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: function get() {
    return _collapse.default;
  }
});
Object.defineProperty(exports, "CollapseItem", {
  enumerable: true,
  get: function get() {
    return _collapseItem.default;
  }
});
Object.defineProperty(exports, "ContactCard", {
  enumerable: true,
  get: function get() {
    return _contactCard.default;
  }
});
Object.defineProperty(exports, "ContactEdit", {
  enumerable: true,
  get: function get() {
    return _contactEdit.default;
  }
});
Object.defineProperty(exports, "ContactList", {
  enumerable: true,
  get: function get() {
    return _contactList.default;
  }
});
Object.defineProperty(exports, "CountDown", {
  enumerable: true,
  get: function get() {
    return _countDown.default;
  }
});
Object.defineProperty(exports, "Coupon", {
  enumerable: true,
  get: function get() {
    return _coupon.default;
  }
});
Object.defineProperty(exports, "CouponCell", {
  enumerable: true,
  get: function get() {
    return _couponCell.default;
  }
});
Object.defineProperty(exports, "CouponList", {
  enumerable: true,
  get: function get() {
    return _couponList.default;
  }
});
Object.defineProperty(exports, "DatetimePicker", {
  enumerable: true,
  get: function get() {
    return _datetimePicker.default;
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function get() {
    return _dialog.default;
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function get() {
    return _divider.default;
  }
});
Object.defineProperty(exports, "DropdownItem", {
  enumerable: true,
  get: function get() {
    return _dropdownItem.default;
  }
});
Object.defineProperty(exports, "DropdownMenu", {
  enumerable: true,
  get: function get() {
    return _dropdownMenu.default;
  }
});
Object.defineProperty(exports, "Empty", {
  enumerable: true,
  get: function get() {
    return _empty.default;
  }
});
Object.defineProperty(exports, "Field", {
  enumerable: true,
  get: function get() {
    return _field.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _form.default;
  }
});
Object.defineProperty(exports, "Grid", {
  enumerable: true,
  get: function get() {
    return _grid.default;
  }
});
Object.defineProperty(exports, "GridItem", {
  enumerable: true,
  get: function get() {
    return _gridItem.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _icon.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _image.default;
  }
});
Object.defineProperty(exports, "ImagePreview", {
  enumerable: true,
  get: function get() {
    return _imagePreview.default;
  }
});
Object.defineProperty(exports, "IndexAnchor", {
  enumerable: true,
  get: function get() {
    return _indexAnchor.default;
  }
});
Object.defineProperty(exports, "IndexBar", {
  enumerable: true,
  get: function get() {
    return _indexBar.default;
  }
});
Object.defineProperty(exports, "Lazyload", {
  enumerable: true,
  get: function get() {
    return _lazyload.default;
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _list.default;
  }
});
Object.defineProperty(exports, "Loading", {
  enumerable: true,
  get: function get() {
    return _loading.default;
  }
});
Object.defineProperty(exports, "Locale", {
  enumerable: true,
  get: function get() {
    return _locale.default;
  }
});
Object.defineProperty(exports, "NavBar", {
  enumerable: true,
  get: function get() {
    return _navBar.default;
  }
});
Object.defineProperty(exports, "NoticeBar", {
  enumerable: true,
  get: function get() {
    return _noticeBar.default;
  }
});
Object.defineProperty(exports, "Notify", {
  enumerable: true,
  get: function get() {
    return _notify.default;
  }
});
Object.defineProperty(exports, "NumberKeyboard", {
  enumerable: true,
  get: function get() {
    return _numberKeyboard.default;
  }
});
Object.defineProperty(exports, "Overlay", {
  enumerable: true,
  get: function get() {
    return _overlay.default;
  }
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _pagination.default;
  }
});
Object.defineProperty(exports, "PasswordInput", {
  enumerable: true,
  get: function get() {
    return _passwordInput.default;
  }
});
Object.defineProperty(exports, "Picker", {
  enumerable: true,
  get: function get() {
    return _picker.default;
  }
});
Object.defineProperty(exports, "Popup", {
  enumerable: true,
  get: function get() {
    return _popup.default;
  }
});
Object.defineProperty(exports, "Progress", {
  enumerable: true,
  get: function get() {
    return _progress.default;
  }
});
Object.defineProperty(exports, "PullRefresh", {
  enumerable: true,
  get: function get() {
    return _pullRefresh.default;
  }
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function get() {
    return _radio.default;
  }
});
Object.defineProperty(exports, "RadioGroup", {
  enumerable: true,
  get: function get() {
    return _radioGroup.default;
  }
});
Object.defineProperty(exports, "Rate", {
  enumerable: true,
  get: function get() {
    return _rate.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row.default;
  }
});
Object.defineProperty(exports, "Search", {
  enumerable: true,
  get: function get() {
    return _search.default;
  }
});
Object.defineProperty(exports, "ShareSheet", {
  enumerable: true,
  get: function get() {
    return _shareSheet.default;
  }
});
Object.defineProperty(exports, "Sidebar", {
  enumerable: true,
  get: function get() {
    return _sidebar.default;
  }
});
Object.defineProperty(exports, "SidebarItem", {
  enumerable: true,
  get: function get() {
    return _sidebarItem.default;
  }
});
Object.defineProperty(exports, "Skeleton", {
  enumerable: true,
  get: function get() {
    return _skeleton.default;
  }
});
Object.defineProperty(exports, "Slider", {
  enumerable: true,
  get: function get() {
    return _slider.default;
  }
});
Object.defineProperty(exports, "Step", {
  enumerable: true,
  get: function get() {
    return _step.default;
  }
});
Object.defineProperty(exports, "Stepper", {
  enumerable: true,
  get: function get() {
    return _stepper.default;
  }
});
Object.defineProperty(exports, "Steps", {
  enumerable: true,
  get: function get() {
    return _steps.default;
  }
});
Object.defineProperty(exports, "Sticky", {
  enumerable: true,
  get: function get() {
    return _sticky.default;
  }
});
Object.defineProperty(exports, "SubmitBar", {
  enumerable: true,
  get: function get() {
    return _submitBar.default;
  }
});
Object.defineProperty(exports, "Swipe", {
  enumerable: true,
  get: function get() {
    return _swipe.default;
  }
});
Object.defineProperty(exports, "SwipeCell", {
  enumerable: true,
  get: function get() {
    return _swipeCell.default;
  }
});
Object.defineProperty(exports, "SwipeItem", {
  enumerable: true,
  get: function get() {
    return _swipeItem.default;
  }
});
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _switch.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _tab.default;
  }
});
Object.defineProperty(exports, "Tabbar", {
  enumerable: true,
  get: function get() {
    return _tabbar.default;
  }
});
Object.defineProperty(exports, "TabbarItem", {
  enumerable: true,
  get: function get() {
    return _tabbarItem.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function get() {
    return _tabs.default;
  }
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function get() {
    return _tag.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _toast.default;
  }
});
Object.defineProperty(exports, "TreeSelect", {
  enumerable: true,
  get: function get() {
    return _treeSelect.default;
  }
});
Object.defineProperty(exports, "Uploader", {
  enumerable: true,
  get: function get() {
    return _uploader.default;
  }
});
exports.default = exports.version = void 0;

var _actionBar = _interopRequireDefault(require("./action-bar"));

var _actionBarButton = _interopRequireDefault(require("./action-bar-button"));

var _actionBarIcon = _interopRequireDefault(require("./action-bar-icon"));

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

var _addressEdit = _interopRequireDefault(require("./address-edit"));

var _addressList = _interopRequireDefault(require("./address-list"));

var _area = _interopRequireDefault(require("./area"));

var _badge = _interopRequireDefault(require("./badge"));

var _button = _interopRequireDefault(require("./button"));

var _calendar = _interopRequireDefault(require("./calendar"));

var _card = _interopRequireDefault(require("./card"));

var _cell = _interopRequireDefault(require("./cell"));

var _cellGroup = _interopRequireDefault(require("./cell-group"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

var _circle = _interopRequireDefault(require("./circle"));

var _col = _interopRequireDefault(require("./col"));

var _collapse = _interopRequireDefault(require("./collapse"));

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

var _contactCard = _interopRequireDefault(require("./contact-card"));

var _contactEdit = _interopRequireDefault(require("./contact-edit"));

var _contactList = _interopRequireDefault(require("./contact-list"));

var _countDown = _interopRequireDefault(require("./count-down"));

var _coupon = _interopRequireDefault(require("./coupon"));

var _couponCell = _interopRequireDefault(require("./coupon-cell"));

var _couponList = _interopRequireDefault(require("./coupon-list"));

var _datetimePicker = _interopRequireDefault(require("./datetime-picker"));

var _dialog = _interopRequireDefault(require("./dialog"));

var _divider = _interopRequireDefault(require("./divider"));

var _dropdownItem = _interopRequireDefault(require("./dropdown-item"));

var _dropdownMenu = _interopRequireDefault(require("./dropdown-menu"));

var _empty = _interopRequireDefault(require("./empty"));

var _field = _interopRequireDefault(require("./field"));

var _form = _interopRequireDefault(require("./form"));

var _grid = _interopRequireDefault(require("./grid"));

var _gridItem = _interopRequireDefault(require("./grid-item"));

var _icon = _interopRequireDefault(require("./icon"));

var _image = _interopRequireDefault(require("./image"));

var _imagePreview = _interopRequireDefault(require("./image-preview"));

var _indexAnchor = _interopRequireDefault(require("./index-anchor"));

var _indexBar = _interopRequireDefault(require("./index-bar"));

var _lazyload = _interopRequireDefault(require("./lazyload"));

var _list = _interopRequireDefault(require("./list"));

var _loading = _interopRequireDefault(require("./loading"));

var _locale = _interopRequireDefault(require("./locale"));

var _navBar = _interopRequireDefault(require("./nav-bar"));

var _noticeBar = _interopRequireDefault(require("./notice-bar"));

var _notify = _interopRequireDefault(require("./notify"));

var _numberKeyboard = _interopRequireDefault(require("./number-keyboard"));

var _overlay = _interopRequireDefault(require("./overlay"));

var _pagination = _interopRequireDefault(require("./pagination"));

var _passwordInput = _interopRequireDefault(require("./password-input"));

var _picker = _interopRequireDefault(require("./picker"));

var _popup = _interopRequireDefault(require("./popup"));

var _progress = _interopRequireDefault(require("./progress"));

var _pullRefresh = _interopRequireDefault(require("./pull-refresh"));

var _radio = _interopRequireDefault(require("./radio"));

var _radioGroup = _interopRequireDefault(require("./radio-group"));

var _rate = _interopRequireDefault(require("./rate"));

var _row = _interopRequireDefault(require("./row"));

var _search = _interopRequireDefault(require("./search"));

var _shareSheet = _interopRequireDefault(require("./share-sheet"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _sidebarItem = _interopRequireDefault(require("./sidebar-item"));

var _skeleton = _interopRequireDefault(require("./skeleton"));

var _slider = _interopRequireDefault(require("./slider"));

var _step = _interopRequireDefault(require("./step"));

var _stepper = _interopRequireDefault(require("./stepper"));

var _steps = _interopRequireDefault(require("./steps"));

var _sticky = _interopRequireDefault(require("./sticky"));

var _submitBar = _interopRequireDefault(require("./submit-bar"));

var _swipe = _interopRequireDefault(require("./swipe"));

var _swipeCell = _interopRequireDefault(require("./swipe-cell"));

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

var _switch = _interopRequireDefault(require("./switch"));

var _tab = _interopRequireDefault(require("./tab"));

var _tabbar = _interopRequireDefault(require("./tabbar"));

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

var _tabs = _interopRequireDefault(require("./tabs"));

var _tag = _interopRequireDefault(require("./tag"));

var _toast = _interopRequireDefault(require("./toast"));

var _treeSelect = _interopRequireDefault(require("./tree-select"));

var _uploader = _interopRequireDefault(require("./uploader"));

var version = '3.0.0-beta.8';
exports.version = version;

function install(app) {
  var components = [_actionBar.default, _actionBarButton.default, _actionBarIcon.default, _actionSheet.default, _addressEdit.default, _addressList.default, _area.default, _badge.default, _button.default, _calendar.default, _card.default, _cell.default, _cellGroup.default, _checkbox.default, _checkboxGroup.default, _circle.default, _col.default, _collapse.default, _collapseItem.default, _contactCard.default, _contactEdit.default, _contactList.default, _countDown.default, _coupon.default, _couponCell.default, _couponList.default, _datetimePicker.default, _dialog.default, _divider.default, _dropdownItem.default, _dropdownMenu.default, _empty.default, _field.default, _form.default, _grid.default, _gridItem.default, _icon.default, _image.default, _imagePreview.default, _indexAnchor.default, _indexBar.default, _list.default, _loading.default, _locale.default, _navBar.default, _noticeBar.default, _notify.default, _numberKeyboard.default, _overlay.default, _pagination.default, _passwordInput.default, _picker.default, _popup.default, _progress.default, _pullRefresh.default, _radio.default, _radioGroup.default, _rate.default, _row.default, _search.default, _shareSheet.default, _sidebar.default, _sidebarItem.default, _skeleton.default, _slider.default, _step.default, _stepper.default, _steps.default, _sticky.default, _submitBar.default, _swipe.default, _swipeCell.default, _swipeItem.default, _switch.default, _tab.default, _tabbar.default, _tabbarItem.default, _tabs.default, _tag.default, _toast.default, _treeSelect.default, _uploader.default];
  components.forEach(function (item) {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;
}, function(modId) {var map = {"./action-bar":1605508836789,"./action-bar-button":1605508836807,"./action-bar-icon":1605508836815,"./action-sheet":1605508836816,"./address-edit":1605508836821,"./address-list":1605508836843,"./area":1605508836823,"./badge":1605508836813,"./button":1605508836810,"./calendar":1605508836849,"./card":1605508836858,"./cell":1605508836829,"./cell-group":1605508836860,"./checkbox":1605508836861,"./checkbox-group":1605508836862,"./circle":1605508836863,"./col":1605508836864,"./collapse":1605508836866,"./collapse-item":1605508836867,"./contact-card":1605508836868,"./contact-edit":1605508836869,"./contact-list":1605508836870,"./count-down":1605508836871,"./coupon":1605508836873,"./coupon-cell":1605508836874,"./coupon-list":1605508836875,"./datetime-picker":1605508836885,"./dialog":1605508836837,"./divider":1605508836888,"./dropdown-item":1605508836889,"./dropdown-menu":1605508836890,"./empty":1605508836891,"./field":1605508836830,"./form":1605508836832,"./grid":1605508836893,"./grid-item":1605508836894,"./icon":1605508836812,"./image":1605508836859,"./image-preview":1605508836895,"./index-anchor":1605508836899,"./index-bar":1605508836900,"./lazyload":1605508836901,"./list":1605508836902,"./loading":1605508836814,"./locale":1605508836797,"./nav-bar":1605508836903,"./notice-bar":1605508836905,"./notify":1605508836906,"./number-keyboard":1605508836908,"./overlay":1605508836820,"./pagination":1605508836910,"./password-input":1605508836911,"./picker":1605508836825,"./popup":1605508836817,"./progress":1605508836912,"./pull-refresh":1605508836913,"./radio":1605508836847,"./radio-group":1605508836844,"./rate":1605508836914,"./row":1605508836865,"./search":1605508836915,"./share-sheet":1605508836916,"./sidebar":1605508836917,"./sidebar-item":1605508836918,"./skeleton":1605508836919,"./slider":1605508836920,"./step":1605508836921,"./stepper":1605508836923,"./steps":1605508836922,"./sticky":1605508836879,"./submit-bar":1605508836924,"./swipe":1605508836883,"./swipe-cell":1605508836925,"./swipe-item":1605508836884,"./switch":1605508836841,"./tab":1605508836876,"./tabbar":1605508836926,"./tabbar-item":1605508836927,"./tabs":1605508836877,"./tag":1605508836846,"./toast":1605508836833,"./tree-select":1605508836928,"./uploader":1605508836929}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836789, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ACTION_BAR_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('action-bar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var ACTION_BAR_KEY = 'vanActionBar';
exports.ACTION_BAR_KEY = ACTION_BAR_KEY;

var _default = createComponent({
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(ACTION_BAR_KEY),
        linkChildren = _useChildren.linkChildren;

    linkChildren();
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem({
          unfit: !props.safeAreaInsetBottom
        })
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836790, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require("./base");

Object.keys(_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _base[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _base[key];
    }
  });
});

var _create = require("./create");

Object.keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _create[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _unit = require("./format/unit");

Object.keys(_unit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _unit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _unit[key];
    }
  });
});

var _number = require("./format/number");

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _number[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _number[key];
    }
  });
});

var _string = require("./format/string");

Object.keys(_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _string[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _string[key];
    }
  });
});

var _style = require("./dom/style");

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _style[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _style[key];
    }
  });
});

var _event = require("./dom/event");

Object.keys(_event).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _event[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _event[key];
    }
  });
});

var _scroll = require("./dom/scroll");

Object.keys(_scroll).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _scroll[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _scroll[key];
    }
  });
});
}, function(modId) { var map = {"./base":1605508836791,"./create":1605508836792,"./format/unit":1605508836800,"./format/number":1605508836802,"./format/string":1605508836795,"./dom/style":1605508836803,"./dom/event":1605508836804,"./dom/scroll":1605508836805}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836791, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
exports.isDef = isDef;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isPromise = isPromise;
exports.get = get;
exports.pick = pick;
exports.inBrowser = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}

var inBrowser = typeof window !== 'undefined';
exports.inBrowser = inBrowser;

function isDef(val) {
  return val !== undefined && val !== null;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
}

function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    var _result$key;

    result = (_result$key = result[key]) !== null && _result$key !== void 0 ? _result$key : '';
  });
  return result;
}

function pick(obj, keys) {
  return keys.reduce(function (ret, key) {
    ret[key] = obj[key];
    return ret;
  }, {});
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836792, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNamespace = createNamespace;

var _bem = require("./bem");

var _component = require("./component");

var _i18n = require("./i18n");

function createNamespace(name) {
  name = 'van-' + name;
  return [(0, _component.createComponent)(name), (0, _bem.createBEM)(name), (0, _i18n.createI18N)(name)];
}
}, function(modId) { var map = {"./bem":1605508836793,"./component":1605508836794,"./i18n":1605508836796}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836793, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBEM = createBEM;

/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
function gen(name, mods) {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return " ".concat(name, "--").concat(mods);
  }

  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }

  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = el ? "".concat(name, "__").concat(el) : name;
    return "".concat(el).concat(gen(el, mods));
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836794, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;

var _vue = require("vue");

var _string = require("../format/string");

/**
 * Create a basic component with common options
 */
function createComponent(name) {
  return function (sfc) {
    sfc.name = name;

    sfc.install = function (app) {
      app.component(name, sfc);
      app.component((0, _string.camelize)("-".concat(name)), sfc);
    };

    return (0, _vue.defineComponent)(sfc);
  };
}
}, function(modId) { var map = {"../format/string":1605508836795}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836795, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelize = camelize;
exports.padZero = padZero;
var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}

function padZero(num) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836796, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createI18N = createI18N;

var _base = require("../base");

var _string = require("../format/string");

var _locale = _interopRequireDefault(require("../../locale"));

function createI18N(name) {
  var prefix = (0, _string.camelize)(name) + '.';
  return function (path) {
    var messages = _locale.default.messages();

    var message = (0, _base.get)(messages, prefix + path) || (0, _base.get)(messages, path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _base.isFunction)(message) ? message.apply(void 0, args) : message;
  };
}
}, function(modId) { var map = {"../base":1605508836791,"../format/string":1605508836795,"../../locale":1605508836797}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836797, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _vue = require("vue");

var _deepAssign = require("../utils/deep-assign");

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var lang = (0, _vue.ref)('zh-CN');

var _messages = (0, _vue.reactive)({
  'zh-CN': _zhCN.default
});

var _default = {
  messages: function messages() {
    return _messages[lang.value];
  },
  use: function use(newLang, newMessages) {
    lang.value = newLang;
    this.add((0, _defineProperty2.default)({}, newLang, newMessages));
  },
  add: function add() {
    var newMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _deepAssign.deepAssign)(_messages, newMessages);
  }
};
exports.default = _default;
}, function(modId) { var map = {"../utils/deep-assign":1605508836798,"./lang/zh-CN":1605508836799}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836798, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepAssign = deepAssign;

var _ = require(".");

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!(0, _.isDef)(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !(0, _.isObject)(val)) {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}
}, function(modId) { var map = {".":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836799, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  nameInvalid: '请输入正确的姓名',
  confirmDelete: '确定要删除吗',
  telInvalid: '请输入正确的手机号',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: function monthTitle(year, month) {
      return "".concat(year, "\u5E74").concat(month, "\u6708");
    },
    rangePrompt: function rangePrompt(maxRange) {
      return "\u9009\u62E9\u5929\u6570\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxRange, " \u5929");
    }
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return "".concat(_discount, "\u6298");
    },
    condition: function condition(_condition) {
      return "\u6EE1".concat(_condition, "\u5143\u53EF\u7528");
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '暂无可用',
    count: function count(_count) {
      return "".concat(_count, "\u5F20\u53EF\u7528");
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836800, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUnit = addUnit;
exports.getSizeStyle = getSizeStyle;
exports.unitToPx = unitToPx;

var _base = require("../base");

var _number = require("../validate/number");

function addUnit(value) {
  if (!(0, _base.isDef)(value)) {
    return undefined;
  }

  return (0, _number.isNumeric)(value) ? "".concat(value, "px") : String(value);
}

function getSizeStyle(originSize) {
  if ((0, _base.isDef)(originSize)) {
    var size = addUnit(originSize);
    return {
      width: size,
      height: size
    };
  }
} // cache


var rootFontSize;

function getRootFontSize() {
  if (!rootFontSize) {
    var doc = document.documentElement;
    var fontSize = doc.style.fontSize || window.getComputedStyle(doc).fontSize;
    rootFontSize = parseFloat(fontSize);
  }

  return rootFontSize;
}

function convertRem(value) {
  value = value.replace(/rem/g, '');
  return +value * getRootFontSize();
}

function convertVw(value) {
  value = value.replace(/vw/g, '');
  return +value * window.innerWidth / 100;
}

function convertVh(value) {
  value = value.replace(/vh/g, '');
  return +value * window.innerHeight / 100;
}

function unitToPx(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (_base.inBrowser) {
    if (value.indexOf('rem') !== -1) {
      return convertRem(value);
    }

    if (value.indexOf('vw') !== -1) {
      return convertVw(value);
    }

    if (value.indexOf('vh') !== -1) {
      return convertVh(value);
    }
  }

  return parseFloat(value);
}
}, function(modId) { var map = {"../base":1605508836791,"../validate/number":1605508836801}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836801, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.isNaN = isNaN;

function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

function isNaN(val) {
  if (Number.isNaN) {
    return Number.isNaN(val);
  } // eslint-disable-next-line no-self-compare


  return val !== val;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836802, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;
exports.formatNumber = formatNumber;

function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

function trimExtraChar(value, _char, regExp) {
  var index = value.indexOf(_char);

  if (index === -1) {
    return value;
  }

  if (_char === '-' && index !== 0) {
    return value.slice(0, index);
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

function formatNumber(value) {
  var allowDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var allowMinus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g);
  } else {
    value = value.split('.')[0];
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g);
  } else {
    value = value.replace(/-/, '');
  }

  var regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;
  return value.replace(regExp, '');
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836803, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHidden = isHidden;

var _vue = require("vue");

function isHidden(elementRef) {
  var el = (0, _vue.unref)(elementRef);

  if (!el) {
    return false;
  }

  var style = window.getComputedStyle(el);
  var hidden = style.display === 'none'; // offsetParent returns null in the following situations:
  // 1. The element or its parent element has the display property set to none.
  // 2. The element has the position property set to fixed

  var parentHidden = el.offsetParent === null && style.position !== 'fixed';
  return hidden || parentHidden;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836804, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = stopPropagation;
exports.preventDefault = preventDefault;
exports.trigger = trigger;

function stopPropagation(event) {
  event.stopPropagation();
}

function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

function trigger(target, type) {
  var inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836805, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollTop = getScrollTop;
exports.setScrollTop = setScrollTop;
exports.getRootScrollTop = getRootScrollTop;
exports.setRootScrollTop = setRootScrollTop;
exports.getElementTop = getElementTop;
exports.getVisibleHeight = getVisibleHeight;
exports.getVisibleTop = getVisibleTop;
exports.resetScroll = resetScroll;

var _system = require("../validate/system");

function isWindow(val) {
  return val === window;
}

function getScrollTop(el) {
  var top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset; // iOS scroll bounce cause minus scrollTop

  return Math.max(top, 0);
}

function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top or scroller top


function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0;
  }

  var scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight;
  }

  return el.getBoundingClientRect().height;
}

function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0;
  }

  return el.getBoundingClientRect().top;
}

var isIOS = (0, _system.isIOS)(); // hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800

function resetScroll() {
  if (isIOS) {
    setRootScrollTop(getRootScrollTop());
  }
}
}, function(modId) { var map = {"../validate/system":1605508836806}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836806, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;

var _base = require("../base");

function isAndroid() {
  return _base.inBrowser ? /android/.test(navigator.userAgent.toLowerCase()) : false;
}

function isIOS() {
  return _base.inBrowser ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : false;
}
}, function(modId) { var map = {"../base":1605508836791}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836807, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _actionBar = require("../action-bar");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _useRoute = require("../composition/use-route");

var _button = _interopRequireDefault(require("../button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('action-bar-button'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    type: String,
    text: String,
    icon: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();

    var _useParent = (0, _use.useParent)(_actionBar.ACTION_BAR_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var isFirst = (0, _vue.computed)(function () {
      if (parent) {
        var prev = parent.children[index.value - 1];
        return !(prev && 'isButton' in prev);
      }
    });
    var isLast = (0, _vue.computed)(function () {
      if (parent) {
        var next = parent.children[index.value + 1];
        return !(next && 'isButton' in next);
      }
    });
    (0, _useExpose.useExpose)({
      isButton: true
    });
    return function () {
      var type = props.type,
          icon = props.icon,
          text = props.text,
          color = props.color,
          loading = props.loading,
          disabled = props.disabled;
      return (0, _vue.createVNode)(_button.default, {
        "class": bem([type, {
          last: isLast.value,
          first: isFirst.value
        }]),
        "size": "large",
        "type": type,
        "icon": icon,
        "color": color,
        "loading": loading,
        "disabled": disabled,
        "onClick": route
      }, {
        default: function _default() {
          return [slots.default ? slots.default() : text];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../action-bar":1605508836789,"../composition/use-expose":1605508836808,"../composition/use-route":1605508836809,"../button":1605508836810}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836808, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExpose = useExpose;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

// expose public api
function useExpose(apis) {
  var instance = (0, _vue.getCurrentInstance)();

  if (instance) {
    (0, _extends2.default)(instance.proxy, apis);
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836809, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = route;
exports.useRoute = useRoute;
exports.routeProps = void 0;

var _vue = require("vue");

/**
 * Vue Router support
 */
var routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
exports.routeProps = routeProps;

function route(vm) {
  var router = vm.$router;
  var to = vm.to,
      url = vm.url,
      replace = vm.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function useRoute() {
  var vm = (0, _vue.getCurrentInstance)().proxy;
  return function () {
    route(vm);
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836810, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _useRoute = require("../composition/use-route");

var _icon = _interopRequireDefault(require("../icon"));

var _loading = _interopRequireDefault(require("../loading"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('button'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    text: String,
    icon: String,
    color: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    iconPrefix: String,
    loadingText: String,
    loadingType: String,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loadingSize: {
      type: String,
      default: '20px'
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  }),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();

    var renderLoadingIcon = function renderLoadingIcon() {
      if (slots.loading) {
        return slots.loading();
      }

      return (0, _vue.createVNode)(_loading.default, {
        "class": bem('loading'),
        "size": props.loadingSize,
        "type": props.loadingType,
        "color": "currentColor"
      }, null);
    };

    var renderIcon = function renderIcon() {
      if (props.loading) {
        return renderLoadingIcon();
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.default, {
          "name": props.icon,
          "class": bem('icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderText = function renderText() {
      var text;

      if (props.loading) {
        text = props.loadingText;
      } else {
        text = slots.default ? slots.default() : props.text;
      }

      if (text) {
        return (0, _vue.createVNode)("span", {
          "class": bem('text')
        }, [text]);
      }
    };

    var getStyle = function getStyle() {
      var color = props.color,
          plain = props.plain;

      if (color) {
        var style = {};
        style.color = plain ? color : _constant.WHITE;

        if (!plain) {
          // Use background instead of backgroundColor to make linear-gradient work
          style.background = color;
        } // hide border when color is linear-gradient


        if (color.indexOf('gradient') !== -1) {
          style.border = 0;
        } else {
          style.borderColor = color;
        }

        return style;
      }
    };

    var onClick = function onClick(event) {
      if (!props.loading && !props.disabled) {
        emit('click', event);
        route();
      }
    };

    return function () {
      var tag = props.tag,
          type = props.type,
          size = props.size,
          block = props.block,
          round = props.round,
          plain = props.plain,
          square = props.square,
          loading = props.loading,
          disabled = props.disabled,
          hairline = props.hairline,
          nativeType = props.nativeType,
          iconPosition = props.iconPosition;
      var classes = [bem([type, size, {
        plain: plain,
        block: block,
        round: round,
        square: square,
        loading: loading,
        disabled: disabled,
        hairline: hairline
      }]), (0, _defineProperty2.default)({}, _constant.BORDER_SURROUND, hairline)];
      return (0, _vue.createVNode)(tag, {
        "type": nativeType,
        "class": classes,
        "style": getStyle(),
        "disabled": disabled,
        "onClick": onClick
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": bem('content')
          }, [iconPosition === 'left' && renderIcon(), renderText(), iconPosition === 'right' && renderIcon()])];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../composition/use-route":1605508836809,"../icon":1605508836812,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836811, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BORDER_UNSET_TOP_BOTTOM = exports.BORDER_TOP_BOTTOM = exports.BORDER_SURROUND = exports.BORDER_BOTTOM = exports.BORDER_LEFT = exports.BORDER_TOP = exports.BORDER = exports.WHITE = exports.GREEN = exports.BLUE = exports.RED = void 0;
// color
var RED = '#ee0a24';
exports.RED = RED;
var BLUE = '#1989fa';
exports.BLUE = BLUE;
var GREEN = '#07c160';
exports.GREEN = GREEN;
var WHITE = '#fff'; // border

exports.WHITE = WHITE;
var BORDER = 'van-hairline';
exports.BORDER = BORDER;
var BORDER_TOP = "".concat(BORDER, "--top");
exports.BORDER_TOP = BORDER_TOP;
var BORDER_LEFT = "".concat(BORDER, "--left");
exports.BORDER_LEFT = BORDER_LEFT;
var BORDER_BOTTOM = "".concat(BORDER, "--bottom");
exports.BORDER_BOTTOM = BORDER_BOTTOM;
var BORDER_SURROUND = "".concat(BORDER, "--surround");
exports.BORDER_SURROUND = BORDER_SURROUND;
var BORDER_TOP_BOTTOM = "".concat(BORDER, "--top-bottom");
exports.BORDER_TOP_BOTTOM = BORDER_TOP_BOTTOM;
var BORDER_UNSET_TOP_BOTTOM = "".concat(BORDER, "-unset--top-bottom");
exports.BORDER_UNSET_TOP_BOTTOM = BORDER_UNSET_TOP_BOTTOM;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836812, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _badge = _interopRequireDefault(require("../badge"));

var _createNamespace = (0, _utils.createNamespace)('icon'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

var _default2 = createComponent({
  props: {
    dot: Boolean,
    name: String,
    size: [Number, String],
    badge: [Number, String],
    color: String,
    tag: {
      type: String,
      default: 'i'
    },
    classPrefix: {
      type: String,
      default: bem()
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      var tag = props.tag,
          dot = props.dot,
          name = props.name,
          size = props.size,
          badge = props.badge,
          color = props.color,
          classPrefix = props.classPrefix;
      var isImageIcon = isImage(name);
      return (0, _vue.createVNode)(_badge.default, {
        "dot": dot,
        "tag": tag,
        "content": badge,
        "class": [classPrefix, isImageIcon ? '' : "".concat(classPrefix, "-").concat(name)],
        "style": {
          color: color,
          fontSize: (0, _utils.addUnit)(size)
        }
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), isImageIcon && (0, _vue.createVNode)("img", {
            "class": bem('image'),
            "src": name
          }, null)];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836813, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _number = require("../utils/validate/number");

var _createNamespace = (0, _utils.createNamespace)('badge'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    dot: Boolean,
    max: [Number, String],
    color: String,
    content: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var hasContent = function hasContent() {
      return !!(slots.content || (0, _utils.isDef)(props.content) && props.content !== '');
    };

    var renderContent = function renderContent() {
      var dot = props.dot,
          max = props.max,
          content = props.content;

      if (!dot && hasContent()) {
        if (slots.content) {
          return slots.content();
        }

        if ((0, _utils.isDef)(max) && (0, _number.isNumeric)(content) && +content > max) {
          return "".concat(max, "+");
        }

        return content;
      }
    };

    var renderBadge = function renderBadge() {
      if (hasContent() || props.dot) {
        return (0, _vue.createVNode)("div", {
          "class": bem({
            dot: props.dot,
            fixed: !!slots.default
          }),
          "style": {
            background: props.color
          }
        }, [renderContent()]);
      }
    };

    return function () {
      if (slots.default) {
        var tag = props.tag;
        return (0, _vue.createVNode)(tag, {
          "class": bem('wrapper')
        }, {
          default: function _default() {
            return [slots.default(), renderBadge()];
          }
        });
      }

      return renderBadge();
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/validate/number":1605508836801}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836814, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('loading'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var SpinIcon = [];

for (var i = 0; i < 12; i++) {
  SpinIcon.push((0, _vue.createVNode)("i", null, null));
}

var CircularIcon = (0, _vue.createVNode)("svg", {
  "class": bem('circular'),
  "viewBox": "25 25 50 50"
}, [(0, _vue.createVNode)("circle", {
  "cx": "50",
  "cy": "50",
  "r": "20",
  "fill": "none"
}, null)]);

var _default = createComponent({
  props: {
    size: [Number, String],
    color: String,
    vertical: Boolean,
    textSize: [Number, String],
    type: {
      type: String,
      default: 'circular'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var spinnerStyle = (0, _vue.computed)(function () {
      return _objectSpread({
        color: props.color
      }, (0, _utils.getSizeStyle)(props.size));
    });

    var renderText = function renderText() {
      if (slots.default) {
        return (0, _vue.createVNode)("span", {
          "class": bem('text'),
          "style": {
            fontSize: (0, _utils.addUnit)(props.textSize)
          }
        }, [slots.default()]);
      }
    };

    return function () {
      var type = props.type,
          vertical = props.vertical;
      return (0, _vue.createVNode)("div", {
        "class": bem([type, {
          vertical: vertical
        }])
      }, [(0, _vue.createVNode)("span", {
        "class": bem('spinner', type),
        "style": spinnerStyle.value
      }, [type === 'spinner' ? SpinIcon : CircularIcon]), renderText()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836815, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _actionBar = require("../action-bar");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _icon = _interopRequireDefault(require("../icon"));

var _badge = _interopRequireDefault(require("../badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('action-bar-icon'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    dot: Boolean,
    text: String,
    icon: String,
    color: String,
    badge: [Number, String],
    iconClass: null
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();
    (0, _use.useParent)(_actionBar.ACTION_BAR_KEY);

    var renderIcon = function renderIcon() {
      var dot = props.dot,
          badge = props.badge,
          icon = props.icon,
          color = props.color,
          iconClass = props.iconClass;

      if (slots.icon) {
        return (0, _vue.createVNode)(_badge.default, {
          "dot": dot,
          "content": badge,
          "class": bem('icon')
        }, {
          default: function _default() {
            return [slots.icon()];
          }
        });
      }

      return (0, _vue.createVNode)(_icon.default, {
        "tag": "div",
        "dot": dot,
        "name": icon,
        "badge": badge,
        "color": color,
        "class": [bem('icon'), iconClass]
      }, null);
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "role": "button",
        "class": bem(),
        "tabindex": 0,
        "onClick": route
      }, [renderIcon(), slots.default ? slots.default() : props.text]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../action-bar":1605508836789,"../composition/use-route":1605508836809,"../icon":1605508836812,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836816, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _popup = _interopRequireWildcard(require("../popup"));

var _loading = _interopRequireDefault(require("../loading"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('action-sheet'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _popup.popupSharedProps), {}, {
    title: String,
    actions: Array,
    cancelText: String,
    description: String,
    closeOnPopstate: Boolean,
    closeOnClickAction: Boolean,
    round: {
      type: Boolean,
      default: true
    },
    closeable: {
      type: Boolean,
      default: true
    },
    closeIcon: {
      type: String,
      default: 'cross'
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['select', 'cancel', 'update:show'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var popupPropKeys = Object.keys(_popup.popupSharedProps);

    var onUpdateShow = function onUpdateShow(show) {
      emit('update:show', show);
    };

    var onCancel = function onCancel() {
      onUpdateShow(false);
      emit('cancel');
    };

    var renderHeader = function renderHeader() {
      if (props.title) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header')
        }, [props.title, props.closeable && (0, _vue.createVNode)(_icon.default, {
          "name": props.closeIcon,
          "class": bem('close'),
          "onClick": onCancel
        }, null)]);
      }
    };

    var renderCancel = function renderCancel() {
      if (props.cancelText) {
        return [(0, _vue.createVNode)("div", {
          "class": bem('gap')
        }, null), (0, _vue.createVNode)("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [props.cancelText])];
      }
    };

    var renderOption = function renderOption(item, index) {
      var name = item.name,
          color = item.color,
          subname = item.subname,
          loading = item.loading,
          callback = item.callback,
          disabled = item.disabled,
          className = item.className;
      var Content = loading ? (0, _vue.createVNode)(_loading.default, {
        "class": bem('loading-icon')
      }, null) : [(0, _vue.createVNode)("span", {
        "class": bem('name')
      }, [name]), subname && (0, _vue.createVNode)("div", {
        "class": bem('subname')
      }, [subname])];

      var onClick = function onClick() {
        if (disabled || loading) {
          return;
        }

        if (callback) {
          callback(item);
        }

        emit('select', item, index);

        if (props.closeOnClickAction) {
          onUpdateShow(false);
        }
      };

      return (0, _vue.createVNode)("button", {
        "type": "button",
        "style": {
          color: color
        },
        "class": [bem('item', {
          loading: loading,
          disabled: disabled
        }), className],
        "onClick": onClick
      }, [Content]);
    };

    var renderDescription = function renderDescription() {
      if (props.description || slots.description) {
        var content = slots.description ? slots.description() : props.description;
        return (0, _vue.createVNode)("div", {
          "class": bem('description')
        }, [content]);
      }
    };

    var renderOptions = function renderOptions() {
      if (props.actions) {
        return props.actions.map(renderOption);
      }
    };

    return function () {
      var _slots$default;

      return (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
        "class": bem(),
        "round": props.round,
        "position": "bottom"
      }, _objectSpread(_objectSpread({}, (0, _utils.pick)(props, popupPropKeys)), {}, {
        'onUpdate:show': onUpdateShow
      })), {
        default: function _default() {
          return [renderHeader(), renderDescription(), (0, _vue.createVNode)("div", {
            "class": bem('content')
          }, [renderOptions(), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), renderCancel()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812,"../popup":1605508836817,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836817, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.popupSharedProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useLockScroll3 = require("../composition/use-lock-scroll");

var _useLazyRender = require("../composition/use-lazy-render");

var _icon = _interopRequireDefault(require("../icon"));

var _overlay = _interopRequireDefault(require("../overlay"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('popup'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],
  find: function find(vm) {
    return this.stack.filter(function (item) {
      return item.vm === vm;
    })[0];
  }
};
var popupSharedProps = {
  // whether to show popup
  show: Boolean,
  // z-index
  zIndex: [Number, String],
  // transition duration
  duration: [Number, String],
  // teleport
  teleport: [String, Object],
  // overlay custom style
  overlayStyle: Object,
  // overlay custom class name
  overlayClass: String,
  // Initial rendering animation
  transitionAppear: Boolean,
  // whether to show overlay
  overlay: {
    type: Boolean,
    default: true
  },
  // prevent body scroll
  lockScroll: {
    type: Boolean,
    default: true
  },
  // whether to lazy render
  lazyRender: {
    type: Boolean,
    default: true
  },
  // whether to close popup when click overlay
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
};
exports.popupSharedProps = popupSharedProps;

var _default2 = createComponent({
  inheritAttrs: false,
  props: _objectSpread(_objectSpread({}, popupSharedProps), {}, {
    round: Boolean,
    closeable: Boolean,
    transition: String,
    closeOnPopstate: Boolean,
    safeAreaInsetBottom: Boolean,
    position: {
      type: String,
      default: 'center'
    },
    closeIcon: {
      type: String,
      default: 'cross'
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  }),
  emits: ['open', 'close', 'click', 'opened', 'closed', 'update:show', 'click-overlay'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        attrs = _ref.attrs,
        slots = _ref.slots;
    var opened;
    var shouldReopen;
    var zIndex = (0, _vue.ref)();

    var _useLockScroll = (0, _useLockScroll3.useLockScroll)(function () {
      return props.lockScroll;
    }),
        _useLockScroll2 = (0, _slicedToArray2.default)(_useLockScroll, 2),
        lockScroll = _useLockScroll2[0],
        unlockScroll = _useLockScroll2[1];

    var lazyRender = (0, _useLazyRender.useLazyRender)(function () {
      return props.show || !props.lazyRender;
    });
    var style = (0, _vue.computed)(function () {
      var style = {
        zIndex: zIndex.value
      };

      if ((0, _utils.isDef)(props.duration)) {
        var key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
        style[key] = "".concat(props.duration, "s");
      }

      return style;
    });

    var open = function open() {
      if (!opened) {
        if (props.zIndex !== undefined) {
          context.zIndex = props.zIndex;
        }

        opened = true;
        lockScroll();
        zIndex.value = ++context.zIndex;
      }
    };

    var close = function close() {
      if (opened) {
        opened = false;
        unlockScroll();
        emit('update:show', false);
      }
    };

    var onClickOverlay = function onClickOverlay() {
      emit('click-overlay');

      if (props.closeOnClickOverlay) {
        close();
      }
    };

    var renderOverlay = function renderOverlay() {
      if (props.overlay) {
        return (0, _vue.createVNode)(_overlay.default, {
          "show": props.show,
          "class": props.overlayClass,
          "style": props.overlayStyle,
          "zIndex": zIndex.value,
          "duration": props.duration,
          "onClick": onClickOverlay
        }, null);
      }
    };

    var renderCloseIcon = function renderCloseIcon() {
      if (props.closeable) {
        return (0, _vue.createVNode)(_icon.default, {
          "role": "button",
          "tabindex": "0",
          "name": props.closeIcon,
          "class": bem('close-icon', props.closeIconPosition),
          "onClick": close
        }, null);
      }
    };

    var onClick = function onClick(event) {
      return emit('click', event);
    };

    var onOpened = function onOpened() {
      return emit('opened');
    };

    var onClosed = function onClosed() {
      return emit('closed');
    };

    var renderPopup = lazyRender(function () {
      var _bem, _slots$default;

      var round = props.round,
          position = props.position,
          safeAreaInsetBottom = props.safeAreaInsetBottom;
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", (0, _vue.mergeProps)({
        "style": style.value,
        "class": bem((_bem = {
          round: round
        }, (0, _defineProperty2.default)(_bem, position, position), (0, _defineProperty2.default)(_bem, 'safe-area-inset-bottom', safeAreaInsetBottom), _bem)),
        "onClick": onClick
      }, attrs), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), renderCloseIcon()]), [[_vue.vShow, props.show]]);
    });

    var renderTransition = function renderTransition() {
      var position = props.position,
          transition = props.transition,
          transitionAppear = props.transitionAppear;
      var name = position === 'center' ? 'van-fade' : "van-popup-slide-".concat(position);
      return (0, _vue.createVNode)(_vue.Transition, {
        "name": transition || name,
        "transitionAppear": transitionAppear,
        "onAfterEnter": onOpened,
        "onAfterLeave": onClosed
      }, {
        default: function _default() {
          return [renderPopup()];
        }
      });
    };

    (0, _vue.watch)(function () {
      return props.show;
    }, function (value) {
      if (value) {
        open();
        emit('open');
      } else {
        close();
        emit('close');
      }
    });
    (0, _use.useEventListener)('popstate', function () {
      if (props.closeOnPopstate) {
        close();
        shouldReopen = false;
      }
    });
    (0, _vue.onMounted)(function () {
      if (props.show) {
        open();
      }
    });
    (0, _vue.onActivated)(function () {
      if (shouldReopen) {
        emit('update:show', true);
        shouldReopen = false;
      }
    });
    (0, _vue.onDeactivated)(function () {
      if (props.show) {
        close();
        shouldReopen = true;
      }
    });
    (0, _vue.onBeforeMount)(function () {
      if (opened) {
        unlockScroll();
      }
    });
    return function () {
      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: function _default() {
            return [renderOverlay(), renderTransition()];
          }
        });
      }

      return (0, _vue.createVNode)(_vue.Fragment, null, [renderOverlay(), renderTransition()]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-lock-scroll":1605508836818,"../composition/use-lazy-render":1605508836819,"../icon":1605508836812,"../overlay":1605508836820}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836818, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLockScroll = useLockScroll;
var count = 0;
var CLASSNAME = 'van-overflow-hidden';

function useLockScroll(shouldLock) {
  var lock = function lock() {
    if (shouldLock()) {
      if (!count) {
        document.body.classList.add(CLASSNAME);
      }

      count++;
    }
  };

  var unlock = function unlock() {
    if (shouldLock() && count) {
      count--;

      if (!count) {
        document.body.classList.remove(CLASSNAME);
      }
    }
  };

  return [lock, unlock];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836819, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLazyRender = useLazyRender;

var _vue = require("vue");

function useLazyRender(show) {
  var inited = (0, _vue.ref)(false);
  (0, _vue.watch)(show, function (value) {
    if (value) {
      inited.value = value;
    }
  }, {
    immediate: true
  });
  return function (render) {
    return function () {
      return inited.value ? render() : null;
    };
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836820, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useLazyRender = require("../composition/use-lazy-render");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('overlay'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    show: Boolean,
    zIndex: [Number, String],
    duration: [Number, String],
    className: null,
    customStyle: Object,
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var lazyRender = (0, _useLazyRender.useLazyRender)(function () {
      return props.show;
    });

    var preventTouchMove = function preventTouchMove(event) {
      (0, _utils.preventDefault)(event, true);
    };

    var renderOverlay = lazyRender(function () {
      var _slots$default;

      var style = _objectSpread({
        zIndex: props.zIndex !== undefined ? +props.zIndex : undefined
      }, props.customStyle);

      if ((0, _utils.isDef)(props.duration)) {
        style.animationDuration = "".concat(props.duration, "s");
      }

      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "style": style,
        "class": [bem(), props.className],
        "onTouchmove": props.lockScroll ? preventTouchMove : _utils.noop
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), [[_vue.vShow, props.show]]);
    });
    return function () {
      return (0, _vue.createVNode)(_vue.Transition, {
        "name": "van-fade"
      }, {
        default: function _default() {
          return [renderOverlay()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-lazy-render":1605508836819}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836821, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _mobile = require("../utils/validate/mobile");

var _useExpose = require("../composition/use-expose");

var _area = _interopRequireDefault(require("../area"));

var _cell = _interopRequireDefault(require("../cell"));

var _field = _interopRequireDefault(require("../field"));

var _popup = _interopRequireDefault(require("../popup"));

var _toast = _interopRequireDefault(require("../toast"));

var _button = _interopRequireDefault(require("../button"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _switch = _interopRequireDefault(require("../switch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('address-edit'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

var _default2 = createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    disableArea: Boolean,
    searchResult: Array,
    telMaxlength: [Number, String],
    showSetDefault: Boolean,
    saveButtonText: String,
    areaPlaceholder: String,
    deleteButtonText: String,
    showSearchResult: Boolean,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: [Number, String],
      default: 1
    },
    detailMaxlength: {
      type: [Number, String],
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return _objectSpread({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: _mobile.isMobile
    },
    postalValidator: {
      type: Function,
      default: isPostal
    },
    areaColumnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['save', 'focus', 'delete', 'click-area', 'change-area', 'change-detail', 'cancel-delete', 'select-search', 'change-default'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var areaRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: '',
        name: '',
        areaCode: '',
        postalCode: '',
        addressDetail: ''
      }
    });
    var areaListLoaded = (0, _vue.computed)(function () {
      return (0, _utils.isObject)(props.areaList) && Object.keys(props.areaList).length;
    });
    var areaText = (0, _vue.computed)(function () {
      var _state$data = state.data,
          country = _state$data.country,
          province = _state$data.province,
          city = _state$data.city,
          county = _state$data.county,
          areaCode = _state$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }); // hide bottom field when use search && detail get focused

    var hideBottomFields = (0, _vue.computed)(function () {
      var searchResult = props.searchResult;
      return searchResult && searchResult.length && state.detailFocused;
    });

    var assignAreaValues = function assignAreaValues() {
      if (areaRef.value) {
        var detail = areaRef.value.getArea();
        detail.areaCode = detail.code;
        delete detail.code;
        (0, _extends2.default)(state.data, detail);
      }
    };

    var _onFocus = function onFocus(key) {
      state.errorInfo[key] = '';
      state.detailFocused = key === 'addressDetail';
      emit('focus', key);
    };

    var getErrorMessage = function getErrorMessage(key) {
      var value = String(state.data[key] || '').trim();

      if (props.validator) {
        var message = props.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return props.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !props.postalValidator(value) ? t('postalEmpty') : '';
      }
    };

    var onSave = function onSave() {
      var items = ['name', 'tel'];

      if (props.showArea) {
        items.push('areaCode');
      }

      if (props.showDetail) {
        items.push('addressDetail');
      }

      if (props.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = getErrorMessage(item);

        if (msg) {
          state.errorInfo[item] = msg;
        }

        return !msg;
      });

      if (isValid && !props.isSaving) {
        emit('save', state.data);
      }
    };

    var onChangeDetail = function onChangeDetail(val) {
      state.data.addressDetail = val;
      emit('change-detail', val);
    };

    var onAreaConfirm = function onAreaConfirm(values) {
      values = values.filter(function (value) {
        return !!value;
      });

      if (values.some(function (value) {
        return !value.code;
      })) {
        (0, _toast.default)(t('areaEmpty'));
        return;
      }

      state.showAreaPopup = false;
      assignAreaValues();
      emit('change-area', values);
    };

    var onDelete = function onDelete() {
      _dialog.default.confirm({
        title: t('confirmDelete')
      }).then(function () {
        emit('delete', state.data);
      }).catch(function () {
        emit('cancel-delete', state.data);
      });
    }; // get values of area component


    var getArea = function getArea() {
      return areaRef.value ? areaRef.value.getValues() : [];
    }; // set area code to area component


    var setAreaCode = function setAreaCode(code) {
      state.data.areaCode = code || '';

      if (code) {
        (0, _vue.nextTick)(assignAreaValues);
      }
    };

    var onDetailBlur = function onDetailBlur() {
      // await for click search event
      setTimeout(function () {
        state.detailFocused = false;
      });
    };

    var setAddressDetail = function setAddressDetail(value) {
      state.data.addressDetail = value;
    };

    var renderSetDefaultCell = function renderSetDefaultCell() {
      if (props.showSetDefault) {
        var _slots = {
          'right-icon': function rightIcon() {
            return (0, _vue.createVNode)(_switch.default, {
              "modelValue": state.data.isDefault,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return state.data.isDefault = $event;
              },
              "size": "24",
              "onChange": function onChange(event) {
                emit('change-default', event);
              }
            }, null);
          }
        };
        return (0, _vue.withDirectives)((0, _vue.createVNode)(_cell.default, {
          "center": true,
          "title": t('defaultAddress'),
          "class": bem('default')
        }, _objectSpread({}, _slots)), [[_vue.vShow, !hideBottomFields.value]]);
      }

      return (0, _vue.h)();
    };

    (0, _useExpose.useExpose)({
      getArea: getArea,
      setAddressDetail: setAddressDetail
    });
    (0, _vue.watch)(function () {
      return props.areaList;
    }, function () {
      setAreaCode(state.data.areaCode);
    });
    (0, _vue.watch)(function () {
      return props.addressInfo;
    }, function (value) {
      state.data = _objectSpread(_objectSpread({}, defaultData), value);
      setAreaCode(value.areaCode);
    }, {
      deep: true,
      immediate: true
    });
    return function () {
      var _slots$default;

      var data = state.data,
          errorInfo = state.errorInfo;
      var disableArea = props.disableArea;
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('fields')
      }, [(0, _vue.createVNode)(_field.default, {
        "modelValue": data.name,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return data.name = $event;
        },
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "errorMessage": errorInfo.name,
        "onFocus": function onFocus() {
          return _onFocus('name');
        }
      }, null), (0, _vue.createVNode)(_field.default, {
        "modelValue": data.tel,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return data.tel = $event;
        },
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "maxlength": props.telMaxlength,
        "placeholder": t('telPlaceholder'),
        "errorMessage": errorInfo.tel,
        "onFocus": function onFocus() {
          return _onFocus('tel');
        }
      }, null), (0, _vue.withDirectives)((0, _vue.createVNode)(_field.default, {
        "readonly": true,
        "label": t('area'),
        "clickable": !disableArea,
        "rightIcon": !disableArea ? 'arrow' : null,
        "modelValue": areaText.value,
        "placeholder": props.areaPlaceholder || t('areaPlaceholder'),
        "errorMessage": errorInfo.areaCode,
        "onFocus": function onFocus() {
          return _onFocus('areaCode');
        },
        "onClick": function onClick() {
          emit('click-area');
          state.showAreaPopup = !disableArea;
        }
      }, null), [[_vue.vShow, props.showArea]]), (0, _vue.createVNode)(_Detail.default, {
        "show": props.showDetail,
        "value": data.addressDetail,
        "focused": state.detailFocused,
        "detailRows": props.detailRows,
        "errorMessage": errorInfo.addressDetail,
        "searchResult": props.searchResult,
        "detailMaxlength": props.detailMaxlength,
        "showSearchResult": props.showSearchResult,
        "onBlur": onDetailBlur,
        "onFocus": function onFocus() {
          return _onFocus('addressDetail');
        },
        "onInput": onChangeDetail,
        "onSelect-search": function onSelectSearch(event) {
          emit('select-search', event);
        }
      }, null), props.showPostal && (0, _vue.withDirectives)((0, _vue.createVNode)(_field.default, {
        "modelValue": data.postalCode,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return data.postalCode = $event;
        },
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "errorMessage": errorInfo.postalCode,
        "onFocus": function onFocus() {
          return _onFocus('postalCode');
        }
      }, null), [[_vue.vShow, !hideBottomFields.value]]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), renderSetDefaultCell(), (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "class": bem('buttons')
      }, [(0, _vue.createVNode)(_button.default, {
        "block": true,
        "round": true,
        "loading": props.isSaving,
        "type": "danger",
        "text": props.saveButtonText || t('save'),
        "onClick": onSave
      }, null), props.showDelete && (0, _vue.createVNode)(_button.default, {
        "block": true,
        "round": true,
        "loading": props.isDeleting,
        "text": props.deleteButtonText || t('delete'),
        "onClick": onDelete
      }, null)]), [[_vue.vShow, !hideBottomFields.value]]), (0, _vue.createVNode)(_popup.default, {
        'show': state.showAreaPopup,
        "onUpdate:show": function onUpdateShow($event) {
          return state.showAreaPopup = $event;
        },
        "round": true,
        "teleport": "body",
        "position": "bottom",
        "lazyRender": false
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_area.default, {
            "ref": areaRef,
            "value": data.areaCode,
            "loading": !areaListLoaded.value,
            "areaList": props.areaList,
            "columnsPlaceholder": props.areaColumnsPlaceholder,
            "onConfirm": onAreaConfirm,
            "onCancel": function onCancel() {
              state.showAreaPopup = false;
            }
          }, null)];
        }
      })]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/validate/mobile":1605508836822,"../composition/use-expose":1605508836808,"../area":1605508836823,"../cell":1605508836829,"../field":1605508836830,"../popup":1605508836817,"../toast":1605508836833,"../button":1605508836810,"../dialog":1605508836837,"./Detail":1605508836840,"../switch":1605508836841}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836822, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMobile = isMobile;

function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836823, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useExpose = require("../composition/use-expose");

var _shared = require("../picker/shared");

var _picker = _interopRequireDefault(require("../picker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('area'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var EMPTY_CODE = '000000';

function isOverseaCode(code) {
  return code[0] === '9';
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _shared.pickerProps), {}, {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    },
    columnsPlaceholder: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  }),
  emits: ['change', 'confirm'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var pickerRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      code: props.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    });
    var areaList = (0, _vue.computed)(function () {
      var areaList = props.areaList;
      return {
        province: areaList.province_list || {},
        city: areaList.city_list || {},
        county: areaList.county_list || {}
      };
    });
    var placeholderMap = (0, _vue.computed)(function () {
      var columnsPlaceholder = props.columnsPlaceholder;
      return {
        province: columnsPlaceholder[0] || '',
        city: columnsPlaceholder[1] || '',
        county: columnsPlaceholder[2] || ''
      };
    });

    var getDefaultCode = function getDefaultCode() {
      if (props.columnsPlaceholder.length) {
        return EMPTY_CODE;
      }

      var _areaList$value = areaList.value,
          county = _areaList$value.county,
          city = _areaList$value.city;
      var countyCodes = Object.keys(county);

      if (countyCodes[0]) {
        return countyCodes[0];
      }

      var cityCodes = Object.keys(city);

      if (cityCodes[0]) {
        return cityCodes[0];
      }

      return '';
    }; // get list by code


    var getList = function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = areaList.value[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (type === 'city' && props.isOverseaCode(code)) {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      if (placeholderMap.value[type] && result.length) {
        // set columns placeholder
        var codeFill = '';

        if (type === 'city') {
          codeFill = EMPTY_CODE.slice(2, 4);
        } else if (type === 'county') {
          codeFill = EMPTY_CODE.slice(4, 6);
        }

        result.unshift({
          code: code + codeFill,
          name: placeholderMap.value[type]
        });
      }

      return result;
    }; // get index by code


    var getIndex = function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (props.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    };

    var setValues = function setValues() {
      var code = state.code;

      if (!code) {
        code = getDefaultCode();
      }

      var picker = pickerRef.value;
      var province = getList('province');
      var city = getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !props.isOverseaCode(code)) {
        var _city = (0, _slicedToArray2.default)(city, 1);

        code = _city[0].code;
      }

      picker.setColumnValues(2, getList('county', code.slice(0, 4)));
      picker.setIndexes([getIndex('province', code), getIndex('city', code), getIndex('county', code)]);
    }; // parse output columns data


    var parseValues = function parseValues(values) {
      return values.map(function (value, index) {
        if (value) {
          value = clone(value);

          if (!value.code || value.name === props.columnsPlaceholder[index]) {
            value.code = '';
            value.name = '';
          }
        }

        return value;
      });
    };

    var getValues = function getValues() {
      if (pickerRef.value) {
        var values = pickerRef.value.getValues().filter(function (value) {
          return !!value;
        });
        return parseValues(values);
      }

      return [];
    };

    var getArea = function getArea() {
      var values = getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      var validValues = values.filter(function (value) {
        return !!value.code;
      });
      area.code = validValues.length ? validValues[validValues.length - 1].code : '';

      if (props.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    };

    var reset = function reset() {
      var newCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      state.code = newCode;
      setValues();
    };

    var onChange = function onChange(values, index) {
      state.code = values[index].code;
      setValues();
      var parsedValues = parseValues(pickerRef.value.getValues());
      emit('change', parsedValues, index);
    };

    var onConfirm = function onConfirm(values, index) {
      setValues();
      emit('confirm', parseValues(values), index);
    };

    (0, _vue.onMounted)(setValues);
    (0, _vue.watch)(function () {
      return props.value;
    }, function (value) {
      state.code = value;
      setValues();
    });
    (0, _vue.watch)(function () {
      return props.areaList;
    }, setValues, {
      deep: true
    });
    (0, _vue.watch)(function () {
      return props.columnsNum;
    }, function () {
      (0, _vue.nextTick)(setValues);
    });
    (0, _useExpose.useExpose)({
      reset: reset,
      getArea: getArea
    });
    return function () {
      var columns = state.columns.slice(0, +props.columnsNum);
      return (0, _vue.createVNode)(_picker.default, (0, _vue.mergeProps)({
        "ref": pickerRef,
        "class": bem(),
        "columns": columns,
        "valueKey": "name",
        "onChange": onChange,
        "onConfirm": onConfirm
      }, (0, _utils.pick)(props, ['title', 'loading', 'readonly', 'itemHeight', 'swipeDuration', 'visibleItemCount', 'cancelButtonText', 'confirmButtonText'])), _objectSpread({}, (0, _utils.pick)(slots, ['title', 'columns-top', 'columns-bottom'])));
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808,"../picker/shared":1605508836824,"../picker":1605508836825}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836824, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickerProps = exports.PICKER_KEY = void 0;
var PICKER_KEY = 'vanPicker';
exports.PICKER_KEY = PICKER_KEY;
var pickerProps = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  itemHeight: {
    type: [Number, String],
    default: 44
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: [Number, String],
    default: 6
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000
  }
};
exports.pickerProps = pickerProps;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836825, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _shared = require("./shared");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _loading = _interopRequireDefault(require("../loading"));

var _PickerColumn = _interopRequireDefault(require("./PickerColumn"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('picker'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _shared.pickerProps), {}, {
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  emits: ['confirm', 'cancel', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var formattedColumns = (0, _vue.ref)([]);

    var _useChildren = (0, _use.useChildren)(_shared.PICKER_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    linkChildren();
    var itemHeight = (0, _vue.computed)(function () {
      return (0, _utils.unitToPx)(props.itemHeight);
    });
    var dataType = (0, _vue.computed)(function () {
      var columns = props.columns;
      var firstColumn = columns[0] || {};

      if (firstColumn.children) {
        return 'cascade';
      }

      if (firstColumn.values) {
        return 'object';
      }

      return 'text';
    });

    var formatCascade = function formatCascade() {
      var formatted = [];
      var cursor = {
        children: props.columns
      };

      while (cursor && cursor.children) {
        var _cursor$defaultIndex;

        var _cursor = cursor,
            _children = _cursor.children;
        var defaultIndex = (_cursor$defaultIndex = cursor.defaultIndex) !== null && _cursor$defaultIndex !== void 0 ? _cursor$defaultIndex : +props.defaultIndex;

        while (_children[defaultIndex] && _children[defaultIndex].disabled) {
          if (defaultIndex < _children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }

        formatted.push({
          values: cursor.children,
          className: cursor.className,
          defaultIndex: defaultIndex
        });
        cursor = _children[defaultIndex];
      }

      formattedColumns.value = formatted;
    };

    var format = function format() {
      var columns = props.columns;

      if (dataType.value === 'text') {
        formattedColumns.value = [{
          values: columns
        }];
      } else if (dataType.value === 'cascade') {
        formatCascade();
      } else {
        formattedColumns.value = columns;
      }
    }; // get indexes of all columns


    var getIndexes = function getIndexes() {
      return children.map(function (child) {
        return child.state.index;
      });
    }; // set options of column by index


    var setColumnValues = function setColumnValues(index, options) {
      var column = children[index];

      if (column) {
        column.setOptions(options);
      }
    };

    var onCascadeChange = function onCascadeChange(columnIndex) {
      var cursor = {
        children: props.columns
      };
      var indexes = getIndexes();

      for (var i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]];
      }

      while (cursor && cursor.children) {
        columnIndex++;
        setColumnValues(columnIndex, cursor.children);
        cursor = cursor.children[cursor.defaultIndex || 0];
      }
    }; // get column instance by index


    var getColumn = function getColumn(index) {
      return children[index];
    }; // get column value by index


    var getColumnValue = function getColumnValue(index) {
      var column = getColumn(index);
      return column && column.getValue();
    }; // set column value by index


    var setColumnValue = function setColumnValue(index, value) {
      var column = getColumn(index);

      if (column) {
        column.setValue(value);

        if (dataType.value === 'cascade') {
          onCascadeChange(index);
        }
      }
    }; // get column option index by column index


    var getColumnIndex = function getColumnIndex(index) {
      return (getColumn(index) || {}).state.index;
    }; // set column option index by column index


    var setColumnIndex = function setColumnIndex(columnIndex, optionIndex) {
      var column = getColumn(columnIndex);

      if (column) {
        column.setIndex(optionIndex);

        if (props.dataType === 'cascade') {
          onCascadeChange(columnIndex);
        }
      }
    }; // get options of column by index


    var getColumnValues = function getColumnValues(index) {
      return (children[index] || {}).state.options;
    }; // get values of all columns


    var getValues = function getValues() {
      return children.map(function (child) {
        return child.getValue();
      });
    }; // set values of all columns


    var setValues = function setValues(values) {
      values.forEach(function (value, index) {
        setColumnValue(index, value);
      });
    }; // set indexes of all columns


    var setIndexes = function setIndexes(indexes) {
      indexes.forEach(function (optionIndex, columnIndex) {
        setColumnIndex(columnIndex, optionIndex);
      });
    };

    var emitAction = function emitAction(event) {
      if (dataType.value === 'text') {
        emit(event, getColumnValue(0), getColumnIndex(0));
      } else {
        emit(event, getValues(), getIndexes());
      }
    };

    var _onChange = function onChange(columnIndex) {
      if (dataType.value === 'cascade') {
        onCascadeChange(columnIndex);
      }

      if (dataType.value === 'text') {
        emit('change', getColumnValue(0), getColumnIndex(0));
      } else {
        emit('change', getValues(), columnIndex);
      }
    };

    var confirm = function confirm() {
      children.forEach(function (child) {
        return child.stopMomentum();
      });
      emitAction('confirm');
    };

    var cancel = function cancel() {
      emitAction('cancel');
    };

    var renderTitle = function renderTitle() {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), 'van-ellipsis']
        }, [props.title]);
      }
    };

    var renderCancel = function renderCancel() {
      var text = props.cancelButtonText || t('cancel');
      return (0, _vue.createVNode)("button", {
        "type": "button",
        "class": bem('cancel'),
        "onClick": cancel
      }, [slots.cancel ? slots.cancel() : text]);
    };

    var renderConfirm = function renderConfirm() {
      var text = props.confirmButtonText || t('confirm');
      return (0, _vue.createVNode)("button", {
        "type": "button",
        "class": bem('confirm'),
        "onClick": confirm
      }, [slots.confirm ? slots.confirm() : text]);
    };

    var renderToolbar = function renderToolbar() {
      if (props.showToolbar) {
        return (0, _vue.createVNode)("div", {
          "class": bem('toolbar')
        }, [slots.default ? slots.default() : [renderCancel(), renderTitle(), renderConfirm()]]);
      }
    };

    var renderColumnItems = function renderColumnItems() {
      return formattedColumns.value.map(function (item, columnIndex) {
        var _item$defaultIndex;

        return (0, _vue.createVNode)(_PickerColumn.default, {
          "readonly": props.readonly,
          "valueKey": props.valueKey,
          "allowHtml": props.allowHtml,
          "className": item.className,
          "itemHeight": itemHeight.value,
          "defaultIndex": (_item$defaultIndex = item.defaultIndex) !== null && _item$defaultIndex !== void 0 ? _item$defaultIndex : +props.defaultIndex,
          "swipeDuration": props.swipeDuration,
          "visibleItemCount": props.visibleItemCount,
          "initialOptions": item.values,
          "onChange": function onChange() {
            _onChange(columnIndex);
          }
        }, {
          option: slots.option
        });
      });
    };

    var renderColumns = function renderColumns() {
      var wrapHeight = itemHeight.value * props.visibleItemCount;
      var frameStyle = {
        height: "".concat(itemHeight.value, "px")
      };
      var columnsStyle = {
        height: "".concat(wrapHeight, "px")
      };
      var maskStyle = {
        backgroundSize: "100% ".concat((wrapHeight - itemHeight.value) / 2, "px")
      };
      return (0, _vue.createVNode)("div", {
        "class": bem('columns'),
        "style": columnsStyle,
        "onTouchmove": _utils.preventDefault
      }, [renderColumnItems(), (0, _vue.createVNode)("div", {
        "class": bem('mask'),
        "style": maskStyle
      }, null), (0, _vue.createVNode)("div", {
        "class": [_constant.BORDER_UNSET_TOP_BOTTOM, bem('frame')],
        "style": frameStyle
      }, null)]);
    };

    (0, _vue.watch)(function () {
      return props.columns;
    }, format, {
      immediate: true
    });
    (0, _useExpose.useExpose)({
      confirm: confirm,
      getValues: getValues,
      setValues: setValues,
      getIndexes: getIndexes,
      setIndexes: setIndexes,
      getColumnIndex: getColumnIndex,
      setColumnIndex: setColumnIndex,
      getColumnValue: getColumnValue,
      setColumnValue: setColumnValue,
      getColumnValues: getColumnValues,
      setColumnValues: setColumnValues
    });
    return function () {
      var _slots$columnsTop, _slots$columnsBottom;

      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [props.toolbarPosition === 'top' ? renderToolbar() : null, props.loading ? (0, _vue.createVNode)(_loading.default, {
        "class": bem('loading')
      }, null) : null, (_slots$columnsTop = slots['columns-top']) === null || _slots$columnsTop === void 0 ? void 0 : _slots$columnsTop.call(slots), renderColumns(), (_slots$columnsBottom = slots['columns-bottom']) === null || _slots$columnsBottom === void 0 ? void 0 : _slots$columnsBottom.call(slots), props.toolbarPosition === 'bottom' ? renderToolbar() : null]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836824,"../utils":1605508836790,"../utils/constant":1605508836811,"../composition/use-expose":1605508836808,"../loading":1605508836814,"./PickerColumn":1605508836826}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836826, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _shared = require("./shared");

var _deepClone = require("../utils/deep-clone");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

var _useExpose = require("../composition/use-expose");

// Utils
// Composition
var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var _createNamespace = (0, _utils.createNamespace)('picker-column'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return (0, _utils.isObject)(option) && option.disabled;
}

var _default2 = createComponent({
  props: {
    valueKey: String,
    readonly: Boolean,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    swipeDuration: [Number, String],
    visibleItemCount: [Number, String],
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var moving;
    var startOffset;
    var touchStartTime;
    var momentumOffset;
    var transitionEndTrigger;
    var wrapper = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: (0, _deepClone.deepClone)(props.initialOptions)
    });
    var touch = (0, _useTouch.useTouch)();

    var count = function count() {
      return state.options.length;
    };

    var baseOffset = function baseOffset() {
      return props.itemHeight * (props.visibleItemCount - 1) / 2;
    };

    var adjustIndex = function adjustIndex(index) {
      index = (0, _utils.range)(index, 0, count());

      for (var i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(state.options[_i])) return _i;
      }
    };

    var setIndex = function setIndex(index, emitChange) {
      index = adjustIndex(index) || 0;
      var offset = -index * props.itemHeight;

      var trigger = function trigger() {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit('change', index);
          }
        }
      }; // trigger the change event after transitionend when moving


      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    var setOptions = function setOptions(options) {
      if (JSON.stringify(options) !== JSON.stringify(state.options)) {
        state.options = (0, _deepClone.deepClone)(options);
        setIndex(props.defaultIndex);
      }
    };

    var onClickItem = function onClickItem(index) {
      if (moving || props.readonly) {
        return;
      }

      transitionEndTrigger = null;
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
    };

    var getOptionText = function getOptionText(option) {
      if ((0, _utils.isObject)(option) && props.valueKey in option) {
        return option[props.valueKey];
      }

      return option;
    };

    var getIndexByOffset = function getIndexByOffset(offset) {
      return (0, _utils.range)(Math.round(-offset / props.itemHeight), 0, count() - 1);
    };

    var momentum = function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = state.offset + speed / 0.003 * (distance < 0 ? -1 : 1);
      var index = getIndexByOffset(distance);
      state.duration = +props.swipeDuration;
      setIndex(index, true);
    };

    var stopMomentum = function stopMomentum() {
      moving = false;
      state.duration = 0;

      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };

    var onTouchStart = function onTouchStart(event) {
      if (props.readonly) {
        return;
      }

      touch.start(event);

      if (moving) {
        var translateY = getElementTranslateY(wrapper.value);
        state.offset = Math.min(0, translateY - baseOffset());
        startOffset = state.offset;
      } else {
        startOffset = state.offset;
      }

      state.duration = 0;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };

    var onTouchMove = function onTouchMove(event) {
      if (props.readonly) {
        return;
      }

      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        (0, _utils.preventDefault)(event, true);
      }

      state.offset = (0, _utils.range)(startOffset + touch.deltaY.value, -(count() * props.itemHeight), props.itemHeight);
      var now = Date.now();

      if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
        touchStartTime = now;
        momentumOffset = state.offset;
      }
    };

    var onTouchEnd = function onTouchEnd() {
      if (props.readonly) {
        return;
      }

      var distance = state.offset - momentumOffset;
      var duration = Date.now() - touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }

      var index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true); // compatible with desktop scenario
      // use setTimeout to skip the click event triggered after touchstart

      setTimeout(function () {
        moving = false;
      }, 0);
    };

    var renderOptions = function renderOptions() {
      var optionStyle = {
        height: "".concat(props.itemHeight, "px")
      };
      return state.options.map(function (option, index) {
        var text = getOptionText(option);
        var disabled = isOptionDisabled(option);
        var data = {
          role: 'button',
          style: optionStyle,
          tabindex: disabled ? -1 : 0,
          class: bem('item', {
            disabled: disabled,
            selected: index === state.index
          }),
          onClick: function onClick() {
            onClickItem(index);
          }
        };
        var childData = (0, _defineProperty2.default)({
          class: 'van-ellipsis'
        }, props.allowHtml ? 'innerHTML' : 'textContent', text);
        return (0, _vue.createVNode)("li", data, [slots.option ? slots.option(option) : (0, _vue.createVNode)("div", childData, null)]);
      });
    };

    var setValue = function setValue(value) {
      var options = state.options;

      for (var i = 0; i < options.length; i++) {
        if (getOptionText(options[i]) === value) {
          return setIndex(i);
        }
      }
    };

    var getValue = function getValue() {
      return state.options[state.index];
    };

    setIndex(state.index);
    (0, _use.useParent)(_shared.PICKER_KEY);
    (0, _useExpose.useExpose)({
      state: state,
      setIndex: setIndex,
      getValue: getValue,
      setValue: setValue,
      setOptions: setOptions,
      stopMomentum: stopMomentum
    });
    (0, _vue.watch)(function () {
      return props.initialOptions;
    }, setOptions);
    (0, _vue.watch)(function () {
      return props.defaultIndex;
    }, function (value) {
      setIndex(value);
    });
    return function () {
      var wrapperStyle = {
        transform: "translate3d(0, ".concat(state.offset + baseOffset(), "px, 0)"),
        transitionDuration: "".concat(state.duration, "ms"),
        transitionProperty: state.duration ? 'all' : 'none'
      };
      return (0, _vue.createVNode)("div", {
        "class": [bem(), props.className],
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("ul", {
        "ref": wrapper,
        "style": wrapperStyle,
        "class": bem('wrapper'),
        "onTransitionend": stopMomentum
      }, [renderOptions()])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836824,"../utils/deep-clone":1605508836827,"../utils":1605508836790,"../composition/use-touch":1605508836828,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836827, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _deepAssign = require("./deep-assign");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if ((0, _typeof2.default)(obj) === 'object') {
    return (0, _deepAssign.deepAssign)({}, obj);
  }

  return obj;
}
}, function(modId) { var map = {"./deep-assign":1605508836798}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836828, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTouch = useTouch;

var _vue = require("vue");

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

function useTouch() {
  var startX = (0, _vue.ref)(0);
  var startY = (0, _vue.ref)(0);
  var deltaX = (0, _vue.ref)(0);
  var deltaY = (0, _vue.ref)(0);
  var offsetX = (0, _vue.ref)(0);
  var offsetY = (0, _vue.ref)(0);
  var direction = (0, _vue.ref)('');

  var isVertical = function isVertical() {
    return direction.value === 'vertical';
  };

  var isHorizontal = function isHorizontal() {
    return direction.value === 'horizontal';
  };

  var reset = function reset() {
    deltaX.value = 0;
    deltaY.value = 0;
    offsetX.value = 0;
    offsetY.value = 0;
    direction.value = '';
  };

  var start = function start(event) {
    reset();
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };

  var move = function move(event) {
    var touch = event.touches[0];
    deltaX.value = touch.clientX - startX.value;
    deltaY.value = touch.clientY - startY.value;
    offsetX.value = Math.abs(deltaX.value);
    offsetY.value = Math.abs(deltaY.value);

    if (!direction.value) {
      direction.value = getDirection(offsetX.value, offsetY.value);
    }
  };

  return {
    move: move,
    start: start,
    reset: reset,
    startX: startX,
    startY: startY,
    deltaX: deltaX,
    deltaY: deltaY,
    offsetX: offsetX,
    offsetY: offsetY,
    direction: direction,
    isVertical: isVertical,
    isHorizontal: isHorizontal
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836829, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.cellProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useRoute = require("../composition/use-route");

var _icon = _interopRequireDefault(require("../icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('cell'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var cellProps = {
  icon: String,
  size: String,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  iconPrefix: String,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};
exports.cellProps = cellProps;

var _default = createComponent({
  props: _objectSpread(_objectSpread({}, cellProps), _useRoute.routeProps),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();

    var renderLabel = function renderLabel() {
      var showLabel = slots.label || (0, _utils.isDef)(props.label);

      if (showLabel) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('label'), props.labelClass]
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderTitle = function renderTitle() {
      if (slots.title || (0, _utils.isDef)(props.title)) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), props.titleClass],
          "style": props.titleStyle
        }, [slots.title ? slots.title() : (0, _vue.createVNode)("span", null, [props.title]), renderLabel()]);
      }
    };

    var renderValue = function renderValue() {
      var hasTitle = slots.title || (0, _utils.isDef)(props.title);
      var hasValue = slots.default || (0, _utils.isDef)(props.value);

      if (hasValue) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('value', {
            alone: !hasTitle
          }), props.valueClass]
        }, [slots.default ? slots.default() : (0, _vue.createVNode)("span", null, [props.value])]);
      }
    };

    var renderLeftIcon = function renderLeftIcon() {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.default, {
          "name": props.icon,
          "class": bem('left-icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderRightIcon = function renderRightIcon() {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      if (props.isLink) {
        var name = props.arrowDirection ? "arrow-".concat(props.arrowDirection) : 'arrow';
        return (0, _vue.createVNode)(_icon.default, {
          "name": name,
          "class": bem('right-icon')
        }, null);
      }
    };

    return function () {
      var _slots$extra;

      var size = props.size,
          center = props.center,
          border = props.border,
          isLink = props.isLink,
          required = props.required;
      var clickable = isLink || props.clickable;
      var classes = {
        center: center,
        required: required,
        clickable: clickable,
        borderless: !border
      };

      if (size) {
        classes[size] = !!size;
      }

      return (0, _vue.createVNode)("div", {
        "class": bem(classes),
        "role": clickable ? 'button' : undefined,
        "tabindex": clickable ? 0 : undefined,
        "onClick": route
      }, [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), (_slots$extra = slots.extra) === null || _slots$extra === void 0 ? void 0 : _slots$extra.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-route":1605508836809,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836830, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FIELD_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireWildcard(require("../cell"));

var _form = require("../form");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('field'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var FIELD_KEY = 'vanField';
exports.FIELD_KEY = FIELD_KEY;

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _cell.cellProps), {}, {
    rows: [Number, String],
    name: String,
    rules: Array,
    disabled: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    formatter: Function,
    maxlength: [Number, String],
    labelWidth: [Number, String],
    labelClass: null,
    labelAlign: String,
    inputAlign: String,
    placeholder: String,
    errorMessage: String,
    errorMessageAlign: String,
    showWordLimit: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    error: {
      type: Boolean,
      default: null
    },
    colon: {
      type: Boolean,
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    clearTrigger: {
      type: String,
      default: 'focus'
    },
    formatTrigger: {
      type: String,
      default: 'onChange'
    }
  }),
  emits: ['blur', 'focus', 'clear', 'keypress', 'click-input', 'click-left-icon', 'click-right-icon', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var state = (0, _vue.reactive)({
      focused: false,
      validateFailed: false,
      validateMessage: ''
    });
    var inputRef = (0, _vue.ref)();
    var childFieldValue = (0, _vue.ref)();
    var showClear = (0, _vue.computed)(function () {
      if (props.clearable && !props.readonly) {
        var hasValue = (0, _utils.isDef)(props.modelValue) && props.modelValue !== '';

        var _trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && state.focused;

        return hasValue && _trigger;
      }
    });
    var formValue = (0, _vue.computed)(function () {
      if (childFieldValue.value && slots.input) {
        return childFieldValue.value();
      }

      return props.modelValue;
    });

    var runValidator = function runValidator(value, rule) {
      return new Promise(function (resolve) {
        var returnVal = rule.validator(value, rule);

        if ((0, _utils.isPromise)(returnVal)) {
          return returnVal.then(resolve);
        }

        resolve(returnVal);
      });
    };

    var getRuleMessage = function getRuleMessage(value, rule) {
      var message = rule.message;

      if ((0, _utils.isFunction)(message)) {
        return message(value, rule);
      }

      return message;
    };

    var runRules = function runRules(rules) {
      return rules.reduce(function (promise, rule) {
        return promise.then(function () {
          if (state.validateFailed) {
            return;
          }

          var value = formValue.value;

          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }

          if (!(0, _utils2.runSyncRule)(value, rule)) {
            state.validateFailed = true;
            state.validateMessage = getRuleMessage(value, rule);
            return;
          }

          if (rule.validator) {
            return runValidator(value, rule).then(function (result) {
              if (result === false) {
                state.validateFailed = true;
                state.validateMessage = getRuleMessage(value, rule);
              }
            });
          }
        });
      }, Promise.resolve());
    };

    var resetValidation = function resetValidation() {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    var validate = function validate() {
      var rules = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.rules;
      return new Promise(function (resolve) {
        if (!rules) {
          resolve();
        }

        resetValidation();
        runRules(rules).then(function () {
          if (state.validateFailed) {
            resolve({
              name: props.name,
              message: state.validateMessage
            });
          } else {
            resolve();
          }
        });
      });
    };

    var _useParent = (0, _use.useParent)(_form.FORM_KEY),
        form = _useParent.parent;

    var validateWithTrigger = function validateWithTrigger(trigger) {
      if (form && props.rules) {
        var defaultTrigger = form.props.validateTrigger === trigger;
        var rules = props.rules.filter(function (rule) {
          if (rule.trigger) {
            return rule.trigger === trigger;
          }

          return defaultTrigger;
        });
        validate(rules);
      }
    };

    var updateValue = function updateValue(value) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';
      value = (0, _utils.isDef)(value) ? String(value) : ''; // native maxlength have incorrect line-break counting
      // see: https://github.com/youzan/vant/issues/5033

      var maxlength = props.maxlength,
          modelValue = props.modelValue;

      if ((0, _utils.isDef)(maxlength) && value.length > maxlength) {
        if (modelValue && modelValue.length === +maxlength) {
          value = modelValue;
        } else {
          value = value.slice(0, maxlength);
        }
      }

      if (props.type === 'number' || props.type === 'digit') {
        var isNumber = props.type === 'number';
        value = (0, _utils.formatNumber)(value, isNumber, isNumber);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
      }
    };

    var onInput = function onInput(event) {
      // skip update value when composing
      if (!event.target.composing) {
        updateValue(event.target.value);
      }
    };

    var focus = function focus() {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    };

    var blur = function blur() {
      if (inputRef.value) {
        inputRef.value.blur();
      }
    };

    var onFocus = function onFocus(event) {
      state.focused = true;
      emit('focus', event); // readonly not work in lagacy mobile safari

      if (props.readonly) {
        blur();
      }
    };

    var onBlur = function onBlur(event) {
      state.focused = false;
      updateValue(props.modelValue, 'onBlur');
      emit('blur', event);
      validateWithTrigger('onBlur');
      (0, _utils.resetScroll)();
    };

    var onClickInput = function onClickInput(event) {
      emit('click-input', event);
    };

    var onClickLeftIcon = function onClickLeftIcon(event) {
      emit('click-left-icon', event);
    };

    var onClickRightIcon = function onClickRightIcon(event) {
      emit('click-right-icon', event);
    };

    var onClear = function onClear(event) {
      (0, _utils.preventDefault)(event);
      emit('update:modelValue', '');
      emit('clear', event);
    };

    var showError = (0, _vue.computed)(function () {
      if (typeof props.error === 'boolean') {
        return props.error;
      }

      if (form && form.props.showError && state.validateFailed) {
        return true;
      }
    });

    var getProp = function getProp(key) {
      if ((0, _utils.isDef)(props[key])) {
        return props[key];
      }

      if (form && (0, _utils.isDef)(form.props[key])) {
        return form.props[key];
      }
    };

    var labelStyle = (0, _vue.computed)(function () {
      var labelWidth = getProp('labelWidth');

      if (labelWidth) {
        return {
          width: (0, _utils.addUnit)(labelWidth)
        };
      }
    });

    var onKeypress = function onKeypress(event) {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        var submitOnEnter = getProp('submitOnEnter');

        if (!submitOnEnter && props.type !== 'textarea') {
          (0, _utils.preventDefault)(event);
        } // trigger blur after click keyboard search button


        if (props.type === 'search') {
          blur();
        }
      }

      emit('keypress', event);
    };

    var onCompositionStart = function onCompositionStart(event) {
      event.target.composing = true;
    };

    var onCompositionEnd = function onCompositionEnd(event) {
      var target = event.target;

      if (target.composing) {
        target.composing = false;
        (0, _utils.trigger)(target, 'input');
      }
    };

    var adjustSize = function adjustSize() {
      var input = inputRef.value;

      if (!(props.type === 'textarea' && props.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if ((0, _utils.isObject)(props.autosize)) {
        var _props$autosize = props.autosize,
            maxHeight = _props$autosize.maxHeight,
            minHeight = _props$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    };

    var renderInput = function renderInput() {
      var inputAlign = getProp('inputAlign');

      if (slots.input) {
        return (0, _vue.createVNode)("div", {
          "class": bem('control', [inputAlign, 'custom']),
          "onClick": onClickInput
        }, [slots.input()]);
      }

      var inputProps = {
        ref: inputRef,
        name: props.name,
        rows: props.rows,
        class: bem('control', inputAlign),
        value: props.modelValue,
        disabled: props.disabled,
        readonly: props.readonly,
        placeholder: props.placeholder,
        onBlur: onBlur,
        onFocus: onFocus,
        onInput: onInput,
        onClick: onClickInput,
        onChange: onCompositionEnd,
        onKeypress: onKeypress,
        onCompositionend: onCompositionEnd,
        onCompositionstart: onCompositionStart
      };
      var type = props.type;

      if (type === 'textarea') {
        return (0, _vue.createVNode)("textarea", inputProps, null);
      }

      var inputType = type;
      var inputMode; // type="number" is weired in iOS, and can't prevent dot in Android
      // so use inputmode to set keyboard in mordern browers

      if (type === 'number') {
        inputType = 'text';
        inputMode = 'decimal';
      }

      if (type === 'digit') {
        inputType = 'tel';
        inputMode = 'numeric';
      }

      return (0, _vue.createVNode)("input", (0, _vue.mergeProps)({
        "type": inputType,
        "inputmode": inputMode
      }, inputProps), null);
    };

    var renderLeftIcon = function renderLeftIcon() {
      var leftIconSlot = slots['left-icon'];

      if (props.leftIcon || leftIconSlot) {
        return (0, _vue.createVNode)("div", {
          "class": bem('left-icon'),
          "onClick": onClickLeftIcon
        }, [leftIconSlot ? leftIconSlot() : (0, _vue.createVNode)(_icon.default, {
          "name": props.leftIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderRightIcon = function renderRightIcon() {
      var rightIconSlot = slots['right-icon'];

      if (props.rightIcon || rightIconSlot) {
        return (0, _vue.createVNode)("div", {
          "class": bem('right-icon'),
          "onClick": onClickRightIcon
        }, [rightIconSlot ? rightIconSlot() : (0, _vue.createVNode)(_icon.default, {
          "name": props.rightIcon,
          "classPrefix": props.iconPrefix
        }, null)]);
      }
    };

    var renderWordLimit = function renderWordLimit() {
      if (props.showWordLimit && props.maxlength) {
        var count = (props.modelValue || '').length;
        return (0, _vue.createVNode)("div", {
          "class": bem('word-limit')
        }, [(0, _vue.createVNode)("span", {
          "class": bem('word-num')
        }, [count]), (0, _vue.createTextVNode)("/"), props.maxlength]);
      }
    };

    var renderMessage = function renderMessage() {
      if (form && form.props.showErrorMessage === false) {
        return;
      }

      var message = props.errorMessage || state.validateMessage;

      if (message) {
        var errorMessageAlign = getProp('errorMessageAlign');
        return (0, _vue.createVNode)("div", {
          "class": bem('error-message', errorMessageAlign)
        }, [message]);
      }
    };

    var renderLabel = function renderLabel() {
      var colon = getProp('colon') ? ':' : '';

      if (slots.label) {
        return [slots.label(), colon];
      }

      if (props.label) {
        return (0, _vue.createVNode)("span", null, [props.label + colon]);
      }
    };

    (0, _useExpose.useExpose)({
      blur: blur,
      focus: focus,
      validate: validate,
      formValue: formValue,
      resetValidation: resetValidation
    });
    (0, _vue.provide)(FIELD_KEY, {
      childFieldValue: childFieldValue,
      resetValidation: resetValidation,
      validateWithTrigger: validateWithTrigger
    });
    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      updateValue(value);
      resetValidation();
      validateWithTrigger('onChange');
      (0, _vue.nextTick)(adjustSize);
    });
    (0, _vue.onMounted)(function () {
      updateValue(props.modelValue, props.formatTrigger);
      (0, _vue.nextTick)(adjustSize);
    });
    return function () {
      var _bem;

      var labelAlign = getProp('labelAlign');
      var Label = renderLabel();
      var LeftIcon = renderLeftIcon();
      return (0, _vue.createVNode)(_cell.default, {
        "size": props.size,
        "icon": props.leftIcon,
        "class": bem((_bem = {
          error: showError.value,
          disabled: props.disabled
        }, (0, _defineProperty2.default)(_bem, "label-".concat(labelAlign), labelAlign), (0, _defineProperty2.default)(_bem, 'min-height', props.type === 'textarea' && !props.autosize), _bem)),
        "center": props.center,
        "border": props.border,
        "isLink": props.isLink,
        "required": props.required,
        "clickable": props.clickable,
        "titleStyle": labelStyle.value,
        "valueClass": bem('value'),
        "titleClass": [bem('label', labelAlign), props.labelClass],
        "arrowDirection": props.arrowDirection
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": bem('body')
          }, [renderInput(), showClear.value && (0, _vue.createVNode)(_icon.default, {
            "name": "clear",
            "class": bem('clear'),
            "onTouchstart": onClear
          }, null), renderRightIcon(), slots.button && (0, _vue.createVNode)("div", {
            "class": bem('button')
          }, [slots.button()])]), renderWordLimit(), renderMessage()];
        },
        icon: LeftIcon ? function () {
          return LeftIcon;
        } : null,
        title: Label ? function () {
          return Label;
        } : null,
        extra: slots.extra
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"./utils":1605508836831,"../composition/use-expose":1605508836808,"../icon":1605508836812,"../cell":1605508836829,"../form":1605508836832}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836831, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSyncRule = runSyncRule;

function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return !value.length;
  }

  if (value === 0) {
    return false;
  }

  return !value;
}

function runSyncRule(value, rule) {
  if (rule.required && isEmptyValue(value)) {
    return false;
  }

  if (rule.pattern && !rule.pattern.test(String(value))) {
    return false;
  }

  return true;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836832, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FORM_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _createNamespace = (0, _utils.createNamespace)('form'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var FORM_KEY = 'vanForm';
exports.FORM_KEY = FORM_KEY;

var _default = createComponent({
  props: {
    colon: Boolean,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    scrollToError: Boolean,
    validateFirst: Boolean,
    errorMessageAlign: String,
    submitOnEnter: {
      type: Boolean,
      default: true
    },
    validateTrigger: {
      type: String,
      default: 'onBlur'
    },
    showError: {
      type: Boolean,
      default: true
    },
    showErrorMessage: {
      type: Boolean,
      default: true
    }
  },
  emits: ['submit', 'failed'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(FORM_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var validateSeq = function validateSeq() {
      return new Promise(function (resolve, reject) {
        var errors = [];
        children.reduce(function (promise, field) {
          return promise.then(function () {
            if (!errors.length) {
              return field.validate().then(function (error) {
                if (error) {
                  errors.push(error);
                }
              });
            }
          });
        }, Promise.resolve()).then(function () {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    };

    var validateAll = function validateAll() {
      return new Promise(function (resolve, reject) {
        Promise.all(children.map(function (item) {
          return item.validate();
        })).then(function (errors) {
          errors = errors.filter(function (item) {
            return item;
          });

          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
        });
      });
    };

    var validateField = function validateField(name) {
      var matched = children.filter(function (item) {
        return item.name === name;
      });

      if (matched.length) {
        return new Promise(function (resolve, reject) {
          matched[0].validate().then(function (error) {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }

      return Promise.reject();
    };

    var validate = function validate(name) {
      if (name) {
        return validateField(name);
      }

      return props.validateFirst ? validateSeq() : validateAll();
    };

    var resetValidation = function resetValidation(name) {
      children.forEach(function (item) {
        if (!name || item.name === name) {
          item.resetValidation();
        }
      });
    };

    var scrollToField = function scrollToField(name, options) {
      children.some(function (item) {
        if (item.name === name) {
          item.$el.scrollIntoView(options);
          return true;
        }

        return false;
      });
    };

    var getValues = function getValues() {
      return children.reduce(function (form, field) {
        form[field.name] = field.formValue.value;
        return form;
      }, {});
    };

    var submit = function submit() {
      var values = getValues();
      validate().then(function () {
        emit('submit', values);
      }).catch(function (errors) {
        emit('failed', {
          values: values,
          errors: errors
        });

        if (props.scrollToError) {
          scrollToField(errors[0].name);
        }
      });
    };

    var onSubmit = function onSubmit(event) {
      event.preventDefault();
      submit();
    };

    linkChildren({
      props: props
    });
    (0, _useExpose.useExpose)({
      submit: submit,
      validate: validate,
      scrollToField: scrollToField,
      resetValidation: resetValidation
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("form", {
        "class": bem(),
        "onSubmit": onSubmit
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836833, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _mountComponent2 = require("../utils/mount-component");

var _Toast = _interopRequireDefault(require("./Toast"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: null,
  onOpened: null,
  duration: 2000,
  teleport: 'body',
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  overlayStyle: null,
  closeOnClick: false,
  closeOnClickOverlay: false
}; // default options of specific type

var defaultOptionsMap = {};
var queue = [];
var allowMultiple = false;

var currentOptions = _objectSpread({}, defaultOptions);

function parseOptions(message) {
  if ((0, _utils.isObject)(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  var _mountComponent = (0, _mountComponent2.mountComponent)({
    setup: function setup() {
      var message = (0, _vue.ref)();

      var _usePopupState = (0, _mountComponent2.usePopupState)(),
          open = _usePopupState.open,
          state = _usePopupState.state,
          close = _usePopupState.close,
          toggle = _usePopupState.toggle;

      var onClosed = function onClosed() {
        if (allowMultiple) {
          queue = queue.filter(function (item) {
            return item !== instance;
          });
          unmount();
        }
      };

      (0, _vue.watch)(message, function (value) {
        state.message = value;
      });

      (0, _vue.getCurrentInstance)().render = function () {
        return (0, _vue.createVNode)(_Toast.default, _objectSpread(_objectSpread({}, state), {}, {
          onClosed: onClosed,
          'onUpdate:show': toggle
        }), null);
      };

      return {
        open: open,
        clear: close,
        message: message
      };
    }
  }),
      instance = _mountComponent.instance,
      unmount = _mountComponent.unmount;

  return instance;
}

function getInstance() {
  /* istanbul ignore if */
  if (!_utils.inBrowser) {
    return {};
  }

  if (!queue.length || allowMultiple) {
    var instance = createInstance();
    queue.push(instance);
  }

  return queue[queue.length - 1];
}

function Toast() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var toast = getInstance();
  options = parseOptions(options);
  options = _objectSpread(_objectSpread(_objectSpread({}, currentOptions), defaultOptionsMap[options.type || currentOptions.type]), options);
  toast.open(options);
  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_objectSpread({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!allowMultiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    (0, _extends2.default)(currentOptions, type);
  }
};

Toast.resetDefaultOptions = function (type) {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = _objectSpread({}, defaultOptions);
    defaultOptionsMap = {};
  }
};

Toast.allowMultiple = function () {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  allowMultiple = value;
};

Toast.install = function (app) {
  app.use(_Toast.default);
  app.config.globalProperties.$toast = Toast;
};

var _default = Toast;
exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/mount-component":1605508836834,"./Toast":1605508836835}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836834, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopupState = usePopupState;
exports.mountComponent = mountComponent;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = require("vue");

var _useExpose = require("../composition/use-expose");

function usePopupState() {
  var state = (0, _vue.reactive)({
    show: false
  });

  var toggle = function toggle(show) {
    state.show = show;
  };

  var open = function open(props) {
    (0, _extends2.default)(state, props);
    (0, _vue.nextTick)(function () {
      toggle(true);
    });
  };

  var close = function close() {
    toggle(false);
  };

  (0, _useExpose.useExpose)({
    open: open,
    close: close,
    toggle: toggle
  });
  return {
    open: open,
    close: close,
    state: state,
    toggle: toggle
  };
}

function mountComponent(RootComponent) {
  var app = (0, _vue.createApp)(RootComponent);
  var root = document.createElement('div');
  document.body.appendChild(root);
  return {
    instance: app.mount(root),
    unmount: function unmount() {
      app.unmount(root);
      document.body.removeChild(root);
    }
  };
}
}, function(modId) { var map = {"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836835, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _lockClick = require("./lock-click");

var _icon = _interopRequireDefault(require("../icon"));

var _popup = _interopRequireDefault(require("../popup"));

var _loading = _interopRequireDefault(require("../loading"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('toast'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    icon: String,
    show: Boolean,
    message: [Number, String],
    duration: Number,
    className: null,
    iconPrefix: String,
    lockScroll: Boolean,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    transition: {
      type: String,
      default: 'van-fade'
    }
  },
  emits: ['update:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var timer;
    var clickable = false;

    var toggleClickable = function toggleClickable() {
      var newValue = props.show && props.forbidClick;

      if (clickable !== newValue) {
        clickable = newValue;
        (0, _lockClick.lockClick)(clickable);
      }
    };

    var onClick = function onClick() {
      if (props.closeOnClick) {
        emit('update:show', false);
      }
    };

    var clearTimer = function clearTimer() {
      clearTimeout(timer);
    };

    var renderIcon = function renderIcon() {
      var icon = props.icon,
          type = props.type,
          iconPrefix = props.iconPrefix,
          loadingType = props.loadingType;
      var hasIcon = icon || type === 'success' || type === 'fail';

      if (hasIcon) {
        return (0, _vue.createVNode)(_icon.default, {
          "name": icon || type,
          "class": bem('icon'),
          "classPrefix": iconPrefix
        }, null);
      }

      if (type === 'loading') {
        return (0, _vue.createVNode)(_loading.default, {
          "class": bem('loading'),
          "type": loadingType
        }, null);
      }
    };

    var renderMessage = function renderMessage() {
      var type = props.type,
          message = props.message;

      if ((0, _utils.isDef)(message) && message !== '') {
        return type === 'html' ? (0, _vue.createVNode)("div", {
          "class": bem('text'),
          "innerHTML": message
        }, null) : (0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [message]);
      }
    };

    (0, _vue.watch)([function () {
      return props.show;
    }, function () {
      return props.forbidClick;
    }], toggleClickable);
    (0, _vue.watch)([function () {
      return props.show;
    }, function () {
      return props.duration;
    }], function () {
      clearTimer();

      if (props.show && props.duration > 0) {
        timer = setTimeout(function () {
          emit('update:show', false);
        }, props.duration);
      }
    });
    (0, _vue.onMounted)(toggleClickable);
    (0, _vue.onUnmounted)(toggleClickable);
    return function () {
      return (0, _vue.createVNode)(_popup.default, {
        "show": props.show,
        "class": [bem([props.position, (0, _defineProperty2.default)({}, props.type, !props.icon)]), props.className],
        "lockScroll": false,
        "transition": props.transition,
        "onClick": onClick,
        "onClosed": clearTimer
      }, {
        default: function _default() {
          return [renderIcon(), renderMessage()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"./lock-click":1605508836836,"../icon":1605508836812,"../popup":1605508836817,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836836, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockClick = lockClick;
var lockCount = 0;

function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('van-toast--unclickable');
    }

    lockCount++;
  } else if (lockCount) {
    lockCount--;

    if (!lockCount) {
      document.body.classList.remove('van-toast--unclickable');
    }
  }
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836837, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _mountComponent2 = require("../utils/mount-component");

var _Dialog = _interopRequireDefault(require("./Dialog"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var instance;

function initInstance() {
  var Wrapper = {
    setup: function setup() {
      var _usePopupState = (0, _mountComponent2.usePopupState)(),
          state = _usePopupState.state,
          toggle = _usePopupState.toggle;

      return function () {
        return (0, _vue.createVNode)(_Dialog.default, _objectSpread(_objectSpread({}, state), {}, {
          'onUpdate:show': toggle
        }), null);
      };
    }
  };

  var _mountComponent = (0, _mountComponent2.mountComponent)(Wrapper);

  instance = _mountComponent.instance;
}

function Dialog(options) {
  /* istanbul ignore if */
  if (!_utils.inBrowser) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance) {
      initInstance();
    }

    instance.open(_objectSpread(_objectSpread(_objectSpread({}, Dialog.currentOptions), options), {}, {
      callback: function callback(action) {
        (action === 'confirm' ? resolve : reject)(action);
      }
    }));
  });
}

Dialog.defaultOptions = {
  title: '',
  width: '',
  theme: null,
  message: '',
  overlay: true,
  callback: null,
  teleport: 'body',
  className: '',
  allowHtml: false,
  lockScroll: true,
  transition: 'van-dialog-bounce',
  beforeClose: null,
  overlayClass: '',
  overlayStyle: null,
  messageAlign: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: true,
  closeOnClickOverlay: false
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(_objectSpread({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.toggle(false);
  }
};

Dialog.setDefaultOptions = function (options) {
  (0, _extends2.default)(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _objectSpread({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function (app) {
  app.use(_Dialog.default);
  app.config.globalProperties.$dialog = Dialog;
};

Dialog.Component = _Dialog.default;
var _default = Dialog;
exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/mount-component":1605508836834,"./Dialog":1605508836838}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836838, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _interceptor = require("../utils/interceptor");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _popup = _interopRequireWildcard(require("../popup"));

var _button = _interopRequireDefault(require("../button"));

var _actionBar = _interopRequireDefault(require("../action-bar"));

var _actionBarButton = _interopRequireDefault(require("../action-bar-button"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('dialog'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var popupKeys = [].concat((0, _toConsumableArray2.default)(Object.keys(_popup.popupSharedProps)), ['transition', 'closeOnPopstate']);

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _popup.popupSharedProps), {}, {
    title: String,
    theme: String,
    width: [Number, String],
    message: String,
    callback: Function,
    allowHtml: Boolean,
    className: null,
    beforeClose: Function,
    messageAlign: String,
    showCancelButton: Boolean,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    closeOnClickOverlay: Boolean,
    transition: {
      type: String,
      default: 'van-dialog-bounce'
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['confirm', 'cancel', 'update:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var loading = (0, _vue.reactive)({
      confirm: false,
      cancel: false
    });

    var onUpdateShow = function onUpdateShow(value) {
      emit('update:show', value);
    };

    var close = function close(action) {
      onUpdateShow(false);

      if (props.callback) {
        props.callback(action);
      }
    };

    var handleAction = function handleAction(action) {
      // should not trigger close event when hidden
      if (!props.show) {
        return;
      }

      emit(action);

      if (props.beforeClose) {
        loading[action] = true;
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeClose,
          args: [action],
          done: function done() {
            close(action);
            loading[action] = false;
          },
          canceled: function canceled() {
            loading[action] = false;
          }
        });
      } else {
        close(action);
      }
    };

    var renderTitle = function renderTitle() {
      var title = slots.title ? slots.title() : props.title;

      if (title) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header', {
            isolated: !props.message && !slots.default
          })
        }, [title]);
      }
    };

    var renderContent = function renderContent() {
      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": bem('content')
        }, [slots.default()]);
      }

      var title = props.title,
          message = props.message,
          allowHtml = props.allowHtml,
          messageAlign = props.messageAlign;

      if (message) {
        var hasTitle = title || slots.title;
        return (0, _vue.createVNode)("div", {
          "class": bem('content', {
            isolated: !hasTitle
          })
        }, [(0, _vue.createVNode)("div", (0, _vue.mergeProps)({
          "class": bem('message', (0, _defineProperty2.default)({
            'has-title': hasTitle
          }, messageAlign, messageAlign))
        }, (0, _defineProperty2.default)({}, allowHtml ? 'innerHTML' : 'textContent', message)), null)]);
      }
    };

    var renderButtons = function renderButtons() {
      return (0, _vue.createVNode)("div", {
        "class": [_constant.BORDER_TOP, bem('footer')]
      }, [props.showCancelButton && (0, _vue.createVNode)(_button.default, {
        "size": "large",
        "text": props.cancelButtonText || t('cancel'),
        "class": bem('cancel'),
        "style": {
          color: props.cancelButtonColor
        },
        "loading": loading.cancel,
        "onClick": function onClick() {
          handleAction('cancel');
        }
      }, null), props.showConfirmButton && (0, _vue.createVNode)(_button.default, {
        "size": "large",
        "text": props.confirmButtonText || t('confirm'),
        "class": [bem('confirm'), (0, _defineProperty2.default)({}, _constant.BORDER_LEFT, props.showCancelButton)],
        "style": {
          color: props.confirmButtonColor
        },
        "loading": loading.confirm,
        "onClick": function onClick() {
          handleAction('confirm');
        }
      }, null)]);
    };

    var renderRoundButtons = function renderRoundButtons() {
      return (0, _vue.createVNode)(_actionBar.default, {
        "class": bem('footer')
      }, {
        default: function _default() {
          return [props.showCancelButton && (0, _vue.createVNode)(_actionBarButton.default, {
            "size": "large",
            "type": "warning",
            "text": props.cancelButtonText || t('cancel'),
            "class": bem('cancel'),
            "color": props.cancelButtonColor,
            "loading": loading.cancel,
            "onClick": function onClick() {
              handleAction('cancel');
            }
          }, null), props.showConfirmButton && (0, _vue.createVNode)(_actionBarButton.default, {
            "size": "large",
            "type": "danger",
            "text": props.confirmButtonText || t('confirm'),
            "class": bem('confirm'),
            "color": props.confirmButtonColor,
            "loading": loading.confirm,
            "onClick": function onClick() {
              handleAction('confirm');
            }
          }, null)];
        }
      });
    };

    return function () {
      var width = props.width,
          title = props.title,
          theme = props.theme,
          message = props.message,
          className = props.className;
      return (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
        "role": "dialog",
        "class": [bem([theme]), className],
        "style": {
          width: (0, _utils.addUnit)(width)
        },
        "aria-labelledby": title || message
      }, _objectSpread(_objectSpread({}, (0, _utils.pick)(props, popupKeys)), {}, {
        'onUpdate:show': onUpdateShow
      })), {
        default: function _default() {
          return [renderTitle(), renderContent(), theme === 'round-button' ? renderRoundButtons() : renderButtons()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils/interceptor":1605508836839,"../utils":1605508836790,"../utils/constant":1605508836811,"../popup":1605508836817,"../button":1605508836810,"../action-bar":1605508836789,"../action-bar-button":1605508836807}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836839, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callInterceptor = callInterceptor;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _ = require(".");

function callInterceptor(options) {
  var interceptor = options.interceptor,
      args = options.args,
      done = options.done,
      canceled = options.canceled;

  if (interceptor) {
    var returnVal = interceptor.apply(void 0, (0, _toConsumableArray2.default)(args));

    if ((0, _.isPromise)(returnVal)) {
      returnVal.then(function (value) {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(_.noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
}, function(modId) { var map = {".":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836840, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _system = require("../utils/validate/system");

var _cell = _interopRequireDefault(require("../cell"));

var _field = _interopRequireDefault(require("../field"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('address-edit-detail'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var android = (0, _system.isAndroid)();

var _default = createComponent({
  props: {
    show: Boolean,
    value: String,
    errorMessage: String,
    focused: Boolean,
    detailRows: [Number, String],
    searchResult: Array,
    detailMaxlength: [Number, String],
    showSearchResult: Boolean
  },
  emits: ['blur', 'focus', 'input', 'select-search'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var field = (0, _vue.ref)();

    var showSearchResult = function showSearchResult() {
      return props.focused && props.searchResult && props.showSearchResult;
    };

    var onSelect = function onSelect(express) {
      emit('select-search', express);
      emit('input', "".concat(express.address || '', " ").concat(express.name || '').trim());
    };

    var onFinish = function onFinish() {
      field.value.blur();
    };

    var renderFinish = function renderFinish() {
      if (props.value && props.focused && android) {
        return (0, _vue.createVNode)("div", {
          "class": bem('finish'),
          "onClick": onFinish
        }, [t('complete')]);
      }
    };

    var renderSearchTitle = function renderSearchTitle(express) {
      if (express.name) {
        var text = express.name.replace(props.value, "<span class=".concat(bem('keyword'), ">").concat(props.value, "</span>"));
        return (0, _vue.createVNode)("div", {
          "innerHTML": text
        }, null);
      }
    };

    var renderSearchResult = function renderSearchResult() {
      if (!showSearchResult()) {
        return;
      }

      var searchResult = props.searchResult;
      return searchResult.map(function (express) {
        return (0, _vue.createVNode)(_cell.default, {
          "clickable": true,
          "key": express.name + express.address,
          "icon": "location-o",
          "label": express.address,
          "class": bem('search-item'),
          "border": false,
          "onClick": function onClick() {
            onSelect(express);
          }
        }, {
          title: function title() {
            return renderSearchTitle(express);
          }
        });
      });
    };

    var onFocus = function onFocus(event) {
      emit('focus', event);
    };

    var onBlur = function onBlur(event) {
      emit('blur', event);
    };

    var onInput = function onInput(value) {
      emit('input', value);
    };

    return function () {
      if (props.show) {
        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)(_field.default, (0, _vue.mergeProps)({
          "autosize": true,
          "ref": field,
          "class": bem(),
          "rows": props.detailRows,
          "type": "textarea",
          "label": t('label'),
          "border": !showSearchResult(),
          "clearable": !android,
          "maxlength": props.detailMaxlength,
          "modelValue": props.value,
          "placeholder": t('placeholder'),
          "errorMessage": props.errorMessage,
          "onBlur": onBlur,
          "onFocus": onFocus
        }, {
          'onUpdate:modelValue': onInput
        }), {
          icon: renderFinish
        }), renderSearchResult()]);
      }
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/validate/system":1605508836806,"../cell":1605508836829,"../field":1605508836830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836841, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useLinkField = require("../composition/use-link-field");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('switch'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    size: [Number, String],
    loading: Boolean,
    disabled: Boolean,
    modelValue: null,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      type: null,
      default: true
    },
    inactiveValue: {
      type: null,
      default: false
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var isChecked = function isChecked() {
      return props.modelValue === props.activeValue;
    };

    var onClick = function onClick() {
      if (!props.disabled && !props.loading) {
        var newValue = isChecked() ? props.inactiveValue : props.activeValue;
        emit('update:modelValue', newValue);
        emit('change', newValue);
      }
    };

    var renderLoading = function renderLoading() {
      if (props.loading) {
        var color = isChecked() ? props.activeColor : props.inactiveColor;
        return (0, _vue.createVNode)(_loading.default, {
          "class": bem('loading'),
          "color": color
        }, null);
      }
    };

    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      var size = props.size,
          loading = props.loading,
          disabled = props.disabled,
          activeColor = props.activeColor,
          inactiveColor = props.inactiveColor;
      var checked = isChecked();
      var style = {
        fontSize: (0, _utils.addUnit)(size),
        backgroundColor: checked ? activeColor : inactiveColor
      };
      return (0, _vue.createVNode)("div", {
        "role": "switch",
        "class": bem({
          on: checked,
          loading: loading,
          disabled: disabled
        }),
        "style": style,
        "aria-checked": checked,
        "onClick": onClick
      }, [(0, _vue.createVNode)("div", {
        "class": bem('node')
      }, [renderLoading()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-link-field":1605508836842,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836842, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLinkField = useLinkField;

var _vue = require("vue");

var _field = require("../field");

function useLinkField(getValue) {
  var field = (0, _vue.inject)(_field.FIELD_KEY, null);

  if (field && !field.childFieldValue.value) {
    field.childFieldValue.value = getValue;
    (0, _vue.watch)(getValue, function () {
      field.resetValidation();
      field.validateWithTrigger('onChange');
    });
  }
}
}, function(modId) { var map = {"../field":1605508836830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836843, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _button = _interopRequireDefault(require("../button"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

var _Item = _interopRequireDefault(require("./Item"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('address-list'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: {
    list: Array,
    modelValue: [Number, String],
    disabledList: Array,
    disabledText: String,
    addButtonText: String,
    defaultTagText: String,
    switchable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['add', 'edit', 'select', 'click-item', 'edit-disabled', 'select-disabled', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var renderItem = function renderItem(item, index, disabled) {
      var onEdit = function onEdit() {
        var name = disabled ? 'edit-disabled' : 'edit';
        emit(name, item, index);
      };

      var onClick = function onClick() {
        emit('click-item', item, index);
      };

      var onSelect = function onSelect() {
        var name = disabled ? 'select-disabled' : 'select';
        emit(name, item, index);

        if (!disabled) {
          emit('update:modelValue', item.id);
        }
      };

      return (0, _vue.createVNode)(_Item.default, {
        "key": item.id,
        "data": item,
        "disabled": disabled,
        "switchable": props.switchable,
        "defaultTagText": props.defaultTagText,
        "onEdit": onEdit,
        "onClick": onClick,
        "onSelect": onSelect
      }, {
        bottom: slots['item-bottom']
      });
    };

    var renderList = function renderList(list, disabled) {
      if (list) {
        return list.map(function (item, index) {
          return renderItem(item, index, disabled);
        });
      }
    };

    var renderBottom = function renderBottom() {
      var onClick = function onClick() {
        emit('add');
      };

      return (0, _vue.createVNode)("div", {
        "class": bem('bottom')
      }, [(0, _vue.createVNode)(_button.default, {
        "round": true,
        "block": true,
        "type": "danger",
        "text": props.addButtonText || t('add'),
        "class": bem('add'),
        "onClick": onClick
      }, null)]);
    };

    return function () {
      var _slots$top, _slots$default;

      var List = renderList(props.list);
      var DisabledList = renderList(props.disabledList, true);
      var DisabledText = props.disabledText && (0, _vue.createVNode)("div", {
        "class": bem('disabled-text')
      }, [props.disabledText]);
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(_slots$top = slots.top) === null || _slots$top === void 0 ? void 0 : _slots$top.call(slots), (0, _vue.createVNode)(_radioGroup.default, {
        "modelValue": props.modelValue
      }, {
        default: function _default() {
          return [List];
        }
      }), DisabledText, DisabledList, (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), renderBottom()]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../button":1605508836810,"../radio-group":1605508836844,"./Item":1605508836845}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836844, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RADIO_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useLinkField = require("../composition/use-link-field");

var _createNamespace = (0, _utils.createNamespace)('radio-group'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var RADIO_KEY = 'vanRadio';
exports.RADIO_KEY = RADIO_KEY;

var _default = createComponent({
  props: {
    disabled: Boolean,
    iconSize: [Number, String],
    direction: String,
    modelValue: null,
    checkedColor: String
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(RADIO_KEY),
        linkChildren = _useChildren.linkChildren;

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      emit('change', value);
    });
    linkChildren({
      emit: emit,
      props: props
    });
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem([props.direction]),
        "role": "radiogroup"
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-link-field":1605508836842}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836845, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _tag = _interopRequireDefault(require("../tag"));

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('address-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    data: Object,
    disabled: Boolean,
    switchable: Boolean,
    defaultTagText: String
  },
  emits: ['edit', 'click', 'select'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var onClick = function onClick() {
      if (props.switchable) {
        emit('select');
      }

      emit('click');
    };

    var renderRightIcon = function renderRightIcon() {
      return (0, _vue.createVNode)(_icon.default, {
        "name": "edit",
        "class": bem('edit'),
        "onClick": function onClick(event) {
          event.stopPropagation();
          emit('edit');
          emit('click');
        }
      }, null);
    };

    var renderTag = function renderTag() {
      if (props.data.isDefault && props.defaultTagText) {
        return (0, _vue.createVNode)(_tag.default, {
          "type": "danger",
          "round": true,
          "class": bem('tag')
        }, {
          default: function _default() {
            return [props.defaultTagText];
          }
        });
      }
    };

    var renderContent = function renderContent() {
      var data = props.data,
          disabled = props.disabled,
          switchable = props.switchable;
      var Info = [(0, _vue.createVNode)("div", {
        "class": bem('name')
      }, ["".concat(data.name, " ").concat(data.tel), renderTag()]), (0, _vue.createVNode)("div", {
        "class": bem('address')
      }, [data.address])];

      if (switchable && !disabled) {
        return (0, _vue.createVNode)(_radio.default, {
          "name": data.id,
          "iconSize": 18
        }, {
          default: function _default() {
            return [Info];
          }
        });
      }

      return Info;
    };

    return function () {
      var _slots$bottom;

      var disabled = props.disabled;
      return (0, _vue.createVNode)("div", {
        "class": bem({
          disabled: disabled
        }),
        "onClick": onClick
      }, [(0, _vue.createVNode)(_cell.default, {
        "border": false,
        "valueClass": bem('value')
      }, {
        default: renderContent,
        'right-icon': renderRightIcon
      }), (_slots$bottom = slots.bottom) === null || _slots$bottom === void 0 ? void 0 : _slots$bottom.call(slots, _objectSpread(_objectSpread({}, props.data), {}, {
        disabled: disabled
      }))]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../tag":1605508836846,"../icon":1605508836812,"../cell":1605508836829,"../radio":1605508836847}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836846, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('tag'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    size: String,
    mark: Boolean,
    color: String,
    plain: Boolean,
    round: Boolean,
    textColor: String,
    closeable: Boolean,
    type: {
      type: String,
      default: 'default'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  emits: ['close'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var onClose = function onClose(event) {
      event.stopPropagation();
      emit('close');
    };

    var getStyle = function getStyle() {
      if (props.plain) {
        return {
          color: props.textColor || props.color
        };
      }

      return {
        color: props.textColor,
        background: props.color
      };
    };

    return function () {
      var _slots$default;

      var show = props.show,
          type = props.type,
          mark = props.mark,
          plain = props.plain,
          round = props.round,
          size = props.size,
          closeable = props.closeable;
      var classes = {
        mark: mark,
        plain: plain,
        round: round
      };

      if (size) {
        classes[size] = size;
      }

      var CloseIcon = closeable && (0, _vue.createVNode)(_icon.default, {
        "name": "cross",
        "class": bem('close'),
        "onClick": onClose
      }, null);
      return (0, _vue.createVNode)(_vue.Transition, {
        "name": closeable ? 'van-fade' : undefined
      }, {
        default: function _default() {
          return [show ? (0, _vue.createVNode)("span", {
            "style": getStyle(),
            "class": bem([classes, type])
          }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), CloseIcon]) : null];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836847, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _Checker = _interopRequireWildcard(require("../checkbox/Checker"));

var _radioGroup = require("../radio-group");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('radio'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: _Checker.checkerProps,
  emits: ['update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useParent = (0, _use.useParent)(_radioGroup.RADIO_KEY),
        parent = _useParent.parent;

    var checked = function checked() {
      var value = parent ? parent.props.modelValue : props.modelValue;
      return value === props.name;
    };

    var toggle = function toggle() {
      var emitter = parent ? parent.emit : emit;
      emitter('update:modelValue', props.name);
    };

    return function () {
      return (0, _vue.createVNode)(_Checker.default, (0, _vue.mergeProps)({
        "bem": bem,
        "role": "radio",
        "parent": parent,
        "checked": checked(),
        "onToggle": toggle
      }, props), _objectSpread({}, (0, _utils.pick)(slots, ['default', 'icon'])));
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../checkbox/Checker":1605508836848,"../radio-group":1605508836844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836848, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.checkerProps = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var checkerProps = {
  name: null,
  disabled: Boolean,
  iconSize: [Number, String],
  modelValue: null,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean,
  shape: {
    type: String,
    default: 'round'
  }
};
exports.checkerProps = checkerProps;

var _default = (0, _vue.defineComponent)({
  props: _objectSpread(_objectSpread({}, checkerProps), {}, {
    role: String,
    parent: Object,
    checked: Boolean,
    bem: {
      type: Function,
      required: true
    }
  }),
  emits: ['click', 'toggle'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var iconRef = (0, _vue.ref)();

    var getParentProp = function getParentProp(name) {
      if (props.parent) {
        return props.parent.props[name];
      }

      return null;
    };

    var disabled = (0, _vue.computed)(function () {
      return getParentProp('disabled') || props.disabled;
    });
    var direction = (0, _vue.computed)(function () {
      return getParentProp('direction') || null;
    });
    var iconStyle = (0, _vue.computed)(function () {
      var checkedColor = props.checkedColor || getParentProp('checkedColor');

      if (checkedColor && props.checked && !disabled.value) {
        return {
          borderColor: checkedColor,
          backgroundColor: checkedColor
        };
      }
    });

    var onClick = function onClick(event) {
      var target = event.target;
      var icon = iconRef.value;
      var iconClicked = icon === target || icon.contains(target);

      if (!disabled.value && (iconClicked || !props.labelDisabled)) {
        emit('toggle');
      }

      emit('click', event);
    };

    var renderIcon = function renderIcon() {
      var bem = props.bem,
          shape = props.shape,
          checked = props.checked;
      var iconSize = props.iconSize || getParentProp('iconSize');
      return (0, _vue.createVNode)("div", {
        "ref": iconRef,
        "class": bem('icon', [shape, {
          disabled: disabled.value,
          checked: checked
        }]),
        "style": {
          fontSize: (0, _utils.addUnit)(iconSize)
        }
      }, [slots.icon ? slots.icon({
        checked: checked
      }) : (0, _vue.createVNode)(_icon.default, {
        "name": "success",
        "style": iconStyle.value
      }, null)]);
    };

    var renderLabel = function renderLabel() {
      if (slots.default) {
        return (0, _vue.createVNode)("span", {
          "class": props.bem('label', [props.labelPosition, {
            disabled: disabled.value
          }])
        }, [slots.default()]);
      }
    };

    return function () {
      var nodes = [renderIcon()];

      if (props.labelPosition === 'left') {
        nodes.unshift(renderLabel());
      } else {
        nodes.push(renderLabel());
      }

      return (0, _vue.createVNode)("div", {
        "role": props.role,
        "class": props.bem([{
          disabled: disabled.value,
          'label-disabled': props.labelDisabled
        }, direction.value]),
        "tabindex": disabled.value ? -1 : 0,
        "aria-checked": props.checked,
        "onClick": onClick
      }, [nodes]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836849, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _date = require("../utils/validate/date");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useRefs3 = require("../composition/use-refs");

var _useExpose = require("../composition/use-expose");

var _popup = _interopRequireDefault(require("../popup"));

var _button = _interopRequireDefault(require("../button"));

var _toast = _interopRequireDefault(require("../toast"));

var _Month = _interopRequireDefault(require("./components/Month"));

var _Header = _interopRequireDefault(require("./components/Header"));

// Utils
// Composition
// Components
var _default2 = (0, _utils2.createComponent)({
  props: {
    show: Boolean,
    title: String,
    color: String,
    readonly: Boolean,
    teleport: [String, Object],
    formatter: Function,
    rowHeight: [Number, String],
    confirmText: String,
    rangePrompt: String,
    defaultDate: [Date, Array],
    allowSameDay: Boolean,
    confirmDisabledText: String,
    type: {
      type: String,
      default: 'single'
    },
    round: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    poppable: {
      type: Boolean,
      default: true
    },
    maxRange: {
      type: [Number, String],
      default: null
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    showMark: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showSubtitle: {
      type: Boolean,
      default: true
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    minDate: {
      type: Date,
      validator: _date.isDate,
      default: function _default() {
        return new Date();
      }
    },
    maxDate: {
      type: Date,
      validator: _date.isDate,
      default: function _default() {
        var now = new Date();
        return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
      }
    },
    firstDayOfWeek: {
      type: [Number, String],
      default: 0,
      validator: function validator(val) {
        return val >= 0 && val <= 6;
      }
    }
  },
  emits: ['select', 'confirm', 'unselect', 'month-show', 'update:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var limitDateRange = function limitDateRange(date) {
      var minDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : props.minDate;
      var maxDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : props.maxDate;

      if ((0, _utils2.compareDay)(date, minDate) === -1) {
        return minDate;
      }

      if ((0, _utils2.compareDay)(date, maxDate) === 1) {
        return maxDate;
      }

      return date;
    };

    var getInitialDate = function getInitialDate() {
      var defaultDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.defaultDate;
      var type = props.type,
          minDate = props.minDate,
          maxDate = props.maxDate;

      if (defaultDate === null) {
        return defaultDate;
      }

      var now = new Date();

      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }

        var start = limitDateRange(defaultDate[0] || now, minDate, (0, _utils2.getPrevDay)(maxDate));
        var end = limitDateRange(defaultDate[1] || now, (0, _utils2.getNextDay)(minDate));
        return [start, end];
      }

      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map(function (date) {
            return limitDateRange(date);
          });
        }

        return [limitDateRange(now)];
      }

      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }

      return limitDateRange(defaultDate);
    };

    var bodyHeight;
    var bodyRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      subtitle: '',
      currentDate: getInitialDate()
    });

    var _useRefs = (0, _useRefs3.useRefs)(),
        _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
        monthRefs = _useRefs2[0],
        setMonthRefs = _useRefs2[1];

    var dayOffset = (0, _vue.computed)(function () {
      return props.firstDayOfWeek ? props.firstDayOfWeek % 7 : 0;
    });
    var months = (0, _vue.computed)(function () {
      var months = [];
      var cursor = new Date(props.minDate);
      cursor.setDate(1);

      do {
        months.push(new Date(cursor));
        cursor.setMonth(cursor.getMonth() + 1);
      } while ((0, _utils2.compareMonth)(cursor, props.maxDate) !== 1);

      return months;
    });
    var buttonDisabled = (0, _vue.computed)(function () {
      var currentDate = state.currentDate;

      if (currentDate) {
        if (props.type === 'range') {
          return !currentDate[0] || !currentDate[1];
        }

        if (props.type === 'multiple') {
          return !currentDate.length;
        }
      }

      return !currentDate;
    }); // calculate the position of the elements
    // and find the elements that needs to be rendered

    var onScroll = function onScroll() {
      var top = (0, _utils.getScrollTop)(bodyRef.value);
      var bottom = top + bodyHeight;
      var heights = months.value.map(function (item, index) {
        return monthRefs.value[index].getHeight();
      });
      var heightSum = heights.reduce(function (a, b) {
        return a + b;
      }, 0); // iOS scroll bounce may exceed the range

      if (bottom > heightSum && top > 0) {
        return;
      }

      var height = 0;
      var currentMonth;
      var visibleRange = [-1, -1];

      for (var i = 0; i < months.value.length; i++) {
        var month = monthRefs.value[i];
        var visible = height <= bottom && height + heights[i] >= top;

        if (visible) {
          visibleRange[1] = i;

          if (!currentMonth) {
            currentMonth = month;
            visibleRange[0] = i;
          }

          if (!monthRefs.value[i].showed) {
            monthRefs.value[i].showed = true;
            emit('month-show', {
              date: month.date,
              title: month.title
            });
          }
        }

        height += heights[i];
      }

      months.value.forEach(function (month, index) {
        var visible = index >= visibleRange[0] - 1 && index <= visibleRange[1] + 1;
        monthRefs.value[index].setVisible(visible);
      });
      /* istanbul ignore else */

      if (currentMonth) {
        state.subtitle = currentMonth.getTitle();
      }
    }; // scroll to current month


    var scrollIntoView = function scrollIntoView() {
      (0, _use.raf)(function () {
        var displayed = props.show || !props.poppable;

        if (!displayed) {
          return;
        }

        onScroll();
        var currentDate = state.currentDate;

        if (!currentDate) {
          return;
        }

        var targetDate = props.type === 'single' ? currentDate : currentDate[0];

        if (!targetDate) {
          return;
        }

        months.value.some(function (month, index) {
          if ((0, _utils2.compareMonth)(month, targetDate) === 0) {
            monthRefs.value[index].scrollIntoView(bodyRef.value);
            return true;
          }

          return false;
        });
        onScroll();
      });
    };

    var init = function init() {
      if (props.poppable && !props.show) {
        return;
      }

      (0, _use.raf)(function () {
        // add Math.floor to avoid decimal height issues
        // https://github.com/youzan/vant/issues/5640
        bodyHeight = Math.floor((0, _use.useRect)(bodyRef).height);
        scrollIntoView();
      });
    };

    var reset = function reset() {
      state.currentDate = getInitialDate(state.currentDate);
      scrollIntoView();
    };

    var checkRange = function checkRange(date) {
      var maxRange = props.maxRange,
          rangePrompt = props.rangePrompt;

      if (maxRange && (0, _utils2.calcDateNum)(date) > maxRange) {
        (0, _toast.default)(rangePrompt || (0, _utils2.t)('rangePrompt', maxRange));
        return false;
      }

      return true;
    };

    var onConfirm = function onConfirm() {
      emit('confirm', (0, _utils2.copyDates)(state.currentDate));
    };

    var select = function select(date, complete) {
      var setCurrentDate = function setCurrentDate(date) {
        state.currentDate = date;
        emit('select', (0, _utils2.copyDates)(state.currentDate));
      };

      if (complete && props.type === 'range') {
        var valid = checkRange(date);

        if (!valid) {
          // auto selected to max range if showConfirm
          if (props.showConfirm) {
            setCurrentDate([date[0], (0, _utils2.getDayByOffset)(date[0], props.maxRange - 1)]);
          } else {
            setCurrentDate(date);
          }

          return;
        }
      }

      setCurrentDate(date);

      if (complete && !props.showConfirm) {
        onConfirm();
      }
    };

    var onClickDay = function onClickDay(item) {
      if (props.readonly) {
        return;
      }

      var date = item.date;
      var type = props.type;
      var currentDate = state.currentDate;

      if (type === 'range') {
        if (!currentDate) {
          select([date, null]);
          return;
        }

        var _currentDate = (0, _slicedToArray2.default)(currentDate, 2),
            startDay = _currentDate[0],
            endDay = _currentDate[1];

        if (startDay && !endDay) {
          var compareToStart = (0, _utils2.compareDay)(date, startDay);

          if (compareToStart === 1) {
            select([startDay, date], true);
          } else if (compareToStart === -1) {
            select([date, null]);
          } else if (props.allowSameDay) {
            select([date, date], true);
          }
        } else {
          select([date, null]);
        }
      } else if (type === 'multiple') {
        if (!currentDate) {
          select([date]);
          return;
        }

        var selectedIndex;
        var selected = state.currentDate.some(function (dateItem, index) {
          var equal = (0, _utils2.compareDay)(dateItem, date) === 0;

          if (equal) {
            selectedIndex = index;
          }

          return equal;
        });

        if (selected) {
          var _currentDate$splice = currentDate.splice(selectedIndex, 1),
              _currentDate$splice2 = (0, _slicedToArray2.default)(_currentDate$splice, 1),
              unselectedDate = _currentDate$splice2[0];

          emit('unselect', (0, _utils2.copyDate)(unselectedDate));
        } else if (props.maxRange && currentDate.length >= props.maxRange) {
          (0, _toast.default)(props.rangePrompt || (0, _utils2.t)('rangePrompt', props.maxRange));
        } else {
          select([].concat((0, _toConsumableArray2.default)(currentDate), [date]));
        }
      } else {
        select(date, true);
      }
    };

    var togglePopup = function togglePopup(val) {
      emit('update:show', val);
    };

    var renderMonth = function renderMonth(date, index) {
      var showMonthTitle = index !== 0 || !props.showSubtitle;
      return (0, _vue.createVNode)(_Month.default, (0, _vue.mergeProps)({
        "ref": setMonthRefs(index),
        "date": date,
        "currentDate": state.currentDate,
        "showMonthTitle": showMonthTitle,
        "firstDayOfWeek": dayOffset.value
      }, (0, _utils.pick)(props, ['type', 'color', 'minDate', 'maxDate', 'showMark', 'formatter', 'rowHeight', 'lazyRender', 'showSubtitle', 'allowSameDay']), {
        "onClick": onClickDay
      }), null);
    };

    var renderFooterButton = function renderFooterButton() {
      if (slots.footer) {
        return slots.footer();
      }

      if (props.showConfirm) {
        var text = buttonDisabled.value ? props.confirmDisabledText : props.confirmText;
        return (0, _vue.createVNode)(_button.default, {
          "round": true,
          "block": true,
          "type": "danger",
          "color": props.color,
          "class": (0, _utils2.bem)('confirm'),
          "disabled": buttonDisabled.value,
          "nativeType": "button",
          "onClick": onConfirm
        }, {
          default: function _default() {
            return [text || (0, _utils2.t)('confirm')];
          }
        });
      }
    };

    var renderFooter = function renderFooter() {
      return (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('footer', {
          unfit: !props.safeAreaInsetBottom
        })
      }, [renderFooterButton()]);
    };

    var renderCalendar = function renderCalendar() {
      return (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)()
      }, [(0, _vue.createVNode)(_Header.default, {
        "title": props.title,
        "showTitle": props.showTitle,
        "subtitle": state.subtitle,
        "showSubtitle": props.showSubtitle,
        "firstDayOfWeek": dayOffset.value
      }, {
        title: slots.title
      }), (0, _vue.createVNode)("div", {
        "ref": bodyRef,
        "class": (0, _utils2.bem)('body'),
        "onScroll": onScroll
      }, [months.value.map(renderMonth)]), renderFooter()]);
    };

    (0, _vue.watch)(function () {
      return props.show;
    }, init);
    (0, _vue.watch)([function () {
      return props.type;
    }, function () {
      return props.minDate;
    }, function () {
      return props.maxDate;
    }, function () {
      return props.defaultDate;
    }], reset);
    (0, _useExpose.useExpose)({
      reset: reset
    });
    (0, _use.onMountedOrActivated)(init);
    return function () {
      if (props.poppable) {
        return (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
          "show": props.show,
          "class": (0, _utils2.bem)('popup'),
          "round": props.round,
          "position": props.position,
          "closeable": props.showTitle || props.showSubtitle,
          "teleport": props.teleport,
          "closeOnPopstate": props.closeOnPopstate,
          "closeOnClickOverlay": props.closeOnClickOverlay
        }, {
          'onUpdate:show': togglePopup
        }), {
          default: function _default() {
            return [renderCalendar()];
          }
        });
      }

      return renderCalendar();
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/validate/date":1605508836850,"./utils":1605508836851,"../composition/use-refs":1605508836852,"../composition/use-expose":1605508836808,"../popup":1605508836817,"../button":1605508836810,"../toast":1605508836833,"./components/Month":1605508836853,"./components/Header":1605508836857}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836850, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = isDate;

var _number = require("./number");

function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !(0, _number.isNaN)(val.getTime());
}
}, function(modId) { var map = {"./number":1605508836801}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836851, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMonthTitle = formatMonthTitle;
exports.compareMonth = compareMonth;
exports.compareDay = compareDay;
exports.getDayByOffset = getDayByOffset;
exports.getPrevDay = getPrevDay;
exports.getNextDay = getNextDay;
exports.calcDateNum = calcDateNum;
exports.copyDate = copyDate;
exports.copyDates = copyDates;
exports.t = exports.bem = exports.createComponent = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('calendar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

exports.t = t;
exports.bem = bem;
exports.createComponent = createComponent;

function formatMonthTitle(date) {
  return t('monthTitle', date.getFullYear(), date.getMonth() + 1);
}

function compareMonth(date1, date2) {
  var year1 = date1.getFullYear();
  var year2 = date2.getFullYear();
  var month1 = date1.getMonth();
  var month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

function compareDay(day1, day2) {
  var compareMonthResult = compareMonth(day1, day2);

  if (compareMonthResult === 0) {
    var date1 = day1.getDate();
    var date2 = day2.getDate();
    return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
  }

  return compareMonthResult;
}

function getDayByOffset(date, offset) {
  date = new Date(date);
  date.setDate(date.getDate() + offset);
  return date;
}

function getPrevDay(date) {
  return getDayByOffset(date, -1);
}

function getNextDay(date) {
  return getDayByOffset(date, 1);
}

function calcDateNum(date) {
  var day1 = date[0].getTime();
  var day2 = date[1].getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}

function copyDate(dates) {
  return new Date(dates);
}

function copyDates(dates) {
  if (Array.isArray(dates)) {
    return dates.map(function (date) {
      if (date === null) {
        return date;
      }

      return copyDate(date);
    });
  }

  return copyDate(dates);
}
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836852, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefs = useRefs;

var _vue = require("vue");

function useRefs() {
  var refs = (0, _vue.ref)([]);
  (0, _vue.onBeforeUpdate)(function () {
    refs.value = [];
  });

  var setRefs = function setRefs(index) {
    return function (el) {
      refs.value[index] = el;
    };
  };

  return [refs, setRefs];
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836853, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../../utils");

var _utils2 = require("../../datetime-picker/utils");

var _utils3 = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../../composition/use-expose");

var _useHeight = require("../../composition/use-height");

var _Day = _interopRequireDefault(require("./Day"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('calendar-month'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 1),
    createComponent = _createNamespace2[0];

var _default = createComponent({
  props: {
    date: Date,
    type: String,
    color: String,
    minDate: Date,
    maxDate: Date,
    showMark: Boolean,
    rowHeight: [Number, String],
    formatter: Function,
    lazyRender: Boolean,
    currentDate: [Date, Array],
    allowSameDay: Boolean,
    showSubtitle: Boolean,
    showMonthTitle: Boolean,
    firstDayOfWeek: Number
  },
  emits: ['click', 'update-height'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var _useToggle = (0, _use.useToggle)(),
        _useToggle2 = (0, _slicedToArray2.default)(_useToggle, 2),
        visible = _useToggle2[0],
        setVisible = _useToggle2[1];

    var daysRef = (0, _vue.ref)();
    var monthRef = (0, _vue.ref)();
    var height = (0, _useHeight.useHeight)(monthRef);
    var title = (0, _vue.computed)(function () {
      return (0, _utils3.formatMonthTitle)(props.date);
    });
    var rowHeight = (0, _vue.computed)(function () {
      return (0, _utils.addUnit)(props.rowHeight);
    });
    var offset = (0, _vue.computed)(function () {
      var realDay = props.date.getDay();

      if (props.firstDayOfWeek) {
        return (realDay + 7 - props.firstDayOfWeek) % 7;
      }

      return realDay;
    });
    var totalDay = (0, _vue.computed)(function () {
      return (0, _utils2.getMonthEndDay)(props.date.getFullYear(), props.date.getMonth() + 1);
    });
    var shouldRender = (0, _vue.computed)(function () {
      return visible.value || !props.lazyRender;
    });

    var getDate = function getDate() {
      return props.data;
    };

    var getTitle = function getTitle() {
      return title.value;
    };

    var scrollIntoView = function scrollIntoView(body) {
      var el = props.showSubtitle ? daysRef.value : monthRef.value;
      var scrollTop = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
      (0, _utils.setScrollTop)(body, scrollTop);
    };

    var getMultipleDayType = function getMultipleDayType(day) {
      var isSelected = function isSelected(date) {
        return props.currentDate.some(function (item) {
          return (0, _utils3.compareDay)(item, date) === 0;
        });
      };

      if (isSelected(day)) {
        var prevDay = (0, _utils3.getPrevDay)(day);
        var nextDay = (0, _utils3.getNextDay)(day);
        var prevSelected = isSelected(prevDay);
        var nextSelected = isSelected(nextDay);

        if (prevSelected && nextSelected) {
          return 'multiple-middle';
        }

        if (prevSelected) {
          return 'end';
        }

        if (nextSelected) {
          return 'start';
        }

        return 'multiple-selected';
      }

      return '';
    };

    var getRangeDayType = function getRangeDayType(day) {
      var _props$currentDate = (0, _slicedToArray2.default)(props.currentDate, 2),
          startDay = _props$currentDate[0],
          endDay = _props$currentDate[1];

      if (!startDay) {
        return '';
      }

      var compareToStart = (0, _utils3.compareDay)(day, startDay);

      if (!endDay) {
        return compareToStart === 0 ? 'start' : '';
      }

      var compareToEnd = (0, _utils3.compareDay)(day, endDay);

      if (props.allowSameDay && compareToStart === 0 && compareToEnd === 0) {
        return 'start-end';
      }

      if (compareToStart === 0) {
        return 'start';
      }

      if (compareToEnd === 0) {
        return 'end';
      }

      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle';
      }
    };

    var getDayType = function getDayType(day) {
      var type = props.type,
          minDate = props.minDate,
          maxDate = props.maxDate,
          currentDate = props.currentDate;

      if ((0, _utils3.compareDay)(day, minDate) < 0 || (0, _utils3.compareDay)(day, maxDate) > 0) {
        return 'disabled';
      }

      if (currentDate === null) {
        return;
      }

      if (Array.isArray(currentDate)) {
        if (type === 'multiple') {
          return getMultipleDayType(day);
        }

        if (type === 'range') {
          return getRangeDayType(day);
        }
      } else if (type === 'single') {
        return (0, _utils3.compareDay)(day, currentDate) === 0 ? 'selected' : '';
      }
    };

    var getBottomInfo = function getBottomInfo(dayType) {
      if (props.type === 'range') {
        if (dayType === 'start' || dayType === 'end') {
          return (0, _utils3.t)(dayType);
        }

        if (dayType === 'start-end') {
          return (0, _utils3.t)('startEnd');
        }
      }
    };

    var renderTitle = function renderTitle() {
      if (props.showMonthTitle) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils3.bem)('month-title')
        }, [title.value]);
      }
    };

    var renderMark = function renderMark() {
      if (props.showMark && shouldRender.value) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils3.bem)('month-mark')
        }, [props.date.getMonth() + 1]);
      }
    };

    var placeholders = (0, _vue.computed)(function () {
      var rows = [];
      var count = Math.ceil((totalDay.value + offset.value) / 7);

      for (var day = 1; day <= count; day++) {
        rows.push({
          type: 'placeholder'
        });
      }

      return rows;
    });
    var days = (0, _vue.computed)(function () {
      var days = [];
      var year = props.date.getFullYear();
      var month = props.date.getMonth();

      for (var day = 1; day <= totalDay.value; day++) {
        var date = new Date(year, month, day);
        var type = getDayType(date);
        var config = {
          date: date,
          type: type,
          text: day,
          bottomInfo: getBottomInfo(type)
        };

        if (props.formatter) {
          config = props.formatter(config);
        }

        days.push(config);
      }

      return days;
    });

    var renderDay = function renderDay(item, index) {
      return (0, _vue.createVNode)(_Day.default, {
        "item": item,
        "index": index,
        "color": props.color,
        "offset": offset.value,
        "rowHeight": rowHeight.value,
        "onClick": function onClick(item) {
          emit('click', item);
        }
      }, null);
    };

    var renderDays = function renderDays() {
      return (0, _vue.createVNode)("div", {
        "ref": daysRef,
        "role": "grid",
        "class": (0, _utils3.bem)('days')
      }, [renderMark(), (shouldRender.value ? days : placeholders).value.map(renderDay)]);
    };

    (0, _useExpose.useExpose)({
      getDate: getDate,
      getTitle: getTitle,
      getHeight: function getHeight() {
        return height.value;
      },
      setVisible: setVisible,
      scrollIntoView: scrollIntoView
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": (0, _utils3.bem)('month'),
        "ref": monthRef
      }, [renderTitle(), renderDays()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../../utils":1605508836790,"../../datetime-picker/utils":1605508836854,"../utils":1605508836851,"../../composition/use-expose":1605508836808,"../../composition/use-height":1605508836855,"./Day":1605508836856}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836854, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.times = times;
exports.getTrueValue = getTrueValue;
exports.getMonthEndDay = getMonthEndDay;
exports.sharedProps = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _number = require("../utils/validate/number");

var _shared = require("../picker/shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var sharedProps = _objectSpread(_objectSpread({}, _shared.pickerProps), {}, {
  filter: Function,
  modelValue: null,
  columnsOrder: Array,
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});

exports.sharedProps = sharedProps;

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

function getTrueValue(value) {
  if (!value) {
    return 0;
  }

  while ((0, _number.isNaN)(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(value, 10);
}

function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
}, function(modId) { var map = {"../utils/validate/number":1605508836801,"../picker/shared":1605508836824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836855, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHeight = void 0;

var _use = require("@vant/use");

var _vue = require("vue");

var useHeight = function useHeight(element) {
  var height = (0, _vue.ref)();
  (0, _vue.onMounted)(function () {
    (0, _vue.nextTick)(function () {
      height.value = (0, _use.useRect)(element).height;
    });
  });
  return height;
};

exports.useHeight = useHeight;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836856, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../../utils");

var _utils2 = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('calendar-day'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 1),
    createComponent = _createNamespace2[0];

var _default = createComponent({
  props: {
    item: Object,
    color: String,
    index: Number,
    offset: Number,
    rowHeight: String
  },
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var style = (0, _vue.computed)(function () {
      var item = props.item,
          index = props.index,
          color = props.color,
          offset = props.offset,
          rowHeight = props.rowHeight;
      var style = {
        height: rowHeight
      };

      if (item.type === 'placeholder') {
        style.width = '100%';
        return style;
      }

      if (index === 0) {
        style.marginLeft = "".concat(100 * offset / 7, "%");
      }

      if (color) {
        switch (item.type) {
          case 'end':
          case 'start':
          case 'start-end':
          case 'multiple-middle':
          case 'multiple-selected':
            style.background = color;
            break;

          case 'middle':
            style.color = color;
            break;
        }
      }

      return style;
    });

    var onClick = function onClick() {
      if (props.item.type !== 'disabled') {
        emit('click', props.item);
      }
    };

    var renderContent = function renderContent() {
      var item = props.item,
          color = props.color,
          rowHeight = props.rowHeight;
      var type = item.type,
          text = item.text,
          topInfo = item.topInfo,
          bottomInfo = item.bottomInfo;
      var TopInfo = topInfo && (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('top-info')
      }, [topInfo]);
      var BottomInfo = bottomInfo && (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('bottom-info')
      }, [bottomInfo]);
      var Nodes = [TopInfo, text, BottomInfo];

      if (type === 'selected') {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('selected-day'),
          "style": {
            width: rowHeight,
            height: rowHeight,
            background: color
          }
        }, [Nodes]);
      }

      return Nodes;
    };

    return function () {
      var _props$item = props.item,
          type = _props$item.type,
          className = _props$item.className;
      return (0, _vue.createVNode)("div", {
        "role": "gridcell",
        "style": style.value,
        "class": [(0, _utils2.bem)('day', type), className],
        "tabindex": type === 'disabled' ? null : -1,
        "onClick": onClick
      }, [renderContent()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../../utils":1605508836790,"../utils":1605508836851}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836857, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../../utils");

var _utils2 = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('calendar-header'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 1),
    createComponent = _createNamespace2[0];

var _default = createComponent({
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var renderTitle = function renderTitle() {
      if (props.showTitle) {
        var text = props.title || (0, _utils2.t)('title');
        var title = slots.title ? slots.title : text;
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('header-title')
        }, [title]);
      }
    };

    var renderSubtitle = function renderSubtitle() {
      if (props.showSubtitle) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _utils2.bem)('header-subtitle')
        }, [props.subtitle]);
      }
    };

    var renderWeekDays = function renderWeekDays() {
      var firstDayOfWeek = props.firstDayOfWeek;
      var weekdays = (0, _utils2.t)('weekdays');
      var renderWeekDays = [].concat((0, _toConsumableArray2.default)(weekdays.slice(firstDayOfWeek, 7)), (0, _toConsumableArray2.default)(weekdays.slice(0, firstDayOfWeek)));
      return (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('weekdays')
      }, [renderWeekDays.map(function (text) {
        return (0, _vue.createVNode)("span", {
          "class": (0, _utils2.bem)('weekday')
        }, [text]);
      })]);
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": (0, _utils2.bem)('header')
      }, [renderTitle(), renderSubtitle(), renderWeekDays()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../../utils":1605508836790,"../utils":1605508836851}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836858, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _tag = _interopRequireDefault(require("../tag"));

var _image = _interopRequireDefault(require("../image"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('card'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    tag: String,
    desc: String,
    thumb: String,
    title: String,
    centered: Boolean,
    lazyLoad: Boolean,
    thumbLink: String,
    num: [Number, String],
    price: [Number, String],
    originPrice: [Number, String],
    currency: {
      type: String,
      default: '¥'
    }
  },
  emits: ['click-thumb'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;

    var renderTitle = function renderTitle() {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('title'), 'van-multi-ellipsis--l2']
        }, [props.title]);
      }
    };

    var renderThumbTag = function renderThumbTag() {
      if (slots.tag || props.tag) {
        return (0, _vue.createVNode)("div", {
          "class": bem('tag')
        }, [slots.tag ? slots.tag() : (0, _vue.createVNode)(_tag.default, {
          "mark": true,
          "type": "danger"
        }, {
          default: function _default() {
            return [props.tag];
          }
        })]);
      }
    };

    var renderThumbImage = function renderThumbImage() {
      if (slots.thumb) {
        return slots.thumb();
      }

      return (0, _vue.createVNode)(_image.default, {
        "src": props.thumb,
        "width": "100%",
        "height": "100%",
        "fit": "cover",
        "lazyLoad": props.lazyLoad
      }, null);
    };

    var renderThumb = function renderThumb() {
      if (slots.thumb || props.thumb) {
        return (0, _vue.createVNode)("a", {
          "href": props.thumbLink,
          "class": bem('thumb'),
          "onClick": function onClick(event) {
            emit('click-thumb', event);
          }
        }, [renderThumbImage(), renderThumbTag()]);
      }
    };

    var renderDesc = function renderDesc() {
      if (slots.desc) {
        return slots.desc();
      }

      if (props.desc) {
        return (0, _vue.createVNode)("div", {
          "class": [bem('desc'), 'van-ellipsis']
        }, [props.desc]);
      }
    };

    var renderPriceText = function renderPriceText() {
      var priceArr = props.price.toString().split('.');
      return (0, _vue.createVNode)("div", null, [(0, _vue.createVNode)("span", {
        "class": bem('price-currency')
      }, [props.currency]), (0, _vue.createVNode)("span", {
        "class": bem('price-integer')
      }, [priceArr[0]]), (0, _vue.createTextVNode)("."), (0, _vue.createVNode)("span", {
        "class": bem('price-decimal')
      }, [priceArr[1]])]);
    };

    return function () {
      var _slots$priceTop, _slots$bottom, _slots$tags;

      var showNum = slots.num || (0, _utils.isDef)(props.num);
      var showPrice = slots.price || (0, _utils.isDef)(props.price);
      var showOriginPrice = slots['origin-price'] || (0, _utils.isDef)(props.originPrice);
      var showBottom = showNum || showPrice || showOriginPrice || slots.bottom;
      var Price = showPrice && (0, _vue.createVNode)("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : renderPriceText()]);
      var OriginPrice = showOriginPrice && (0, _vue.createVNode)("div", {
        "class": bem('origin-price')
      }, [slots['origin-price'] ? slots['origin-price']() : "".concat(props.currency, " ").concat(props.originPrice)]);
      var Num = showNum && (0, _vue.createVNode)("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x".concat(props.num)]);
      var Footer = slots.footer && (0, _vue.createVNode)("div", {
        "class": bem('footer')
      }, [slots.footer()]);
      var Bottom = showBottom && (0, _vue.createVNode)("div", {
        "class": bem('bottom')
      }, [(_slots$priceTop = slots['price-top']) === null || _slots$priceTop === void 0 ? void 0 : _slots$priceTop.call(slots), Price, OriginPrice, Num, (_slots$bottom = slots.bottom) === null || _slots$bottom === void 0 ? void 0 : _slots$bottom.call(slots)]);
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('header')
      }, [renderThumb(), (0, _vue.createVNode)("div", {
        "class": bem('content', {
          centered: props.centered
        })
      }, [(0, _vue.createVNode)("div", null, [renderTitle(), renderDesc(), (_slots$tags = slots.tags) === null || _slots$tags === void 0 ? void 0 : _slots$tags.call(slots)]), Bottom])]), Footer]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../tag":1605508836846,"../image":1605508836859}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836859, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('image'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    src: String,
    alt: String,
    fit: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    iconPrefix: String,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    errorIcon: {
      type: String,
      default: 'photo-fail'
    },
    loadingIcon: {
      type: String,
      default: 'photo'
    }
  },
  emits: ['load', 'error'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var error = (0, _vue.ref)(false);
    var loading = (0, _vue.ref)(true);
    var imageRef = (0, _vue.ref)();
    var style = (0, _vue.computed)(function () {
      var style = {};

      if ((0, _utils.isDef)(props.width)) {
        style.width = (0, _utils.addUnit)(props.width);
      }

      if ((0, _utils.isDef)(props.height)) {
        style.height = (0, _utils.addUnit)(props.height);
      }

      if ((0, _utils.isDef)(props.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = (0, _utils.addUnit)(props.radius);
      }

      return style;
    });
    (0, _vue.watch)(function () {
      return props.src;
    }, function () {
      error.value = false;
      loading.value = true;
    });

    var onLoad = function onLoad(event) {
      loading.value = false;
      emit('load', event);
    };

    var onError = function onError(event) {
      error.value = true;
      loading.value = false;
      emit('error', event);
    };

    var renderLoadingIcon = function renderLoadingIcon() {
      if (slots.loading) {
        return slots.loading();
      }

      return (0, _vue.createVNode)(_icon.default, {
        "name": props.loadingIcon,
        "class": bem('loading-icon'),
        "classPrefix": props.iconPrefix
      }, null);
    };

    var renderErrorIcon = function renderErrorIcon() {
      if (slots.error) {
        return slots.error();
      }

      return (0, _vue.createVNode)(_icon.default, {
        "name": props.errorIcon,
        "class": bem('error-icon'),
        "classPrefix": props.iconPrefix
      }, null);
    };

    var renderPlaceholder = function renderPlaceholder() {
      if (loading.value && props.showLoading && _utils.inBrowser) {
        return (0, _vue.createVNode)("div", {
          "class": bem('loading')
        }, [renderLoadingIcon()]);
      }

      if (error.value && props.showError) {
        return (0, _vue.createVNode)("div", {
          "class": bem('error')
        }, [renderErrorIcon()]);
      }
    };

    var renderImage = function renderImage() {
      if (error.value || !props.src) {
        return;
      }

      var attrs = {
        alt: props.alt,
        class: bem('img'),
        style: {
          objectFit: props.fit
        }
      };

      if (props.lazyLoad) {
        return (0, _vue.withDirectives)((0, _vue.createVNode)("img", (0, _vue.mergeProps)({
          "ref": imageRef
        }, attrs), null), [[(0, _vue.resolveDirective)("lazy"), props.src]]);
      }

      return (0, _vue.createVNode)("img", (0, _vue.mergeProps)({
        "src": props.src,
        "onLoad": onLoad,
        "onError": onError
      }, attrs), null);
    };

    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem({
          round: props.round
        }),
        "style": style.value
      }, [renderImage(), renderPlaceholder(), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  } // TODO: lazyLoad
  // created() {
  //   const { $Lazyload } = this;
  //   if ($Lazyload && inBrowser) {
  //     $Lazyload.$on('loaded', this.onLazyLoaded);
  //     $Lazyload.$on('error', this.onLazyLoadError);
  //   }
  // },
  // beforeUnmount() {
  //   const { $Lazyload } = this;
  //   if ($Lazyload) {
  //     $Lazyload.$off('loaded', this.onLazyLoaded);
  //     $Lazyload.$off('error', this.onLazyLoadError);
  //   }
  // },
  // methods: {
  // onLazyLoaded({ el }) {
  //   if (el === this.$refs.image && this.loading) {
  //     this.onLoad();
  //   }
  // },
  // onLazyLoadError({ el }) {
  //   if (el === this.$refs.image && !this.error) {
  //     this.onError();
  //   }
  // },
  // },

});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836860, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('cell-group'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  inheritAttrs: false,
  props: {
    title: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        attrs = _ref.attrs;
    return function () {
      var _slots$default;

      var title = props.title,
          border = props.border;
      var Group = (0, _vue.createVNode)("div", (0, _vue.mergeProps)({
        "class": [bem(), (0, _defineProperty2.default)({}, _constant.BORDER_TOP_BOTTOM, border)]
      }, attrs), [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);

      if (title || slots.title) {
        return (0, _vue.createVNode)(_vue.Fragment, null, [(0, _vue.createVNode)("div", {
          "class": bem('title')
        }, [slots.title ? slots.title() : title]), Group]);
      }

      return Group;
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836861, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CHECKBOX_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _useLinkField = require("../composition/use-link-field");

var _Checker = _interopRequireWildcard(require("./Checker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('checkbox'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var CHECKBOX_KEY = 'vanCheckbox';
exports.CHECKBOX_KEY = CHECKBOX_KEY;

var _default = createComponent({
  props: _objectSpread(_objectSpread({}, _Checker.checkerProps), {}, {
    // TODO
    bindGroup: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useParent = (0, _use.useParent)(CHECKBOX_KEY),
        parent = _useParent.parent;

    var setParentValue = function setParentValue(checked) {
      var name = props.name;
      var _parent$props = parent.props,
          max = _parent$props.max,
          modelValue = _parent$props.modelValue;
      var value = modelValue.slice();

      if (checked) {
        var overlimit = max && value.length >= max;

        if (!overlimit && value.indexOf(name) === -1) {
          value.push(name);
          parent.emit('update:modelValue', value);
        }
      } else {
        var index = value.indexOf(name);

        if (index !== -1) {
          value.splice(index, 1);
          parent.emit('update:modelValue', value);
        }
      }
    };

    var checked = (0, _vue.computed)(function () {
      if (parent) {
        return parent.props.modelValue.indexOf(props.name) !== -1;
      }

      return props.modelValue;
    });

    var toggle = function toggle() {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !checked.value;

      if (parent) {
        setParentValue(newValue);
      } else {
        emit('update:modelValue', newValue);
      }
    };

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      emit('change', value);
    });
    (0, _useExpose.useExpose)({
      toggle: toggle,
      checked: checked
    });
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      return (0, _vue.createVNode)(_Checker.default, (0, _vue.mergeProps)({
        "bem": bem,
        "role": "checkbox",
        "parent": parent,
        "checked": checked.value,
        "onToggle": toggle
      }, props), _objectSpread({}, (0, _utils.pick)(slots, ['default', 'icon'])));
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808,"../composition/use-link-field":1605508836842,"./Checker":1605508836848}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836862, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _checkbox = require("../checkbox");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _useLinkField = require("../composition/use-link-field");

var _createNamespace = (0, _utils.createNamespace)('checkbox-group'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    max: [Number, String],
    disabled: Boolean,
    direction: String,
    iconSize: [Number, String],
    checkedColor: String,
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(_checkbox.CHECKBOX_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var toggleAll = function toggleAll(checked) {
      if (checked === false) {
        emit('update:modelValue', []);
      } else {
        var names = children.filter(function (item) {
          return checked || !item.checked.value;
        }).map(function (item) {
          return item.name;
        });
        emit('update:modelValue', names);
      }
    };

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      emit('change', value);
    });
    (0, _useExpose.useExpose)({
      toggleAll: toggleAll
    });
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    linkChildren({
      emit: emit,
      props: props
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem([props.direction])
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../checkbox":1605508836861,"../composition/use-expose":1605508836808,"../composition/use-link-field":1605508836842}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836863, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _use = require("@vant/use");

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('circle'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var uid = 0;

function format(rate) {
  return Math.min(Math.max(+rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M ".concat(viewBoxSize / 2, " ").concat(viewBoxSize / 2, " m 0, -500 a 500, 500 0 1, ").concat(sweepFlag, " 0, 1000 a 500, 500 0 1, ").concat(sweepFlag, " 0, -1000");
}

var _default = createComponent({
  props: {
    text: String,
    strokeLinecap: String,
    currentRate: {
      type: Number,
      default: 0
    },
    speed: {
      type: [Number, String],
      default: 0
    },
    size: {
      type: [Number, String],
      default: 100
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: [Number, String],
      default: 100
    },
    layerColor: {
      type: String,
      default: _constant.WHITE
    },
    color: {
      type: [String, Object],
      default: _constant.BLUE
    },
    strokeWidth: {
      type: [Number, String],
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:currentRate'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var id = "van-circle-".concat(uid++);
    var viewBoxSize = (0, _vue.computed)(function () {
      return +props.strokeWidth + 1000;
    });
    var path = (0, _vue.computed)(function () {
      return getPath(props.clockwise, viewBoxSize.value);
    });
    (0, _vue.watch)(function () {
      return props.rate;
    }, function (rate) {
      var rafId;
      var startTime = Date.now();
      var startRate = props.currentRate;
      var endRate = format(rate);
      var duration = Math.abs((startRate - endRate) * 1000 / +props.speed);

      var animate = function animate() {
        var now = Date.now();
        var progress = Math.min((now - startTime) / duration, 1);
        var rate = progress * (endRate - startRate) + startRate;
        emit('update:currentRate', format(parseFloat(rate.toFixed(1))));

        if (endRate > startRate ? rate < endRate : rate > endRate) {
          rafId = (0, _use.raf)(animate);
        }
      };

      if (props.speed) {
        if (rafId) {
          (0, _use.cancelRaf)(rafId);
        }

        rafId = (0, _use.raf)(animate);
      } else {
        emit('update:currentRate', endRate);
      }
    }, {
      immediate: true
    });

    var renderHover = function renderHover() {
      var style = {
        fill: props.fill,
        stroke: props.layerColor,
        strokeWidth: "".concat(props.strokeWidth, "px")
      };
      return (0, _vue.createVNode)("path", {
        "class": bem('hover'),
        "style": style,
        "d": path.value
      }, null);
    };

    var renderLayer = function renderLayer() {
      var PERIMETER = 3140;
      var color = props.color,
          strokeWidth = props.strokeWidth,
          currentRate = props.currentRate,
          strokeLinecap = props.strokeLinecap;
      var offset = PERIMETER * currentRate / 100;
      var style = {
        stroke: "".concat(color),
        strokeWidth: "".concat(+strokeWidth + 1, "px"),
        strokeLinecap: strokeLinecap,
        strokeDasharray: "".concat(offset, "px ").concat(PERIMETER, "px")
      };
      return (0, _vue.createVNode)("path", {
        "d": path.value,
        "style": style,
        "class": bem('layer'),
        "stroke": (0, _utils.isObject)(color) ? "url(#".concat(id, ")") : color
      }, null);
    };

    var renderGradient = function renderGradient() {
      var color = props.color;

      if (!(0, _utils.isObject)(color)) {
        return;
      }

      var Stops = Object.keys(color).sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      }).map(function (key, index) {
        return (0, _vue.createVNode)("stop", {
          "key": index,
          "offset": key,
          "stop-color": color[key]
        }, null);
      });
      return (0, _vue.createVNode)("defs", null, [(0, _vue.createVNode)("linearGradient", {
        "id": id,
        "x1": "100%",
        "y1": "0%",
        "x2": "0%",
        "y2": "0%"
      }, [Stops])]);
    };

    var renderText = function renderText() {
      if (slots.default) {
        return slots.default();
      }

      if (props.text) {
        return (0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [props.text]);
      }
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem(),
        "style": (0, _utils.getSizeStyle)(props.size)
      }, [(0, _vue.createVNode)("svg", {
        "viewBox": "0 0 ".concat(viewBoxSize.value, " ").concat(viewBoxSize.value)
      }, [renderGradient(), renderHover(), renderLayer()]), renderText()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836864, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _row = require("../row");

var _createNamespace = (0, _utils.createNamespace)('col'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: [Number, String],
      default: 0
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useParent = (0, _use.useParent)(_row.ROW_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var style = (0, _vue.computed)(function () {
      if (!parent) {
        return;
      }

      var spaces = parent.spaces;

      if (spaces && spaces.value && spaces.value[index.value]) {
        var _spaces$value$value = spaces.value[index.value],
            left = _spaces$value$value.left,
            right = _spaces$value$value.right;
        return {
          paddingLeft: left ? "".concat(left, "px") : null,
          paddingRight: right ? "".concat(right, "px") : null
        };
      }
    });
    return function () {
      var _bem, _slots$default;

      var tag = props.tag,
          span = props.span,
          offset = props.offset;
      return (0, _vue.createVNode)(tag, {
        "style": style.value,
        "class": bem((_bem = {}, (0, _defineProperty2.default)(_bem, span, span), (0, _defineProperty2.default)(_bem, "offset-".concat(offset), offset), _bem))
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../row":1605508836865}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836865, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ROW_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('row'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var ROW_KEY = 'vanRow';
exports.ROW_KEY = ROW_KEY;

var _default2 = createComponent({
  props: {
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(ROW_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var groups = (0, _vue.computed)(function () {
      var groups = [[]];
      var totalSpan = 0;
      children.forEach(function (child, index) {
        // TODO
        // @ts-ignore
        totalSpan += Number(child.span);

        if (totalSpan > 24) {
          groups.push([index]);
          totalSpan -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });
      return groups;
    });
    var spaces = (0, _vue.computed)(function () {
      var gutter = Number(props.gutter);
      var spaces = [];

      if (!gutter) {
        return spaces;
      }

      groups.value.forEach(function (group) {
        var averagePadding = gutter * (group.length - 1) / group.length;
        group.forEach(function (item, index) {
          if (index === 0) {
            spaces.push({
              right: averagePadding
            });
          } else {
            var left = gutter - spaces[item - 1].right;
            var right = averagePadding - left;
            spaces.push({
              left: left,
              right: right
            });
          }
        });
      });
      return spaces;
    });
    linkChildren({
      spaces: spaces
    });
    return function () {
      var _bem, _slots$default;

      var tag = props.tag,
          align = props.align,
          justify = props.justify;
      return (0, _vue.createVNode)(tag, {
        "class": bem((_bem = {}, (0, _defineProperty2.default)(_bem, "align-".concat(align), align), (0, _defineProperty2.default)(_bem, "justify-".concat(justify), justify), _bem))
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836866, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.COLLAPSE_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('collapse'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var COLLAPSE_KEY = 'vanCollapse';
exports.COLLAPSE_KEY = COLLAPSE_KEY;

var _default = createComponent({
  props: {
    accordion: Boolean,
    modelValue: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(COLLAPSE_KEY),
        linkChildren = _useChildren.linkChildren;

    var toggle = function toggle(name, expanded) {
      var accordion = props.accordion,
          modelValue = props.modelValue;

      if (accordion) {
        if (name === modelValue) {
          name = '';
        }
      } else if (expanded) {
        name = modelValue.concat(name);
      } else {
        name = modelValue.filter(function (activeName) {
          return activeName !== name;
        });
      }

      emit('change', name);
      emit('update:modelValue', name);
    };

    var isExpanded = function isExpanded(name) {
      var accordion = props.accordion,
          modelValue = props.modelValue;

      if (!accordion && !Array.isArray(modelValue) && process.env.NODE_ENV !== 'production') {
        console.error('[Vant] Collapse: type of prop "modelValue" should be Array');
        return;
      }

      return accordion ? modelValue === name : modelValue.indexOf(name) !== -1;
    };

    linkChildren({
      toggle: toggle,
      isExpanded: isExpanded
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": [bem(), (0, _defineProperty2.default)({}, _constant.BORDER_TOP_BOTTOM, props.border)]
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836867, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _useLazyRender = require("../composition/use-lazy-render");

var _cell = _interopRequireWildcard(require("../cell"));

var _collapse = require("../collapse");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('collapse-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: _objectSpread(_objectSpread({}, _cell.cellProps), {}, {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var wrapperRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();

    var _useParent = (0, _use.useParent)(_collapse.COLLAPSE_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var currentName = (0, _vue.computed)(function () {
      var _props$name;

      return (_props$name = props.name) !== null && _props$name !== void 0 ? _props$name : index.value;
    });
    var expanded = (0, _vue.computed)(function () {
      if (parent) {
        return parent.isExpanded(currentName.value);
      }

      return null;
    });
    var show = (0, _vue.ref)(expanded.value);
    var lazyRender = (0, _useLazyRender.useLazyRender)(show);

    var onTransitionEnd = function onTransitionEnd() {
      if (!expanded.value) {
        show.value = false;
      } else {
        wrapperRef.value.style.height = '';
      }
    };

    (0, _vue.watch)(expanded, function (value, oldValue) {
      if (oldValue === null) {
        return;
      }

      if (value) {
        show.value = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var tick = value ? _vue.nextTick : _use.raf;
      tick(function () {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }

        var offsetHeight = contentRef.value.offsetHeight;

        if (offsetHeight) {
          var contentHeight = "".concat(offsetHeight, "px");
          wrapperRef.value.style.height = value ? 0 : contentHeight; // use double raf to ensure animation can start

          (0, _use.doubleRaf)(function () {
            wrapperRef.value.style.height = value ? contentHeight : 0;
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    var toggle = function toggle() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !expanded.value;
      parent.toggle(currentName.value, value);
    };

    var onClickTitle = function onClickTitle() {
      if (!props.disabled) {
        toggle();
      }
    };

    var renderTitle = function renderTitle() {
      var border = props.border,
          disabled = props.disabled;
      return (0, _vue.createVNode)(_cell.default, (0, _vue.mergeProps)({
        "role": "button",
        "class": bem('title', {
          disabled: disabled,
          expanded: expanded.value,
          borderless: !border
        }),
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded.value),
        "onClick": onClickTitle
      }, props), {
        icon: slots.icon,
        title: slots.title,
        default: slots.value,
        'right-icon': slots['right-icon']
      });
    };

    var renderContent = lazyRender(function () {
      var _slots$default;

      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "ref": wrapperRef,
        "class": bem('wrapper'),
        "onTransitionend": onTransitionEnd
      }, [(0, _vue.createVNode)("div", {
        "ref": contentRef,
        "class": bem('content')
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]), [[_vue.vShow, show.value]]);
    });
    (0, _useExpose.useExpose)({
      toggle: toggle
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": [bem({
          border: index.value && props.border
        })]
      }, [renderTitle(), renderContent()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808,"../composition/use-lazy-render":1605508836819,"../cell":1605508836829,"../collapse":1605508836866}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836868, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

var _createNamespace = (0, _utils.createNamespace)('contact-card'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: {
    tel: String,
    name: String,
    addText: String,
    editable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'add'
    }
  },
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onClick = function onClick(event) {
      if (props.editable) {
        emit('click', event);
      }
    };

    var renderContent = function renderContent() {
      if (props.type === 'add') {
        return props.addText || t('addText');
      }

      return [(0, _vue.createVNode)("div", null, ["".concat(t('name'), "\uFF1A").concat(props.name)]), (0, _vue.createVNode)("div", null, ["".concat(t('tel'), "\uFF1A").concat(props.tel)])];
    };

    return function () {
      return (0, _vue.createVNode)(_cell.default, {
        "center": true,
        "icon": props.type === 'edit' ? 'contact' : 'add-square',
        "class": bem([props.type]),
        "border": false,
        "isLink": props.editable,
        "valueClass": bem('value'),
        "onClick": onClick
      }, {
        default: function _default() {
          return [renderContent()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../cell":1605508836829}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836869, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _mobile = require("../utils/validate/mobile");

var _cell = _interopRequireDefault(require("../cell"));

var _field = _interopRequireDefault(require("../field"));

var _button = _interopRequireDefault(require("../button"));

var _dialog = _interopRequireDefault(require("../dialog"));

var _switch = _interopRequireDefault(require("../switch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('contact-edit'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var DEFAULT_CONTACT = {
  tel: '',
  name: ''
};

var _default2 = createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    showSetDefault: Boolean,
    setDefaultLabel: String,
    contactInfo: {
      type: Object,
      default: function _default() {
        return _objectSpread({}, DEFAULT_CONTACT);
      }
    },
    telValidator: {
      type: Function,
      default: _mobile.isMobile
    }
  },
  emits: ['save', 'delete', 'change-default'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var state = (0, _vue.reactive)({
      contact: _objectSpread(_objectSpread({}, DEFAULT_CONTACT), props.contactInfo),
      errorInfo: {
        name: '',
        tel: ''
      }
    });

    var _onFocus = function onFocus(key) {
      state.errorInfo[key] = '';
    };

    var getErrorMessageByKey = function getErrorMessageByKey(key) {
      var value = state.contact[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameInvalid');

        case 'tel':
          return props.telValidator(value) ? '' : t('telInvalid');
      }
    };

    var onSave = function onSave() {
      var isValid = ['name', 'tel'].every(function (item) {
        var msg = getErrorMessageByKey(item);

        if (msg) {
          state.errorInfo[item] = msg;
        }

        return !msg;
      });

      if (isValid && !props.isSaving) {
        emit('save', state.contact);
      }
    };

    var onDelete = function onDelete() {
      _dialog.default.confirm({
        title: t('confirmDelete')
      }).then(function () {
        emit('delete', state.contact);
      });
    };

    var renderButtons = function renderButtons() {
      return (0, _vue.createVNode)("div", {
        "class": bem('buttons')
      }, [(0, _vue.createVNode)(_button.default, {
        "block": true,
        "round": true,
        "type": "danger",
        "text": t('save'),
        "loading": props.isSaving,
        "onClick": onSave
      }, null), props.isEdit && (0, _vue.createVNode)(_button.default, {
        "block": true,
        "round": true,
        "text": t('delete'),
        "loading": props.isDeleting,
        "onClick": onDelete
      }, null)]);
    };

    var renderSwitch = function renderSwitch() {
      return (0, _vue.createVNode)(_switch.default, {
        "modelValue": state.contact.isDefault,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return state.contact.isDefault = $event;
        },
        "size": 24,
        "onChange": function onChange(event) {
          emit('change-default', event);
        }
      }, null);
    };

    var renderSetDefault = function renderSetDefault() {
      if (props.showSetDefault) {
        return (0, _vue.createVNode)(_cell.default, {
          "title": props.setDefaultLabel,
          "class": bem('switch-cell'),
          "border": false
        }, {
          'right-icon': renderSwitch
        });
      }
    };

    (0, _vue.watch)(function () {
      return props.contactInfo;
    }, function (value) {
      state.contact = _objectSpread(_objectSpread({}, DEFAULT_CONTACT), value);
    });
    return function () {
      var contact = state.contact,
          errorInfo = state.errorInfo;
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('fields')
      }, [(0, _vue.createVNode)(_field.default, {
        "modelValue": contact.name,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return contact.name = $event;
        },
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "errorMessage": errorInfo.name,
        "onFocus": function onFocus() {
          return _onFocus('name');
        }
      }, null), (0, _vue.createVNode)(_field.default, {
        "modelValue": contact.tel,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return contact.tel = $event;
        },
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "errorMessage": errorInfo.tel,
        "onFocus": function onFocus() {
          return _onFocus('tel');
        }
      }, null)]), renderSetDefault(), renderButtons()]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/validate/mobile":1605508836822,"../cell":1605508836829,"../field":1605508836830,"../button":1605508836810,"../dialog":1605508836837,"../switch":1605508836841}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836870, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _tag = _interopRequireDefault(require("../tag"));

var _icon = _interopRequireDefault(require("../icon"));

var _cell = _interopRequireDefault(require("../cell"));

var _radio = _interopRequireDefault(require("../radio"));

var _button = _interopRequireDefault(require("../button"));

var _radioGroup = _interopRequireDefault(require("../radio-group"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('contact-list'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: {
    list: Array,
    addText: String,
    modelValue: null,
    defaultTagText: String
  },
  emits: ['add', 'edit', 'select', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var renderItem = function renderItem(item, index) {
      var onClick = function onClick() {
        emit('update:modelValue', item.id);
        emit('select', item, index);
      };

      var renderRightIcon = function renderRightIcon() {
        return (0, _vue.createVNode)(_radio.default, {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": _constant.RED
        }, null);
      };

      var renderLeftIcon = function renderLeftIcon() {
        return (0, _vue.createVNode)(_icon.default, {
          "name": "edit",
          "class": bem('edit'),
          "onClick": function onClick(event) {
            event.stopPropagation();
            emit('edit', item, index);
          }
        }, null);
      };

      var renderContent = function renderContent() {
        var nodes = ["".concat(item.name, "\uFF0C").concat(item.tel)];

        if (item.isDefault && props.defaultTagText) {
          nodes.push((0, _vue.createVNode)(_tag.default, {
            "type": "danger",
            "round": true,
            "class": bem('item-tag')
          }, {
            default: function _default() {
              return [props.defaultTagText];
            }
          }));
        }

        return nodes;
      };

      return (0, _vue.createVNode)(_cell.default, {
        "key": item.id,
        "isLink": true,
        "center": true,
        "class": bem('item'),
        "valueClass": bem('item-value'),
        "onClick": onClick
      }, {
        icon: renderLeftIcon,
        default: renderContent,
        'right-icon': renderRightIcon
      });
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)(_radioGroup.default, {
        "modelValue": props.modelValue,
        "class": bem('group')
      }, {
        default: function _default() {
          return [props.list && props.list.map(renderItem)];
        }
      }), (0, _vue.createVNode)("div", {
        "class": bem('bottom')
      }, [(0, _vue.createVNode)(_button.default, {
        "round": true,
        "block": true,
        "type": "danger",
        "class": bem('add'),
        "text": props.addText || t('addText'),
        "onClick": function onClick() {
          emit('add');
        }
      }, null)])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../tag":1605508836846,"../icon":1605508836812,"../cell":1605508836829,"../radio":1605508836847,"../button":1605508836810,"../radio-group":1605508836844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836871, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('count-down'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: [Number, String],
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'finish'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useCountDown = (0, _use.useCountDown)({
      time: +props.time,
      millisecond: props.millisecond,
      onChange: function onChange(current) {
        emit('change', current);
      },
      onFinish: function onFinish() {
        emit('finish');
      }
    }),
        start = _useCountDown.start,
        pause = _useCountDown.pause,
        reset = _useCountDown.reset,
        current = _useCountDown.current;

    var timeText = (0, _vue.computed)(function () {
      return (0, _utils2.parseFormat)(props.format, current.value);
    });

    var resetTime = function resetTime() {
      reset(+props.time);

      if (props.autoStart) {
        start();
      }
    };

    (0, _vue.watch)(function () {
      return props.time;
    }, resetTime, {
      immediate: true
    });
    (0, _useExpose.useExpose)({
      start: start,
      pause: pause,
      reset: resetTime
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [slots.default ? slots.default(current.value) : timeText.value]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"./utils":1605508836872,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836872, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFormat = parseFormat;

var _utils = require("../utils");

function parseFormat(format, currentTime) {
  var days = currentTime.days;
  var hours = currentTime.hours,
      minutes = currentTime.minutes,
      seconds = currentTime.seconds,
      milliseconds = currentTime.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', (0, _utils.padZero)(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', (0, _utils.padZero)(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', (0, _utils.padZero)(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', (0, _utils.padZero)(seconds));
  }

  if (format.indexOf('S') !== -1) {
    var ms = (0, _utils.padZero)(milliseconds, 3);

    if (format.indexOf('SSS') !== -1) {
      format = format.replace('SSS', ms);
    } else if (format.indexOf('SS') !== -1) {
      format = format.replace('SS', ms.slice(0, 2));
    } else {
      format = format.replace('S', ms.charAt(0));
    }
  }

  return format;
}
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836873, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _checkbox = _interopRequireDefault(require("../checkbox"));

var _createNamespace = (0, _utils.createNamespace)('coupon'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return "".concat(date.getFullYear(), ".").concat((0, _utils.padZero)(date.getMonth() + 1), ".").concat((0, _utils.padZero)(date.getDate()));
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

var _default = createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  setup: function setup(props) {
    var validPeriod = (0, _vue.computed)(function () {
      var _props$coupon = props.coupon,
          startAt = _props$coupon.startAt,
          endAt = _props$coupon.endAt;
      return "".concat(getDate(startAt), " - ").concat(getDate(endAt));
    });
    var faceAmount = (0, _vue.computed)(function () {
      var coupon = props.coupon,
          currency = props.currency;

      if (coupon.valueDesc) {
        return [coupon.valueDesc, (0, _vue.createVNode)("span", null, [coupon.unitDesc || ''])];
      }

      if (coupon.denominations) {
        var denominations = formatAmount(coupon.denominations);
        return [(0, _vue.createVNode)("span", null, [currency]), " ".concat(denominations)];
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(coupon.discount));
      }

      return '';
    });
    var conditionMessage = (0, _vue.computed)(function () {
      var condition = formatAmount(props.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    });
    return function () {
      var chosen = props.chosen,
          coupon = props.coupon,
          disabled = props.disabled;
      var description = disabled && coupon.reason || coupon.description;
      return (0, _vue.createVNode)("div", {
        "class": bem({
          disabled: disabled
        })
      }, [(0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [(0, _vue.createVNode)("div", {
        "class": bem('head')
      }, [(0, _vue.createVNode)("h2", {
        "class": bem('amount')
      }, [faceAmount.value]), (0, _vue.createVNode)("p", {
        "class": bem('condition')
      }, [coupon.condition || conditionMessage.value])]), (0, _vue.createVNode)("div", {
        "class": bem('body')
      }, [(0, _vue.createVNode)("p", {
        "class": bem('name')
      }, [coupon.name]), (0, _vue.createVNode)("p", {
        "class": bem('valid')
      }, [validPeriod.value]), !disabled && (0, _vue.createVNode)(_checkbox.default, {
        "size": 18,
        "class": bem('corner'),
        "modelValue": chosen,
        "checkedColor": _constant.RED
      }, null)])]), description && (0, _vue.createVNode)("p", {
        "class": bem('description')
      }, [description])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../checkbox":1605508836861}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836874, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

var _createNamespace = (0, _utils.createNamespace)('coupon-cell'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

function formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[+chosenCoupon];

  if (coupon) {
    var value = 0;

    if ((0, _utils.isDef)(coupon.value)) {
      value = coupon.value;
    } else if ((0, _utils.isDef)(coupon.denominations)) {
      value = coupon.denominations;
    }

    return "-".concat(currency, " ").concat((value / 100).toFixed(2));
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

var _default2 = createComponent({
  props: {
    title: String,
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    currency: {
      type: String,
      default: '¥'
    },
    border: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    chosenCoupon: {
      type: [Number, String],
      default: -1
    }
  },
  setup: function setup(props) {
    return function () {
      var selected = props.coupons[+props.chosenCoupon];
      var value = formatValue(props);
      return (0, _vue.createVNode)(_cell.default, {
        "class": bem(),
        "value": value,
        "title": props.title || t('title'),
        "border": props.border,
        "isLink": props.editable,
        "valueClass": bem('value', {
          selected: selected
        })
      }, null);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../cell":1605508836829}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836875, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useRefs3 = require("../composition/use-refs");

var _tab = _interopRequireDefault(require("../tab"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _field = _interopRequireDefault(require("../field"));

var _button = _interopRequireDefault(require("../button"));

var _coupon = _interopRequireDefault(require("../coupon"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('coupon-list'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';

var _default2 = createComponent({
  props: {
    code: String,
    enabledTitle: String,
    disabledTitle: String,
    closeButtonText: String,
    inputPlaceholder: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showCount: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  emits: ['change', 'exchange', 'update:code'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var _useRefs = (0, _useRefs3.useRefs)(),
        _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
        couponRefs = _useRefs2[0],
        setCouponRefs = _useRefs2[1];

    var state = (0, _vue.reactive)({
      tab: 0,
      code: props.code || ''
    });

    var _useWindowSize = (0, _use.useWindowSize)(),
        windowHeight = _useWindowSize.height;

    var buttonDisabled = (0, _vue.computed)(function () {
      return !props.exchangeButtonLoading && (props.exchangeButtonDisabled || !state.code || state.code.length < props.exchangeMinLength);
    });
    var listStyle = (0, _vue.computed)(function () {
      return {
        height: windowHeight.value - (props.showExchangeBar ? 140 : 94) + 'px'
      };
    });

    var onExchange = function onExchange() {
      emit('exchange', state.code); // auto clear currentCode when not use vModel

      if (!props.code) {
        state.code = '';
      }
    };

    var scrollToCoupon = function scrollToCoupon(index) {
      (0, _vue.nextTick)(function () {
        if (couponRefs.value[index]) {
          couponRefs.value[index].scrollIntoView();
        }
      });
    };

    var renderEmpty = function renderEmpty() {
      return (0, _vue.createVNode)("div", {
        "class": bem('empty')
      }, [(0, _vue.createVNode)("img", {
        "src": props.emptyImage
      }, null), (0, _vue.createVNode)("p", null, [t('empty')])]);
    };

    var renderExchangeBar = function renderExchangeBar() {
      if (props.showExchangeBar) {
        return (0, _vue.createVNode)("div", {
          "class": bem('exchange-bar')
        }, [(0, _vue.createVNode)(_field.default, {
          "modelValue": state.code,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return state.code = $event;
          },
          "clearable": true,
          "border": false,
          "class": bem('field'),
          "placeholder": props.inputPlaceholder || t('placeholder'),
          "maxlength": "20"
        }, null), (0, _vue.createVNode)(_button.default, {
          "plain": true,
          "type": "danger",
          "class": bem('exchange'),
          "text": props.exchangeButtonText || t('exchange'),
          "loading": props.exchangeButtonLoading,
          "disabled": buttonDisabled.value,
          "onClick": onExchange
        }, null)]);
      }
    };

    var renderCouponTab = function renderCouponTab() {
      var coupons = props.coupons;
      var count = props.showCount ? " (".concat(coupons.length, ")") : '';
      var title = (props.enabledTitle || t('enable')) + count;
      return (0, _vue.createVNode)(_tab.default, {
        "title": title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": bem('list', {
              'with-bottom': props.showCloseButton
            }),
            "style": listStyle.value
          }, [coupons.map(function (coupon, index) {
            return (0, _vue.createVNode)(_coupon.default, {
              "key": coupon.id,
              "ref": setCouponRefs(index),
              "coupon": coupon,
              "chosen": index === props.chosenCoupon,
              "currency": props.currency,
              "onClick": function onClick() {
                return emit('change', index);
              }
            }, null);
          }), !coupons.length && renderEmpty()])];
        }
      });
    };

    var renderDisabledTab = function renderDisabledTab() {
      var disabledCoupons = props.disabledCoupons;
      var count = props.showCount ? " (".concat(disabledCoupons.length, ")") : '';
      var title = (props.disabledTitle || t('disabled')) + count;
      return (0, _vue.createVNode)(_tab.default, {
        "title": title
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)("div", {
            "class": bem('list', {
              'with-bottom': props.showCloseButton
            }),
            "style": listStyle.value
          }, [disabledCoupons.map(function (coupon) {
            return (0, _vue.createVNode)(_coupon.default, {
              "disabled": true,
              "key": coupon.id,
              "coupon": coupon,
              "currency": props.currency
            }, null);
          }), !disabledCoupons.length && renderEmpty()])];
        }
      });
    };

    (0, _vue.watch)(function () {
      return props.code;
    }, function (value) {
      state.code = value;
    });
    (0, _vue.watch)(function () {
      return state.code;
    }, function (value) {
      emit('update:code', value);
    });
    (0, _vue.watch)(function () {
      return props.displayedCouponIndex;
    }, scrollToCoupon);
    (0, _vue.onMounted)(function () {
      scrollToCoupon(props.displayedCouponIndex);
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [renderExchangeBar(), (0, _vue.createVNode)(_tabs.default, {
        "modelValue": state.tab,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return state.tab = $event;
        },
        "class": bem('tab'),
        "border": false
      }, {
        default: function _default() {
          return [renderCouponTab(), renderDisabledTab()];
        }
      }), (0, _vue.createVNode)("div", {
        "class": bem('bottom')
      }, [(0, _vue.withDirectives)((0, _vue.createVNode)(_button.default, {
        "round": true,
        "block": true,
        "type": "danger",
        "class": bem('close'),
        "text": props.closeButtonText || t('close'),
        "onClick": function onClick() {
          emit('change', -1);
        }
      }, null), [[_vue.vShow, props.showCloseButton]])])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-refs":1605508836852,"../tab":1605508836876,"../tabs":1605508836877,"../field":1605508836830,"../button":1605508836810,"../coupon":1605508836873}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836876, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _tabs = require("../tabs");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('tab'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    dot: Boolean,
    name: [Number, String],
    badge: [Number, String],
    title: String,
    titleStyle: null,
    disabled: Boolean
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var inited = (0, _vue.ref)(false);

    var _useParent = (0, _use.useParent)(_tabs.TABS_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    if (!parent) {
      throw new Error('[Vant] Tabs: <van-tab> must be used inside <van-tabs>');
    }

    var getName = function getName() {
      var _props$name;

      return (_props$name = props.name) !== null && _props$name !== void 0 ? _props$name : index.value;
    };

    var init = function init() {
      inited.value = true;

      if (parent.props.lazyRender) {
        (0, _vue.nextTick)(function () {
          parent.emit('rendered', getName(), props.title);
        });
      }
    };

    var isActive = function isActive() {
      var active = getName() === parent.currentName.value;

      if (active && !inited.value) {
        init();
      }

      return active;
    };

    (0, _vue.watch)(function () {
      return props.title;
    }, function () {
      parent.setLine();
    });
    return function () {
      var _slots$default2;

      var _parent$props = parent.props,
          animated = _parent$props.animated,
          swipeable = _parent$props.swipeable,
          scrollspy = _parent$props.scrollspy,
          lazyRender = _parent$props.lazyRender;

      if (!slots.default && !animated) {
        return;
      }

      var active = isActive();
      var show = scrollspy || active;

      if (animated || swipeable) {
        var _slots$default;

        return (0, _vue.createVNode)(_swipeItem.default, {
          "role": "tabpanel",
          "aria-hidden": !active,
          "class": bem('pane-wrapper', {
            inactive: !active
          })
        }, {
          default: function _default() {
            return [(0, _vue.createVNode)("div", {
              "class": bem('pane')
            }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])];
          }
        });
      }

      var shouldRender = inited.value || scrollspy || !lazyRender;
      var Content = shouldRender ? (_slots$default2 = slots.default) === null || _slots$default2 === void 0 ? void 0 : _slots$default2.call(slots) : null;
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "role": "tabpanel",
        "class": bem('pane')
      }, [Content]), [[_vue.vShow, show]]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../tabs":1605508836877,"../composition/use-route":1605508836809,"../swipe-item":1605508836884}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836877, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TABS_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _constant = require("../utils/constant");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _useRefs3 = require("../composition/use-refs");

var _useExpose = require("../composition/use-expose");

var _sticky = _interopRequireDefault(require("../sticky"));

var _TabsTitle = _interopRequireDefault(require("./TabsTitle"));

var _TabsContent = _interopRequireDefault(require("./TabsContent"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('tabs'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var TABS_KEY = 'vanTabs';
exports.TABS_KEY = TABS_KEY;

var _default2 = createComponent({
  props: {
    color: String,
    border: Boolean,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    scrollspy: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    beforeChange: Function,
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    offsetTop: {
      type: [Number, String],
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: [Number, String],
      default: 5
    }
  },
  emits: ['click', 'change', 'scroll', 'disabled', 'rendered', 'update:active'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var tabHeight;
    var lockScroll;
    var stickyFixed;
    var root = (0, _vue.ref)();
    var navRef = (0, _vue.ref)();
    var wrapRef = (0, _vue.ref)();
    var windowSize = (0, _use.useWindowSize)();
    var scroller = (0, _use.useScrollParent)(root);

    var _useRefs = (0, _useRefs3.useRefs)(),
        _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
        titleRefs = _useRefs2[0],
        setTitleRefs = _useRefs2[1];

    var _useChildren = (0, _use.useChildren)(TABS_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var state = (0, _vue.reactive)({
      inited: false,
      position: '',
      currentIndex: -1,
      lineStyle: {
        backgroundColor: props.color
      }
    }); // whether the nav is scrollable

    var scrollable = (0, _vue.computed)(function () {
      return children.length > props.swipeThreshold || !props.ellipsis;
    });
    var navStyle = (0, _vue.computed)(function () {
      return {
        borderColor: props.color,
        background: props.background
      };
    });

    var getTabName = function getTabName(tab, index) {
      var _tab$name;

      return (_tab$name = tab.name) !== null && _tab$name !== void 0 ? _tab$name : index;
    };

    var currentName = (0, _vue.computed)(function () {
      var activeTab = children[state.currentIndex];

      if (activeTab) {
        return getTabName(activeTab, state.currentIndex);
      }
    });
    var offsetTopPx = (0, _vue.computed)(function () {
      return (0, _utils.unitToPx)(props.offsetTop);
    });
    var scrollOffset = (0, _vue.computed)(function () {
      if (props.sticky) {
        return offsetTopPx.value + tabHeight;
      }

      return 0;
    }); // scroll active tab into view

    var scrollIntoView = function scrollIntoView(immediate) {
      var nav = navRef.value;
      var titles = titleRefs.value;

      if (!scrollable.value || !titles || !titles[state.currentIndex]) {
        return;
      }

      var title = titles[state.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      (0, _utils2.scrollLeftTo)(nav, to, immediate ? 0 : +props.duration);
    }; // update nav bar style


    var setLine = function setLine() {
      var shouldAnimate = state.inited;
      (0, _vue.nextTick)(function () {
        var titles = titleRefs.value;

        if (!titles || !titles[state.currentIndex] || props.type !== 'line' || (0, _utils.isHidden)(root.value)) {
          return;
        }

        var title = titles[state.currentIndex].$el;
        var lineWidth = props.lineWidth,
            lineHeight = props.lineHeight;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: (0, _utils.addUnit)(lineWidth),
          backgroundColor: props.color,
          transform: "translateX(".concat(left, "px) translateX(-50%)")
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = "".concat(props.duration, "s");
        }

        if ((0, _utils.isDef)(lineHeight)) {
          var height = (0, _utils.addUnit)(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        state.lineStyle = lineStyle;
      });
    };

    var findAvailableTab = function findAvailableTab(index) {
      var diff = index < state.currentIndex ? -1 : 1;

      while (index >= 0 && index < children.length) {
        if (!children[index].disabled) {
          return index;
        }

        index += diff;
      }
    };

    var setCurrentIndex = function setCurrentIndex(currentIndex) {
      var newIndex = findAvailableTab(currentIndex);

      if (!(0, _utils.isDef)(newIndex)) {
        return;
      }

      var newTab = children[newIndex];
      var newName = getTabName(newTab, newIndex);
      var shouldEmitChange = state.currentIndex !== null;
      state.currentIndex = newIndex;

      if (newName !== props.active) {
        emit('update:active', newName);

        if (shouldEmitChange) {
          emit('change', newName, newTab.title);
        }
      }
    }; // correct the index of active tab


    var setCurrentIndexByName = function setCurrentIndexByName(name) {
      var matched = children.filter(function (tab, index) {
        return getTabName(tab, index) === name;
      });
      var index = matched[0] ? children.indexOf(matched[0]) : 0;
      setCurrentIndex(index);
    };

    var scrollToCurrentContent = function scrollToCurrentContent() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (props.scrollspy) {
        var target = children[state.currentIndex].$el;

        if (target) {
          var to = (0, _utils.getElementTop)(target, scroller.value) - scrollOffset.value;
          lockScroll = true;
          (0, _utils2.scrollTopTo)(scroller.value, to, immediate ? 0 : +props.duration, function () {
            lockScroll = false;
          });
        }
      }
    }; // emit event when clicked


    var _onClick = function onClick(item, index) {
      var _children$index = children[index],
          title = _children$index.title,
          disabled = _children$index.disabled;
      var name = getTabName(children[index], index);

      if (disabled) {
        emit('disabled', name, title);
      } else {
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeChange,
          args: [name],
          done: function done() {
            setCurrentIndex(index);
            scrollToCurrentContent();
          }
        });
        emit('click', name, title);
        (0, _useRoute.route)(item);
      }
    };

    var onStickyScroll = function onStickyScroll(params) {
      stickyFixed = params.isFixed;
      emit('scroll', params);
    };

    var scrollTo = function scrollTo(name) {
      (0, _vue.nextTick)(function () {
        setCurrentIndexByName(name);
        scrollToCurrentContent(true);
      });
    };

    var getCurrentIndexOnScroll = function getCurrentIndexOnScroll() {
      for (var index = 0; index < children.length; index++) {
        var top = (0, _utils.getVisibleTop)(children[index].$el);

        if (top > scrollOffset.value) {
          return index === 0 ? 0 : index - 1;
        }
      }

      return children.length - 1;
    };

    var onScroll = function onScroll() {
      if (props.scrollspy && !lockScroll) {
        var index = getCurrentIndexOnScroll();
        setCurrentIndex(index);
      }
    };

    var renderNav = function renderNav() {
      return children.map(function (item, index) {
        return (0, _vue.createVNode)(_TabsTitle.default, {
          "ref": setTitleRefs(index),
          "dot": item.dot,
          "type": props.type,
          "badge": item.badge,
          "title": item.title,
          "color": props.color,
          "style": item.titleStyle,
          "isActive": index === state.currentIndex,
          "disabled": item.disabled,
          "scrollable": scrollable.value,
          "renderTitle": item.$slots.title,
          "activeColor": props.titleActiveColor,
          "inactiveColor": props.titleInactiveColor,
          "onClick": function onClick() {
            _onClick(item, index);
          }
        }, null);
      });
    };

    var renderHeader = function renderHeader() {
      var _slots$navLeft, _slots$navRight;

      var type = props.type,
          border = props.border;
      return (0, _vue.createVNode)("div", {
        "ref": wrapRef,
        "class": [bem('wrap', {
          scrollable: scrollable.value
        }), (0, _defineProperty2.default)({}, _constant.BORDER_TOP_BOTTOM, type === 'line' && border)]
      }, [(0, _vue.createVNode)("div", {
        "ref": navRef,
        "role": "tablist",
        "class": bem('nav', [type, {
          complete: scrollable.value
        }]),
        "style": navStyle.value
      }, [(_slots$navLeft = slots['nav-left']) === null || _slots$navLeft === void 0 ? void 0 : _slots$navLeft.call(slots), renderNav(), type === 'line' && (0, _vue.createVNode)("div", {
        "class": bem('line'),
        "style": state.lineStyle
      }, null), (_slots$navRight = slots['nav-right']) === null || _slots$navRight === void 0 ? void 0 : _slots$navRight.call(slots)])]);
    };

    (0, _vue.watch)([function () {
      return props.color;
    }, windowSize.width], setLine);
    (0, _vue.watch)(function () {
      return props.active;
    }, function (value) {
      if (value !== currentName.value) {
        setCurrentIndexByName(name);
      }
    });
    (0, _vue.watch)(function () {
      return children.length;
    }, function () {
      if (state.inited) {
        setCurrentIndexByName(props.active || currentName.value);
        setLine();
        (0, _vue.nextTick)(function () {
          scrollIntoView(true);
        });
      }
    });
    (0, _vue.watch)(function () {
      return state.currentIndex;
    }, function () {
      scrollIntoView();
      setLine(); // scroll to correct position

      if (stickyFixed && !props.scrollspy) {
        (0, _utils.setRootScrollTop)(Math.ceil((0, _utils.getElementTop)(root.value) - offsetTopPx.value));
      }
    });

    var init = function init() {
      setCurrentIndexByName(props.active || currentName.value);
      (0, _vue.nextTick)(function () {
        state.inited = true;
        tabHeight = (0, _utils.getVisibleHeight)(wrapRef.value);
        scrollIntoView(true);
      });
    };

    (0, _useExpose.useExpose)({
      resize: setLine,
      scrollTo: scrollTo
    });
    (0, _vue.onActivated)(setLine);
    (0, _use.onMountedOrActivated)(init);
    (0, _use.useEventListener)('scroll', onScroll, {
      target: scroller.value
    });
    linkChildren({
      emit: emit,
      props: props,
      setLine: setLine,
      currentName: currentName
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem([props.type])
      }, [props.sticky ? (0, _vue.createVNode)(_sticky.default, {
        "container": root.value,
        "offsetTop": offsetTopPx.value,
        "onScroll": onStickyScroll
      }, {
        default: function _default() {
          return [renderHeader()];
        }
      }) : renderHeader(), (0, _vue.createVNode)(_TabsContent.default, {
        "count": children.length,
        "inited": state.inited,
        "animated": props.animated,
        "duration": props.duration,
        "swipeable": props.swipeable,
        "lazyRender": props.lazyRender,
        "currentIndex": state.currentIndex,
        "onChange": setCurrentIndex
      }, {
        default: function _default() {
          return [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      })]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"./utils":1605508836878,"../utils/constant":1605508836811,"../utils/interceptor":1605508836839,"../composition/use-route":1605508836809,"../composition/use-refs":1605508836852,"../composition/use-expose":1605508836808,"../sticky":1605508836879,"./TabsTitle":1605508836881,"./TabsContent":1605508836882}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836878, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollLeftTo = scrollLeftTo;
exports.scrollTopTo = scrollTopTo;

var _use = require("@vant/use");

var _utils = require("../utils");

var rafId;

function scrollLeftTo(scroller, to, duration) {
  (0, _use.cancelRaf)(rafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      rafId = (0, _use.raf)(animate);
    }
  }

  animate();
}

function scrollTopTo(scroller, to, duration, callback) {
  var current = (0, _utils.getScrollTop)(scroller);
  var isDown = current < to;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);
  var step = (to - current) / frames;

  function animate() {
    current += step;

    if (isDown && current > to || !isDown && current < to) {
      current = to;
    }

    (0, _utils.setScrollTop)(scroller, current);

    if (isDown && current < to || !isDown && current > to) {
      (0, _use.raf)(animate);
    } else if (callback) {
      (0, _use.raf)(callback);
    }
  }

  animate();
}
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836879, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useVisibilityChange = require("../composition/use-visibility-change");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('sticky'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    zIndex: [Number, String],
    container: null,
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['scroll'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var root = (0, _vue.ref)();
    var scrollParent = (0, _use.useScrollParent)(root);
    var state = (0, _vue.reactive)({
      fixed: false,
      height: 0,
      transform: 0
    });
    var offsetTop = (0, _vue.computed)(function () {
      return (0, _utils.unitToPx)(props.offsetTop);
    });
    var style = (0, _vue.computed)(function () {
      if (!state.fixed) {
        return;
      }

      var top = offsetTop.value ? "".concat(offsetTop.value, "px") : undefined;
      var transform = state.transform ? "translate3d(0, ".concat(state.transform, "px, 0)") : undefined;
      return {
        top: top,
        zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
        transform: transform
      };
    });

    var emitScrollEvent = function emitScrollEvent(scrollTop) {
      emit('scroll', {
        scrollTop: scrollTop,
        isFixed: state.fixed
      });
    };

    var onScroll = function onScroll() {
      if (!root.value || (0, _utils.isHidden)(root)) {
        return;
      }

      state.height = root.value.offsetHeight;
      var container = props.container;
      var scrollTop = (0, _utils.getScrollTop)(window);
      var topToPageTop = (0, _utils.getElementTop)(root.value); // The sticky component should be kept inside the container element

      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop.value + state.height > bottomToPageTop) {
          var distanceToBottom = state.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < state.height) {
            state.fixed = true;
            state.transform = -(distanceToBottom + offsetTop.value);
          } else {
            state.fixed = false;
          }

          emitScrollEvent(scrollTop);
          return;
        }
      }

      if (scrollTop + offsetTop.value > topToPageTop) {
        state.fixed = true;
        state.transform = 0;
      } else {
        state.fixed = false;
      }

      emitScrollEvent(scrollTop);
    };

    (0, _use.useEventListener)('scroll', onScroll, {
      target: scrollParent
    });
    (0, _useVisibilityChange.useVisibilityChange)(root, onScroll);
    return function () {
      var _slots$default;

      var fixed = state.fixed,
          height = state.height;
      var rootStyle = {
        height: fixed ? "".concat(height, "px") : undefined
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": rootStyle
      }, [(0, _vue.createVNode)("div", {
        "class": bem({
          fixed: fixed
        }),
        "style": style.value
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-visibility-change":1605508836880}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836880, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVisibilityChange = useVisibilityChange;

var _utils = require("../utils");

var _vue = require("vue");

var _use = require("@vant/use");

// @Experimental
function useVisibilityChange(target, onChange) {
  // compatibility: https://caniuse.com/#feat=intersectionobserver
  if (!_utils.inBrowser || !window.IntersectionObserver) {
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    // visibility changed
    onChange(entries[0].intersectionRatio > 0);
  }, {
    root: document.body
  });

  var observe = function observe() {
    if (target.value) {
      observer.observe(target.value);
    }
  };

  var unobserve = function unobserve() {
    if (target.value) {
      observer.unobserve(target.value);
    }
  };

  (0, _vue.onDeactivated)(unobserve);
  (0, _vue.onBeforeUnmount)(unobserve);
  (0, _use.onMountedOrActivated)(observe);
}
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836881, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _badge = _interopRequireDefault(require("../badge"));

var _createNamespace = (0, _utils.createNamespace)('tab'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: [Number, String],
    isActive: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    renderTitle: Function,
    inactiveColor: String
  },
  setup: function setup(props) {
    var style = (0, _vue.computed)(function () {
      var style = {};
      var type = props.type,
          color = props.color,
          disabled = props.disabled,
          isActive = props.isActive,
          activeColor = props.activeColor,
          inactiveColor = props.inactiveColor;
      var isCard = type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? activeColor : inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      return style;
    });

    var renderText = function renderText() {
      var Text = (0, _vue.createVNode)("span", {
        "class": bem('text', {
          ellipsis: !props.scrollable
        })
      }, [props.renderTitle ? props.renderTitle() : props.title]);

      if (props.dot || (0, _utils.isDef)(props.badge) && props.badge !== '') {
        return (0, _vue.createVNode)(_badge.default, {
          "dot": props.dot,
          "content": props.badge
        }, {
          default: function _default() {
            return [Text];
          }
        });
      }

      return Text;
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "role": "tab",
        "class": [bem({
          active: props.isActive,
          disabled: props.disabled
        })],
        "style": style.value,
        "aria-selected": props.isActive
      }, [renderText()]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836882, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _swipe = _interopRequireDefault(require("../swipe"));

var _createNamespace = (0, _utils.createNamespace)('tabs'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    inited: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    lazyRender: Boolean,
    count: {
      type: Number,
      required: true
    },
    duration: {
      type: [Number, String],
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var swipeRef = (0, _vue.ref)();

    var onChange = function onChange(index) {
      emit('change', index);
    };

    var renderChildren = function renderChildren() {
      var _slots$default;

      var Content = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);

      if (props.animated || props.swipeable) {
        return (0, _vue.createVNode)(_swipe.default, {
          "ref": swipeRef,
          "loop": false,
          "class": bem('track'),
          "duration": +props.duration * 1000,
          "touchable": props.swipeable,
          "lazyRender": props.lazyRender,
          "showIndicators": false,
          "onChange": onChange
        }, {
          default: function _default() {
            return [Content];
          }
        });
      }

      return Content;
    };

    var swipeToCurrentTab = function swipeToCurrentTab(index) {
      var swipe = swipeRef.value;

      if (swipe && swipe.state.active !== index) {
        swipe.swipeTo(index, {
          immediate: !props.inited
        });
      }
    };

    (0, _vue.watch)(function () {
      return props.currentIndex;
    }, swipeToCurrentTab);
    (0, _vue.onMounted)(function () {
      swipeToCurrentTab(props.currentIndex);
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem('content', {
          animated: props.animated || props.swipeable
        })
      }, [renderChildren()]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../swipe":1605508836883}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836883, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SWIPE_KEY = void 0;

var _vue = require("vue");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

var _useExpose = require("../composition/use-expose");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('swipe'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var SWIPE_KEY = 'vanSwipe';
exports.SWIPE_KEY = SWIPE_KEY;

var _default = createComponent({
  props: {
    width: [Number, String],
    height: [Number, String],
    autoplay: [Number, String],
    vertical: Boolean,
    lazyRender: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: [Number, String],
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var root = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: false
    });
    var touch = (0, _useTouch.useTouch)();
    var windowSize = (0, _use.useWindowSize)();

    var _useChildren = (0, _use.useChildren)(SWIPE_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var count = (0, _vue.computed)(function () {
      return children.length;
    });
    var size = (0, _vue.computed)(function () {
      return state[props.vertical ? 'height' : 'width'];
    });
    var delta = (0, _vue.computed)(function () {
      return props.vertical ? touch.deltaY.value : touch.deltaX.value;
    });
    var minOffset = (0, _vue.computed)(function () {
      return (props.vertical ? state.rect.height : state.rect.width) - size.value * count.value;
    });
    var maxCount = (0, _vue.computed)(function () {
      return Math.ceil(Math.abs(minOffset.value) / size.value);
    });
    var trackSize = (0, _vue.computed)(function () {
      return count.value * size.value;
    });
    var activeIndicator = (0, _vue.computed)(function () {
      return (state.active + count.value) % count.value;
    });
    var isCorrectDirection = (0, _vue.computed)(function () {
      var expect = props.vertical ? 'vertical' : 'horizontal';
      return touch.direction.value === expect;
    });
    var trackStyle = (0, _vue.computed)(function () {
      var _ref2;

      var mainAxis = props.vertical ? 'height' : 'width';
      var crossAxis = props.vertical ? 'width' : 'height';
      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, mainAxis, "".concat(trackSize.value, "px")), (0, _defineProperty2.default)(_ref2, crossAxis, props[crossAxis] ? "".concat(props[crossAxis], "px") : ''), (0, _defineProperty2.default)(_ref2, "transitionDuration", "".concat(state.swiping ? 0 : props.duration, "ms")), (0, _defineProperty2.default)(_ref2, "transform", "translate".concat(props.vertical ? 'Y' : 'X', "(").concat(state.offset, "px)")), _ref2;
    });

    var getTargetActive = function getTargetActive(pace) {
      var active = state.active;

      if (pace) {
        if (props.loop) {
          return (0, _utils.range)(active + pace, -1, count.value);
        }

        return (0, _utils.range)(active + pace, 0, maxCount.value);
      }

      return active;
    };

    var getTargetOffset = function getTargetOffset(targetActive) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var currentPosition = targetActive * size.value;

      if (!props.loop) {
        currentPosition = Math.min(currentPosition, -minOffset.value);
      }

      var targetOffset = offset - currentPosition;

      if (!props.loop) {
        targetOffset = (0, _utils.range)(targetOffset, minOffset.value, 0);
      }

      return targetOffset;
    };

    var move = function move(_ref3) {
      var _ref3$pace = _ref3.pace,
          pace = _ref3$pace === void 0 ? 0 : _ref3$pace,
          _ref3$offset = _ref3.offset,
          offset = _ref3$offset === void 0 ? 0 : _ref3$offset,
          emitChange = _ref3.emitChange;

      if (count.value <= 1) {
        return;
      }

      var active = state.active;
      var targetActive = getTargetActive(pace);
      var targetOffset = getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (props.loop) {
        if (children[0] && targetOffset !== minOffset.value) {
          var outRightBound = targetOffset < minOffset.value;
          children[0].setOffset(outRightBound ? trackSize.value : 0);
        }

        if (children[count.value - 1] && targetOffset !== 0) {
          var outLeftBound = targetOffset > 0;
          children[count.value - 1].setOffset(outLeftBound ? -trackSize.value : 0);
        }
      }

      state.active = targetActive;
      state.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        emit('change', activeIndicator.value);
      }
    };

    var correctPosition = function correctPosition() {
      state.swiping = true;

      if (state.active <= -1) {
        move({
          pace: count.value
        });
      }

      if (state.active >= count.value) {
        move({
          pace: -count.value
        });
      }
    };

    var prev = function prev() {
      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(function () {
        state.swiping = false;
        move({
          pace: -1,
          emitChange: true
        });
      });
    };

    var next = function next() {
      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(function () {
        state.swiping = false;
        move({
          pace: 1,
          emitChange: true
        });
      });
    };

    var autoplayTimer;

    var stopAutoplay = function stopAutoplay() {
      clearTimeout(autoplayTimer);
    };

    var autoplay = function autoplay() {
      if (props.autoplay > 0 && count.value > 1) {
        stopAutoplay();
        autoplayTimer = setTimeout(function () {
          next();
          autoplay();
        }, props.autoplay);
      }
    }; // initialize swipe position


    var initialize = function initialize() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +props.initialSwipe;

      if (!root.value || (0, _utils.isHidden)(root)) {
        return;
      }

      stopAutoplay();
      var rect = (0, _use.useRect)(root);
      state.rect = rect;
      state.swiping = true;
      state.active = active;
      state.width = +props.width || rect.width;
      state.height = +props.height || rect.height;
      state.offset = getTargetOffset(active);
      children.forEach(function (swipe) {
        swipe.setOffset(0);
      });
      autoplay();
    };

    var resize = function resize() {
      initialize(activeIndicator.value);
    };

    var touchStartTime;

    var onTouchStart = function onTouchStart(event) {
      if (!props.touchable) return;
      touch.start(event);
      touchStartTime = Date.now();
      stopAutoplay();
      correctPosition();
    };

    var onTouchMove = function onTouchMove(event) {
      if (props.touchable && state.swiping) {
        touch.move(event);

        if (isCorrectDirection.value) {
          (0, _utils.preventDefault)(event, props.stopPropagation);
          move({
            offset: delta.value
          });
        }
      }
    };

    var onTouchEnd = function onTouchEnd() {
      if (!props.touchable || !state.swiping) {
        return;
      }

      var duration = Date.now() - touchStartTime;
      var speed = delta.value / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(delta.value) > size.value / 2;

      if (shouldSwipe && isCorrectDirection.value) {
        var offset = props.vertical ? touch.offsetY.value : touch.offsetX.value;
        var pace = 0;

        if (props.loop) {
          pace = offset > 0 ? delta.value > 0 ? -1 : 1 : 0;
        } else {
          pace = -Math[delta.value > 0 ? 'ceil' : 'floor'](delta.value / size.value);
        }

        move({
          pace: pace,
          emitChange: true
        });
      } else if (delta.value) {
        move({
          pace: 0
        });
      }

      state.swiping = false;
      autoplay();
    };

    var swipeTo = function swipeTo(index) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      correctPosition();
      touch.reset();
      (0, _use.doubleRaf)(function () {
        var targetIndex;

        if (props.loop && index === count.value) {
          targetIndex = state.active === 0 ? 0 : index;
        } else {
          targetIndex = index % count.value;
        }

        if (options.immediate) {
          (0, _use.doubleRaf)(function () {
            state.swiping = false;
          });
        } else {
          state.swiping = false;
        }

        move({
          pace: targetIndex - state.active,
          emitChange: true
        });
      });
    };

    var renderDot = function renderDot(_, index) {
      var active = index === activeIndicator.value;
      var style = active ? {
        backgroundColor: props.indicatorColor
      } : null;
      return (0, _vue.createVNode)("i", {
        "style": style,
        "class": bem('indicator', {
          active: active
        })
      }, null);
    };

    var renderIndicator = function renderIndicator() {
      if (slots.indicator) {
        return slots.indicator();
      }

      if (props.showIndicators && count.value > 1) {
        return (0, _vue.createVNode)("div", {
          "class": bem('indicators', {
            vertical: props.vertical
          })
        }, [Array.apply(void 0, (0, _toConsumableArray2.default)(Array(count.value))).map(renderDot)]);
      }
    };

    (0, _useExpose.useExpose)({
      prev: prev,
      next: next,
      state: state,
      resize: resize,
      swipeTo: swipeTo
    });
    linkChildren({
      size: size,
      props: props,
      count: count,
      activeIndicator: activeIndicator
    });
    (0, _vue.watch)([function () {
      return children.length;
    }, function () {
      return props.initialSwipe;
    }], function () {
      initialize();
    });
    (0, _vue.watch)(function () {
      return props.autoplay;
    }, function (value) {
      if (value > 0) {
        autoplay();
      } else {
        stopAutoplay();
      }
    });
    (0, _vue.watch)([windowSize.width, windowSize.height], resize);
    (0, _vue.watch)((0, _use.usePageVisibility)(), function (visible) {
      if (visible) {
        autoplay();
      } else {
        stopAutoplay();
      }
    });
    (0, _vue.onDeactivated)(stopAutoplay);
    (0, _vue.onBeforeUnmount)(stopAutoplay);
    (0, _use.onMountedOrActivated)(initialize);
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "style": trackStyle.value,
        "class": bem('track', {
          vertical: props.vertical
        }),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), renderIndicator()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-touch":1605508836828,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836884, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _swipe = require("../swipe");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _createNamespace = (0, _utils.createNamespace)('swipe-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var rendered;
    var state = (0, _vue.reactive)({
      offset: 0,
      inited: false,
      mounted: false
    });

    var _useParent = (0, _use.useParent)(_swipe.SWIPE_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var style = (0, _vue.computed)(function () {
      var style = {};
      var vertical = parent.props.vertical;
      style[vertical ? 'height' : 'width'] = "".concat(parent.size.value, "px");

      if (state.offset) {
        style.transform = "translate".concat(vertical ? 'Y' : 'X', "(").concat(state.offset, "px)");
      }

      return style;
    });
    var shouldRender = (0, _vue.computed)(function () {
      var _parent$props = parent.props,
          loop = _parent$props.loop,
          lazyRender = _parent$props.lazyRender;

      if (!lazyRender || rendered) {
        return true;
      } // wait for all item to mount, so we can get the exact count


      if (!state.mounted) {
        return false;
      }

      var active = parent.activeIndicator.value;
      var maxActive = parent.count.value - 1;
      var prevActive = active === 0 && loop ? maxActive : active - 1;
      var nextActive = active === maxActive && loop ? 0 : active + 1;
      rendered = index.value === active || index.value === prevActive || index.value === nextActive;
      return rendered;
    });

    var setOffset = function setOffset(offset) {
      state.offset = offset;
    };

    (0, _vue.onMounted)(function () {
      (0, _vue.nextTick)(function () {
        state.mounted = true;
      });
    });
    (0, _useExpose.useExpose)({
      setOffset: setOffset
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem(),
        "style": style.value
      }, [shouldRender.value ? (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots) : null]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../swipe":1605508836883,"../utils":1605508836790,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836885, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useExpose = require("../composition/use-expose");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('datetime-picker'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var timePickerProps = Object.keys(_TimePicker.default.props);
var datePickerProps = Object.keys(_DatePicker.default.props);

var _default = createComponent({
  props: _objectSpread(_objectSpread({}, _TimePicker.default.props), _DatePicker.default.props),
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs;
    var root = (0, _vue.ref)();
    (0, _useExpose.useExpose)({
      getPicker: function getPicker() {
        var _root$value;

        return (_root$value = root.value) === null || _root$value === void 0 ? void 0 : _root$value.getPicker();
      }
    });
    return function () {
      var isTimePicker = props.type === 'time';
      var Component = isTimePicker ? _TimePicker.default : _DatePicker.default;
      var inheritProps = (0, _utils.pick)(props, isTimePicker ? timePickerProps : datePickerProps);
      return (0, _vue.createVNode)(Component, (0, _vue.mergeProps)({
        "ref": root,
        "class": bem()
      }, _objectSpread(_objectSpread({}, inheritProps), attrs)), null);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808,"./TimePicker":1605508836886,"./DatePicker":1605508836887}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836886, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _utils2 = require("./utils");

var _useExpose = require("../composition/use-expose");

var _picker = _interopRequireDefault(require("../picker"));

var _shared = require("../picker/shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('time-picker'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 1),
    createComponent = _createNamespace2[0];

var _default = createComponent({
  props: _objectSpread(_objectSpread({}, _utils2.sharedProps), {}, {
    minHour: {
      type: [Number, String],
      default: 0
    },
    maxHour: {
      type: [Number, String],
      default: 23
    },
    minMinute: {
      type: [Number, String],
      default: 0
    },
    maxMinute: {
      type: [Number, String],
      default: 59
    }
  }),
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var formatValue = function formatValue(value) {
      var minHour = props.minHour,
          maxHour = props.maxHour,
          maxMinute = props.maxMinute,
          minMinute = props.minMinute;

      if (!value) {
        value = "".concat((0, _utils.padZero)(minHour), ":").concat((0, _utils.padZero)(minMinute));
      }

      var _value$split = value.split(':'),
          _value$split2 = (0, _slicedToArray2.default)(_value$split, 2),
          hour = _value$split2[0],
          minute = _value$split2[1];

      hour = (0, _utils.padZero)((0, _utils.range)(hour, minHour, maxHour));
      minute = (0, _utils.padZero)((0, _utils.range)(minute, minMinute, maxMinute));
      return "".concat(hour, ":").concat(minute);
    };

    var picker = (0, _vue.ref)();
    var currentDate = (0, _vue.ref)(formatValue(props.modelValue));
    var ranges = (0, _vue.computed)(function () {
      return [{
        type: 'hour',
        range: [+props.minHour, +props.maxHour]
      }, {
        type: 'minute',
        range: [+props.minMinute, +props.maxMinute]
      }];
    });
    var originColumns = (0, _vue.computed)(function () {
      return ranges.value.map(function (_ref2) {
        var type = _ref2.type,
            rangeArr = _ref2.range;
        var values = (0, _utils2.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          return (0, _utils.padZero)(rangeArr[0] + index);
        });

        if (props.filter) {
          values = props.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    });
    var columns = (0, _vue.computed)(function () {
      return originColumns.value.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return props.formatter(column.type, value);
          })
        };
      });
    });

    var updateColumnValue = function updateColumnValue() {
      var pair = currentDate.value.split(':');
      var values = [props.formatter('hour', pair[0]), props.formatter('minute', pair[1])];
      (0, _vue.nextTick)(function () {
        picker.value.setValues(values);
      });
    };

    var updateInnerValue = function updateInnerValue() {
      var _picker$value$getInde = picker.value.getIndexes(),
          _picker$value$getInde2 = (0, _slicedToArray2.default)(_picker$value$getInde, 2),
          hourIndex = _picker$value$getInde2[0],
          minuteIndex = _picker$value$getInde2[1];

      var _originColumns$value = (0, _slicedToArray2.default)(originColumns.value, 2),
          hourColumn = _originColumns$value[0],
          minuteColumn = _originColumns$value[1];

      var hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      var minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];
      currentDate.value = formatValue("".concat(hour, ":").concat(minute));
      updateColumnValue();
    };

    var onConfirm = function onConfirm() {
      emit('confirm', currentDate.value);
    };

    var onCancel = function onCancel() {
      emit('cancel');
    };

    var onChange = function onChange() {
      updateInnerValue();
      (0, _vue.nextTick)(function () {
        (0, _vue.nextTick)(function () {
          emit('change', currentDate.value);
        });
      });
    };

    (0, _vue.onMounted)(function () {
      updateColumnValue();
      (0, _vue.nextTick)(updateInnerValue);
    });
    (0, _vue.watch)(columns, updateColumnValue);
    (0, _vue.watch)([function () {
      return props.filter;
    }, function () {
      return props.minHour;
    }, function () {
      return props.maxHour;
    }, function () {
      return props.minMinute;
    }, function () {
      return props.maxMinute;
    }], updateInnerValue);
    (0, _vue.watch)(currentDate, function (value) {
      emit('update:modelValue', value);
    });
    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      value = formatValue(value);

      if (value !== currentDate.value) {
        currentDate.value = value;
        updateColumnValue();
      }
    });
    (0, _useExpose.useExpose)({
      getPicker: function getPicker() {
        return picker.value;
      }
    });
    return function () {
      return (0, _vue.createVNode)(_picker.default, (0, _vue.mergeProps)({
        "ref": picker,
        "columns": columns.value,
        "readonly": props.readonly,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, (0, _utils.pick)(props, Object.keys(_shared.pickerProps))), null);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"./utils":1605508836854,"../composition/use-expose":1605508836808,"../picker":1605508836825,"../picker/shared":1605508836824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836887, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _date = require("../utils/validate/date");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _useExpose = require("../composition/use-expose");

var _picker = _interopRequireDefault(require("../picker"));

var _shared = require("../picker/shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var currentYear = new Date().getFullYear();

var _createNamespace = (0, _utils.createNamespace)('date-picker'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 1),
    createComponent = _createNamespace2[0];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _utils2.sharedProps), {}, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: _date.isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: _date.isDate
    }
  }),
  emits: ['confirm', 'cancel', 'change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var formatValue = function formatValue(value) {
      if (!(0, _date.isDate)(value)) {
        value = props.minDate;
      }

      value = Math.max(value, props.minDate.getTime());
      value = Math.min(value, props.maxDate.getTime());
      return new Date(value);
    };

    var picker = (0, _vue.ref)();
    var currentDate = (0, _vue.ref)(formatValue(props.modelValue));

    var getBoundary = function getBoundary(type, value) {
      var _ref2;

      var boundary = props["".concat(type, "Date")];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = (0, _utils2.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(type, "Year"), year), (0, _defineProperty2.default)(_ref2, "".concat(type, "Month"), month), (0, _defineProperty2.default)(_ref2, "".concat(type, "Date"), date), (0, _defineProperty2.default)(_ref2, "".concat(type, "Hour"), hour), (0, _defineProperty2.default)(_ref2, "".concat(type, "Minute"), minute), _ref2;
    };

    var ranges = (0, _vue.computed)(function () {
      var _getBoundary = getBoundary('max', currentDate.value),
          maxYear = _getBoundary.maxYear,
          maxDate = _getBoundary.maxDate,
          maxMonth = _getBoundary.maxMonth,
          maxHour = _getBoundary.maxHour,
          maxMinute = _getBoundary.maxMinute;

      var _getBoundary2 = getBoundary('min', currentDate.value),
          minYear = _getBoundary2.minYear,
          minDate = _getBoundary2.minDate,
          minMonth = _getBoundary2.minMonth,
          minHour = _getBoundary2.minHour,
          minMinute = _getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];

      switch (props.type) {
        case 'date':
          result = result.slice(0, 3);
          break;

        case 'year-month':
          result = result.slice(0, 2);
          break;

        case 'month-day':
          result = result.slice(1, 3);
          break;

        case 'datehour':
          result = result.slice(0, 4);
          break;
      }

      if (props.columnsOrder) {
        var columnsOrder = props.columnsOrder.concat(result.map(function (column) {
          return column.type;
        }));
        result.sort(function (a, b) {
          return columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type);
        });
      }

      return result;
    });
    var originColumns = (0, _vue.computed)(function () {
      return ranges.value.map(function (_ref3) {
        var type = _ref3.type,
            rangeArr = _ref3.range;
        var values = (0, _utils2.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = (0, _utils.padZero)(rangeArr[0] + index);
          return value;
        });

        if (props.filter) {
          values = props.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    });
    var columns = (0, _vue.computed)(function () {
      return originColumns.value.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return props.formatter(column.type, value);
          })
        };
      });
    });

    var updateColumnValue = function updateColumnValue() {
      var value = currentDate.value;
      var formatter = props.formatter;
      var values = originColumns.value.map(function (column) {
        switch (column.type) {
          case 'year':
            return formatter('year', "".concat(value.getFullYear()));

          case 'month':
            return formatter('month', (0, _utils.padZero)(value.getMonth() + 1));

          case 'day':
            return formatter('day', (0, _utils.padZero)(value.getDate()));

          case 'hour':
            return formatter('hour', (0, _utils.padZero)(value.getHours()));

          case 'minute':
            return formatter('minute', (0, _utils.padZero)(value.getMinutes()));

          default:
            // no default
            return null;
        }
      });
      (0, _vue.nextTick)(function () {
        picker.value.setValues(values);
      });
    };

    var updateInnerValue = function updateInnerValue() {
      var type = props.type;
      var indexes = picker.value.getIndexes();

      var getValue = function getValue(type) {
        var index = 0;
        originColumns.value.forEach(function (column, columnIndex) {
          if (type === column.type) {
            index = columnIndex;
          }
        });
        var values = originColumns.value[index].values;
        return (0, _utils2.getTrueValue)(values[indexes[index]]);
      };

      var year;
      var month;
      var day;

      if (type === 'month-day') {
        year = currentDate.value.getFullYear();
        month = getValue('month');
        day = getValue('day');
      } else {
        year = getValue('year');
        month = getValue('month');
        day = type === 'year-month' ? 1 : getValue('day');
      }

      var maxDay = (0, _utils2.getMonthEndDay)(year, month);
      day = day > maxDay ? maxDay : day;
      var hour = 0;
      var minute = 0;

      if (type === 'datehour') {
        hour = getValue('hour');
      }

      if (type === 'datetime') {
        hour = getValue('hour');
        minute = getValue('minute');
      }

      var value = new Date(year, month - 1, day, hour, minute);
      currentDate.value = formatValue(value);
    };

    var onConfirm = function onConfirm() {
      emit('confirm', currentDate.value);
    };

    var onCancel = function onCancel() {
      emit('cancel');
    };

    var onChange = function onChange() {
      updateInnerValue();
      (0, _vue.nextTick)(function () {
        (0, _vue.nextTick)(function () {
          emit('change', currentDate.value);
        });
      });
    };

    (0, _vue.onMounted)(function () {
      updateColumnValue();
      (0, _vue.nextTick)(updateInnerValue);
    });
    (0, _vue.watch)(columns, updateColumnValue);
    (0, _vue.watch)(currentDate, function (value) {
      emit('update:modelValue', value);
    });
    (0, _vue.watch)([function () {
      return props.filter;
    }, function () {
      return props.minDate;
    }, function () {
      return props.maxDate;
    }], updateInnerValue);
    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      value = formatValue(value);

      if (value.valueOf() !== currentDate.value.valueOf()) {
        currentDate.value = value;
      }
    });
    (0, _useExpose.useExpose)({
      getPicker: function getPicker() {
        return picker.value;
      }
    });
    return function () {
      return (0, _vue.createVNode)(_picker.default, (0, _vue.mergeProps)({
        "ref": picker,
        "columns": columns.value,
        "readonly": props.readonly,
        "onChange": onChange,
        "onCancel": onCancel,
        "onConfirm": onConfirm
      }, (0, _utils.pick)(props, Object.keys(_shared.pickerProps))), null);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils/validate/date":1605508836850,"../utils":1605508836790,"./utils":1605508836854,"../composition/use-expose":1605508836808,"../picker":1605508836825,"../picker/shared":1605508836824}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836888, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('divider'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    dashed: Boolean,
    hairline: {
      type: Boolean,
      default: true
    },
    contentPosition: {
      type: String,
      default: 'center'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "role": "separator",
        "class": bem((0, _defineProperty2.default)({
          dashed: props.dashed,
          hairline: props.hairline
        }, "content-".concat(props.contentPosition), !!slots.default))
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836889, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _dropdownMenu = require("../dropdown-menu");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _cell = _interopRequireDefault(require("../cell"));

var _icon = _interopRequireDefault(require("../icon"));

var _popup = _interopRequireDefault(require("../popup"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('dropdown-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    title: String,
    disabled: Boolean,
    teleport: [String, Object],
    modelValue: null,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  emits: ['open', 'opened', 'close', 'closed', 'change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var state = (0, _vue.reactive)({
      showPopup: false,
      transition: true,
      showWrapper: false
    });

    var _useParent = (0, _use.useParent)(_dropdownMenu.DROPDOWN_KEY),
        parent = _useParent.parent;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return emit(eventName);
      };
    };

    var onOpen = createEmitter('open');
    var onClose = createEmitter('close');
    var onOpened = createEmitter('opened');

    var onClosed = function onClosed() {
      state.showWrapper = false;
      emit('closed');
    };

    var onClickWrapper = function onClickWrapper(event) {
      // prevent being identified as clicking outside and closed when using teleport
      if (props.teleport) {
        event.stopPropagation();
      }
    };

    var toggle = function toggle() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !state.showPopup;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.transition = !options.immediate;

      if (show) {
        state.showWrapper = true;
      }
    };

    var renderTitle = function renderTitle() {
      if (slots.title) {
        return slots.title();
      }

      if (props.title) {
        return props.title;
      }

      var match = props.options.filter(function (option) {
        return option.value === props.modelValue;
      });
      return match.length ? match[0].text : '';
    };

    var renderOption = function renderOption(option) {
      var activeColor = parent.props.activeColor;
      var active = option.value === props.modelValue;

      var onClick = function onClick() {
        state.showPopup = false;

        if (option.value !== props.modelValue) {
          emit('update:modelValue', option.value);
          emit('change', option.value);
        }
      };

      return (0, _vue.createVNode)(_cell.default, {
        "clickable": true,
        "key": option.value,
        "icon": option.icon,
        "title": option.text,
        "class": bem('option', {
          active: active
        }),
        "style": {
          color: active ? activeColor : ''
        },
        "onClick": onClick
      }, {
        default: function _default() {
          return [active && (0, _vue.createVNode)(_icon.default, {
            "class": bem('icon'),
            "color": activeColor,
            "name": "success"
          }, null)];
        }
      });
    };

    var renderContent = function renderContent() {
      var _slots$default;

      var offset = parent.offset;
      var _parent$props = parent.props,
          zIndex = _parent$props.zIndex,
          overlay = _parent$props.overlay,
          duration = _parent$props.duration,
          direction = _parent$props.direction,
          closeOnClickOverlay = _parent$props.closeOnClickOverlay;
      var style = {
        zIndex: zIndex
      };

      if (direction === 'down') {
        style.top = "".concat(offset.value, "px");
      } else {
        style.bottom = "".concat(offset.value, "px");
      }

      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "style": style,
        "class": bem([direction]),
        "onClick": onClickWrapper
      }, [(0, _vue.createVNode)(_popup.default, {
        'show': state.showPopup,
        "onUpdate:show": function onUpdateShow($event) {
          return state.showPopup = $event;
        },
        "class": bem('content'),
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": state.transition ? duration : 0,
        "lazyRender": props.lazyRender,
        "overlayStyle": {
          position: 'absolute'
        },
        "closeOnClickOverlay": closeOnClickOverlay,
        "onOpen": onOpen,
        "onClose": onClose,
        "onOpened": onOpened,
        "onClosed": onClosed
      }, {
        default: function _default() {
          return [props.options.map(renderOption), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)];
        }
      })]), [[_vue.vShow, state.showWrapper]]);
    };

    (0, _useExpose.useExpose)({
      state: state,
      toggle: toggle,
      renderTitle: renderTitle
    });
    return function () {
      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: function _default() {
            return [renderContent()];
          }
        });
      }

      return renderContent();
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../dropdown-menu":1605508836890,"../composition/use-expose":1605508836808,"../cell":1605508836829,"../icon":1605508836812,"../popup":1605508836817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836890, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DROPDOWN_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('dropdown-menu'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var DROPDOWN_KEY = 'vanDropdownMenu';
exports.DROPDOWN_KEY = DROPDOWN_KEY;

var _default = createComponent({
  props: {
    zIndex: [Number, String],
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var root = (0, _vue.ref)();
    var offset = (0, _vue.ref)(0);
    var barRef = (0, _vue.ref)();

    var _useChildren = (0, _use.useChildren)(DROPDOWN_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    var scrollParent = (0, _use.useScrollParent)(root);
    var opened = (0, _vue.computed)(function () {
      return children.some(function (item) {
        return item.state.showWrapper;
      });
    });
    var barStyle = (0, _vue.computed)(function () {
      if (opened.value && (0, _utils.isDef)(props.zIndex)) {
        return {
          zIndex: 1 + props.zIndex
        };
      }
    });

    var onClickAway = function onClickAway() {
      if (props.closeOnClickOutside) {
        children.forEach(function (item) {
          item.toggle(false);
        });
      }
    };

    var updateOffset = function updateOffset() {
      if (barRef.value) {
        var rect = (0, _use.useRect)(barRef);

        if (props.direction === 'down') {
          offset.value = rect.bottom;
        } else {
          offset.value = window.innerHeight - rect.top;
        }
      }
    };

    var onScroll = function onScroll() {
      if (opened.value) {
        updateOffset();
      }
    };

    var toggleItem = function toggleItem(active) {
      children.forEach(function (item, index) {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    };

    var renderTitle = function renderTitle(item, index) {
      var showPopup = item.state.showPopup;
      var disabled = item.disabled,
          titleClass = item.titleClass;
      return (0, _vue.createVNode)("div", {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "class": bem('item', {
          disabled: disabled
        }),
        "onClick": function onClick() {
          if (!disabled) {
            toggleItem(index);
          }
        }
      }, [(0, _vue.createVNode)("span", {
        "class": [bem('title', {
          down: showPopup === (props.direction === 'down'),
          active: showPopup
        }), titleClass],
        "style": {
          color: showPopup ? props.activeColor : ''
        }
      }, [(0, _vue.createVNode)("div", {
        "class": "van-ellipsis"
      }, [item.renderTitle()])])]);
    };

    linkChildren({
      props: props,
      offset: offset
    });
    (0, _use.useClickAway)(root, onClickAway);
    (0, _use.useEventListener)('scroll', onScroll, {
      target: scrollParent
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "ref": barRef,
        "style": barStyle.value,
        "class": bem('bar', {
          opened: opened.value
        })
      }, [children.map(renderTitle)]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836891, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _Network = require("./Network");

var _createNamespace = (0, _utils.createNamespace)('empty'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var PRESET_IMAGES = ['error', 'search', 'default'];

var _default = createComponent({
  props: {
    imageSize: [Number, String],
    description: String,
    image: {
      type: String,
      default: 'default'
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var renderImage = function renderImage() {
      if (slots.image) {
        return slots.image();
      }

      var image = props.image;

      if (image === 'network') {
        return _Network.Network;
      }

      if (PRESET_IMAGES.indexOf(image) !== -1) {
        image = "https://img.yzcdn.cn/vant/empty-image-".concat(image, ".png");
      }

      return (0, _vue.createVNode)("img", {
        "src": image
      }, null);
    };

    var renderDescription = function renderDescription() {
      var description = slots.description ? slots.description() : props.description;

      if (description) {
        return (0, _vue.createVNode)("p", {
          "class": bem('description')
        }, [description]);
      }
    };

    var renderBottom = function renderBottom() {
      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": bem('bottom')
        }, [slots.default()]);
      }
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('image'),
        "style": (0, _utils.getSizeStyle)(props.imageSize)
      }, [renderImage()]), renderDescription(), renderBottom()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"./Network":1605508836892}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836892, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Network = void 0;

var _vue = require("vue");

var renderStop = function renderStop(color, offset, opacity) {
  return (0, _vue.createVNode)("stop", {
    "stop-color": color,
    "offset": "".concat(offset, "%"),
    "stop-opacity": opacity
  }, null);
};

var Network = (0, _vue.createVNode)("svg", {
  "viewBox": "0 0 160 160"
}, [(0, _vue.createVNode)("defs", null, [(0, _vue.createVNode)("linearGradient", {
  "id": "c",
  "x1": "64.022%",
  "y1": "100%",
  "x2": "64.022%",
  "y2": "0%"
}, [renderStop('#FFF', 0, 0.5), renderStop('#F2F3F5', 100)]), (0, _vue.createVNode)("linearGradient", {
  "id": "d",
  "x1": "64.022%",
  "y1": "96.956%",
  "x2": "64.022%",
  "y2": "0%"
}, [renderStop('#F2F3F5', 0, 0.3), renderStop('#F2F3F5', 100)]), (0, _vue.createVNode)("linearGradient", {
  "id": "h",
  "x1": "50%",
  "y1": "0%",
  "x2": "50%",
  "y2": "84.459%"
}, [renderStop('#EBEDF0', 0), renderStop('#DCDEE0', 100, 0)]), (0, _vue.createVNode)("linearGradient", {
  "id": "i",
  "x1": "100%",
  "y1": "0%",
  "x2": "100%",
  "y2": "100%"
}, [renderStop('#EAEDF0', 0), renderStop('#DCDEE0', 100)]), (0, _vue.createVNode)("linearGradient", {
  "id": "k",
  "x1": "100%",
  "y1": "100%",
  "x2": "100%",
  "y2": "0%"
}, [renderStop('#EAEDF0', 0), renderStop('#DCDEE0', 100)]), (0, _vue.createVNode)("linearGradient", {
  "id": "m",
  "x1": "0%",
  "y1": "43.982%",
  "x2": "100%",
  "y2": "54.703%"
}, [renderStop('#EAEDF0', 0), renderStop('#DCDEE0', 100)]), (0, _vue.createVNode)("linearGradient", {
  "id": "n",
  "x1": "94.535%",
  "y1": "43.837%",
  "x2": "5.465%",
  "y2": "54.948%"
}, [renderStop('#EAEDF0', 0), renderStop('#DCDEE0', 100)]), (0, _vue.createVNode)("radialGradient", {
  "id": "g",
  "cx": "50%",
  "cy": "0%",
  "fx": "50%",
  "fy": "0%",
  "r": "100%",
  "gradientTransform": "matrix(0 1 -.54835 0 .5 -.5)"
}, [renderStop('#EBEDF0', 0), renderStop('#FFF', 100, 0)])]), (0, _vue.createVNode)("g", {
  "fill": "none",
  "fill-rule": "evenodd"
}, [(0, _vue.createVNode)("g", {
  "opacity": ".8"
}, [(0, _vue.createVNode)("path", {
  "d": "M0 124V46h20v20h14v58H0z",
  "fill": "url(#c)",
  "transform": "matrix(-1 0 0 1 36 7)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M40.5 5a8.504 8.504 0 018.13 6.009l.12-.005L49 11a8 8 0 11-1 15.938V27H34v-.174a6.5 6.5 0 11-1.985-12.808A8.5 8.5 0 0140.5 5z",
  "fill": "url(#d)",
  "transform": "translate(2 7)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M96.016 0a4.108 4.108 0 013.934 2.868l.179-.004c2.138 0 3.871 1.71 3.871 3.818 0 2.109-1.733 3.818-3.871 3.818-.164 0-.325-.01-.484-.03v.03h-6.774v-.083a3.196 3.196 0 01-.726.083C90.408 10.5 89 9.111 89 7.398c0-1.636 1.284-2.976 2.911-3.094a3.555 3.555 0 01-.008-.247c0-2.24 1.842-4.057 4.113-4.057z",
  "fill": "url(#d)",
  "transform": "translate(2 7)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M121 8h22.231v14H152v77.37h-31V8z",
  "fill": "url(#c)",
  "transform": "translate(2 7)"
}, null)]), (0, _vue.createVNode)("path", {
  "fill": "url(#g)",
  "d": "M0 139h160v21H0z"
}, null), (0, _vue.createVNode)("path", {
  "d": "M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",
  "fill": "url(#h)",
  "fill-rule": "nonzero",
  "transform": "translate(43 36)"
}, null), (0, _vue.createVNode)("g", {
  "opacity": ".6",
  "stroke-linecap": "round",
  "stroke-width": "7"
}, [(0, _vue.createVNode)("path", {
  "d": "M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",
  "stroke": "url(#i)",
  "transform": "translate(43 36)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",
  "stroke": "url(#i)",
  "transform": "translate(43 36)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",
  "stroke": "url(#k)",
  "transform": "rotate(-180 76.483 42.257)"
}, null), (0, _vue.createVNode)("path", {
  "d": "M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",
  "stroke": "url(#k)",
  "transform": "rotate(-180 89.791 42.146)"
}, null)]), (0, _vue.createVNode)("g", {
  "transform": "translate(31 105)",
  "fill-rule": "nonzero"
}, [(0, _vue.createVNode)("rect", {
  "fill": "url(#m)",
  "width": "98",
  "height": "34",
  "rx": "2"
}, null), (0, _vue.createVNode)("rect", {
  "fill": "#FFF",
  "x": "9",
  "y": "8",
  "width": "80",
  "height": "18",
  "rx": "1.114"
}, null), (0, _vue.createVNode)("rect", {
  "fill": "url(#n)",
  "x": "15",
  "y": "12",
  "width": "18",
  "height": "6",
  "rx": "1.114"
}, null)])])]);
exports.Network = Network;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836893, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GRID_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('grid'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var GRID_KEY = 'vanGrid';
exports.GRID_KEY = GRID_KEY;

var _default = createComponent({
  props: {
    square: Boolean,
    gutter: [Number, String],
    iconSize: [Number, String],
    direction: String,
    clickable: Boolean,
    columnNum: {
      type: [Number, String],
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(GRID_KEY),
        linkChildren = _useChildren.linkChildren;

    linkChildren({
      props: props
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "style": {
          paddingLeft: (0, _utils.addUnit)(props.gutter)
        },
        "class": [bem(), (0, _defineProperty2.default)({}, _constant.BORDER_TOP, props.border && !props.gutter)]
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836894, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _grid = require("../grid");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _icon = _interopRequireDefault(require("../icon"));

var _badge = _interopRequireDefault(require("../badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('grid-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    dot: Boolean,
    text: String,
    icon: String,
    badge: [Number, String],
    iconPrefix: String
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useParent = (0, _use.useParent)(_grid.GRID_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var route = (0, _useRoute.useRoute)();
    var rootStyle = (0, _vue.computed)(function () {
      var _parent$props = parent.props,
          square = _parent$props.square,
          gutter = _parent$props.gutter,
          columnNum = _parent$props.columnNum;
      var percent = "".concat(100 / columnNum, "%");
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        style.paddingRight = gutterValue;

        if (index.value >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    });
    var contentStyle = (0, _vue.computed)(function () {
      var _parent$props2 = parent.props,
          square = _parent$props2.square,
          gutter = _parent$props2.gutter;

      if (square && gutter) {
        var gutterValue = (0, _utils.addUnit)(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    });

    var renderIcon = function renderIcon() {
      if (slots.icon) {
        return (0, _vue.createVNode)(_badge.default, {
          "dot": props.dot,
          "content": props.badge
        }, {
          default: function _default() {
            return [slots.icon()];
          }
        });
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.default, {
          "dot": props.dot,
          "name": props.icon,
          "size": parent.props.iconSize,
          "badge": props.badge,
          "class": bem('icon'),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    var renderText = function renderText() {
      if (slots.text) {
        return slots.text();
      }

      if (props.text) {
        return (0, _vue.createVNode)("span", {
          "class": bem('text')
        }, [props.text]);
      }
    };

    var renderContent = function renderContent() {
      if (slots.default) {
        return slots.default();
      }

      return [renderIcon(), renderText()];
    };

    return function () {
      var _parent$props3 = parent.props,
          center = _parent$props3.center,
          border = _parent$props3.border,
          square = _parent$props3.square,
          gutter = _parent$props3.gutter,
          direction = _parent$props3.direction,
          clickable = _parent$props3.clickable;
      var classes = [bem('content', [direction, {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }]), (0, _defineProperty2.default)({}, _constant.BORDER, border)];
      return (0, _vue.createVNode)("div", {
        "class": [bem({
          square: square
        })],
        "style": rootStyle.value
      }, [(0, _vue.createVNode)("div", {
        "role": clickable ? 'button' : null,
        "class": classes,
        "style": contentStyle.value,
        "tabindex": clickable ? 0 : null,
        "onClick": route
      }, [renderContent()])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../grid":1605508836893,"../composition/use-route":1605508836809,"../icon":1605508836812,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836895, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _mountComponent2 = require("../utils/mount-component");

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var instance;
var defaultConfig = {
  loop: true,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: null,
  onClose: null,
  onChange: null,
  teleport: 'body',
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: 'clear',
  beforeClose: null,
  startPosition: 0,
  swipeDuration: 500,
  showIndicators: false,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
};

function initInstance() {
  var _mountComponent = (0, _mountComponent2.mountComponent)({
    setup: function setup() {
      var _usePopupState = (0, _mountComponent2.usePopupState)(),
          state = _usePopupState.state,
          toggle = _usePopupState.toggle;

      var onClosed = function onClosed() {
        state.images = [];
      };

      return function () {
        return (0, _vue.createVNode)(_ImagePreview.default, _objectSpread(_objectSpread({}, state), {}, {
          onClosed: onClosed,
          'onUpdate:show': toggle
        }), null);
      };
    }
  });

  instance = _mountComponent.instance;
}

var ImagePreview = function ImagePreview(images) {
  var startPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  /* istanbul ignore if */
  if (!_utils.inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;
  instance.open(_objectSpread(_objectSpread({}, defaultConfig), options));
  return instance;
};

ImagePreview.Component = _ImagePreview.default;

ImagePreview.install = function (app) {
  app.use(_ImagePreview.default);
};

var _default = ImagePreview;
exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/mount-component":1605508836834,"./ImagePreview":1605508836896}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836896, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _shared = require("./shared");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _icon = _interopRequireDefault(require("../icon"));

var _swipe = _interopRequireDefault(require("../swipe"));

var _popup = _interopRequireDefault(require("../popup"));

var _ImagePreviewItem = _interopRequireDefault(require("./ImagePreviewItem"));

// Utils
// Composition
// Components
var _default2 = (0, _shared.createComponent)({
  props: {
    show: Boolean,
    className: null,
    closeable: Boolean,
    beforeClose: Function,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    minZoom: {
      type: [Number, String],
      default: 1 / 3
    },
    maxZoom: {
      type: [Number, String],
      default: 3
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: [Number, String],
      default: 500
    },
    startPosition: {
      type: [Number, String],
      default: 0
    },
    closeIcon: {
      type: String,
      default: 'clear'
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    closeIconPosition: {
      type: String,
      default: 'top-right'
    }
  },
  emits: ['scale', 'close', 'closed', 'change', 'update:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var swipeRef = (0, _vue.ref)();
    var windowSize = (0, _use.useWindowSize)();
    var state = (0, _vue.reactive)({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    });

    var resize = function resize() {
      if (swipeRef.value) {
        var rect = swipeRef.value.$el.getBoundingClientRect();
        state.rootWidth = rect.width;
        state.rootHeight = rect.height;
      }
    };

    var emitScale = function emitScale(args) {
      emit('scale', args);
    };

    var emitClose = function emitClose() {
      (0, _interceptor.callInterceptor)({
        interceptor: props.beforeClose,
        args: [state.active],
        done: function done() {
          emit('update:show', false);
        }
      });
    };

    var setActive = function setActive(active) {
      if (active !== state.active) {
        state.active = active;
        emit('change', active);
      }
    };

    var renderIndex = function renderIndex() {
      if (props.showIndex) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('index')
        }, [slots.index ? slots.index({
          index: state.active
        }) : "".concat(state.active + 1, " / ").concat(props.images.length)]);
      }
    };

    var renderCover = function renderCover() {
      if (slots.cover) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('cover')
        }, [slots.cover()]);
      }
    };

    var renderImages = function renderImages() {
      return (0, _vue.createVNode)(_swipe.default, {
        "ref": swipeRef,
        "lazyRender": true,
        "loop": props.loop,
        "class": (0, _shared.bem)('swipe'),
        "duration": props.swipeDuration,
        "initialSwipe": props.startPosition,
        "showIndicators": props.showIndicators,
        "indicatorColor": "white",
        "onChange": setActive
      }, {
        default: function _default() {
          return [props.images.map(function (image) {
            return (0, _vue.createVNode)(_ImagePreviewItem.default, {
              "src": image,
              "show": props.show,
              "active": state.active,
              "maxZoom": props.maxZoom,
              "minZoom": props.minZoom,
              "rootWidth": state.rootWidth,
              "rootHeight": state.rootHeight,
              "onScale": emitScale,
              "onClose": emitClose
            }, null);
          })];
        }
      });
    };

    var renderClose = function renderClose() {
      if (props.closeable) {
        return (0, _vue.createVNode)(_icon.default, {
          "role": "button",
          "name": props.closeIcon,
          "class": (0, _shared.bem)('close-icon', props.closeIconPosition),
          "onClick": emitClose
        }, null);
      }
    };

    var onClosed = function onClosed() {
      emit('closed');
    };

    var swipeTo = function swipeTo(index, options) {
      if (swipeRef.value) {
        swipeRef.value.swipeTo(index, options);
      }
    };

    (0, _useExpose.useExpose)({
      swipeTo: swipeTo
    });
    (0, _vue.onMounted)(resize);
    (0, _vue.watch)([windowSize.width, windowSize.height], resize);
    (0, _vue.watch)(function () {
      return props.startPosition;
    }, setActive);
    (0, _vue.watch)(function () {
      return props.show;
    }, function (value) {
      var images = props.images,
          startPosition = props.startPosition;

      if (value) {
        setActive(+startPosition);
        (0, _vue.nextTick)(function () {
          resize();
          swipeTo(+startPosition, {
            immediate: true
          });
        });
      } else {
        emit('close', {
          index: state.active,
          url: images[state.active]
        });
      }
    });
    return function () {
      return (0, _vue.createVNode)(_popup.default, {
        "show": props.show,
        "class": [(0, _shared.bem)(), props.className],
        "overlayClass": (0, _shared.bem)('overlay'),
        "closeOnPopstate": props.closeOnPopstate,
        "onClosed": onClosed
      }, {
        default: function _default() {
          return [renderClose(), renderImages(), renderIndex(), renderCover()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836897,"../utils/interceptor":1605508836839,"../composition/use-expose":1605508836808,"../icon":1605508836812,"../swipe":1605508836883,"../popup":1605508836817,"./ImagePreviewItem":1605508836898}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836897, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bem = exports.createComponent = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('image-preview'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

exports.bem = bem;
exports.createComponent = createComponent;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836898, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _shared = require("./shared");

var _utils = require("../utils");

var _useTouch = require("../composition/use-touch");

var _image = _interopRequireDefault(require("../image"));

var _loading = _interopRequireDefault(require("../loading"));

var _swipeItem = _interopRequireDefault(require("../swipe-item"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getDistance(touches) {
  return Math.sqrt(Math.pow(touches[0].clientX - touches[1].clientX, 2) + Math.pow(touches[0].clientY - touches[1].clientY, 2));
}

var _default2 = {
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: [Number, String],
    maxZoom: [Number, String],
    rootWidth: Number,
    rootHeight: Number
  },
  emits: ['scale', 'close'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var state = (0, _vue.reactive)({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    });
    var touch = (0, _useTouch.useTouch)();
    var vertical = (0, _vue.computed)(function () {
      var rootWidth = props.rootWidth,
          rootHeight = props.rootHeight;
      var rootRatio = rootHeight / rootWidth;
      return state.imageRatio > rootRatio;
    });
    var imageStyle = (0, _vue.computed)(function () {
      var scale = state.scale,
          moveX = state.moveX,
          moveY = state.moveY,
          moving = state.moving,
          zooming = state.zooming;
      var style = {
        transitionDuration: zooming || moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        var offsetX = moveX / scale;
        var offsetY = moveY / scale;
        style.transform = "scale(".concat(scale, ", ").concat(scale, ") translate(").concat(offsetX, "px, ").concat(offsetY, "px)");
      }

      return style;
    });
    var maxMoveX = (0, _vue.computed)(function () {
      if (state.imageRatio) {
        var rootWidth = props.rootWidth,
            rootHeight = props.rootHeight;
        var displayWidth = vertical.value ? rootHeight / state.imageRatio : rootWidth;
        return Math.max(0, (state.scale * displayWidth - rootWidth) / 2);
      }

      return 0;
    });
    var maxMoveY = (0, _vue.computed)(function () {
      if (state.imageRatio) {
        var rootWidth = props.rootWidth,
            rootHeight = props.rootHeight;
        var displayHeight = vertical.value ? rootHeight : rootWidth * state.imageRatio;
        return Math.max(0, (state.scale * displayHeight - rootHeight) / 2);
      }

      return 0;
    });

    var setScale = function setScale(scale) {
      state.scale = (0, _utils.range)(scale, +props.minZoom, +props.maxZoom);
      emit('scale', {
        scale: state.scale,
        index: state.active
      });
    };

    var resetScale = function resetScale() {
      setScale(1);
      state.moveX = 0;
      state.moveY = 0;
    };

    var toggleScale = function toggleScale() {
      var scale = state.scale > 1 ? 1 : 2;
      setScale(scale);
      state.moveX = 0;
      state.moveY = 0;
    };

    var startMoveX;
    var startMoveY;
    var startScale;
    var startDistance;
    var doubleTapTimer;
    var touchStartTime;

    var onTouchStart = function onTouchStart(event) {
      var touches = event.touches;
      var offsetX = touch.offsetX;
      touch.start(event);
      startMoveX = state.moveX;
      startMoveY = state.moveY;
      touchStartTime = new Date();
      state.moving = touches.length === 1 && state.scale !== 1;
      state.zooming = touches.length === 2 && !offsetX.value;

      if (state.zooming) {
        startScale = state.scale;
        startDistance = getDistance(event.touches);
      }
    };

    var onTouchMove = function onTouchMove(event) {
      var touches = event.touches;
      touch.move(event);

      if (state.moving || state.zooming) {
        (0, _utils.preventDefault)(event, true);
      }

      if (state.moving) {
        var deltaX = touch.deltaX,
            deltaY = touch.deltaY;
        var moveX = deltaX.value + startMoveX;
        var moveY = deltaY.value + startMoveY;
        state.moveX = (0, _utils.range)(moveX, -maxMoveX.value, maxMoveX.value);
        state.moveY = (0, _utils.range)(moveY, -maxMoveY.value, maxMoveY.value);
      }

      if (state.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = startScale * distance / startDistance;
        setScale(scale);
      }
    };

    var checkTap = function checkTap() {
      var offsetX = touch.offsetX,
          offsetY = touch.offsetY;
      var deltaTime = new Date() - touchStartTime;
      var TAP_TIME = 250;
      var TAP_OFFSET = 10;

      if (offsetX.value < TAP_OFFSET && offsetY.value < TAP_OFFSET && deltaTime < TAP_TIME) {
        if (doubleTapTimer) {
          clearTimeout(doubleTapTimer);
          doubleTapTimer = null;
          toggleScale();
        } else {
          doubleTapTimer = setTimeout(function () {
            emit('close');
            doubleTapTimer = null;
          }, TAP_TIME);
        }
      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      var stopPropagation = false;
      /* istanbul ignore else */

      if (state.moving || state.zooming) {
        stopPropagation = true;

        if (state.moving && startMoveX === state.moveX && startMoveY === state.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          if (state.zooming) {
            state.moveX = (0, _utils.range)(state.moveX, -maxMoveX.value, maxMoveX.value);
            state.moveY = (0, _utils.range)(state.moveY, -maxMoveY.value, maxMoveY.value);
            state.zooming = false;
          }

          state.moving = false;
          startMoveX = 0;
          startMoveY = 0;
          startScale = 1;

          if (state.scale < 1) {
            resetScale();
          }
        }
      } // eliminate tap delay on safari


      (0, _utils.preventDefault)(event, stopPropagation);
      checkTap();
      touch.reset();
    };

    var onLoad = function onLoad(event) {
      var _event$target = event.target,
          naturalWidth = _event$target.naturalWidth,
          naturalHeight = _event$target.naturalHeight;
      state.imageRatio = naturalHeight / naturalWidth;
    };

    (0, _vue.watch)(function () {
      return props.show;
    }, function (value) {
      if (!value) {
        resetScale();
      }
    });
    return function () {
      var imageSlots = {
        loading: function loading() {
          return (0, _vue.createVNode)(_loading.default, {
            "type": "spinner"
          }, null);
        }
      };
      return (0, _vue.createVNode)(_swipeItem.default, {
        "class": (0, _shared.bem)('swipe-item'),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, {
        default: function _default() {
          return [(0, _vue.createVNode)(_image.default, {
            "src": props.src,
            "fit": "contain",
            "class": (0, _shared.bem)('image', {
              vertical: vertical.value
            }),
            "style": imageStyle.value,
            "onLoad": onLoad
          }, _objectSpread({}, imageSlots))];
        }
      });
    };
  }
};
exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836897,"../utils":1605508836790,"../composition/use-touch":1605508836828,"../image":1605508836859,"../loading":1605508836814,"../swipe-item":1605508836884}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836899, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _indexBar = require("../index-bar");

var _scroll = require("../utils/dom/scroll");

var _use = require("@vant/use");

var _useHeight = require("../composition/use-height");

var _useExpose = require("../composition/use-expose");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('index-anchor'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    index: [Number, String]
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var state = (0, _vue.reactive)({
      top: 0,
      left: null,
      rect: {
        top: 0,
        height: 0
      },
      width: null,
      active: false
    });
    var root = (0, _vue.ref)();

    var _useParent = (0, _use.useParent)(_indexBar.INDEX_BAR_KEY),
        parent = _useParent.parent;

    var isSticky = function isSticky() {
      return state.active && parent.props.sticky;
    };

    var anchorStyle = (0, _vue.computed)(function () {
      var _parent$props = parent.props,
          zIndex = _parent$props.zIndex,
          highlightColor = _parent$props.highlightColor;

      if (isSticky()) {
        return {
          zIndex: "".concat(zIndex),
          left: state.left ? "".concat(state.left, "px") : null,
          width: state.width ? "".concat(state.width, "px") : null,
          transform: state.top ? "translate3d(0, ".concat(state.top, "px, 0)") : null,
          color: highlightColor
        };
      }
    });

    var getRect = function getRect(scrollParent, scrollParentRect) {
      var rootRect = (0, _use.useRect)(root);
      state.rect.height = rootRect.height;

      if (scrollParent === window || scrollParent === document.body) {
        state.rect.top = rootRect.top + (0, _scroll.getRootScrollTop)();
      } else {
        state.rect.top = rootRect.top + (0, _scroll.getScrollTop)(scrollParent) - scrollParentRect.top;
      }

      return state.rect;
    };

    (0, _vue.onMounted)(function () {
      state.rect.height = (0, _useHeight.useHeight)(root);
    });
    (0, _useExpose.useExpose)({
      state: state,
      getRect: getRect
    });
    return function () {
      var sticky = isSticky();
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": {
          height: sticky ? "".concat(state.rect.height, "px") : null
        }
      }, [(0, _vue.createVNode)("div", {
        "style": anchorStyle.value,
        "class": [bem({
          sticky: sticky
        }), (0, _defineProperty2.default)({}, _constant.BORDER_BOTTOM, sticky)]
      }, [slots.default ? slots.default() : props.index])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../index-bar":1605508836900,"../utils/dom/scroll":1605508836805,"../composition/use-height":1605508836855,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836900, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.INDEX_BAR_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

// Utils
// Composition
var INDEX_BAR_KEY = 'vanIndexBar';
exports.INDEX_BAR_KEY = INDEX_BAR_KEY;

function genAlphabet() {
  var indexList = [];
  var charCodeOfA = 'A'.charCodeAt(0);

  for (var i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}

var _createNamespace = (0, _utils.createNamespace)('index-bar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    zIndex: [Number, String],
    highlightColor: String,
    sticky: {
      type: Boolean,
      default: true
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: genAlphabet
    }
  },
  emits: ['select', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var root = (0, _vue.ref)();
    var activeAnchor = (0, _vue.ref)();
    var touch = (0, _useTouch.useTouch)();
    var scrollParent = (0, _use.useScrollParent)(root);

    var _useChildren = (0, _use.useChildren)(INDEX_BAR_KEY),
        children = _useChildren.children,
        linkChildren = _useChildren.linkChildren;

    linkChildren({
      props: props
    });
    var sidebarStyle = (0, _vue.computed)(function () {
      if ((0, _utils.isDef)(props.zIndex)) {
        return {
          zIndex: 1 + props.zIndex
        };
      }
    });
    var highlightStyle = (0, _vue.computed)(function () {
      if (props.highlightColor) {
        return {
          color: props.highlightColor
        };
      }
    });

    var getScrollerRect = function getScrollerRect() {
      if (scrollParent.value.getBoundingClientRect) {
        return (0, _use.useRect)(scrollParent);
      }

      return {
        top: 0,
        left: 0
      };
    };

    var getActiveAnchor = function getActiveAnchor(scrollTop, rects) {
      for (var i = children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;
        var reachTop = props.sticky ? prevHeight + props.stickyOffsetTop : 0;

        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    };

    var onScroll = function onScroll() {
      if ((0, _utils.isHidden)(root)) {
        return;
      }

      var sticky = props.sticky,
          indexList = props.indexList;
      var scrollTop = (0, _utils.getScrollTop)(scrollParent.value);
      var scrollParentRect = getScrollerRect();
      var rects = children.map(function (item) {
        return item.getRect(scrollParent.value, scrollParentRect);
      });
      var active = getActiveAnchor(scrollTop, rects);
      activeAnchor.value = indexList[active];

      if (sticky) {
        children.forEach(function (item, index) {
          var state = item.state,
              $el = item.$el;

          if (index === active || index === active - 1) {
            var rect = $el.getBoundingClientRect();
            state.left = rect.left;
            state.width = rect.width;
          } else {
            state.left = null;
            state.width = null;
          }

          if (index === active) {
            state.active = true;
            state.top = Math.max(props.stickyOffsetTop, rects[index].top - scrollTop) + scrollParentRect.top;
          } else if (index === active - 1) {
            var activeItemTop = rects[active].top - scrollTop;
            state.active = activeItemTop > 0;
            state.top = activeItemTop + scrollParentRect.top - rects[index].height;
          } else {
            state.active = false;
          }
        });
      }
    };

    (0, _use.useEventListener)('scroll', onScroll, {
      target: scrollParent
    });
    (0, _vue.watch)(function () {
      return props.indexList;
    }, function () {
      (0, _vue.nextTick)(onScroll);
    });
    (0, _vue.watch)(activeAnchor, function (value) {
      if (value) {
        emit('change', value);
      }
    });

    var renderIndexes = function renderIndexes() {
      return props.indexList.map(function (index) {
        var active = index === activeAnchor.value;
        return (0, _vue.createVNode)("span", {
          "class": bem('index', {
            active: active
          }),
          "style": active ? highlightStyle.value : null,
          "data-index": index
        }, [index]);
      });
    };

    var scrollToElement = function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].$el.scrollIntoView();

        if (props.sticky && props.stickyOffsetTop) {
          (0, _utils.setRootScrollTop)((0, _utils.getRootScrollTop)() - props.stickyOffsetTop);
        }

        emit('select', match[0].index);
      }
    };

    var onClick = function onClick(event) {
      scrollToElement(event.target);
    };

    var touchActiveIndex;

    var onTouchMove = function onTouchMove(event) {
      touch.move(event);

      if (touch.isVertical()) {
        (0, _utils.preventDefault)(event);
        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (touchActiveIndex !== index) {
            touchActiveIndex = index;
            scrollToElement(target);
          }
        }
      }
    };

    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('sidebar'),
        "style": sidebarStyle.value,
        "onClick": onClick,
        "onTouchstart": touch.start,
        "onTouchmove": onTouchMove
      }, [renderIndexes()]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-touch":1605508836828}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836901, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// import Lazyload from 'vue-lazyload';
// TODO
var _default = {};
exports.default = _default;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836902, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composition/use-expose");

var _loading = _interopRequireDefault(require("../loading"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('list'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    offset: {
      type: [Number, String],
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    },
    immediateCheck: {
      type: Boolean,
      default: true
    }
  },
  emits: ['load', 'update:error', 'update:loading'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    // use sync innerLoading state to avoid repeated loading in some edge cases
    var loading = (0, _vue.ref)(false);
    var root = (0, _vue.ref)();
    var placeholder = (0, _vue.ref)();
    var scrollParent = (0, _use.useScrollParent)(root);

    var check = function check() {
      (0, _vue.nextTick)(function () {
        if (loading.value || props.finished || props.error) {
          return;
        }

        var offset = props.offset,
            direction = props.direction;
        var scrollParentRect = (0, _use.useRect)(scrollParent);

        if (!scrollParentRect.height || (0, _utils.isHidden)(root)) {
          return false;
        }

        var isReachEdge = false;
        var placeholderRect = (0, _use.useRect)(placeholder);

        if (direction === 'up') {
          isReachEdge = scrollParentRect.top - placeholderRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollParentRect.bottom <= offset;
        }

        if (isReachEdge) {
          loading.value = true;
          emit('update:loading', true);
          emit('load');
        }
      });
    };

    var renderFinishedText = function renderFinishedText() {
      if (props.finished) {
        var text = slots.finished ? slots.finished() : props.finishedText;

        if (text) {
          return (0, _vue.createVNode)("div", {
            "class": bem('finished-text')
          }, [text]);
        }
      }
    };

    var clickErrorText = function clickErrorText() {
      emit('update:error', false);
      check();
    };

    var renderErrorText = function renderErrorText() {
      if (props.error) {
        var text = slots.error ? slots.error() : props.errorText;

        if (text) {
          return (0, _vue.createVNode)("div", {
            "class": bem('error-text'),
            "onClick": clickErrorText
          }, [text]);
        }
      }
    };

    var renderLoading = function renderLoading() {
      if (loading.value && !props.finished) {
        return (0, _vue.createVNode)("div", {
          "class": bem('loading')
        }, [slots.loading ? slots.loading() : (0, _vue.createVNode)(_loading.default, {
          "size": 16
        }, {
          default: function _default() {
            return [props.loadingText || t('loading')];
          }
        })]);
      }
    };

    (0, _vue.watch)([function () {
      return props.loading;
    }, function () {
      return props.finished;
    }], check);
    (0, _vue.onUpdated)(function () {
      loading.value = props.loading;
    });
    (0, _vue.onMounted)(function () {
      if (props.immediateCheck) {
        check();
      }
    });
    (0, _useExpose.useExpose)({
      check: check
    });
    (0, _use.useEventListener)('scroll', check, {
      target: scrollParent
    });
    return function () {
      var _slots$default;

      var Content = (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      var Placeholder = (0, _vue.createVNode)("div", {
        "ref": placeholder,
        "class": bem('placeholder')
      }, null);
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "role": "feed",
        "class": bem(),
        "aria-busy": loading.value
      }, [props.direction === 'down' ? Content : Placeholder, renderLoading(), renderFinishedText(), renderErrorText(), props.direction === 'up' ? Content : Placeholder]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836903, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _usePlaceholder = require("../composition/use-placeholder");

var _icon = _interopRequireDefault(require("../icon"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('nav-bar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    title: String,
    fixed: Boolean,
    zIndex: [Number, String],
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    placeholder: Boolean,
    safeAreaInsetTop: Boolean,
    border: {
      type: Boolean,
      default: true
    }
  },
  emits: ['click-left', 'click-right'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var navBarRef = (0, _vue.ref)();
    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(navBarRef, bem);

    var onClickLeft = function onClickLeft(event) {
      emit('click-left', event);
    };

    var onClickRight = function onClickRight(event) {
      emit('click-right', event);
    };

    var renderLeft = function renderLeft() {
      if (slots.left) {
        return slots.left();
      }

      return [props.leftArrow && (0, _vue.createVNode)(_icon.default, {
        "class": bem('arrow'),
        "name": "arrow-left"
      }, null), props.leftText && (0, _vue.createVNode)("span", {
        "class": bem('text')
      }, [props.leftText])];
    };

    var renderRight = function renderRight() {
      if (slots.right) {
        return slots.right();
      }

      return (0, _vue.createVNode)("span", {
        "class": bem('text')
      }, [props.rightText]);
    };

    var renderNavBar = function renderNavBar() {
      var title = props.title,
          fixed = props.fixed,
          border = props.border,
          zIndex = props.zIndex;
      var style = {
        zIndex: zIndex !== undefined ? +zIndex : undefined
      };
      var hasLeft = props.leftArrow || props.leftText || slots.left;
      var hasRight = props.rightText || slots.right;
      return (0, _vue.createVNode)("div", {
        "ref": navBarRef,
        "style": style,
        "class": [bem({
          fixed: fixed,
          'safe-area-inset-top': props.safeAreaInsetTop
        }), (0, _defineProperty2.default)({}, _constant.BORDER_BOTTOM, border)]
      }, [(0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [hasLeft && (0, _vue.createVNode)("div", {
        "class": bem('left'),
        "onClick": onClickLeft
      }, [renderLeft()]), (0, _vue.createVNode)("div", {
        "class": [bem('title'), 'van-ellipsis']
      }, [slots.title ? slots.title() : title]), hasRight && (0, _vue.createVNode)("div", {
        "class": bem('right'),
        "onClick": onClickRight
      }, [renderRight()])])]);
    };

    return function () {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderNavBar);
      }

      return renderNavBar();
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../composition/use-placeholder":1605508836904,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836904, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePlaceholder = usePlaceholder;

var _vue = require("vue");

var _useHeight = require("./use-height");

function usePlaceholder(contentRef, bem) {
  var height = (0, _useHeight.useHeight)(contentRef);
  return function (renderContent) {
    return (0, _vue.createVNode)("div", {
      "class": bem('placeholder'),
      "style": {
        height: height.value ? "".concat(height.value, "px") : undefined
      }
    }, [renderContent()]);
  };
}
}, function(modId) { var map = {"./use-height":1605508836855}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836905, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _icon = _interopRequireDefault(require("../icon"));

// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('notice-bar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    scrollable: {
      type: Boolean,
      default: null
    },
    delay: {
      type: [Number, String],
      default: 1
    },
    speed: {
      type: [Number, String],
      default: 50
    }
  },
  emits: ['close', 'replay'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var wrapWidth = 0;
    var contentWidth = 0;
    var startTimer;
    var wrapRef = (0, _vue.ref)();
    var contentRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      show: true,
      offset: 0,
      duration: 0
    });

    var renderLeftIcon = function renderLeftIcon() {
      if (slots['left-icon']) {
        return slots['left-icon']();
      }

      if (props.leftIcon) {
        return (0, _vue.createVNode)(_icon.default, {
          "class": bem('left-icon'),
          "name": props.leftIcon
        }, null);
      }
    };

    var getRightIconName = function getRightIconName() {
      if (props.mode === 'closeable') {
        return 'cross';
      }

      if (props.mode === 'link') {
        return 'arrow';
      }
    };

    var onClickRightIcon = function onClickRightIcon(event) {
      if (props.mode === 'closeable') {
        state.show = false;
        emit('close', event);
      }
    };

    var renderRightIcon = function renderRightIcon() {
      if (slots['right-icon']) {
        return slots['right-icon']();
      }

      var name = getRightIconName();

      if (name) {
        return (0, _vue.createVNode)(_icon.default, {
          "name": name,
          "class": bem('right-icon'),
          "onClick": onClickRightIcon
        }, null);
      }
    };

    var onTransitionEnd = function onTransitionEnd() {
      state.offset = wrapWidth;
      state.duration = 0; // wait for Vue to render offset
      // using nextTick won't work in iOS14

      (0, _use.raf)(function () {
        // use double raf to ensure animation can start
        (0, _use.doubleRaf)(function () {
          state.offset = -contentWidth;
          state.duration = (contentWidth + wrapWidth) / props.speed;
          emit('replay');
        });
      });
    };

    var renderMarquee = function renderMarquee() {
      var ellipsis = props.scrollable === false && !props.wrapable;
      var style = {
        transform: state.offset ? "translateX(".concat(state.offset, "px)") : '',
        transitionDuration: "".concat(state.duration, "s")
      };
      return (0, _vue.createVNode)("div", {
        "ref": wrapRef,
        "role": "marquee",
        "class": bem('wrap')
      }, [(0, _vue.createVNode)("div", {
        "ref": contentRef,
        "style": style,
        "class": [bem('content'), {
          'van-ellipsis': ellipsis
        }],
        "onTransitionend": onTransitionEnd
      }, [slots.default ? slots.default() : props.text])]);
    };

    var reset = function reset() {
      wrapWidth = 0;
      contentWidth = 0;
      state.offset = 0;
      state.duration = 0;
    };

    var start = function start() {
      var delay = props.delay,
          speed = props.speed,
          scrollable = props.scrollable;
      var ms = (0, _utils.isDef)(delay) ? delay * 1000 : 0;
      reset();
      clearTimeout(startTimer);
      startTimer = setTimeout(function () {
        if (!wrapRef.value || !contentRef.value || scrollable === false) {
          return;
        }

        var wrapRefWidth = (0, _use.useRect)(wrapRef).width;
        var contentRefWidth = (0, _use.useRect)(contentRef).width;

        if (scrollable || contentRefWidth > wrapRefWidth) {
          (0, _use.doubleRaf)(function () {
            wrapWidth = wrapRefWidth;
            contentWidth = contentRefWidth;
            state.offset = -contentWidth;
            state.duration = contentWidth / speed;
          });
        }
      }, ms);
    };

    (0, _use.onMountedOrActivated)(start); // fix cache issues with forwards and back history in safari
    // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/

    (0, _use.useEventListener)('pageshow', start);
    (0, _vue.watch)([function () {
      return props.text;
    }, function () {
      return props.scrollable;
    }], start);
    return function () {
      var color = props.color,
          wrapable = props.wrapable,
          background = props.background;
      return (0, _vue.withDirectives)((0, _vue.createVNode)("div", {
        "role": "alert",
        "class": bem({
          wrapable: wrapable
        }),
        "style": {
          color: color,
          background: background
        }
      }, [renderLeftIcon(), renderMarquee(), renderRightIcon()]), [[_vue.vShow, state.show]]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836906, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _mountComponent2 = require("../utils/mount-component");

var _Notify = _interopRequireDefault(require("./Notify"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var timer;
var instance;

function parseOptions(message) {
  return (0, _utils.isObject)(message) ? message : {
    message: message
  };
}

function initInstance() {
  var _mountComponent = (0, _mountComponent2.mountComponent)({
    setup: function setup() {
      var _usePopupState = (0, _mountComponent2.usePopupState)(),
          state = _usePopupState.state,
          toggle = _usePopupState.toggle;

      return function () {
        return (0, _vue.createVNode)(_Notify.default, _objectSpread(_objectSpread({}, state), {}, {
          'onUpdate:show': toggle
        }), null);
      };
    }
  });

  instance = _mountComponent.instance;
}

function Notify(options) {
  if (!_utils.inBrowser) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = _objectSpread(_objectSpread({}, Notify.currentOptions), parseOptions(options));
  instance.open(options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    message: '',
    color: undefined,
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = function () {
  if (instance) {
    instance.toggle(false);
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  (0, _extends2.default)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function (app) {
  app.use(_Notify.default);
  app.config.globalProperties.$notify = Notify;
};

Notify.Component = _Notify.default;
var _default = Notify;
exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/mount-component":1605508836834,"./Notify":1605508836907}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836907, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _popup = _interopRequireWildcard(require("../popup"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('notify'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _popup.popupSharedProps), {}, {
    color: String,
    message: [Number, String],
    className: null,
    background: String,
    type: {
      type: String,
      default: 'danger'
    }
  }),
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    return function () {
      var style = {
        color: props.color,
        background: props.background
      };
      return (0, _vue.createVNode)(_popup.default, {
        "show": props.show,
        "class": [bem([props.type]), props.className],
        "style": style,
        "overlay": false,
        "position": "top",
        "duration": 0.2,
        "lockScroll": false
      }, {
        default: function _default() {
          return [slots.default ? slots.default() : props.message];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../popup":1605508836817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836908, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _Key = _interopRequireDefault(require("./Key"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('number-keyboard'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    show: Boolean,
    title: String,
    zIndex: [Number, String],
    teleport: [String, Object],
    closeButtonText: String,
    deleteButtonText: String,
    closeButtonLoading: Boolean,
    theme: {
      type: String,
      default: 'default'
    },
    modelValue: {
      type: String,
      default: ''
    },
    extraKey: {
      type: [String, Array],
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  },
  emits: ['show', 'hide', 'blur', 'input', 'close', 'delete', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var root = (0, _vue.ref)();

    var genBasicKeys = function genBasicKeys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      return keys;
    };

    var genDefaultKeys = function genDefaultKeys() {
      return [].concat((0, _toConsumableArray2.default)(genBasicKeys()), [{
        text: props.extraKey,
        type: 'extra'
      }, {
        text: 0
      }, {
        text: props.showDeleteKey ? props.deleteButtonText : '',
        type: props.showDeleteKey ? 'delete' : ''
      }]);
    };

    var genCustomKeys = function genCustomKeys() {
      var keys = genBasicKeys();
      var extraKey = props.extraKey;
      var extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

      if (extraKeys.length === 1) {
        keys.push({
          text: 0,
          wider: true
        }, {
          text: extraKeys[0],
          type: 'extra'
        });
      } else if (extraKeys.length === 2) {
        keys.push({
          text: extraKeys[0],
          type: 'extra'
        }, {
          text: 0
        }, {
          text: extraKeys[1],
          type: 'extra'
        });
      }

      return keys;
    };

    var keys = (0, _vue.computed)(function () {
      return props.theme === 'custom' ? genCustomKeys() : genDefaultKeys();
    });

    var onBlur = function onBlur() {
      if (props.show) {
        emit('blur');
      }
    };

    var onClose = function onClose() {
      emit('close');
      onBlur();
    };

    var onAnimationEnd = function onAnimationEnd() {
      emit(props.show ? 'show' : 'hide');
    };

    var onPress = function onPress(text, type) {
      if (text === '') {
        if (type === 'extra') {
          onBlur();
        }

        return;
      }

      var value = props.modelValue;

      if (type === 'delete') {
        emit('delete');
        emit('update:modelValue', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        onClose();
      } else if (value.length < props.maxlength) {
        emit('input', text);
        emit('update:modelValue', value + text);
      }
    };

    var renderTitle = function renderTitle() {
      var title = props.title,
          theme = props.theme,
          closeButtonText = props.closeButtonText;
      var leftSlot = slots['title-left'];
      var showClose = closeButtonText && theme === 'default';
      var showTitle = title || showClose || leftSlot;

      if (!showTitle) {
        return;
      }

      return (0, _vue.createVNode)("div", {
        "class": bem('header')
      }, [leftSlot && (0, _vue.createVNode)("span", {
        "class": bem('title-left')
      }, [leftSlot()]), title && (0, _vue.createVNode)("h2", {
        "class": bem('title')
      }, [title]), showClose && (0, _vue.createVNode)("button", {
        "type": "button",
        "class": bem('close'),
        "onClick": onClose
      }, [closeButtonText])]);
    };

    var renderKeys = function renderKeys() {
      return keys.value.map(function (key) {
        var slots = {};

        if (key.type === 'delete') {
          slots.default = slots.delete;
        }

        if (key.type === 'extra') {
          slots.default = slots['extra-key'];
        }

        return (0, _vue.createVNode)(_Key.default, {
          "key": key.text,
          "text": key.text,
          "type": key.type,
          "wider": key.wider,
          "color": key.color,
          "onPress": onPress
        }, _objectSpread({}, slots));
      });
    };

    var renderSidebar = function renderSidebar() {
      if (props.theme === 'custom') {
        return (0, _vue.createVNode)("div", {
          "class": bem('sidebar')
        }, [props.showDeleteKey && (0, _vue.createVNode)(_Key.default, {
          "large": true,
          "text": props.deleteButtonText,
          "type": "delete",
          "onPress": onPress
        }, {
          delete: slots.delete
        }), (0, _vue.createVNode)(_Key.default, {
          "large": true,
          "text": props.closeButtonText,
          "type": "close",
          "color": "blue",
          "loading": props.closeButtonLoading,
          "onPress": onPress
        }, null)]);
      }
    };

    (0, _vue.watch)(function () {
      return props.show;
    }, function (value) {
      if (!props.transition) {
        emit(value ? 'show' : 'hide');
      }
    });
    (0, _use.useClickAway)(root, onClose, {
      eventName: 'touchstart'
    });
    return function () {
      var Title = renderTitle();
      var Content = (0, _vue.createVNode)(_vue.Transition, {
        "name": props.transition ? 'van-slide-up' : ''
      }, {
        default: function _default() {
          return [(0, _vue.withDirectives)((0, _vue.createVNode)("div", {
            "ref": root,
            "style": {
              zIndex: props.zIndex
            },
            "class": bem({
              unfit: !props.safeAreaInsetBottom,
              'with-title': !!Title
            }),
            "onTouchstart": _utils.stopPropagation,
            "onAnimationend": onAnimationEnd,
            "onWebkitAnimationEnd": onAnimationEnd
          }, [Title, (0, _vue.createVNode)("div", {
            "class": bem('body')
          }, [(0, _vue.createVNode)("div", {
            "class": bem('keys')
          }, [renderKeys()]), renderSidebar()])]), [[_vue.vShow, props.show]])];
        }
      });

      if (props.teleport) {
        return (0, _vue.createVNode)(_vue.Teleport, {
          "to": props.teleport
        }, {
          default: function _default() {
            return [Content];
          }
        });
      }

      return Content;
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"./Key":1605508836909}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836909, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useTouch = require("../composition/use-touch");

var _loading = _interopRequireDefault(require("../loading"));

var _createNamespace = (0, _utils.createNamespace)('key'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var CollapseIcon = (0, _vue.createVNode)("svg", {
  "class": bem('collapse-icon'),
  "viewBox": "0 0 30 24"
}, [(0, _vue.createVNode)("path", {
  "d": "M25.877 12.843h-1.502c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.5c.187 0 .187 0 .187-.188v-1.511c0-.19 0-.191-.185-.191zM17.999 10.2c0 .188 0 .188.188.188h1.687c.188 0 .188 0 .188-.188V8.688c0-.187.004-.187-.186-.19h-1.69c-.187 0-.187 0-.187.19V10.2zm2.25-3.967h1.5c.188 0 .188 0 .188-.188v-1.7c0-.19 0-.19-.188-.19h-1.5c-.189 0-.189 0-.189.19v1.7c0 .188 0 .188.19.188zm2.063 4.157h3.563c.187 0 .187 0 .187-.189V4.346c0-.19.004-.19-.185-.19h-1.69c-.187 0-.187 0-.187.188v4.155h-1.688c-.187 0-.187 0-.187.189v1.514c0 .19 0 .19.187.19zM14.812 24l2.812-3.4H12l2.813 3.4zm-9-11.157H4.31c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h1.502c.187 0 .187 0 .187-.188v-1.511c0-.19.01-.191-.189-.191zm15.937 0H8.25c-.188 0-.188 0-.188.19v1.512c0 .188 0 .188.188.188h13.5c.188 0 .188 0 .188-.188v-1.511c0-.19 0-.191-.188-.191zm-11.438-2.454h1.5c.188 0 .188 0 .188-.188V8.688c0-.187 0-.187-.188-.189h-1.5c-.187 0-.187 0-.187.189V10.2c0 .188 0 .188.187.188zM27.94 0c.563 0 .917.21 1.313.567.518.466.748.757.748 1.51v14.92c0 .567-.188 1.134-.562 1.512-.376.378-.938.566-1.313.566H2.063c-.563 0-.938-.188-1.313-.566-.562-.378-.75-.945-.75-1.511V2.078C0 1.51.188.944.562.567.938.189 1.5 0 1.875 0zm-.062 2H2v14.92h25.877V2zM5.81 4.157c.19 0 .19 0 .19.189v1.762c-.003.126-.024.126-.188.126H4.249c-.126-.003-.126-.023-.126-.188v-1.7c-.187-.19 0-.19.188-.19zm10.5 2.077h1.503c.187 0 .187 0 .187-.188v-1.7c0-.19 0-.19-.187-.19h-1.502c-.188 0-.188.001-.188.19v1.7c0 .188 0 .188.188.188zM7.875 8.5c.187 0 .187.002.187.189V10.2c0 .188 0 .188-.187.188H4.249c-.126-.002-.126-.023-.126-.188V8.625c.003-.126.024-.126.188-.126zm7.875 0c.19.002.19.002.19.189v1.575c-.003.126-.024.126-.19.126h-1.563c-.126-.002-.126-.023-.126-.188V8.625c.002-.126.023-.126.189-.126zm-6-4.342c.187 0 .187 0 .187.189v1.7c0 .188 0 .188-.187.188H8.187c-.126-.003-.126-.023-.126-.188V4.283c.003-.126.024-.126.188-.126zm3.94 0c.185 0 .372 0 .372.189v1.762c-.002.126-.023.126-.187.126h-1.75C12 6.231 12 6.211 12 6.046v-1.7c0-.19.187-.19.187-.19z",
  "fill": "currentColor"
}, null)]);
var DeleteIcon = (0, _vue.createVNode)("svg", {
  "class": bem('delete-icon'),
  "viewBox": "0 0 32 22"
}, [(0, _vue.createVNode)("path", {
  "d": "M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z",
  "fill": "currentColor"
}, null)]);

var _default = createComponent({
  props: {
    type: String,
    text: [Number, String],
    color: String,
    wider: Boolean,
    large: Boolean,
    loading: Boolean
  },
  emits: ['press'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var active = (0, _vue.ref)(false);
    var touch = (0, _useTouch.useTouch)();

    var onTouchStart = function onTouchStart(event) {
      touch.start(event);
      active.value = true;
    };

    var onTouchMove = function onTouchMove(event) {
      touch.move(event);

      if (touch.direction.value) {
        active.value = false;
      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (active.value) {
        // eliminate tap delay on safari
        // see: https://github.com/youzan/vant/issues/6836
        if (!slots.default) {
          event.preventDefault();
        }

        active.value = false;
        emit('press', props.text, props.type);
      }
    };

    var renderContent = function renderContent() {
      if (props.loading) {
        return (0, _vue.createVNode)(_loading.default, {
          "class": bem('loading-icon')
        }, null);
      }

      var text = slots.default ? slots.default() : props.text;

      switch (props.type) {
        case 'delete':
          return text || DeleteIcon;

        case 'extra':
          return text || CollapseIcon;

        default:
          return text;
      }
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem('wrapper', {
          wider: props.wider
        }),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("div", {
        "role": "button",
        "tabindex": 0,
        "class": bem([props.color, {
          large: props.large,
          active: active.value,
          delete: props.type === 'delete'
        }])
      }, [renderContent()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-touch":1605508836828,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836910, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('pagination'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

var _default = createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    mode: {
      type: String,
      default: 'multi'
    },
    modelValue: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: [Number, String],
      default: 0
    },
    totalItems: {
      type: [Number, String],
      default: 0
    },
    itemsPerPage: {
      type: [Number, String],
      default: 10
    },
    showPageSize: {
      type: [Number, String],
      default: 5
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var count = (0, _vue.computed)(function () {
      var pageCount = props.pageCount,
          totalItems = props.totalItems,
          itemsPerPage = props.itemsPerPage;
      var count = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
      return Math.max(1, count);
    });
    var pages = (0, _vue.computed)(function () {
      var items = [];
      var pageCount = count.value;
      var showPageSize = +props.showPageSize;
      var modelValue = props.modelValue,
          forceEllipses = props.forceEllipses;

      if (props.mode !== 'multi') {
        return items;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(modelValue - Math.floor(showPageSize / 2), 1);
        endPage = startPage + showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === modelValue);
        items.push(page);
      } // Add links to move between page sets


      if (isMaxSized && showPageSize > 0 && forceEllipses) {
        if (startPage > 1) {
          var prevPages = makePage(startPage - 1, '...');
          items.unshift(prevPages);
        }

        if (endPage < pageCount) {
          var nextPages = makePage(endPage + 1, '...');
          items.push(nextPages);
        }
      }

      return items;
    });

    var select = function select(page, emitChange) {
      page = Math.min(count.value, Math.max(1, page));

      if (props.modelValue !== page) {
        emit('update:modelValue', page);

        if (emitChange) {
          emit('change', page);
        }
      }
    };

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      select(value);
    }, {
      immediate: true
    });

    var renderDesc = function renderDesc() {
      if (props.mode !== 'multi') {
        return (0, _vue.createVNode)("li", {
          "class": bem('page-desc')
        }, [slots.pageDesc ? slots.pageDesc() : "".concat(props.modelValue, "/").concat(count.value)]);
      }
    };

    return function () {
      var value = props.modelValue;
      var simple = props.mode !== 'multi';

      var onSelect = function onSelect(value) {
        return function () {
          select(value, true);
        };
      };

      return (0, _vue.createVNode)("ul", {
        "class": bem({
          simple: simple
        })
      }, [(0, _vue.createVNode)("li", {
        "class": [bem('item', {
          disabled: value === 1
        }), bem('prev'), _constant.BORDER],
        "onClick": onSelect(value - 1)
      }, [slots['prev-text'] ? slots['prev-text']() : props.prevText || t('prev')]), pages.value.map(function (page) {
        return (0, _vue.createVNode)("li", {
          "class": [bem('item', {
            active: page.active
          }), bem('page'), _constant.BORDER],
          "onClick": onSelect(page.number)
        }, [slots.page ? slots.page(page) : page.text]);
      }), renderDesc(), (0, _vue.createVNode)("li", {
        "class": [bem('item', {
          disabled: value === count.value
        }), bem('next'), _constant.BORDER],
        "onClick": onSelect(value + 1)
      }, [slots['next-text'] ? slots['next-text']() : props.nextText || t('next')])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836911, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _createNamespace = (0, _utils.createNamespace)('password-input'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    info: String,
    gutter: [Number, String],
    focused: Boolean,
    errorInfo: String,
    mask: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    length: {
      type: [Number, String],
      default: 6
    }
  },
  emits: ['focus'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var onTouchStart = function onTouchStart(event) {
      event.stopPropagation();
      emit('focus', event);
    };

    var renderPoints = function renderPoints() {
      var Points = [];
      var mask = props.mask,
          value = props.value,
          length = props.length,
          gutter = props.gutter,
          focused = props.focused;

      for (var i = 0; i < length; i++) {
        var _char = value[i];
        var showBorder = i !== 0 && !gutter;
        var showCursor = focused && i === value.length;
        var style = void 0;

        if (i !== 0 && gutter) {
          style = {
            marginLeft: (0, _utils.addUnit)(gutter)
          };
        }

        Points.push((0, _vue.createVNode)("li", {
          "class": [(0, _defineProperty2.default)({}, _constant.BORDER_LEFT, showBorder), bem('item', {
            focus: showCursor
          })],
          "style": style
        }, [mask ? (0, _vue.createVNode)("i", {
          "style": {
            visibility: _char ? 'visible' : 'hidden'
          }
        }, null) : _char, showCursor && (0, _vue.createVNode)("div", {
          "class": bem('cursor')
        }, null)]));
      }

      return Points;
    };

    return function () {
      var info = props.errorInfo || props.info;
      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(0, _vue.createVNode)("ul", {
        "class": [bem('security'), (0, _defineProperty2.default)({}, _constant.BORDER_SURROUND, !props.gutter)],
        "onTouchstart": onTouchStart
      }, [renderPoints()]), info && (0, _vue.createVNode)("div", {
        "class": bem(props.errorInfo ? 'error-info' : 'info')
      }, [info])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836912, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useExpose = require("../composition/use-expose");

var _createNamespace = (0, _utils.createNamespace)('progress'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    color: String,
    inactive: Boolean,
    pivotText: String,
    textColor: String,
    pivotColor: String,
    trackColor: String,
    strokeWidth: [Number, String],
    percentage: {
      type: [Number, String],
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    }
  },
  setup: function setup(props) {
    var root = (0, _vue.ref)();
    var pivotRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      rootWidth: 0,
      pivotWidth: 0
    });
    var background = (0, _vue.computed)(function () {
      return props.inactive ? '#cacaca' : props.color;
    });

    var resize = function resize() {
      (0, _vue.nextTick)(function () {
        state.rootWidth = root.value ? root.value.offsetWidth : 0;
        state.pivotWidth = pivotRef.value ? pivotRef.value.offsetWidth : 0;
      });
    };

    var renderPivot = function renderPivot() {
      var rootWidth = state.rootWidth,
          pivotWidth = state.pivotWidth;
      var textColor = props.textColor,
          pivotText = props.pivotText,
          pivotColor = props.pivotColor,
          percentage = props.percentage;
      var text = pivotText !== null && pivotText !== void 0 ? pivotText : "".concat(percentage, "%");
      var show = props.showPivot && text;

      if (show) {
        var left = (rootWidth - pivotWidth) * +percentage / 100;
        var style = {
          color: textColor,
          left: "".concat(left, "px"),
          background: pivotColor || background.value
        };
        return (0, _vue.createVNode)("span", {
          "ref": pivotRef,
          "style": style,
          "class": bem('pivot')
        }, [text]);
      }
    };

    (0, _vue.watch)([function () {
      return props.showPivot;
    }, function () {
      return props.pivotText;
    }], resize);
    (0, _vue.onMounted)(resize);
    (0, _useExpose.useExpose)({
      resize: resize
    });
    return function () {
      var trackColor = props.trackColor,
          percentage = props.percentage,
          strokeWidth = props.strokeWidth;
      var rootStyle = {
        background: trackColor,
        height: (0, _utils.addUnit)(strokeWidth)
      };
      var portionStyle = {
        background: background.value,
        width: state.rootWidth * +percentage / 100 + 'px'
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem(),
        "style": rootStyle
      }, [(0, _vue.createVNode)("span", {
        "class": bem('portion'),
        "style": portionStyle
      }, [renderPivot()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836913, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

var _loading = _interopRequireDefault(require("../loading"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('pull-refresh'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var DEFAULT_HEAD_HEIGHT = 50;
var TEXT_STATUS = ['pulling', 'loosing', 'success'];

var _default2 = createComponent({
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    modelValue: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: [Number, String],
      default: 500
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    headHeight: {
      type: [Number, String],
      default: DEFAULT_HEAD_HEIGHT
    }
  },
  emits: ['refresh', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var reachTop;
    var root = (0, _vue.ref)();
    var scrollParent = (0, _use.useScrollParent)(root);
    var state = (0, _vue.reactive)({
      status: 'normal',
      distance: 0,
      duration: 0
    });
    var touch = (0, _useTouch.useTouch)();

    var getHeadStyle = function getHeadStyle() {
      if (props.headHeight !== DEFAULT_HEAD_HEIGHT) {
        return {
          height: "".concat(props.headHeight, "px")
        };
      }
    };

    var isTouchable = function isTouchable() {
      return state.status !== 'loading' && state.status !== 'success' && !props.disabled;
    };

    var ease = function ease(distance) {
      var headHeight = +props.headHeight;

      if (distance > headHeight) {
        if (distance < headHeight * 2) {
          distance = headHeight + (distance - headHeight) / 2;
        } else {
          distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    var setStatus = function setStatus(distance, isLoading) {
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < props.headHeight) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }
    };

    var getStatusText = function getStatusText() {
      var status = state.status;

      if (status === 'normal') {
        return '';
      }

      return props["".concat(status, "Text")] || t(status);
    };

    var renderStatus = function renderStatus() {
      var status = state.status,
          distance = state.distance;

      if (slots[status]) {
        return slots[status]({
          distance: distance
        });
      }

      var nodes = [];

      if (TEXT_STATUS.indexOf(status) !== -1) {
        nodes.push((0, _vue.createVNode)("div", {
          "class": bem('text')
        }, [getStatusText()]));
      }

      if (status === 'loading') {
        nodes.push((0, _vue.createVNode)(_loading.default, {
          "size": "16"
        }, {
          default: function _default() {
            return [getStatusText()];
          }
        }));
      }

      return nodes;
    };

    var showSuccessTip = function showSuccessTip() {
      state.status = 'success';
      setTimeout(function () {
        setStatus(0);
      }, +props.successDuration);
    };

    var checkPosition = function checkPosition(event) {
      reachTop = (0, _utils.getScrollTop)(scrollParent.value) === 0;

      if (reachTop) {
        state.duration = 0;
        touch.start(event);
      }
    };

    var onTouchStart = function onTouchStart(event) {
      if (isTouchable()) {
        checkPosition(event);
      }
    };

    var onTouchMove = function onTouchMove(event) {
      if (isTouchable()) {
        if (!reachTop) {
          checkPosition(event);
        }

        var deltaY = touch.deltaY;
        touch.move(event);

        if (reachTop && deltaY.value >= 0 && touch.isVertical()) {
          (0, _utils.preventDefault)(event);
          setStatus(ease(deltaY.value));
        }
      }
    };

    var onTouchEnd = function onTouchEnd() {
      if (reachTop && touch.deltaY.value && isTouchable()) {
        state.duration = +props.animationDuration;

        if (state.status === 'loosing') {
          setStatus(+props.headHeight, true);
          emit('update:modelValue', true); // ensure value change can be watched

          (0, _vue.nextTick)(function () {
            emit('refresh');
          });
        } else {
          setStatus(0);
        }
      }
    };

    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      state.duration = +props.animationDuration;

      if (value) {
        setStatus(+props.headHeight, true);
      } else if (slots.success || props.successText) {
        showSuccessTip();
      } else {
        setStatus(0, false);
      }
    });
    return function () {
      var _slots$default;

      var trackStyle = {
        transitionDuration: "".concat(state.duration, "ms"),
        transform: state.distance ? "translate3d(0,".concat(state.distance, "px, 0)") : ''
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem()
      }, [(0, _vue.createVNode)("div", {
        "class": bem('track'),
        "style": trackStyle,
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("div", {
        "class": bem('head'),
        "style": getHeadStyle()
      }, [renderStatus()]), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-touch":1605508836828,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836914, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _useRefs3 = require("../composition/use-refs");

var _useTouch = require("../composition/use-touch");

var _useLinkField = require("../composition/use-link-field");

var _icon = _interopRequireDefault(require("../icon"));

// Utils
// Composition
// Components
var _createNamespace = (0, _utils.createNamespace)('rate'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

var _default = createComponent({
  props: {
    size: [Number, String],
    color: String,
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    voidColor: String,
    iconPrefix: String,
    disabledColor: String,
    modelValue: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    count: {
      type: [Number, String],
      default: 5
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var ranges;
    var touch = (0, _useTouch.useTouch)();

    var _useRefs = (0, _useRefs3.useRefs)(),
        _useRefs2 = (0, _slicedToArray2.default)(_useRefs, 2),
        itemRefs = _useRefs2[0],
        setItemRefs = _useRefs2[1];

    var untouchable = function untouchable() {
      return props.readonly || props.disabled || !props.touchable;
    };

    var list = (0, _vue.computed)(function () {
      var list = [];

      for (var i = 1; i <= props.count; i++) {
        list.push(getRateStatus(props.modelValue, i, props.allowHalf));
      }

      return list;
    });

    var select = function select(index) {
      if (!props.disabled && !props.readonly && index !== props.modelValue) {
        emit('update:modelValue', index);
        emit('change', index);
      }
    };

    var getScoreByPosition = function getScoreByPosition(x) {
      for (var i = ranges.length - 1; i > 0; i--) {
        if (x > ranges[i].left) {
          return ranges[i].score;
        }
      }

      return props.allowHalf ? 0.5 : 1;
    };

    var onTouchStart = function onTouchStart(event) {
      if (untouchable()) {
        return;
      }

      touch.start(event);
      var rects = itemRefs.value.map(function (item) {
        return item.getBoundingClientRect();
      });
      ranges = [];
      rects.forEach(function (rect, index) {
        if (props.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left
          });
        }
      });
    };

    var onTouchMove = function onTouchMove(event) {
      if (untouchable()) {
        return;
      }

      touch.move(event);

      if (touch.isHorizontal()) {
        var clientX = event.touches[0].clientX;
        (0, _utils.preventDefault)(event);
        select(getScoreByPosition(clientX));
      }
    };

    var renderStar = function renderStar(status, index) {
      var icon = props.icon,
          size = props.size,
          color = props.color,
          count = props.count,
          gutter = props.gutter,
          voidIcon = props.voidIcon,
          disabled = props.disabled,
          voidColor = props.voidColor,
          allowHalf = props.allowHalf,
          iconPrefix = props.iconPrefix,
          disabledColor = props.disabledColor;
      var score = index + 1;
      var isFull = status === 'full';
      var isVoid = status === 'void';
      var style;

      if (gutter && score !== +count) {
        style = {
          paddingRight: (0, _utils.addUnit)(gutter)
        };
      }

      return (0, _vue.createVNode)("div", {
        "key": index,
        "ref": setItemRefs(index),
        "role": "radio",
        "style": style,
        "class": bem('item'),
        "tabindex": "0",
        "aria-setsize": count,
        "aria-posinset": score,
        "aria-checked": String(!isVoid)
      }, [(0, _vue.createVNode)(_icon.default, {
        "size": size,
        "name": isFull ? icon : voidIcon,
        "class": bem('icon', {
          disabled: disabled,
          full: isFull
        }),
        "color": disabled ? disabledColor : isFull ? color : voidColor,
        "classPrefix": iconPrefix,
        "data-score": score,
        "onClick": function onClick() {
          select(score);
        }
      }, null), allowHalf && (0, _vue.createVNode)(_icon.default, {
        "size": size,
        "name": isVoid ? voidIcon : icon,
        "class": bem('icon', ['half', {
          disabled: disabled,
          full: !isVoid
        }]),
        "color": disabled ? disabledColor : isVoid ? voidColor : color,
        "classPrefix": iconPrefix,
        "data-score": score - 0.5,
        "onClick": function onClick() {
          select(score - 0.5);
        }
      }, null)]);
    };

    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "role": "radiogroup",
        "class": bem({
          readonly: props.readonly,
          disabled: props.disabled
        }),
        "tabindex": "0",
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove
      }, [list.value.map(renderStar)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-refs":1605508836852,"../composition/use-touch":1605508836828,"../composition/use-link-field":1605508836842,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836915, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _field = _interopRequireDefault(require("../field"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('search'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default = createComponent({
  inheritAttrs: false,
  props: {
    label: String,
    rightIcon: String,
    modelValue: String,
    actionText: String,
    background: String,
    showAction: Boolean,
    clearTrigger: String,
    shape: {
      type: String,
      default: 'square'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      type: String,
      default: 'search'
    }
  },
  emits: ['search', 'cancel'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots,
        attrs = _ref.attrs;

    var onCancel = function onCancel() {
      if (!slots.action) {
        emit('update:modelValue', '');
        emit('cancel');
      }
    };

    var onKeypress = function onKeypress(event) {
      var ENTER_CODE = 13;

      if (event.keyCode === ENTER_CODE) {
        (0, _utils.preventDefault)(event);
        emit('search', props.modelValue);
      }
    };

    var renderLabel = function renderLabel() {
      if (slots.label || props.label) {
        return (0, _vue.createVNode)("div", {
          "class": bem('label')
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    var renderAction = function renderAction() {
      if (props.showAction) {
        var text = props.actionText || t('cancel');
        return (0, _vue.createVNode)("div", {
          "class": bem('action'),
          "role": "button",
          "tabindex": "0",
          "onClick": onCancel
        }, [slots.action ? slots.action() : text]);
      }
    };

    var fieldPropNames = ['leftIcon', 'rightIcon', 'clearable', 'modelValue', 'clearTrigger'];

    var renderField = function renderField() {
      var fieldAttrs = _objectSpread(_objectSpread(_objectSpread({}, attrs), (0, _utils.pick)(props, fieldPropNames)), {}, {
        style: null,
        class: null
      });

      return (0, _vue.createVNode)(_field.default, (0, _vue.mergeProps)({
        "type": "search",
        "border": false,
        "onKeypress": onKeypress
      }, fieldAttrs), _objectSpread({}, (0, _utils.pick)(slots, ['left-icon', 'right-icon'])));
    };

    return function () {
      var _slots$left;

      return (0, _vue.createVNode)("div", {
        "class": [bem({
          'show-action': props.showAction
        }), attrs.class],
        "style": _objectSpread({
          background: props.background
        }, attrs.style)
      }, [(_slots$left = slots.left) === null || _slots$left === void 0 ? void 0 : _slots$left.call(slots), (0, _vue.createVNode)("div", {
        "class": bem('content', props.shape)
      }, [renderLabel(), renderField()]), renderAction()]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../field":1605508836830}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836916, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _popup = _interopRequireWildcard(require("../popup"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PRESET_ICONS = ['qq', 'weibo', 'wechat', 'link', 'qrcode', 'poster'];

function getIconURL(icon) {
  if (PRESET_ICONS.indexOf(icon) !== -1) {
    return "https://img.yzcdn.cn/vant/share-icon-".concat(icon, ".png");
  }

  return icon;
}

var _createNamespace = (0, _utils.createNamespace)('share-sheet'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _popup.popupSharedProps), {}, {
    title: String,
    cancelText: String,
    description: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    closeOnPopstate: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    }
  }),
  emits: ['cancel', 'select', 'update:show'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var toggle = function toggle(value) {
      emit('update:show', value);
    };

    var onCancel = function onCancel() {
      toggle(false);
      emit('cancel');
    };

    var onSelect = function onSelect(option, index) {
      emit('select', option, index);
    };

    var renderHeader = function renderHeader() {
      var title = slots.title ? slots.title() : props.title;
      var description = slots.description ? slots.description() : props.description;

      if (title || description) {
        return (0, _vue.createVNode)("div", {
          "class": bem('header')
        }, [title && (0, _vue.createVNode)("h2", {
          "class": bem('title')
        }, [title]), description && (0, _vue.createVNode)("span", {
          "class": bem('description')
        }, [description])]);
      }
    };

    var renderOption = function renderOption(option, index) {
      var name = option.name,
          icon = option.icon,
          className = option.className,
          description = option.description;
      return (0, _vue.createVNode)("div", {
        "role": "button",
        "tabindex": "0",
        "class": [bem('option'), className],
        "onClick": function onClick() {
          onSelect(option, index);
        }
      }, [(0, _vue.createVNode)("img", {
        "src": getIconURL(icon),
        "class": bem('icon')
      }, null), name && (0, _vue.createVNode)("span", {
        "class": bem('name')
      }, [name]), description && (0, _vue.createVNode)("span", {
        "class": bem('option-description')
      }, [description])]);
    };

    var renderOptions = function renderOptions(options, border) {
      return (0, _vue.createVNode)("div", {
        "class": bem('options', {
          border: border
        })
      }, [options.map(renderOption)]);
    };

    var renderRows = function renderRows() {
      var options = props.options;

      if (Array.isArray(options[0])) {
        return options.map(function (item, index) {
          return renderOptions(item, index !== 0);
        });
      }

      return renderOptions(options);
    };

    var renderCancelText = function renderCancelText() {
      var _props$cancelText;

      var text = (_props$cancelText = props.cancelText) !== null && _props$cancelText !== void 0 ? _props$cancelText : t('cancel');

      if (text) {
        return (0, _vue.createVNode)("button", {
          "type": "button",
          "class": bem('cancel'),
          "onClick": onCancel
        }, [text]);
      }
    };

    return function () {
      return (0, _vue.createVNode)(_popup.default, (0, _vue.mergeProps)({
        "round": true,
        "class": bem(),
        "position": "bottom"
      }, _objectSpread(_objectSpread({}, (0, _utils.pick)(props, ['show', 'overlay', 'duration', 'teleport', 'lazyRender', 'lockScroll', 'closeOnPopstate', 'closeOnClickOverlay', 'safeAreaInsetBottom'])), {}, {
        'onUpdate:show': toggle
      })), {
        default: function _default() {
          return [renderHeader(), renderRows(), renderCancelText()];
        }
      });
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../popup":1605508836817}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836917, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SIDEBAR_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('sidebar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var SIDEBAR_KEY = 'vanSidebar';
exports.SIDEBAR_KEY = SIDEBAR_KEY;

var _default = createComponent({
  props: {
    modelValue: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(SIDEBAR_KEY),
        linkChildren = _useChildren.linkChildren;

    var active = function active() {
      return +props.modelValue;
    };

    var setActive = function setActive(value) {
      if (value !== active()) {
        emit('change', value);
      }
    };

    (0, _vue.watch)(active, setActive);
    linkChildren({
      emit: emit,
      active: active,
      setActive: setActive
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem()
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836918, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _sidebar = require("../sidebar");

var _badge = _interopRequireDefault(require("../badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('sidebar-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    dot: Boolean,
    title: String,
    badge: [Number, String],
    disabled: Boolean
  }),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();

    var _useParent = (0, _use.useParent)(_sidebar.SIDEBAR_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var onClick = function onClick() {
      if (props.disabled) {
        return;
      }

      emit('click', index.value);
      parent.emit('update:modelValue', index.value);
      parent.setActive(index.value);
      route();
    };

    return function () {
      var dot = props.dot,
          badge = props.badge,
          title = props.title,
          disabled = props.disabled;
      var selected = index.value === parent.active();
      return (0, _vue.createVNode)("a", {
        "class": bem({
          select: selected,
          disabled: disabled
        }),
        "onClick": onClick
      }, [(0, _vue.createVNode)(_badge.default, {
        "dot": dot,
        "content": badge,
        "class": bem('text')
      }, {
        default: function _default() {
          return [slots.title ? slots.title() : title];
        }
      })]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-route":1605508836809,"../sidebar":1605508836917,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836919, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('skeleton'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

var _default = createComponent({
  props: {
    title: Boolean,
    round: Boolean,
    avatar: Boolean,
    avatarSize: [Number, String],
    titleWidth: [Number, String],
    row: {
      type: [Number, String],
      default: 0
    },
    loading: {
      type: Boolean,
      default: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    avatarShape: {
      type: String,
      default: 'round'
    },
    rowWidth: {
      type: [Number, String, Array],
      default: DEFAULT_ROW_WIDTH
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var renderAvatar = function renderAvatar() {
      if (props.avatar) {
        return (0, _vue.createVNode)("div", {
          "class": bem('avatar', props.avatarShape),
          "style": (0, _utils.getSizeStyle)(props.avatarSize)
        }, null);
      }
    };

    var renderTitle = function renderTitle() {
      if (props.title) {
        return (0, _vue.createVNode)("h3", {
          "class": bem('title'),
          "style": {
            width: (0, _utils.addUnit)(props.titleWidth)
          }
        }, null);
      }
    };

    var getRowWidth = function getRowWidth(index) {
      var rowWidth = props.rowWidth;

      if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    };

    var renderRows = function renderRows() {
      var Rows = [];

      for (var i = 0; i < props.row; i++) {
        Rows.push((0, _vue.createVNode)("div", {
          "class": bem('row'),
          "style": {
            width: (0, _utils.addUnit)(getRowWidth(i))
          }
        }, null));
      }

      return Rows;
    };

    return function () {
      if (!props.loading) {
        var _slots$default;

        return (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots);
      }

      return (0, _vue.createVNode)("div", {
        "class": bem({
          animate: props.animate,
          round: props.round
        })
      }, [renderAvatar(), (0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [renderTitle(), renderRows()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836920, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

var _useLinkField = require("../composition/use-link-field");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('slider'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    range: Boolean,
    disabled: Boolean,
    vertical: Boolean,
    barHeight: [Number, String],
    buttonSize: [Number, String],
    activeColor: String,
    inactiveColor: String,
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 100
    },
    step: {
      type: [Number, String],
      default: 1
    },
    modelValue: {
      type: [Number, Array],
      default: 0
    }
  },
  emits: ['change', 'drag-end', 'drag-start', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var buttonIndex;
    var startValue;
    var currentValue;
    var root = (0, _vue.ref)();
    var dragStatus = (0, _vue.ref)();
    var touch = (0, _useTouch.useTouch)();
    var scope = (0, _vue.computed)(function () {
      return Number(props.max) - Number(props.min);
    });
    var wrapperStyle = (0, _vue.computed)(function () {
      var crossAxis = props.vertical ? 'width' : 'height';
      return (0, _defineProperty2.default)({
        background: props.inactiveColor
      }, crossAxis, (0, _utils.addUnit)(props.barHeight));
    });

    var isRange = function isRange(val) {
      return !!props.range && Array.isArray(val);
    }; // 计算选中条的长度百分比


    var calcMainAxis = function calcMainAxis() {
      var modelValue = props.modelValue,
          min = props.min;

      if (isRange(modelValue)) {
        return "".concat((modelValue[1] - modelValue[0]) * 100 / scope.value, "%");
      }

      return "".concat((modelValue - Number(min)) * 100 / scope.value, "%");
    }; // 计算选中条的开始位置的偏移量


    var calcOffset = function calcOffset() {
      var modelValue = props.modelValue,
          min = props.min;

      if (isRange(modelValue)) {
        return "".concat((modelValue[0] - Number(min)) * 100 / scope.value, "%");
      }

      return "0%";
    };

    var barStyle = (0, _vue.computed)(function () {
      var _ref3;

      var mainAxis = props.vertical ? 'height' : 'width';
      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, mainAxis, calcMainAxis()), (0, _defineProperty2.default)(_ref3, "left", props.vertical ? undefined : calcOffset()), (0, _defineProperty2.default)(_ref3, "top", props.vertical ? calcOffset() : undefined), (0, _defineProperty2.default)(_ref3, "background", props.activeColor), (0, _defineProperty2.default)(_ref3, "transition", dragStatus.value ? 'none' : undefined), _ref3;
    });

    var format = function format(value) {
      var min = props.min,
          max = props.max,
          step = props.step;
      value = Math.max(+min, Math.min(value, +max));
      return Math.round(value / +step) * +step;
    };

    var isSameValue = function isSameValue(newValue, oldValue) {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    }; // 处理两个滑块重叠之后的情况


    var handleOverlap = function handleOverlap(value) {
      if (value[0] > value[1]) {
        return value.slice(0).reverse();
      }

      return value;
    };

    var updateValue = function updateValue(value, end) {
      if (isRange(value)) {
        value = handleOverlap(value).map(format);
      } else {
        value = format(value);
      }

      if (!isSameValue(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      if (end && !isSameValue(value, startValue)) {
        emit('change', value);
      }
    };

    var onClick = function onClick(event) {
      event.stopPropagation();

      if (props.disabled) {
        return;
      }

      var min = props.min,
          vertical = props.vertical,
          modelValue = props.modelValue;
      var rect = (0, _use.useRect)(root);
      var delta = vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = vertical ? rect.height : rect.width;
      var value = Number(min) + delta / total * scope.value;

      if (isRange(modelValue)) {
        var _modelValue = (0, _slicedToArray2.default)(modelValue, 2),
            left = _modelValue[0],
            right = _modelValue[1];

        var middle = (left + right) / 2;

        if (value <= middle) {
          updateValue([value, right], true);
        } else {
          updateValue([left, value], true);
        }
      } else {
        updateValue(value, true);
      }
    };

    var onTouchStart = function onTouchStart(event) {
      if (props.disabled) {
        return;
      }

      touch.start(event);
      currentValue = props.modelValue;

      if (isRange(currentValue)) {
        startValue = currentValue.map(format);
      } else {
        startValue = format(currentValue);
      }

      dragStatus.value = 'start';
    };

    var onTouchMove = function onTouchMove(event) {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'start') {
        emit('drag-start');
      }

      (0, _utils.preventDefault)(event, true);
      touch.move(event);
      dragStatus.value = 'draging';
      var rect = (0, _use.useRect)(root);
      var delta = props.vertical ? touch.deltaY.value : touch.deltaX.value;
      var total = props.vertical ? rect.height : rect.width;
      var diff = delta / total * scope.value;

      if (isRange(startValue)) {
        currentValue[buttonIndex] = startValue[buttonIndex] + diff;
      } else {
        currentValue = startValue + diff;
      }

      updateValue(currentValue);
    };

    var onTouchEnd = function onTouchEnd() {
      if (props.disabled) {
        return;
      }

      if (dragStatus.value === 'draging') {
        updateValue(currentValue, true);
        emit('drag-end');
      }

      dragStatus.value = '';
    };

    var renderButton = function renderButton(index) {
      var getClassName = function getClassName() {
        if (typeof index === 'number') {
          var position = ['left', 'right'];
          return "button-wrapper-".concat(position[index]);
        }

        return "button-wrapper";
      };

      var currentValue = typeof index === 'number' ? props.modelValue[index] : props.modelValue;
      return (0, _vue.createVNode)("div", {
        "role": "slider",
        "class": bem(getClassName()),
        "tabindex": props.disabled ? -1 : 0,
        "aria-valuemin": +props.min,
        "aria-valuenow": currentValue,
        "aria-valuemax": +props.max,
        "aria-orientation": props.vertical ? 'vertical' : 'horizontal',
        "onTouchstart": function onTouchstart(e) {
          if (typeof index === 'number') {
            // save index of current button
            buttonIndex = index;
          }

          onTouchStart(e);
        },
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd,
        "onClick": _utils.stopPropagation
      }, [slots.button ? slots.button() : (0, _vue.createVNode)("div", {
        "class": bem('button'),
        "style": (0, _utils.getSizeStyle)(props.buttonSize)
      }, null)]);
    }; // format initial value


    updateValue(props.modelValue);
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": wrapperStyle.value,
        "class": bem({
          vertical: props.vertical,
          disabled: props.disabled
        }),
        "onClick": onClick
      }, [(0, _vue.createVNode)("div", {
        "class": bem('bar'),
        "style": barStyle.value
      }, [props.range ? [renderButton(0), renderButton(1)] : renderButton()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../composition/use-touch":1605508836828,"../composition/use-link-field":1605508836842}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836921, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _steps = require("../steps");

var _use = require("@vant/use");

var _icon = _interopRequireDefault(require("../icon"));

var _createNamespace = (0, _utils.createNamespace)('step'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  setup: function setup(props, _ref) {
    var slots = _ref.slots;

    var _useParent = (0, _use.useParent)(_steps.STEPS_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var getStatus = function getStatus() {
      var active = +parent.props.active;

      if (index.value < active) {
        return 'finish';
      }

      if (index.value === active) {
        return 'process';
      }
    };

    var isActive = function isActive() {
      return getStatus() === 'process';
    };

    var lineStyle = (0, _vue.computed)(function () {
      var _parent$props = parent.props,
          activeColor = _parent$props.activeColor,
          inactiveColor = _parent$props.inactiveColor;

      if (getStatus() === 'finish') {
        return {
          background: activeColor
        };
      }

      return {
        background: inactiveColor
      };
    });
    var titleStyle = (0, _vue.computed)(function () {
      var _parent$props2 = parent.props,
          activeColor = _parent$props2.activeColor,
          inactiveColor = _parent$props2.inactiveColor;

      if (isActive()) {
        return {
          color: activeColor
        };
      }

      if (!getStatus()) {
        return {
          color: inactiveColor
        };
      }
    });

    var onClickStep = function onClickStep() {
      parent.emit('click-step', index.value);
    };

    var renderCircle = function renderCircle() {
      var _parent$props3 = parent.props,
          activeIcon = _parent$props3.activeIcon,
          activeColor = _parent$props3.activeColor,
          inactiveIcon = _parent$props3.inactiveIcon;

      if (isActive()) {
        if (slots['active-icon']) {
          return slots['active-icon']();
        }

        return (0, _vue.createVNode)(_icon.default, {
          "class": bem('icon', 'active'),
          "name": activeIcon,
          "color": activeColor
        }, null);
      }

      if (slots['inactive-icon']) {
        return slots['inactive-icon']();
      }

      if (inactiveIcon) {
        return (0, _vue.createVNode)(_icon.default, {
          "class": bem('icon'),
          "name": inactiveIcon
        }, null);
      }

      return (0, _vue.createVNode)("i", {
        "class": bem('circle'),
        "style": lineStyle.value
      }, null);
    };

    return function () {
      var _slots$default;

      var direction = parent.props.direction;
      var status = getStatus();
      return (0, _vue.createVNode)("div", {
        "class": [_constant.BORDER, bem([direction, (0, _defineProperty2.default)({}, status, status)])]
      }, [(0, _vue.createVNode)("div", {
        "class": bem('title', {
          active: isActive()
        }),
        "style": titleStyle.value,
        "onClick": onClickStep
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]), (0, _vue.createVNode)("div", {
        "class": bem('circle-container'),
        "onClick": onClickStep
      }, [renderCircle()]), (0, _vue.createVNode)("div", {
        "class": bem('line'),
        "style": lineStyle.value
      }, null)]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../steps":1605508836922,"../icon":1605508836812}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836922, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.STEPS_KEY = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _use = require("@vant/use");

var _createNamespace = (0, _utils.createNamespace)('steps'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var STEPS_KEY = 'vanSteps';
exports.STEPS_KEY = STEPS_KEY;

var _default = createComponent({
  props: {
    activeColor: String,
    inactiveIcon: String,
    inactiveColor: String,
    active: {
      type: [Number, String],
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  emits: ['click-step'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var _useChildren = (0, _use.useChildren)(STEPS_KEY),
        linkChildren = _useChildren.linkChildren;

    linkChildren({
      emit: emit,
      props: props
    });
    return function () {
      var _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem([props.direction])
      }, [(0, _vue.createVNode)("div", {
        "class": bem('items')
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836923, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _number = require("../utils/validate/number");

var _utils = require("../utils");

var _useLinkField = require("../composition/use-link-field");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('stepper'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var LONG_PRESS_INTERVAL = 200;
var LONG_PRESS_START_TIME = 600;

function equal(value1, value2) {
  return String(value1) === String(value2);
} // add num and avoid float number


function add(num1, num2) {
  var cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

var _default = createComponent({
  props: {
    theme: String,
    integer: Boolean,
    disabled: Boolean,
    allowEmpty: Boolean,
    modelValue: [Number, String],
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    placeholder: String,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    },
    longPress: {
      type: Boolean,
      default: true
    }
  },
  emits: ['plus', 'blur', 'minus', 'focus', 'change', 'overlimit', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;

    var format = function format(value) {
      var min = props.min,
          max = props.max,
          allowEmpty = props.allowEmpty,
          decimalLength = props.decimalLength;

      if (allowEmpty && value === '') {
        return value;
      }

      value = (0, _utils.formatNumber)(String(value), !props.integer);
      value = value === '' ? 0 : +value;
      value = (0, _number.isNaN)(value) ? +min : value;
      value = Math.max(Math.min(+max, value), +min); // format decimal

      if ((0, _utils.isDef)(decimalLength)) {
        value = value.toFixed(+decimalLength);
      }

      return value;
    };

    var getInitialValue = function getInitialValue() {
      var _props$modelValue;

      var defaultValue = (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : props.defaultValue;
      var value = format(defaultValue);

      if (!equal(value, props.modelValue)) {
        emit('update:modelValue', value);
      }

      return value;
    };

    var actionType;
    var inputRef = (0, _vue.ref)();
    var current = (0, _vue.ref)(getInitialValue());
    var minusDisabled = (0, _vue.computed)(function () {
      return props.disabled || props.disableMinus || current.value <= +props.min;
    });
    var plusDisabled = (0, _vue.computed)(function () {
      return props.disabled || props.disablePlus || current.value >= +props.max;
    });
    var inputStyle = (0, _vue.computed)(function () {
      return {
        width: (0, _utils.addUnit)(props.inputWidth),
        height: (0, _utils.addUnit)(props.buttonSize)
      };
    });
    var buttonStyle = (0, _vue.computed)(function () {
      return (0, _utils.getSizeStyle)(props.buttonSize);
    });

    var check = function check() {
      var value = format(current.value);

      if (!equal(value, current.value)) {
        current.value = value;
      }
    };

    var emitChange = function emitChange(value) {
      if (props.asyncChange) {
        emit('update:modelValue', value);
        emit('change', value, {
          name: props.name
        });
      } else {
        current.value = value;
      }
    };

    var onChange = function onChange() {
      if (props["".concat(actionType, "Disabled")]) {
        emit('overlimit', actionType);
        return;
      }

      var diff = actionType === 'minus' ? -props.step : +props.step;
      var value = format(add(+current.value, diff));
      emitChange(value);
      emit(actionType);
    };

    var onInput = function onInput(event) {
      var input = event.target;
      var value = input.value;
      var decimalLength = props.decimalLength;
      var formatted = (0, _utils.formatNumber)(String(value), !props.integer); // limit max decimal length

      if ((0, _utils.isDef)(decimalLength) && formatted.indexOf('.') !== -1) {
        var pair = formatted.split('.');
        formatted = "".concat(pair[0], ".").concat(pair[1].slice(0, +decimalLength));
      }

      if (!equal(value, formatted)) {
        input.value = formatted;
      }

      emitChange(formatted);
    };

    var onFocus = function onFocus(event) {
      // readonly not work in lagacy mobile safari
      if (props.disableInput && inputRef.value) {
        inputRef.value.blur();
      } else {
        emit('focus', event);
      }
    };

    var onBlur = function onBlur(event) {
      var input = event.target;
      var value = format(input.value);
      input.value = String(value);
      current.value = value;
      emit('blur', event);
      (0, _utils.resetScroll)();
    };

    var isLongPress;
    var longPressTimer;

    var longPressStep = function longPressStep() {
      longPressTimer = setTimeout(function () {
        onChange();
        longPressStep();
      }, LONG_PRESS_INTERVAL);
    };

    var onTouchStart = function onTouchStart() {
      if (props.longPress) {
        isLongPress = false;
        clearTimeout(longPressTimer);
        longPressTimer = setTimeout(function () {
          isLongPress = true;
          onChange();
          longPressStep();
        }, LONG_PRESS_START_TIME);
      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (props.longPress) {
        clearTimeout(longPressTimer);

        if (isLongPress) {
          (0, _utils.preventDefault)(event);
        }
      }
    };

    var createListeners = function createListeners(type) {
      return {
        onClick: function onClick(event) {
          // disable double tap scrolling on mobile safari
          event.preventDefault();
          actionType = type;
          onChange();
        },
        onTouchstart: function onTouchstart() {
          actionType = type;
          onTouchStart();
        },
        onTouchend: onTouchEnd,
        onTouchcancel: onTouchEnd
      };
    };

    (0, _vue.watch)([function () {
      return props.max;
    }, function () {
      return props.min;
    }, function () {
      return props.integer;
    }, function () {
      return props.decimalLength;
    }], check);
    (0, _vue.watch)(function () {
      return props.modelValue;
    }, function (value) {
      if (!equal(value, current.value)) {
        current.value = value;
      }
    });
    (0, _vue.watch)(current, function (value) {
      emit('update:modelValue', value);
      emit('change', value, {
        name: props.name
      });
    });
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem([props.theme])
      }, [(0, _vue.withDirectives)((0, _vue.createVNode)("button", (0, _vue.mergeProps)({
        "type": "button",
        "style": buttonStyle.value,
        "class": bem('minus', {
          disabled: minusDisabled.value
        })
      }, createListeners('minus')), null), [[_vue.vShow, props.showMinus]]), (0, _vue.createVNode)("input", {
        "ref": inputRef,
        "type": props.integer ? 'tel' : 'text',
        "role": "spinbutton",
        "class": bem('input'),
        "value": current.value,
        "style": inputStyle.value,
        "disabled": props.disabled,
        "readonly": props.disableInput,
        "inputmode": props.integer ? 'numeric' : 'decimal',
        "placeholder": props.placeholder,
        "aria-valuemax": +props.max,
        "aria-valuemin": +props.min,
        "aria-valuenow": +current.value,
        "onInput": onInput,
        "onFocus": onFocus,
        "onBlur": onBlur
      }, null), (0, _vue.withDirectives)((0, _vue.createVNode)("button", (0, _vue.mergeProps)({
        "type": "button",
        "style": buttonStyle.value,
        "class": bem('plus', {
          disabled: plusDisabled.value
        })
      }, createListeners('plus')), null), [[_vue.vShow, props.showPlus]])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils/validate/number":1605508836801,"../utils":1605508836790,"../composition/use-link-field":1605508836842}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836924, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _button = _interopRequireDefault(require("../button"));

var _createNamespace = (0, _utils.createNamespace)('submit-bar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 3),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1],
    t = _createNamespace2[2];

var _default = createComponent({
  props: {
    tip: String,
    label: String,
    price: Number,
    tipIcon: String,
    loading: Boolean,
    disabled: Boolean,
    textAlign: String,
    buttonText: String,
    buttonColor: String,
    suffixLabel: String,
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
    decimalLength: {
      type: [Number, String],
      default: 2
    },
    currency: {
      type: String,
      default: '¥'
    },
    buttonType: {
      type: String,
      default: 'danger'
    }
  },
  emits: ['submit'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var renderText = function renderText() {
      var price = props.price,
          label = props.label,
          currency = props.currency,
          textAlign = props.textAlign,
          suffixLabel = props.suffixLabel,
          decimalLength = props.decimalLength;

      if (typeof price === 'number') {
        var pricePair = (price / 100).toFixed(decimalLength).split('.');
        var decimal = decimalLength ? ".".concat(pricePair[1]) : '';
        return (0, _vue.createVNode)("div", {
          "class": bem('text'),
          "style": {
            textAlign: textAlign
          }
        }, [(0, _vue.createVNode)("span", null, [label || t('label')]), (0, _vue.createVNode)("span", {
          "class": bem('price')
        }, [currency, (0, _vue.createVNode)("span", {
          "class": bem('price-integer')
        }, [pricePair[0]]), decimal]), suffixLabel && (0, _vue.createVNode)("span", {
          "class": bem('suffix-label')
        }, [suffixLabel])]);
      }
    };

    var renderTip = function renderTip() {
      var tip = props.tip,
          tipIcon = props.tipIcon;

      if (slots.tip || tip) {
        var _slots$tip;

        return (0, _vue.createVNode)("div", {
          "class": bem('tip')
        }, [tipIcon && (0, _vue.createVNode)(_icon.default, {
          "class": bem('tip-icon'),
          "name": tipIcon
        }, null), tip && (0, _vue.createVNode)("span", {
          "class": bem('tip-text')
        }, [tip]), (_slots$tip = slots.tip) === null || _slots$tip === void 0 ? void 0 : _slots$tip.call(slots)]);
      }
    };

    var onClickButton = function onClickButton() {
      emit('submit');
    };

    var renderButton = function renderButton() {
      if (slots.button) {
        return slots.button();
      }

      return (0, _vue.createVNode)(_button.default, {
        "round": true,
        "type": props.buttonType,
        "text": props.buttonText,
        "class": bem('button', props.buttonType),
        "color": props.buttonColor,
        "loading": props.loading,
        "disabled": props.disabled,
        "onClick": onClickButton
      }, null);
    };

    return function () {
      var _slots$top, _slots$default;

      return (0, _vue.createVNode)("div", {
        "class": bem({
          unfit: !props.safeAreaInsetBottom
        })
      }, [(_slots$top = slots.top) === null || _slots$top === void 0 ? void 0 : _slots$top.call(slots), renderTip(), (0, _vue.createVNode)("div", {
        "class": bem('bar')
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), renderText(), renderButton()])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812,"../button":1605508836810}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836925, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _useTouch = require("../composition/use-touch");

var _useExpose = require("../composition/use-expose");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('swipe-cell'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default = createComponent({
  props: {
    disabled: Boolean,
    leftWidth: [Number, String],
    rightWidth: [Number, String],
    beforeClose: Function,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  emits: ['open', 'close', 'click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var opened;
    var lockClick;
    var startOffset;
    var root = (0, _vue.ref)();
    var leftRef = (0, _vue.ref)();
    var rightRef = (0, _vue.ref)();
    var state = (0, _vue.reactive)({
      offset: 0,
      dragging: false
    });
    var touch = (0, _useTouch.useTouch)();

    var getWidthByRef = function getWidthByRef(ref) {
      return ref.value ? (0, _use.useRect)(ref).width : 0;
    };

    var leftWidth = (0, _vue.computed)(function () {
      return +props.leftWidth || getWidthByRef(leftRef);
    });
    var rightWidth = (0, _vue.computed)(function () {
      return +props.rightWidth || getWidthByRef(rightRef);
    });

    var open = function open(position) {
      opened = true;
      state.offset = position === 'left' ? leftWidth.value : -rightWidth.value;
      emit('open', {
        name: props.name,
        position: position
      });
    };

    var close = function close(position) {
      state.offset = 0;

      if (opened) {
        opened = false;
        emit('close', {
          name: props.name,
          position: position
        });
      }
    };

    var toggle = function toggle(position) {
      var offset = Math.abs(state.offset);
      var THRESHOLD = 0.15;
      var threshold = opened ? 1 - THRESHOLD : THRESHOLD;

      if (position === 'left' || position === 'right') {
        var width = position === 'left' ? leftWidth.value : rightWidth.value;

        if (width && offset > width * threshold) {
          open(position);
          return;
        }
      }

      close();
    };

    var onTouchStart = function onTouchStart(event) {
      if (!props.disabled) {
        startOffset = state.offset;
        touch.start(event);
      }
    };

    var onTouchMove = function onTouchMove(event) {
      if (props.disabled) {
        return;
      }

      var deltaX = touch.deltaX;
      touch.move(event);

      if (touch.isHorizontal()) {
        lockClick = true;
        state.dragging = true;
        var isEdge = !opened || deltaX.value * startOffset < 0;

        if (isEdge) {
          (0, _utils.preventDefault)(event, props.stopPropagation);
        }

        state.offset = (0, _utils.range)(deltaX.value + startOffset, -rightWidth.value, leftWidth.value);
      }
    };

    var onTouchEnd = function onTouchEnd() {
      if (state.dragging) {
        state.dragging = false;
        toggle(state.offset > 0 ? 'left' : 'right'); // compatible with desktop scenario

        setTimeout(function () {
          lockClick = false;
        }, 0);
      }
    };

    var onClick = function onClick() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'outside';
      emit('click', position);

      if (opened && !lockClick) {
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeClose,
          args: [{
            name: props.name,
            position: position
          }],
          done: function done() {
            close(position);
          }
        });
      }
    };

    var getClickHandler = function getClickHandler(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        onClick(position);
      };
    };

    var renderSideContent = function renderSideContent(position, ref) {
      if (slots[position]) {
        return (0, _vue.createVNode)("div", {
          "ref": ref,
          "class": bem(position),
          "onClick": getClickHandler(position, true)
        }, [slots[position]()]);
      }
    };

    (0, _useExpose.useExpose)({
      open: open,
      close: close
    });
    (0, _use.useClickAway)(root, onClick, {
      eventName: 'touchstart'
    });
    return function () {
      var _slots$default;

      var wrapperStyle = {
        transform: "translate3d(".concat(state.offset, "px, 0, 0)"),
        transitionDuration: state.dragging ? '0s' : '.6s'
      };
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "class": bem(),
        "onClick": getClickHandler('cell'),
        "onTouchstart": onTouchStart,
        "onTouchmove": onTouchMove,
        "onTouchend": onTouchEnd,
        "onTouchcancel": onTouchEnd
      }, [(0, _vue.createVNode)("div", {
        "class": bem('wrapper'),
        "style": wrapperStyle
      }, [renderSideContent('left', leftRef), (_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots), renderSideContent('right', rightRef)])]);
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/interceptor":1605508836839,"../composition/use-touch":1605508836828,"../composition/use-expose":1605508836808}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836926, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TABBAR_KEY = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _interceptor = require("../utils/interceptor");

var _use = require("@vant/use");

var _usePlaceholder = require("../composition/use-placeholder");

// Utils
// Composition
var _createNamespace = (0, _utils.createNamespace)('tabbar'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var TABBAR_KEY = 'vanTabbar';
exports.TABBAR_KEY = TABBAR_KEY;

var _default = createComponent({
  props: {
    route: Boolean,
    zIndex: [Number, String],
    placeholder: Boolean,
    activeColor: String,
    beforeChange: Function,
    inactiveColor: String,
    modelValue: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: null
    }
  },
  emits: ['change', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var root = (0, _vue.ref)();

    var _useChildren = (0, _use.useChildren)(TABBAR_KEY),
        linkChildren = _useChildren.linkChildren;

    var renderPlaceholder = (0, _usePlaceholder.usePlaceholder)(root, bem);

    var isUnfit = function isUnfit() {
      if ((0, _utils.isDef)(props.safeAreaInsetBottom)) {
        return !props.safeAreaInsetBottom;
      } // enable safe-area-inset-bottom by default when fixed


      return !props.fixed;
    };

    var renderTabbar = function renderTabbar() {
      var _slots$default;

      var fixed = props.fixed,
          zIndex = props.zIndex,
          border = props.border;
      var unfit = isUnfit();
      return (0, _vue.createVNode)("div", {
        "ref": root,
        "style": {
          zIndex: zIndex
        },
        "class": [bem({
          unfit: unfit,
          fixed: fixed
        }), (0, _defineProperty2.default)({}, _constant.BORDER_TOP_BOTTOM, border)]
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots)]);
    };

    var setActive = function setActive(active) {
      if (active !== props.modelValue) {
        (0, _interceptor.callInterceptor)({
          interceptor: props.beforeChange,
          args: [active],
          done: function done() {
            emit('update:modelValue', active);
            emit('change', active);
          }
        });
      }
    };

    linkChildren({
      props: props,
      setActive: setActive
    });
    return function () {
      if (props.fixed && props.placeholder) {
        return renderPlaceholder(renderTabbar);
      }

      return renderTabbar();
    };
  }
});

exports.default = _default;
}, function(modId) { var map = {"../utils":1605508836790,"../utils/constant":1605508836811,"../utils/interceptor":1605508836839,"../composition/use-placeholder":1605508836904}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836927, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _tabbar = require("../tabbar");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useRoute = require("../composition/use-route");

var _icon = _interopRequireDefault(require("../icon"));

var _badge = _interopRequireDefault(require("../badge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _createNamespace = (0, _utils.createNamespace)('tabbar-item'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: _objectSpread(_objectSpread({}, _useRoute.routeProps), {}, {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    badge: [Number, String],
    iconPrefix: String
  }),
  emits: ['click'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var route = (0, _useRoute.useRoute)();
    var vm = (0, _vue.getCurrentInstance)().proxy;

    var _useParent = (0, _use.useParent)(_tabbar.TABBAR_KEY),
        parent = _useParent.parent,
        index = _useParent.index;

    var active = (0, _vue.computed)(function () {
      var _parent$props = parent.props,
          route = _parent$props.route,
          modelValue = _parent$props.modelValue;

      if (route && '$route' in vm) {
        var $route = vm.$route;
        var to = props.to;
        var config = (0, _utils.isObject)(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = (0, _utils.isDef)(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }

      return (props.name || index.value) === modelValue;
    });

    var onClick = function onClick(event) {
      parent.setActive(props.name || index.value);
      emit('click', event);
      route();
    };

    var renderIcon = function renderIcon() {
      if (slots.icon) {
        return slots.icon({
          active: active.value
        });
      }

      if (props.icon) {
        return (0, _vue.createVNode)(_icon.default, {
          "name": props.icon,
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    return function () {
      var _slots$default;

      var dot = props.dot,
          badge = props.badge;
      var _parent$props2 = parent.props,
          activeColor = _parent$props2.activeColor,
          inactiveColor = _parent$props2.inactiveColor;
      var color = active.value ? activeColor : inactiveColor;
      return (0, _vue.createVNode)("div", {
        "class": bem({
          active: active.value
        }),
        "style": {
          color: color
        },
        "onClick": onClick
      }, [(0, _vue.createVNode)(_badge.default, {
        "dot": dot,
        "content": badge,
        "class": bem('icon')
      }, {
        default: function _default() {
          return [renderIcon()];
        }
      }), (0, _vue.createVNode)("div", {
        "class": bem('text')
      }, [(_slots$default = slots.default) === null || _slots$default === void 0 ? void 0 : _slots$default.call(slots, {
        active: active.value
      })])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../tabbar":1605508836926,"../utils":1605508836790,"../composition/use-route":1605508836809,"../icon":1605508836812,"../badge":1605508836813}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836928, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _icon = _interopRequireDefault(require("../icon"));

var _sidebar = _interopRequireDefault(require("../sidebar"));

var _sidebarItem = _interopRequireDefault(require("../sidebar-item"));

// Utils
// Components
var _createNamespace = (0, _utils.createNamespace)('tree-select'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

var _default2 = createComponent({
  props: {
    max: {
      type: [Number, String],
      default: Infinity
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    height: {
      type: [Number, String],
      default: 300
    },
    activeId: {
      type: [Number, String, Array],
      default: 0
    },
    selectedIcon: {
      type: String,
      default: 'success'
    },
    mainActiveIndex: {
      type: [Number, String],
      default: 0
    }
  },
  emits: ['click-nav', 'click-item', 'update:activeId', 'update:mainActiveIndex'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var isMultiple = function isMultiple() {
      return Array.isArray(props.activeId);
    };

    var isActiveItem = function isActiveItem(id) {
      return isMultiple() ? props.activeId.indexOf(id) !== -1 : props.activeId === id;
    };

    var renderSubItem = function renderSubItem(item) {
      var onClick = function onClick() {
        if (item.disabled) {
          return;
        }

        var activeId;

        if (isMultiple()) {
          activeId = props.activeId.slice();
          var index = activeId.indexOf(item.id);

          if (index !== -1) {
            activeId.splice(index, 1);
          } else if (activeId.length < props.max) {
            activeId.push(item.id);
          }
        } else {
          activeId = item.id;
        }

        emit('update:activeId', activeId);
        emit('click-item', item);
      };

      return (0, _vue.createVNode)("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "onClick": onClick
      }, [item.text, isActiveItem(item.id) && (0, _vue.createVNode)(_icon.default, {
        "name": props.selectedIcon,
        "class": bem('selected')
      }, null)]);
    };

    var renderSidebar = function renderSidebar() {
      var Items = props.items.map(function (item) {
        return (0, _vue.createVNode)(_sidebarItem.default, {
          "dot": item.dot,
          "title": item.text,
          "badge": item.badge,
          "disabled": item.disabled,
          "class": [bem('nav-item'), item.className]
        }, null);
      });
      return (0, _vue.createVNode)(_sidebar.default, {
        "class": bem('nav'),
        "modelValue": props.mainActiveIndex,
        "onChange": function onChange(index) {
          emit('update:mainActiveIndex', index);
          emit('click-nav', index);
        }
      }, {
        default: function _default() {
          return [Items];
        }
      });
    };

    var renderContent = function renderContent() {
      if (slots.content) {
        return slots.content();
      }

      var selected = props.items[+props.mainActiveIndex] || {};

      if (selected.children) {
        return selected.children.map(renderSubItem);
      }
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": bem(),
        "style": {
          height: (0, _utils.addUnit)(props.height)
        }
      }, [renderSidebar(), (0, _vue.createVNode)("div", {
        "class": bem('content')
      }, [renderContent()])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"../utils":1605508836790,"../icon":1605508836812,"../sidebar":1605508836917,"../sidebar-item":1605508836918}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836929, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _shared = require("./shared");

var _utils = require("../utils");

var _utils2 = require("./utils");

var _useExpose = require("../composition/use-expose");

var _useLinkField = require("../composition/use-link-field");

var _icon = _interopRequireDefault(require("../icon"));

var _PreviewItem = _interopRequireDefault(require("./PreviewItem"));

var _imagePreview = _interopRequireDefault(require("../image-preview"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default2 = (0, _shared.createComponent)({
  props: {
    capture: String,
    multiple: Boolean,
    disabled: Boolean,
    lazyLoad: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    previewOptions: Object,
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    deletable: {
      type: Boolean,
      default: true
    },
    showUpload: {
      type: Boolean,
      default: true
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    },
    uploadIcon: {
      type: String,
      default: 'photograph'
    }
  },
  emits: ['delete', 'oversize', 'close-preview', 'click-preview', 'update:modelValue'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;
    var inputRef = (0, _vue.ref)();

    var getDetail = function getDetail() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props.modelValue.length;
      return {
        name: props.name,
        index: index
      };
    };

    var resetInput = function resetInput() {
      if (inputRef.value) {
        inputRef.value.value = '';
      }
    };

    var onAfterRead = function onAfterRead(items) {
      resetInput();

      if ((0, _utils2.isOversize)(items, props.maxSize)) {
        if (Array.isArray(items)) {
          var result = (0, _utils2.filterFiles)(items, props.maxSize);
          items = result.valid;
          emit('oversize', result.invalid, getDetail());

          if (!items.length) {
            return;
          }
        } else {
          emit('oversize', items, getDetail());
          return;
        }
      }

      emit('update:modelValue', [].concat((0, _toConsumableArray2.default)(props.modelValue), (0, _toConsumableArray2.default)((0, _utils2.toArray)(items))));

      if (props.afterRead) {
        props.afterRead(items, getDetail());
      }
    };

    var readFile = function readFile(files) {
      var maxCount = props.maxCount,
          modelValue = props.modelValue,
          resultType = props.resultType;

      if (Array.isArray(files)) {
        var remainCount = maxCount - modelValue.length;

        if (files.length > remainCount) {
          files = files.slice(0, remainCount);
        }

        Promise.all(files.map(function (file) {
          return (0, _utils2.readFileContent)(file, resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            var result = {
              file: file,
              status: '',
              message: ''
            };

            if (contents[index]) {
              result.content = contents[index];
            }

            return result;
          });
          onAfterRead(fileList);
        });
      } else {
        (0, _utils2.readFileContent)(files, resultType).then(function (content) {
          var result = {
            file: files,
            status: '',
            message: ''
          };

          if (content) {
            result.content = content;
          }

          onAfterRead(result);
        });
      }
    };

    var onChange = function onChange(event) {
      var files = event.target.files;

      if (props.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (props.beforeRead) {
        var response = props.beforeRead(files, getDetail());

        if (!response) {
          resetInput();
          return;
        }

        if ((0, _utils.isPromise)(response)) {
          response.then(function (data) {
            if (data) {
              readFile(data);
            } else {
              readFile(files);
            }
          }).catch(resetInput);
          return;
        }
      }

      readFile(files);
    };

    var imagePreview;

    var onClosePreview = function onClosePreview() {
      emit('close-preview');
    };

    var previewImage = function previewImage(item) {
      if (props.previewFullImage) {
        var imageFiles = props.modelValue.filter(_utils2.isImageFile);
        var images = imageFiles.map(function (item) {
          return item.content || item.url;
        });
        imagePreview = (0, _imagePreview.default)(_objectSpread({
          images: images,
          startPosition: imageFiles.indexOf(item),
          onClose: onClosePreview
        }, props.previewOptions));
      }
    };

    var closeImagePreview = function closeImagePreview() {
      if (imagePreview) {
        imagePreview.close();
      }
    };

    var deleteFile = function deleteFile(item, index) {
      var fileList = props.modelValue.slice(0);
      fileList.splice(index, 1);
      emit('update:modelValue', fileList);
      emit('delete', item, getDetail(index));
    };

    var renderPreviewItem = function renderPreviewItem(item, index) {
      return (0, _vue.createVNode)(_PreviewItem.default, (0, _vue.mergeProps)({
        "item": item,
        "index": index,
        "onClick": function onClick() {
          emit('click-preview', item, getDetail(index));
        },
        "onDelete": function onDelete() {
          deleteFile(item, index);
        },
        "onPreview": function onPreview() {
          previewImage(item);
        }
      }, (0, _utils.pick)(props, ['name', 'lazyLoad', 'imageFit', 'deletable', 'previewSize', 'beforeDelete'])), {
        'preview-cover': slots['preview-cover']
      });
    };

    var renderPreviewList = function renderPreviewList() {
      if (props.previewImage) {
        return props.modelValue.map(renderPreviewItem);
      }
    };

    var renderUpload = function renderUpload() {
      if (props.modelValue.length >= props.maxCount || !props.showUpload) {
        return;
      }

      var Input = (0, _vue.createVNode)("input", {
        "ref": inputRef,
        "type": "file",
        "class": (0, _shared.bem)('input'),
        "accept": props.accept,
        "capture": props.capture,
        "multiple": props.multiple,
        "disabled": props.disabled,
        "onChange": onChange
      }, null);

      if (slots.default) {
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('input-wrapper')
        }, [slots.default(), Input]);
      }

      return (0, _vue.createVNode)("div", {
        "class": (0, _shared.bem)('upload'),
        "style": (0, _utils.getSizeStyle)(props.previewSize)
      }, [(0, _vue.createVNode)(_icon.default, {
        "name": props.uploadIcon,
        "class": (0, _shared.bem)('upload-icon')
      }, null), props.uploadText && (0, _vue.createVNode)("span", {
        "class": (0, _shared.bem)('upload-text')
      }, [props.uploadText]), Input]);
    };

    var chooseFile = function chooseFile() {
      if (inputRef.value && !props.disabled) {
        inputRef.value.click();
      }
    };

    (0, _useExpose.useExpose)({
      chooseFile: chooseFile,
      closeImagePreview: closeImagePreview
    });
    (0, _useLinkField.useLinkField)(function () {
      return props.modelValue;
    });
    return function () {
      return (0, _vue.createVNode)("div", {
        "class": (0, _shared.bem)()
      }, [(0, _vue.createVNode)("div", {
        "class": (0, _shared.bem)('wrapper', {
          disabled: props.disabled
        })
      }, [renderPreviewList(), renderUpload()])]);
    };
  }
});

exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836930,"../utils":1605508836790,"./utils":1605508836931,"../composition/use-expose":1605508836808,"../composition/use-link-field":1605508836842,"../icon":1605508836812,"./PreviewItem":1605508836932,"../image-preview":1605508836895}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836930, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = exports.bem = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

var _createNamespace = (0, _utils.createNamespace)('uploader'),
    _createNamespace2 = (0, _slicedToArray2.default)(_createNamespace, 2),
    createComponent = _createNamespace2[0],
    bem = _createNamespace2[1];

exports.bem = bem;
exports.createComponent = createComponent;
}, function(modId) { var map = {"../utils":1605508836790}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836931, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = toArray;
exports.readFileContent = readFileContent;
exports.isOversize = isOversize;
exports.filterFiles = filterFiles;
exports.isImageUrl = isImageUrl;
exports.isImageFile = isImageFile;

function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}

function readFileContent(file, resultType) {
  return new Promise(function (resolve) {
    if (resultType === 'file') {
      resolve();
      return;
    }

    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}

function isOversize(items, maxSize) {
  return toArray(items).some(function (item) {
    return item.file && item.file.size > maxSize;
  });
}

function filterFiles(items, maxSize) {
  var valid = [];
  var invalid = [];
  items.forEach(function (item) {
    if (item.file && item.file.size > maxSize) {
      invalid.push(item);
    } else {
      valid.push(item);
    }
  });
  return {
    valid: valid,
    invalid: invalid
  };
}

var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;

function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}

function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1605508836932, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = require("vue");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _shared = require("./shared");

var _utils = require("./utils");

var _utils2 = require("../utils");

var _interceptor = require("../utils/interceptor");

var _icon = _interopRequireDefault(require("../icon"));

var _image = _interopRequireDefault(require("../image"));

var _loading = _interopRequireDefault(require("../loading"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default2 = {
  props: {
    name: String,
    item: Object,
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    previewSize: [Number, String],
    beforeDelete: Function
  },
  emits: ['delete', 'preview'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
        slots = _ref.slots;

    var renderMask = function renderMask() {
      var _props$item = props.item,
          status = _props$item.status,
          message = _props$item.message;

      if (status === 'uploading' || status === 'failed') {
        var MaskIcon = status === 'failed' ? (0, _vue.createVNode)(_icon.default, {
          "name": "close",
          "class": (0, _shared.bem)('mask-icon')
        }, null) : (0, _vue.createVNode)(_loading.default, {
          "class": (0, _shared.bem)('loading')
        }, null);
        var showMessage = (0, _utils2.isDef)(message) && message !== '';
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('mask')
        }, [MaskIcon, showMessage && (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('mask-message')
        }, [message])]);
      }
    };

    var onDelete = function onDelete(event) {
      var name = props.name,
          item = props.item,
          index = props.index,
          beforeDelete = props.beforeDelete;
      event.stopPropagation();
      (0, _interceptor.callInterceptor)({
        interceptor: beforeDelete,
        args: [item, {
          name: name,
          index: index
        }],
        done: function done() {
          emit('delete');
        }
      });
    };

    var onPreview = function onPreview() {
      emit('preview');
    };

    var renderDeleteIcon = function renderDeleteIcon() {
      if (props.deletable && props.item.status !== 'uploading') {
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('preview-delete'),
          "onClick": onDelete
        }, [(0, _vue.createVNode)(_icon.default, {
          "name": "cross",
          "class": (0, _shared.bem)('preview-delete-icon')
        }, null)]);
      }
    };

    var renderCover = function renderCover() {
      if (slots['preview-cover']) {
        var index = props.index,
            item = props.item;
        return (0, _vue.createVNode)("div", {
          "class": (0, _shared.bem)('preview-cover')
        }, [slots['preview-cover'](_objectSpread({
          index: index
        }, item))]);
      }
    };

    var renderPreview = function renderPreview() {
      var item = props.item;

      if ((0, _utils.isImageFile)(item)) {
        return (0, _vue.createVNode)(_image.default, {
          "fit": props.imageFit,
          "src": item.content || item.url,
          "class": (0, _shared.bem)('preview-image'),
          "width": props.previewSize,
          "height": props.previewSize,
          "lazyLoad": props.lazyLoad,
          "onClick": onPreview
        }, {
          default: function _default() {
            return [renderCover()];
          }
        });
      }

      return (0, _vue.createVNode)("div", {
        "class": (0, _shared.bem)('file'),
        "style": (0, _utils2.getSizeStyle)(props.previewSize)
      }, [(0, _vue.createVNode)(_icon.default, {
        "class": (0, _shared.bem)('file-icon'),
        "name": "description"
      }, null), (0, _vue.createVNode)("div", {
        "class": [(0, _shared.bem)('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url]), renderCover()]);
    };

    return function () {
      return (0, _vue.createVNode)("div", {
        "class": (0, _shared.bem)('preview')
      }, [renderPreview(), renderMask(), renderDeleteIcon()]);
    };
  }
};
exports.default = _default2;
}, function(modId) { var map = {"./shared":1605508836930,"./utils":1605508836931,"../utils":1605508836790,"../utils/interceptor":1605508836839,"../icon":1605508836812,"../image":1605508836859,"../loading":1605508836814}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1605508836788);
})()
//# sourceMappingURL=index.js.map