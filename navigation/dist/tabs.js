"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var react_native_svg_1 = require("react-native-svg");
var screens_1 = require("../screens");
var constans_1 = require("../constans");
var react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var TabBarCustomButton = function (_a) {
    var accessibilityState = _a.accessibilityState, children = _a.children, onPress = _a.onPress;
    var isSelected = accessibilityState.selected;
    if (isSelected) {
        return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, alignItems: 'center' } },
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: 'row', position: 'absolute', top: 0 } },
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: constans_1.COLORS.white } }),
                react_1["default"].createElement(react_native_svg_1["default"], { width: 75, height: 61, viewBox: "0 0 75 61" },
                    react_1["default"].createElement(react_native_svg_1.Path, { d: "M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z", fill: constans_1.COLORS.white })),
                react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: constans_1.COLORS.white } })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                    top: -22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: constans_1.COLORS.white
                }, onPress: onPress }, children)));
    }
    else {
        return (react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                flex: 1,
                height: 60,
                backgroundColor: constans_1.COLORS.white
            }, activeOpacity: 1, onPress: onPress }, children));
    }
};
var CustomTabBar = function (props) {
    if (react_native_iphone_x_helper_1.isIphoneX()) {
        return (react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.View, { style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 30,
                    backgroundColor: constans_1.COLORS.white
                } }),
            react_1["default"].createElement(bottom_tabs_1.BottomTabBar, __assign({}, props.props))));
    }
    else {
        return (react_1["default"].createElement(react_native_1.View, { style: { marginBottom: 12 } },
            react_1["default"].createElement(bottom_tabs_1.BottomTabBar, __assign({}, props.props))));
    }
};
var Tabs = function () {
    return (react_1["default"].createElement(Tab.Navigator, { tabBarOptions: {
            showLabel: false,
            style: {
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                borderTopWidth: 0,
                backgroundColor: 'transparent',
                elevation: 0
            }
        }, tabBar: function (props) { return react_1["default"].createElement(CustomTabBar, { props: props }); } },
        react_1["default"].createElement(Tab.Screen, { name: "Home", component: screens_1.Home, options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.Image, { source: constans_1.icons.cutlery, resizeMode: "contain", style: {
                            width: 25,
                            height: 25,
                            tintColor: focused ? constans_1.COLORS.primary : constans_1.COLORS.secondary
                        } }));
                },
                tabBarButton: function (props) { return react_1["default"].createElement(TabBarCustomButton, __assign({}, props)); }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Search", component: screens_1.Home, options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.Image, { source: constans_1.icons.search, resizeMode: "contain", style: {
                            width: 25,
                            height: 25,
                            tintColor: focused ? constans_1.COLORS.primary : constans_1.COLORS.secondary
                        } }));
                },
                tabBarButton: function (props) { return react_1["default"].createElement(TabBarCustomButton, __assign({}, props)); }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "Like", component: screens_1.Home, options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.Image, { source: constans_1.icons.like, resizeMode: "contain", style: {
                            width: 25,
                            height: 25,
                            tintColor: focused ? constans_1.COLORS.primary : constans_1.COLORS.secondary
                        } }));
                },
                tabBarButton: function (props) { return react_1["default"].createElement(TabBarCustomButton, __assign({}, props)); }
            } }),
        react_1["default"].createElement(Tab.Screen, { name: "User", component: screens_1.Home, options: {
                tabBarIcon: function (_a) {
                    var focused = _a.focused;
                    return (react_1["default"].createElement(react_native_1.Image, { source: constans_1.icons.user, resizeMode: "contain", style: {
                            width: 25,
                            height: 25,
                            tintColor: focused ? constans_1.COLORS.primary : constans_1.COLORS.secondary
                        } }));
                },
                tabBarButton: function (props) { return react_1["default"].createElement(TabBarCustomButton, __assign({}, props)); }
            } })));
};
exports["default"] = Tabs;
